import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useCart } from "../context/CartContext";

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const Home = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { dispatch, showDialog } = useCart();

  const handleAddToCart = (product) => {
    showDialog("Add this item to the cart?", () => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    });
  };

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching products</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-green-600 text-xl">${product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
