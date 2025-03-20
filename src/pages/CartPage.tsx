import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartPageProps {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart }) => {
  // Hitung total harga
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-700">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-yellow-400 border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 rounded-lg flex items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain border-2 border-black rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button className="mt-4 bg-green-500 border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;