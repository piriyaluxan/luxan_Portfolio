"use client";
import { useState, useEffect } from "react";

const links = ["about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,10,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.9rem",
          fontWeight: 700,
        }}
      >
        <span style={{ color: "var(--accent)" }}>PS</span>
        <span style={{ color: "var(--text-muted)", margin: "0 6px" }}>/</span>
        <span style={{ color: "var(--text-secondary)", fontSize: "0.72rem" }}>
          frontend.eng
        </span>
      </div>

      {/* Links */}
      <button
        type="button"
        className="mobile-nav-toggle z-50"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className="nav-links-desktop">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="nav-link"
            style={{ color: active === link ? "var(--accent)" : undefined }}
            onClick={() => setActive(link)}
          >
            {link}
          </a>
        ))}
        <a
          href="mailto:sutheskumarpiriyaluxan025@gmail.com"
          className="btn-primary"
          style={{ padding: "8px 16px", fontSize: "0.72rem" }}
        >
          hire me
        </a>
        <a
          href="/resume.pdf"
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "8px 16px", fontSize: "0.72rem" }}
        >
          resume
        </a>
      </div>

      {menuOpen && (
        <div className="mobile-nav-menu">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="nav-link"
              style={{ width: "100%" }}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:sutheskumarpiriyaluxan025@gmail.com"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            hire me
          </a>
          <a
            href="/resume.pdf"
            className="btn-outline"
            download
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            resume
          </a>
        </div>
      )}
    </nav>
  );
}
