"use client";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Engineer",
  "React Developer",
  "Next.js Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="about"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top badge */}
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "var(--green)",
            borderRadius: "50%",
            boxShadow: "0 0 10px var(--green)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span className="section-label">Available for opportunities</span>
      </div>

      {/* Main heading */}
      <h1
        className="section-title"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", marginBottom: "1rem" }}
      >
        Piriyaluxan
        <br />
        <span
          style={{
            color: "var(--text-secondary)",
            fontWeight: 400,
            fontSize: "0.8em",
          }}
        >
          Sutheskumar
        </span>
      </h1>

      {/* Typewriter */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "var(--accent)",
          marginBottom: "1.5rem",
          minHeight: "2rem",
        }}
        className="cursor"
      >
        {displayed}
      </div>

      {/* Description */}
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1.05rem",
          maxWidth: "560px",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
        }}
      >
        1+ year building with the MERN stack. Obsessed with pixel-precise UIs,
        clean code, and seamless user experiences. Currently expanding into{" "}
        <span style={{ color: "var(--accent)" }}>Next.js</span> and{" "}
        <span style={{ color: "var(--accent-2)" }}>AI-driven interfaces</span>.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        <a href="#projects" className="btn-primary">
          View Projects →
        </a>
        <a href="#contact" className="btn-outline">
          Get in touch
        </a>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
        {[
          { num: "1+", label: "Years Experience" },
          { num: "4+", label: "Projects Shipped" },
          { num: "3.54", label: "GPA" },
          { num: "MERN", label: "Core Stack" },
        ].map(({ num, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {num}
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.78rem",
                fontFamily: "'Space Mono', monospace",
                marginTop: "4px",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  );
}
