"use client";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "100px 40px", fontFamily: "'Montserrat', sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "40px" }}>YOUR CART</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(255,255,255,0.05)",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
                <div>
                  <p style={{ fontWeight: 600 }}>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price * item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "8px 16px",
                  background: "white",
                  color: "black",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                REMOVE
              </button>
            </div>
          ))}

          <div style={{ marginTop: "32px", fontWeight: 600, fontSize: "1.2rem" }}>
            Subtotal: ₹{subtotal}
          </div>

          <button
            style={{
              marginTop: "16px",
              padding: "16px",
              width: "200px",
              borderRadius: "999px",
              border: "none",
              background: "white",
              color: "black",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </main>
  );
}