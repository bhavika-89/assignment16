import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const Home = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="flex">
        <Sidebar />
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-green-600 text-xl">${product.price}</p>
              <Link to={`/product/${product.id}`} className="block text-center mt-4 bg-blue-600 text-white py-2 rounded">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Home;
