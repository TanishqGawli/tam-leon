"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ShopPage() {
  const { addToCart } = useCart();

  const products = [
    { name: "Tam Leon Tee", price: 799, image: "/tam-leon-tee.png", slug: "tam-leon-tee" },
    { name: "Porsche Tee", price: 699, image: "/porsche-tee.png", slug: "porsche-tee" },
    { name: "Skull Tee", price: 599, image: "/skull-tee.png", slug: "skull-tee" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Shop</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}

function ProductCard({ product, addToCart }: any) {
  const [size, setSize] = useState("M"); // default size
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // flash effect for 1 second
  };

  return (
    <div className="border border-white/10 p-6 rounded-lg cursor-pointer hover:border-white transition transform hover:scale-105 relative">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="mb-4 object-cover rounded"
      />
      <h2 className="text-lg tracking-wide">{product.name}</h2>
      <p className="text-sm opacity-70 mt-1">₹{product.price}</p>

      {/* Sizes */}
      <div className="flex gap-2 mt-3 mb-4">
        {["S", "M", "L", "XL"].map((s) => (
          <button
            key={s}
            className={`px-3 py-1 border rounded font-semibold ${
              size === s
                ? "border-white bg-white text-black"
                : "border-white/20 text-white/80"
            }`}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="mt-2 w-full bg-white text-black px-6 py-2 font-bold tracking-widest hover:opacity-90 relative overflow-hidden"
        onClick={handleAddToCart}
      >
        Add to Cart
        {added && (
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/50 animate-ping rounded">
            ✓ Added
          </span>
        )}
      </button>
    </div>
  );
}