import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fungsi untuk menambahkan produk ke cart
  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Fungsi untuk menghapus produk dari cart
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;