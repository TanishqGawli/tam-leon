export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        display: "flex",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          width: "100%",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          gap: "120px",
        }}
      >
        {/* TEXT SECTION */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              letterSpacing: "2px",
              marginBottom: "32px",
              fontWeight: 800,
            }}
          >
            ABOUT TAM LEON
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              opacity: 0.85,
            }}
          >
            TAM LEON is not a clothing label. It is a canvas.
            <br />
            <br />
            Every piece is hand-crafted, painted, stitched, and refined by real
            artists who believe streetwear should carry soul, effort, and
            identity.
          </p>
        </div>

        {/* IMAGE SECTION — SIDE BY SIDE ON LARGE SCREENS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* IMAGE 1 — PAINTING */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/about/craft-painting.jpg"
              alt="Hand painted artwork on fabric"
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
            <p
              style={{
                marginTop: "24px",
                fontSize: "16px",
                opacity: 0.7,
                letterSpacing: "1px",
              }}
            >
              HAND-PAINTED ARTWORK
            </p>
          </div>

          {/* IMAGE 2 — STITCHING */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/about/craft-stitching.jpg"
              alt="Precision stitching and tailoring"
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
            <p
              style={{
                marginTop: "24px",
                fontSize: "16px",
                opacity: 0.7,
                letterSpacing: "1px",
              }}
            >
              DETAIL-DRIVEN STITCHING
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}