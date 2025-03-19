import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Temukan elemen root di HTML Anda
const container = document.getElementById("root");

// Pastikan elemen root ada
if (container) {
  const root = createRoot(container); // Buat root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemen root tidak ditemukan!");
}