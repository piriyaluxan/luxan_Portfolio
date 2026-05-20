"use client";

const projects = [
  {
    title: "Driver Mood Sync Music System",
    subtitle: "Final Year Individual Project",
    desc: "AI-powered in-car music system that detects driver emotions via facial expressions using TensorFlow and generates real-time mood-based playlists — enhancing comfort, engagement, and road safety.",
    tags: ["TensorFlow", "React.js", "Python", "OpenCV", "JavaScript", "CSS3"],
    color: "var(--accent)",
    icon: "🧠",
    github: "https://github.com/Piriyaluxa/Mood-based-playlist-generator",
    youtube: "https://youtube.com",
    highlight: true,
  },
  {
    title: "Learning Management System",
    subtitle: "Academic Full-Stack Project",
    desc: "Full-stack LMS with multi-role authentication (Admin, Instructor, Student). Features course management, student enrollment, assignments, and results tracking with a responsive UI.",
    tags: ["Node.js", "Express.js", "React", "MongoDB", "Tailwind CSS"],
    color: "#a78bfa",
    icon: "📚",
    github: "https://github.com/Piriyaluxa/Learning-Management-System",
    highlight: false,
  },
  {
    title: "CineMate",
    subtitle: "Movie Information Web App",
    desc: "Responsive movie discovery platform built with React.js and Tailwind CSS. Integrates external movie APIs to display titles, ratings, summaries, and release info with efficient search/filter.",
    tags: ["React.js", "Tailwind CSS", "Axios", "JavaScript", "HTML5"],
    color: "var(--green)",
    icon: "🎬",
    github: "https://github.com/Piriyaluxa/movie-mind",
    highlight: false,
  },
  {
    title: "Hotel POS System",
    subtitle: "Hotel & Restaurant Point of Sale",
    desc: "Modern, fast, responsive POS built with React and Vite for hotels and restaurants. Supports order and cart management, receipt generation, category filtering, search, and persistent order storage.",
    tags: ["React", "Vite", "JavaScript", "CSS", "UI/UX"],
    color: "#f59e0b",
    icon: "🏨",
    github: "https://github.com/Piriyaluxa/hotel-pos-system",
    highlight: false,
  },
  {
    title: "ChatMate",
    subtitle: "Real-time Chat Application",
    desc: "Full-stack chat app with React and Node.js featuring real-time messaging via WebSocket, user authentication, profiles, emoji support, live notifications, and responsive design for desktop/mobile.",
    tags: ["React", "Node.js", "Socket.io", "Express.js", "MongoDB", "Vite"],
    color: "#10b981",
    icon: "💬",
    github: "https://github.com/Piriyaluxa/chatmate",
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--bg-2)", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          // what i've built
        </p>
        <h2
          className="section-title"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="card"
              style={{
                padding: "1.8rem",
                position: "relative",
                overflow: "hidden",
                border: proj.highlight
                  ? `1px solid ${proj.color}40`
                  : undefined,
                boxShadow: proj.highlight
                  ? `0 0 30px ${proj.color}10`
                  : undefined,
              }}
            >
              {proj.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: proj.color,
                    background: `${proj.color}15`,
                    border: `1px solid ${proj.color}30`,
                    padding: "2px 8px",
                    borderRadius: "3px",
                  }}
                >
                  FEATURED
                </div>
              )}

              {/* Icon */}
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {proj.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                {proj.title}
              </h3>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.68rem",
                  color: proj.color,
                  marginBottom: "1rem",
                }}
              >
                {proj.subtitle}
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  marginBottom: "1.2rem",
                }}
              >
                {proj.desc}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "1.5rem",
                }}
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      padding: "2px 8px",
                      background: `${proj.color}10`,
                      border: `1px solid ${proj.color}25`,
                      borderRadius: "4px",
                      color: proj.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.72rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = proj.color)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  ↗ GitHub
                </a>
                {proj.youtube && (
                  <a
                    href={proj.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = proj.color)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    ▶ Demo
                  </a>
                )}
              </div>

              {/* BG glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-30px",
                  width: "150px",
                  height: "150px",
                  background: `radial-gradient(circle, ${proj.color}08 0%, transparent 70%)`,
                  pointerEvents: "none",
                  borderRadius: "50%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
