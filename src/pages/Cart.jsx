import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch, showDialog } = useCart();

  const handleRemoveFromCart = (id) => {
    showDialog("Remove this item from the cart?", () => {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-green-600 text-xl">${product.price}</p>

              <button
                onClick={() => handleRemoveFromCart(product.id)}
                className="mt-3 w-full bg-red-600 text-white py-2 rounded"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
