"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sutheskumarpiriyaluxan025@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--bg-2)", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          // let's connect
        </p>
        <h2
          className="section-title glow-text"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "1.2rem",
          }}
        >
          Ready to build
          <br />
          <span style={{ color: "var(--accent)" }}>something great?</span>
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "3rem",
            maxWidth: "500px",
            margin: "0 auto 3rem",
          }}
        >
          I'm actively looking for frontend engineering opportunities. If you
          think I'd be a good fit for your team, let's talk.
        </p>

        {/* Email card */}
        <div
          className="card"
          style={{
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
            cursor: "pointer",
          }}
          onClick={copyEmail}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                marginBottom: "4px",
              }}
            >
              EMAIL
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>
              sutheskumarpiriyaluxan025@gmail.com
            </div>
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              color: copied ? "var(--green)" : "var(--accent)",
              transition: "color 0.2s",
            }}
          >
            {copied ? "✓ copied!" : "copy"}
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/piriyaluxan-sutheskumar",
              color: "var(--accent)",
            },
            {
              label: "GitHub",
              href: "https://github.com/Piriyaluxa",
              color: "#a78bfa",
            },
            {
              label: "+94 784 346 982",
              href: "tel:+94784346982",
              color: "var(--green)",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem",
                color: link.color,
                textDecoration: "none",
                padding: "8px 20px",
                border: `1px solid ${link.color}30`,
                borderRadius: "6px",
                background: `${link.color}08`,
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  `${link.color}18`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  `${link.color}08`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              ↗ {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.78rem",
              color: "var(--accent)",
              textDecoration: "none",
              padding: "8px 20px",
              border: "1px solid var(--accent)30",
              borderRadius: "6px",
              background: "var(--accent)08",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent)18";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent)08";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            ↗ Resume
          </a>
        </div>

        {/* Location */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          📍 Jaffna, Sri Lanka &nbsp;·&nbsp; Open to remote opportunities
        </div>
      </div>
    </section>
  );
}
