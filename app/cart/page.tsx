"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/shop">
          <button className="px-6 py-3 bg-white text-black font-bold rounded hover:opacity-90">
            Go to Shop
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border border-white/10 p-4 rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-sm opacity-70">Size: {item.size}</p>
              <p className="text-sm opacity-70">Price: ₹{item.price}</p>
            </div>
            <button
              className="bg-red-600 px-4 py-2 rounded hover:opacity-90"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right text-xl font-bold">
        Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
      </div>
    </main>
  );
}