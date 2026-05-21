"use client";

const experiences = [
  {
    role: "Full-Stack Developer — Intern",
    company: "QTechy",
    period: "Aug 2024 – Feb 2025",
    type: "Remote",
    color: "var(--accent)",
    points: [
      "Built and maintained web apps using the MERN stack across E-commerce, E-Card, and rental management platforms.",
      "Converted UI/UX designs into responsive, user-friendly React.js interfaces.",
      "Constructed and integrated REST APIs with Node.js & Express.js backend logic.",
      "Participated in daily stand-ups, code reviews, and iteration cycles.",
      "Debugged, optimized performance, and collaborated via GitLab workflows.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GitLab",
    ],
  },
  {
    role: "Data Management Associate",
    company: "Port City BPO (Pvt) Ltd.",
    period: "Jan 2026 – Apr 2026",
    type: "On-site",
    color: "#a78bfa",
    points: [
      "Managed and updated daily transaction records with accuracy using Excel and internal systems.",
      "Verified data entries to ensure consistency and error-free records under deadline pressure.",
      "Prepared reports and maintained organized documentation for internal use.",
    ],
    tags: ["Microsoft Excel", "Google Sheets", "Data Management", "Reporting"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem" }}
    >
      <p className="section-label" style={{ marginBottom: "12px" }}>
        // work history
      </p>
      <h2
        className="section-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}
      >
        Experience
      </h2>

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "8px",
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-2.3rem",
                  top: "6px",
                  background: exp.color,
                  boxShadow: `0 0 10px ${exp.color}80`,
                }}
              />

              <div className="card" style={{ padding: "1.8rem" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        color: exp.color,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.78rem",
                        marginTop: "2px",
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {exp.period}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        marginTop: "2px",
                      }}
                    >
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div
                  className="gradient-line"
                  style={{ marginBottom: "1rem" }}
                />

                {/* Points */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "10px",
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        style={{
                          color: exp.color,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        ▸
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={i === 0 ? "tag" : "tag tag-purple"}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
