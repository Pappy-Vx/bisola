"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  // Hero name entrance animation + scroll reveals
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduce) {
      requestAnimationFrame(() =>
        document.documentElement.classList.add("js-anim")
      );
    }

    const reveals = document.querySelectorAll(".reveal");
    if (reduce) {
      reveals.forEach((r) => r.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  // Parallax blobs
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const layers =
      document.querySelectorAll<HTMLElement>("[data-parallax]");
    let ticking = false;
    const apply = () => {
      const y = window.scrollY;
      layers.forEach((l) => {
        const speed = parseFloat(l.dataset.parallax || "0");
        l.style.transform = `translate3d(0,${y * speed}px,0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(apply);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav link highlight
  useEffect(() => {
    const ids = ["results", "about", "work", "services"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".nav-links a.navlink"
    );

    const setActive = (id: string) => {
      navLinks.forEach((a) => {
        a.style.color =
          a.getAttribute("href") === "#" + id ? "var(--ink)" : "";
      });
    };

    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => sio.observe(s));
    return () => sio.disconnect();
  }, []);

  return null;
}
