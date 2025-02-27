import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const fetchProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
  

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-600">⬅ Back to Home</Link>
      <div className="flex flex-col md:flex-row items-center mt-4">
        <img src={product.image} alt={product.title} className="h-60" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-600 text-2xl">${product.price}</p>
          <div className="mt-4 flex gap-4">
            <Link to={`/edit/${id}`} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
            <Link to={`/delete/${id}`} className="bg-red-600 text-white px-4 py-2 rounded">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
