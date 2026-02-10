"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-10 py-4 bg-black text-white border-b border-white/10 backdrop-blur-md">
      {/* Logo / Brand */}
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-wide">TAM LEON</h1>
      </Link>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {/* Cart button */}
        <Link href="/cart" className="relative">
          <button className="px-4 py-2 bg-white text-black font-bold rounded hover:opacity-90">
            Cart
          </button>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}