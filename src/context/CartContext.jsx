import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [dialog, setDialog] = useState({ message: "", onConfirm: null });

  const showDialog = (message, onConfirm) => {
    setDialog({ message, onConfirm });
  };

  const handleDialogConfirm = () => {
    if (dialog.onConfirm) {
      dialog.onConfirm();
    }
    setDialog({ message: "", onConfirm: null });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, showDialog }}>
      {children}
      {dialog.message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg font-semibold">{dialog.message}</p>
            <button
              onClick={handleDialogConfirm}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};
