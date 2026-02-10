"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const cart = useCart();
  const cartItems = cart?.cartItems || [];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "28px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "transparent",
      }}
    >
      {/* LOGO */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1,
          }}
        >
          {/* TL MONOGRAM */}
          <span
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#ffffff",
            }}
          >
            TL
          </span>

          {/* BRAND NAME */}
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              marginTop: "6px",
              opacity: 0.85,
              color: "#ffffff",
            }}
          >
            TAM LEON
          </span>
        </div>
      </Link>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "14px",
          letterSpacing: "2px",
        }}
      >
        <NavLink href="/shop">SHOP</NavLink>
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/contact">CONTACT</NavLink>

        <Link
          href="/cart"
          style={{
            position: "relative",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          CART
          {cartItems.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-14px",
                background: "#ffffff",
                color: "#000",
                borderRadius: "50%",
                fontSize: "10px",
                padding: "2px 6px",
                fontWeight: 600,
              }}
            >
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

/* SIMPLE LINK COMPONENT */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "#ffffff",
      }}
    >
      {children}
    </Link>
  );
}