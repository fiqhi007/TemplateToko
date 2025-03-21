import React from "react";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  addToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  addToCart,
}) => {
  return (
    <div className="max-w-sm bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 rounded-lg">
      {/* Gambar Produk */}
      <img
        src={image}
        alt={title}
        className="w-8 h-8 object-contain border-2 border-black rounded-lg"
      />

      {/* Judul dan Harga */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">${price}</p>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 bg-yellow-400 border-2 border-black shadow-[3px_3px_0_0_#000] py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;