"use client";

const fitPoints = [
  {
    req: "React & Next.js experience",
    match: "1+ year React in production; currently mastering Next.js",
    icon: "⚛️",
    color: "var(--accent)",
  },
  {
    req: "Pixel-perfect Figma-to-UI",
    match:
      "Converted designs into responsive interfaces during internship at QTechy",
    icon: "🎨",
    color: "#a78bfa",
  },
  {
    req: "Clean, reusable code",
    match:
      "Built reusable UI components across 4 real-world projects with clean architecture",
    icon: "🧩",
    color: "var(--green)",
  },
  {
    req: "API integration",
    match:
      "Built and integrated REST APIs with Node.js/Express; integrated external movie APIs in CineMate",
    icon: "🔗",
    color: "var(--orange)",
  },
  {
    req: "Performance & UX focus",
    match:
      "Optimised app performance and fixed bugs during internship; built AI-enhanced UX in Mood Sync",
    icon: "⚡",
    color: "var(--accent)",
  },
  {
    req: "Independent ownership",
    match:
      "Led 4 individual projects end-to-end — from architecture to deployment",
    icon: "🚀",
    color: "#a78bfa",
  },
];

export default function CogntixFit() {
  return (
    <section style={{ background: "var(--bg-2)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-2))",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            ⚙
          </div>
          <p className="section-label">portfolio highlights</p>
        </div>
        <h2
          className="section-title"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            marginBottom: "0.5rem",
          }}
        >
          What I bring to the table
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            marginBottom: "2.5rem",
          }}
        >
          Experience and skills distilled.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1rem",
          }}
        >
          {fitPoints.map((pt) => (
            <div
              key={pt.req}
              className="card"
              style={{ padding: "1.4rem", borderLeft: `3px solid ${pt.color}` }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>
                  {pt.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.68rem",
                      color: pt.color,
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {pt.req}
                  </div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {pt.match}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
