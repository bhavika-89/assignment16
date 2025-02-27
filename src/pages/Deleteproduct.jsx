import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProduct = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (confirmDelete) {
        await axios.delete(`https://fakestoreapi.com/products/${id}`);
        alert("Product deleted successfully!");
        navigate("/");
      } else {
        navigate(`/product/${id}`);
      }
    };
    deleteProduct();
  }, [id, navigate]);

  return <div className="text-center text-lg">Deleting product...</div>;
};

export default DeleteProduct;
