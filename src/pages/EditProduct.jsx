import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
  

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`https://fakestoreapi.com/products/${id}`, {
      title: title || product.title,
      price: price || product.price,
    });
    alert("Product updated successfully!");
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Title"
          defaultValue={product.title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          defaultValue={product.price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
