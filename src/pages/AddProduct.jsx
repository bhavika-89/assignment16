import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await axios.post("https://fakestoreapi.com/products", {
      title,
      price,
      category: "electronics",
    });
    alert("Product added successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Add Product</h1>
      <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
