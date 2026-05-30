export default function About() {
  return (
    <section className="block" id="about" data-screen-label="About">
      <div className="wrap about">
        <div className="about-visual reveal">
          <div className="monogram">
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ab">
              A<span className="b">B</span>
            </div>
            <div className="tag">Est. portfolio 2026</div>
          </div>
        </div>
        <div className="about-body">
          <div className="eyebrow reveal">About me</div>
          <p className="pullquote reveal" data-d="1">
            I sit where <span className="hl">search behaviour</span> meets{" "}
            <span className="hl">product reality</span>, translating what
            people are looking for into experiences they actually convert on.
          </p>
          <p className="reveal" data-d="1">
            I&apos;m Bisola, an SEO Analyst and Product Marketing Manager with
            3+ years working across fintech and SaaS. My work lives in the
            unglamorous middle: keyword research that maps to real intent,
            content systems that scale without losing voice, and onboarding
            flows that turn a click into a customer.
          </p>
          <p className="reveal" data-d="2">
            I&apos;m equally comfortable in a spreadsheet of crawl data and a
            room full of stakeholders. I believe traffic is only worth something
            when it moves a number that matters: sign-ups, activation, revenue.
            That&apos;s what I optimise for, end to end.
          </p>
          <div className="about-meta reveal" data-d="2">
            <div>
              <div className="k">Focus</div>
              <div className="v">
                SEO × Product Marketing
                <small>Intent-led growth systems</small>
              </div>
            </div>
            <div>
              <div className="k">Industries</div>
              <div className="v">
                Fintech &amp; SaaS<small>B2B and B2C</small>
              </div>
            </div>
            <div>
              <div className="k">Experience</div>
              <div className="v">
                3+ Years<small>In-house &amp; freelance</small>
              </div>
            </div>
            <div>
              <div className="k">Approach</div>
              <div className="v">
                Audit-first<small>Measure, then move</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
