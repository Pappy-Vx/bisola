"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            Bisola<span className="dot">✦</span>
          </a>
          <div className="nav-links">
            <a href="#results" className="navlink">
              Results
            </a>
            <a href="#about" className="navlink">
              About
            </a>
            <a href="#work" className="navlink">
              Work
            </a>
            <a href="#services" className="navlink">
              Services
            </a>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s talk <span className="arr">↗</span>
            </a>
          </div>
          <button
            className="burger"
            id="burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
      >
        <a href="#results" onClick={closeMenu}>
          <span className="num">01</span>Results
        </a>
        <a href="#about" onClick={closeMenu}>
          <span className="num">02</span>About
        </a>
        <a href="#work" onClick={closeMenu}>
          <span className="num">03</span>Work
        </a>
        <a href="#services" onClick={closeMenu}>
          <span className="num">04</span>Services
        </a>
        <a href="#contact" onClick={closeMenu}>
          <span className="num">05</span>Contact
        </a>
      </div>
    </>
  );
}
