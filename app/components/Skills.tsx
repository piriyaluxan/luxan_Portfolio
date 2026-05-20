"use client";

const skillGroups = [
  {
    label: "Frontend",
    color: "var(--accent)",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 70 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 72 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    label: "Backend & DB",
    color: "#a78bfa",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "PHP", level: 55 },
    ],
  },
  {
    label: "Tools & AI",
    color: "var(--green)",
    skills: [
      { name: "Git / GitHub / GitLab", level: 85 },
      { name: "TensorFlow", level: 60 },
      { name: "OpenCV", level: 58 },
      { name: "WordPress", level: 72 },
      { name: "Figma (read)", level: 75 },
      { name: "Python", level: 60 },
    ],
  },
];

const softSkills = ["Problem Solving", "Time Management", "Team Collaboration", "Critical Thinking", "Effective Communication"];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem" }}
    >
      <p className="section-label" style={{ marginBottom: "12px" }}>// tech arsenal</p>
      <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
        Skills
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {skillGroups.map((group) => (
          <div key={group.label} className="card" style={{ padding: "1.8rem" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                color: group.color,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ width: "6px", height: "6px", background: group.color, borderRadius: "50%", boxShadow: `0 0 8px ${group.color}` }} />
              {group.label}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{skill.name}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{ height: "3px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${group.color}, ${group.color}80)`,
                        borderRadius: "2px",
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="card" style={{ padding: "1.8rem" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
          Soft Skills
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {softSkills.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                padding: "6px 16px",
                background: "rgba(255,107,53,0.08)",
                border: "1px solid rgba(255,107,53,0.2)",
                borderRadius: "20px",
                color: "var(--orange)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ marginTop: "2.5rem" }}>
        <p className="section-label" style={{ marginBottom: "1.5rem" }}>// education</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
          {[
            {
              degree: "BICT (Hons) — Software Systems",
              school: "University of Kelaniya, Sri Lanka",
              period: "2021 – 2025",
              detail: "GPA 3.54",
              color: "var(--accent)",
            },
            {
              degree: "G.C.E. Advanced Level",
              school: "J/ Puttur Sri Somaskanda College",
              period: "2017 – 2019",
              detail: "Z-Score 1.4852",
              color: "#a78bfa",
            },
          ].map((edu) => (
            <div key={edu.degree} className="card" style={{ padding: "1.5rem", borderLeft: `3px solid ${edu.color}` }}>
              <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{edu.degree}</h4>
              <div style={{ color: edu.color, fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", marginBottom: "8px" }}>{edu.school}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{edu.period}</span>
                <span style={{ color: edu.color, fontFamily: "'Space Mono', monospace", fontSize: "0.72rem" }}>{edu.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
