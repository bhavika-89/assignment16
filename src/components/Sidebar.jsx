import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-700 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <h2 className="text-2xl font-bold text-center mt-6">Dashboard</h2>
        <nav className="flex flex-col mt-10 space-y-4 px-6">
          <Link to="/" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition">
            <FaHome className="text-xl" /> <span className="text-lg">Home</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition">
            <FaShoppingCart className="text-xl" /> <span className="text-lg">Cart</span>
          </Link>
          <Link to="/user" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition">
            <FaUser className="text-xl" /> <span className="text-lg">User</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
