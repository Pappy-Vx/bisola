"use client";

import { useState } from "react";

interface CaseData {
  id: number;
  title: string;
  tags: string[];
  visitUrl: string;
  overview: string;
  roles: string[];
  stats: { num: string; cap: string }[];
}

const CASES: CaseData[] = [
  {
    id: 0,
    title: "Payrit",
    tags: ["Producer", "Script Writer"],
    visitUrl: "#",
    overview:
      "Payrit is a payments product fighting for activation in a crowded fintech market. I owned the growth-marketing motion end to end, repositioning the onboarding narrative, rebuilding the activation funnel, and tying every lifecycle message back to a transaction outcome.",
    roles: ["Product Marketing Manager", "Growth", "Lifecycle"],
    stats: [
      { num: "800→2.5k", cap: "Monthly sign-ups" },
      { num: "₦659M", cap: "Transaction volume influenced" },
      { num: "18.2%", cap: "Activation rate" },
      { num: "3.1×", cap: "Sign-up growth" },
    ],
  },
  {
    id: 1,
    title: "ZendWallet",
    tags: ["SEO", "Content"],
    visitUrl: "#",
    overview:
      "ZendWallet launched with zero organic presence. I built the SEO engine from the ground up: intent-mapped keyword clusters, a technical clean-up of the new site, and 100+ briefed articles that climbed to page one, taking the site from 0 to 6,000+ monthly organic sessions in 8 months.",
    roles: ["SEO Analyst", "Content Strategy", "Technical SEO"],
    stats: [
      { num: "0→6k+", cap: "Monthly organic sessions" },
      { num: "100+", cap: "Articles shipped" },
      { num: "8 mo", cap: "From launch to result" },
      { num: "Top 3", cap: "Rankings on priority terms" },
    ],
  },
];

function VisitBtn({ url, id }: { url: string; id: number }) {
  return (
    <a
      href={url}
      className="cs-visit"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit live site"
    >
      <svg
        className="cs-visit-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path
            id={`vcp-${id}`}
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <g className="cs-visit-ring">
          <text
            fontSize="7.8"
            fill="currentColor"
            fontFamily="monospace"
            letterSpacing="2.6"
          >
            <textPath href={`#vcp-${id}`}>
              VISIT LIVE SITE • VISIT LIVE SITE •{" "}
            </textPath>
          </text>
        </g>
      </svg>
      <span className="cs-visit-arrow" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15L15 5M15 5H7M15 5V13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function CaseStudies() {
  const [openCase, setOpenCase] = useState<number | null>(null);

  return (
    <section className="block" id="work" data-screen-label="Case Studies">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 className="section-title">
              Case{" "}
              <span className="accent">
                stud<span className="lc">i</span>es
              </span>
            </h2>
          </div>
          <p className="section-note">
            Two deep dives into how the numbers above were actually made.
          </p>
        </div>

        <div className="cs-list">
          {CASES.map((c, i) => {
            const isOpen = openCase === c.id;
            return (
              <article
                key={c.id}
                className="cs-card reveal"
                data-d={i > 0 ? String(i) : undefined}
                data-open={isOpen}
              >
                <div className="cs-media">
                  <div
                    className="cs-img-ph"
                    role="img"
                    aria-label={`${c.title} project image`}
                  />

                  <button
                    className="cs-details-btn"
                    onClick={() =>
                      setOpenCase((p) => (p === c.id ? null : c.id))
                    }
                    aria-expanded={isOpen}
                  >
                    DETAILS
                    <span className="cs-details-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="cs-panel" aria-hidden={!isOpen}>
                    <div>
                      <div className="cs-panel-label">Overview</div>
                      <p className="cs-panel-text">{c.overview}</p>
                      <div className="cs-panel-roles">
                        {c.roles.map((r) => (
                          <span key={r}>{r}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cs-panel-divider" />
                    <div>
                      <div className="cs-panel-label">Stats</div>
                      <div className="cs-panel-stats">
                        {c.stats.map((s) => (
                          <div key={s.cap} className="cs-panel-stat">
                            <div className="cs-stat-num">{s.num}</div>
                            <div className="cs-stat-cap">{s.cap}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cs-foot">
                  <div>
                    <h3 className="cs-title">{c.title}</h3>
                    <div className="cs-tags">
                      {c.tags.map((t) => (
                        <span key={t} className="cs-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <VisitBtn url={c.visitUrl} id={c.id} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
