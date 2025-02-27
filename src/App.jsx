import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/Deleteproduct";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">E - Commerce</Link>
          <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded">Add Product</Link>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/delete/:id" element={<DeleteProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
