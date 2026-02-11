"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ShopPage() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Porsche-tee", price: 699, image: "/porsche-tee.png" },
    { id: 2, name: "Skull-tee", price: 599, image: "/skull-tee.png" },
    { id: 3, name: "Tam-leon-tee", price: 799, image: "/tam-leon-tee.png" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        backgroundColor: "#111",
        color: "white",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", letterSpacing: "4px", textAlign: "center" }}>SHOP</h1>

      <div
        style={{
          display: "grid",
          gap: "40px",
          width: "100%",
          maxWidth: "1200px",
          gridTemplateColumns: "1fr", // default: vertical stack
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}

function ProductCard({ product, addToCart }: any) {
  const [size, setSize] = useState("M");

  const handleAddToCart = () => {
    addToCart({ ...product, size, quantity: 1 });
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "18px",
        padding: "24px",
        textAlign: "center",
        backdropFilter: "blur(6px)",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
        cursor: "pointer",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ pointerEvents: "none" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "260px",
            height: "320px",
            objectFit: "contain",
            margin: "0 auto 18px",
          }}
        />
      </div>

      <h3 style={{ letterSpacing: "2px", fontSize: "15px", marginBottom: "6px" }}>
        {product.name.toUpperCase()}
      </h3>

      <p style={{ opacity: 0.8, marginBottom: "16px" }}>₹{product.price}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "18px" }}>
        {["S", "M", "L", "XL"].map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "1px solid white",
              background: size === s ? "white" : "transparent",
              color: size === s ? "black" : "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "999px",
          border: "none",
          background: "white",
          color: "black",
          letterSpacing: "2px",
          cursor: "pointer",
          fontWeight: 600,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        ADD TO CART
      </button>
    </div>
  );
}