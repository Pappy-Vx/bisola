"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const services = [
  {
    num: "(01)",
    title: "SEO Strategy",
    desc: "Technical audits, intent-mapped keyword clusters, and roadmaps that prioritise the terms that actually convert.",
  },
  {
    num: "(02)",
    title: "Product Marketing",
    desc: "Positioning, messaging and activation funnels that connect what you build to the people searching for it.",
  },
  {
    num: "(03)",
    title: "Content Systems",
    desc: "Briefs, editorial workflows and templates that let content scale without losing voice or quality.",
  },
  {
    num: "(04)",
    title: "Consultations",
    desc: "A focused audit or working session to find where your growth is leaking, and the fastest way to fix it.",
  },
  {
    num: "(05)",
    title: "Analytics & Reporting",
    desc: "GA4, Search Console and dashboards wired so every decision traces back to a number that matters.",
  },
  {
    num: "(06)",
    title: "Lifecycle & Activation",
    desc: "Onboarding and lifecycle messaging that turns a sign-up into an activated, paying customer.",
  },
];

const STEPS = services.length;

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);
  const [dir, setDir] = useState<"down" | "up">("down");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      if (window.innerWidth < 769) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.max(0, Math.min(scrollable, window.scrollY - sectionTop));
      const next = Math.min(STEPS - 1, Math.floor((scrolled / scrollable) * STEPS));

      if (next !== stepRef.current) {
        setDir(next > stepRef.current ? "down" : "up");
        stepRef.current = next;
        setActiveStep(next);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fillPct = STEPS > 1 ? (activeStep / (STEPS - 1)) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      className="svc-scroll"
      id="services"
      data-screen-label="Services"
    >
      {/* ── Desktop: sticky scroll roadmap ─────────────────── */}
      <div className="svc-sticky">
        <div className="wrap svc-layout">

          {/* Left: heading + roadmap nav */}
          <div className="svc-left">
            <div className="svc-head">
              <div className="eyebrow">What I do</div>
              <h2 className="section-title">
                How{" "}
                <span className="accent">
                  <span className="lc">i</span>
                </span>{" "}
                help
                <br />
                teams w<span className="lc">i</span>n.
              </h2>
              <p className="svc-note">
                Six ways I embed into your team, from a one-off audit to
                owning the full organic-to-activation funnel.
              </p>
            </div>

            <nav className="rm-track" aria-label="Service steps">
              <span
                className="rm-fill"
                style={{ "--pct": `${fillPct}%` } as CSSProperties}
              />
              {services.map((s, i) => (
                <span
                  key={s.num}
                  className={`rm-node${
                    i === activeStep ? " is-active" : i < activeStep ? " is-done" : ""
                  }`}
                >
                  <span className="rm-dot" />
                  <span className="rm-label">{s.title}</span>
                </span>
              ))}
            </nav>
          </div>

          {/* Right: animated step content */}
          <div className="svc-right" aria-live="polite">
            <div
              key={`step-${activeStep}-${dir}`}
              className="svc-step"
              data-dir={dir}
            >
              <span className="svc-step-num">{services[activeStep].num}</span>
              <h3 className="svc-step-title">{services[activeStep].title}</h3>
              <p className="svc-step-desc">{services[activeStep].desc}</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile: stacked timeline ────────────────────────── */}
      <div className="svc-mobile">
        <div className="wrap">
          <div className="svc-head">
            <div className="eyebrow">What I do</div>
            <h2 className="section-title">
              How{" "}
              <span className="accent">
                <span className="lc">i</span>
              </span>{" "}
              help
              <br />
              teams w<span className="lc">i</span>n.
            </h2>
          </div>
          <div className="svc-mob-list">
            {services.map((s, i) => (
              <div key={s.num} className="svc-mob-item">
                <div className="svc-mob-track">
                  <span className="svc-mob-dot" />
                  {i < STEPS - 1 && <span className="svc-mob-line" />}
                </div>
                <div className="svc-mob-body">
                  <span className="svc-mob-num">{s.num}</span>
                  <h3 className="svc-mob-title">{s.title}</h3>
                  <p className="svc-mob-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
