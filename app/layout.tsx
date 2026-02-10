import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "TAM LEON",
  description: "We don’t sell t-shirts. We sell art.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />

          {/* ✅ GLOBAL CENTERED CONTENT */}
          <main className="page-wrapper">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}