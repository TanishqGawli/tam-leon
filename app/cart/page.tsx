"use client";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main
      style={{
        padding: "100px 20px",
        fontFamily: "'Montserrat', sans-serif",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "40px", textAlign: "center" }}>
        YOUR CART
      </h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
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
                flexWrap: "wrap",
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
                onClick={() => removeFromCart(item.id, item.size)} // <-- pass size too
                style={{
                  padding: "8px 16px",
                  background: "white",
                  color: "black",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                REMOVE
              </button>
            </div>
          ))}

          {/* Subtotal */}
          <div
            style={{
              marginTop: "32px",
              fontWeight: 600,
              fontSize: "1.2rem",
              textAlign: "right",
            }}
          >
            Subtotal: ₹{subtotal}
          </div>

          {/* PLACE ORDER button */}
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
              display: "block",
              marginLeft: "auto",
            }}
            onClick={() => alert("Order placed successfully!")} // temporary action
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </main>
  );
}