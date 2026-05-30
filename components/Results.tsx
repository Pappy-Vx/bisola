import CountUp from "@/components/CountUp";

export default function Results() {
  return (
    <section
      className="block"
      id="results"
      data-screen-label="Verified Results"
    >
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Verified Results</div>
            <h2 className="section-title">
              Numbers that
              <br />
              <span className="accent">compound.</span>
            </h2>
          </div>
          <p className="section-note">
            Every figure below is pulled from live analytics and product
            dashboards, not vanity metrics. This is growth you can audit.
          </p>
        </div>

        {/* Row 1: big(6) + md(6) = 12 cols  |  Row 2: sm(3)×4 = 12 cols */}
        <div className="stats-grid">

          {/* ── Row 1 ────────────────────────────────── */}
          <div className="stat big reveal">
            <div className="ghost-arrow">↗</div>
            <div className="num">
              <span className="pre">0→</span>
              <CountUp target={6000} suffix="+" />
            </div>
            <div className="cap">
              Monthly organic sessions built from scratch for ZendWallet in 8
              months.
            </div>
            <div className="src">Source · Google Analytics 4</div>
          </div>

          <div className="stat md reveal" data-d="1">
            <div className="num">
              <CountUp target={659} prefix="₦" suffix="M" />
            </div>
            <div className="cap">
              Tracked transaction volume influenced by Payrit growth campaigns.
            </div>
            <div className="src">Source · Internal dashboard</div>
          </div>

          {/* ── Row 2 ────────────────────────────────── */}
          <div className="stat sm reveal">
            <div className="num">
              <CountUp target={18.2} decimals={1} suffix="%" />
            </div>
            <div className="cap">Activation rate after onboarding rework.</div>
          </div>

          <div className="stat sm reveal" data-d="1">
            <div className="num">
              <CountUp target={800} suffix="→2.5k" />
            </div>
            <div className="cap">Monthly sign-ups grown at Payrit.</div>
          </div>

          <div className="stat sm reveal" data-d="2">
            <div className="num">
              <CountUp target={100} suffix="+" />
            </div>
            <div className="cap">
              SEO articles researched, briefed and shipped.
            </div>
          </div>

          <div className="stat sm reveal" data-d="3">
            <div className="num">
              <CountUp target={3} suffix="+" />
            </div>
            <div className="cap">
              Years embedding SEO into product &amp; GTM teams.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
