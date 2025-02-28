import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 bg-gray-800 text-white">
        ☰ Menu
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6">
          <ul>
            <li className="mb-4">
              <Link to="/" className="text-lg">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/cart" className="text-lg">Cart</Link>
            </li>
          </ul>
          <button onClick={() => setIsOpen(false)} className="mt-6 w-full bg-red-500 py-2 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
