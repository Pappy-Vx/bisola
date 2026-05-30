const testimonials = [
  {
    quote:
      "Bisola finds the growth everyone else walks past. She rebuilt our activation funnel and the numbers moved within a quarter, without a single new ad pound spent.",
    initials: "FN",
    name: "First Last",
    role: "Founder, Payrit",
    delay: undefined as string | undefined,
  },
  {
    quote:
      "We launched with zero organic presence. Eight months later we were ranking on the terms that actually convert. That's all Bisola's system.",
    initials: "FN",
    name: "First Last",
    role: "Head of Growth, ZendWallet",
    delay: "1",
  },
  {
    quote:
      "She speaks fluent SEO and fluent product. That combination is rare, most people are good at one and guess at the other.",
    initials: "FN",
    name: "First Last",
    role: "Product Lead, SaaS",
    delay: "1",
  },
  {
    quote:
      "Audit-first, ego-never. Bisola showed us exactly where our funnel was leaking and shipped the fixes herself. Genuinely a force multiplier.",
    initials: "FN",
    name: "First Last",
    role: "Marketing Director",
    delay: undefined,
  },
];

export default function Testimonials() {
  return (
    <section
      className="block"
      id="testimonials"
      data-screen-label="Testimonials"
    >
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Kind words</div>
            <h2 className="section-title">
              Test<span className="lc">i</span>mon
              <span className="lc">i</span>als
            </h2>
          </div>
          <p className="section-note">
            Placeholder quotes below, swap in real notes from managers and
            clients before launch.
          </p>
        </div>
        <div className="tcols">
          {testimonials.map((t, i) => (
            <div key={i} className="tcard reveal" data-d={t.delay}>
              <p className="quote">{t.quote}</p>
              <div className="who">
                <div className="av">{t.initials}</div>
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="rl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="placeholder-note">
          Testimonials are placeholders, replace names, roles and quotes with
          real ones.
        </div>
      </div>
    </section>
  );
}
