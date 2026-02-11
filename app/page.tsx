export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "100px 24px",
        gap: "40px",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: 800, color: "#fff", maxWidth: "90%" }}>
        TAM LEON STREETWEAR
      </h1>

      <p style={{ fontSize: "18px", color: "#fff", maxWidth: "600px", lineHeight: "1.8", opacity: 0.9 }}>
        Handcrafted, artistic streetwear that carries soul, effort, and identity.
      </p>
    </main>
  );
}