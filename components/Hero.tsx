"use client";

import type { CSSProperties } from "react";
import { useState, useCallback } from "react";

type LetterDef = {
  ch: string;
  delay: number;
  rStart: number;
  rEnd: number;
  exitDelay: number;
  exitRot: number;
};

type WordDef = {
  id: string;
  accent: boolean;
  letters: LetterDef[];
};

// Three phases: full name → SEO Champ → Your Solution → back
const PHASES: WordDef[][] = [
  [
    {
      id: "alli",
      accent: false,
      letters: [
        { ch: "A", delay: 1.35, rStart: 38,  rEnd: 13,  exitDelay: 0.00, exitRot: -40 },
        { ch: "L", delay: 1.43, rStart: -22, rEnd: -4,  exitDelay: 0.03, exitRot: 25  },
        { ch: "L", delay: 1.51, rStart: 25,  rEnd: 5,   exitDelay: 0.06, exitRot: -30 },
        { ch: "i", delay: 1.59, rStart: -18, rEnd: -2,  exitDelay: 0.09, exitRot: 20  },
      ],
    },
    {
      id: "bisola",
      accent: false,
      letters: [
        { ch: "B", delay: 0.70, rStart: -30, rEnd: -6,  exitDelay: 0.15, exitRot: 35  },
        { ch: "i", delay: 0.78, rStart: 25,  rEnd: 7,   exitDelay: 0.18, exitRot: -28 },
        { ch: "S", delay: 0.86, rStart: -26, rEnd: 4,   exitDelay: 0.21, exitRot: 32  },
        { ch: "O", delay: 0.94, rStart: 32,  rEnd: -3,  exitDelay: 0.24, exitRot: -20 },
        { ch: "L", delay: 1.02, rStart: -20, rEnd: 2,   exitDelay: 0.27, exitRot: 25  },
        { ch: "A", delay: 1.10, rStart: 28,  rEnd: -10, exitDelay: 0.30, exitRot: -35 },
      ],
    },
    {
      id: "aminat",
      accent: true,
      letters: [
        { ch: "A", delay: 0.05, rStart: -35, rEnd: 8,   exitDelay: 0.36, exitRot: 30  },
        { ch: "M", delay: 0.13, rStart: 28,  rEnd: -4,  exitDelay: 0.39, exitRot: -25 },
        { ch: "i", delay: 0.21, rStart: -22, rEnd: -7,  exitDelay: 0.42, exitRot: 35  },
        { ch: "N", delay: 0.29, rStart: 30,  rEnd: 5,   exitDelay: 0.45, exitRot: -30 },
        { ch: "A", delay: 0.37, rStart: -28, rEnd: -11, exitDelay: 0.48, exitRot: 28  },
        { ch: "T", delay: 0.45, rStart: 20,  rEnd: 2,   exitDelay: 0.51, exitRot: -20 },
      ],
    },
  ],
  [
    {
      id: "alli",
      accent: false,
      letters: [
        { ch: "A", delay: 0.73, rStart: 36,  rEnd: 11,  exitDelay: 0.00, exitRot: -38 },
        { ch: "L", delay: 0.79, rStart: -22, rEnd: -4,  exitDelay: 0.03, exitRot: 28  },
        { ch: "L", delay: 0.85, rStart: 26,  rEnd: 5,   exitDelay: 0.06, exitRot: -25 },
        { ch: "i", delay: 0.91, rStart: -18, rEnd: -2,  exitDelay: 0.09, exitRot: 22  },
      ],
    },
    {
      id: "seo",
      accent: false,
      letters: [
        { ch: "S", delay: 0.45, rStart: 25,  rEnd: -6,  exitDelay: 0.15, exitRot: -30 },
        { ch: "E", delay: 0.51, rStart: -28, rEnd: 4,   exitDelay: 0.18, exitRot: 32  },
        { ch: "O", delay: 0.57, rStart: 32,  rEnd: -4,  exitDelay: 0.21, exitRot: -28 },
      ],
    },
    {
      id: "champ",
      accent: true,
      letters: [
        { ch: "C", delay: 0.05, rStart: -32, rEnd: 7,   exitDelay: 0.27, exitRot: 35  },
        { ch: "H", delay: 0.11, rStart: 28,  rEnd: -5,  exitDelay: 0.30, exitRot: -30 },
        { ch: "A", delay: 0.17, rStart: -26, rEnd: 9,   exitDelay: 0.33, exitRot: 25  },
        { ch: "M", delay: 0.23, rStart: 30,  rEnd: -3,  exitDelay: 0.36, exitRot: -35 },
        { ch: "P", delay: 0.29, rStart: -20, rEnd: 4,   exitDelay: 0.39, exitRot: 30  },
      ],
    },
  ],
  [
    {
      id: "bisola",
      accent: false,
      letters: [
        { ch: "B", delay: 0.85, rStart: -30, rEnd: -7,  exitDelay: 0.00, exitRot: 35  },
        { ch: "i", delay: 0.91, rStart: 25,  rEnd: 6,   exitDelay: 0.03, exitRot: -28 },
        { ch: "S", delay: 0.97, rStart: -26, rEnd: 4,   exitDelay: 0.06, exitRot: 30  },
        { ch: "O", delay: 1.03, rStart: 32,  rEnd: -3,  exitDelay: 0.09, exitRot: -25 },
        { ch: "L", delay: 1.09, rStart: -20, rEnd: 2,   exitDelay: 0.12, exitRot: 20  },
        { ch: "A", delay: 1.15, rStart: 28,  rEnd: -9,  exitDelay: 0.15, exitRot: -32 },
      ],
    },
    {
      id: "your",
      accent: false,
      letters: [
        { ch: "Y", delay: 0.45, rStart: 30,  rEnd: -5,  exitDelay: 0.21, exitRot: 28  },
        { ch: "O", delay: 0.51, rStart: -25, rEnd: 4,   exitDelay: 0.24, exitRot: -30 },
        { ch: "U", delay: 0.57, rStart: 28,  rEnd: -6,  exitDelay: 0.27, exitRot: 25  },
        { ch: "R", delay: 0.63, rStart: -30, rEnd: 3,   exitDelay: 0.30, exitRot: -22 },
      ],
    },
    {
      id: "solution",
      accent: true,
      letters: [
        { ch: "S", delay: 0.05, rStart: -32, rEnd: 8,   exitDelay: 0.36, exitRot: 30  },
        { ch: "O", delay: 0.11, rStart: 28,  rEnd: -5,  exitDelay: 0.39, exitRot: -28 },
        { ch: "L", delay: 0.17, rStart: -26, rEnd: 3,   exitDelay: 0.42, exitRot: 32  },
        { ch: "U", delay: 0.23, rStart: 30,  rEnd: -7,  exitDelay: 0.45, exitRot: -25 },
        { ch: "T", delay: 0.29, rStart: -22, rEnd: 4,   exitDelay: 0.48, exitRot: 28  },
        { ch: "i", delay: 0.35, rStart: 25,  rEnd: -4,  exitDelay: 0.51, exitRot: -30 },
        { ch: "O", delay: 0.41, rStart: -28, rEnd: 6,   exitDelay: 0.54, exitRot: 25  },
        { ch: "N", delay: 0.47, rStart: 32,  rEnd: -3,  exitDelay: 0.57, exitRot: -20 },
      ],
    },
  ],
];

// const PHASE_LABELS = ["Full Name", "SEO Champ", "Your Solution"];
const EXIT_MS = 1060;

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const shuffle = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setPhase((p) => (p + 1) % PHASES.length);
      setIsExiting(false);
    }, EXIT_MS);
  }, [isExiting]);

  const words = PHASES[phase];

  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="blob b1" data-parallax="0.18"></div>
      <div className="blob b2" data-parallax="-0.12"></div>
      <div className="wrap hero-inner">
        <div className="hero-top">
          <div className="hero-roles">
            <span>SEO Analyst</span>
            <b>·</b>
            <span>Product Marketing Manager</span>
            <b>·</b>
            <span>3+ Years</span>
          </div>
          <div className="eyebrow no-rule">Open to new roles &amp; projects</div>
        </div>

        <h1 className="hero-name">
          {words.map((w) => (
            <span
              key={w.id}
              className={`hero-word${w.accent ? " hero-word--accent" : ""}`}
            >
              {w.letters.map((l, i) => (
                <span
                  key={`${phase}-${w.id}-${i}`}
                  className={`hero-letter${isExiting ? " hero-letter--exit" : ""}`}
                  style={
                    {
                      animationDelay: isExiting
                        ? `${l.exitDelay}s`
                        : `${l.delay}s`,
                      "--r-start": `${l.rStart}deg`,
                      "--r-end": `${l.rEnd}deg`,
                      "--exit-rot": `${l.exitRot}deg`,
                    } as CSSProperties
                  }
                >
                  {l.ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="hero-shuffle">
          <button
            className="shuffle-btn"
            onClick={shuffle}
            disabled={isExiting}
            aria-label="Shuffle identity"
          >
            <svg
              className={`shuffle-icon${isExiting ? " spinning" : ""}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 3l4 4-4 4M8 7h12M8 21l-4-4 4-4M4 17h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Shuffle Me
          </button>
          <div className="shuffle-meta">
            {/* <span className="shuffle-label">{PHASE_LABELS[phase]}</span> */}
            <div className="shuffle-dots">
              {PHASES.map((_, i) => (
                <span
                  key={i}
                  className={`sdot${i === phase ? " active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-statement">
          <p className="hero-lead">
            I don&apos;t just drive traffic,{" "}
            <span className="hl">I drive the right traffic.</span>
          </p>
          <div>
            <p className="hero-sub">
              With 3+ years turning SEO and product marketing into measurable
              growth, I build content systems that rank, convert, and compound,
              long after the campaign ends.
            </p>
            <div className="hero-cta-row">
              <a href="#work" className="btn btn-primary btn-lg">
                View my work <span className="arr">↗</span>
              </a>
              <a href="#contact" className="btn btn-ghost btn-lg">
                Hire me
              </a>
            </div>
          </div>
        </div>

        <div className="hero-avail">
          <span className="lbl">Available for</span>
          <ul>
            <li>SEO Strategy</li>
            <li>Product Marketing</li>
            <li>Content Systems</li>
            <li>Consultations</li>
          </ul>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="line"></span>
      </div>
    </header>
  );
}
