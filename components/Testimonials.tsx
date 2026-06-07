const testimonials = [
  {
    quote:
      "We had a big vision and a blank page. Bisola built the foundation, full marketing strategy, brand positioning, and a 90-day content calendar that gave us direction from day one. Everything we built on traces back to the thinking she put in at the start.",
    initials: "SA",
    name: "Shadrach Abba",
    role: "Software Developer",
    delay: undefined as string | undefined,
  },
  {
    quote:
      "Bisola is a sharp analytical thinker who consistently translates complex data into clear, impactful recommendations. Her SEO work at ZendWallet directly drove our organic growth. Collaborative, adaptable, and the kind of person every cross-functional team wants in the room.",
    initials: "IS",
    name: "Ibrahim Suleiman",
    role: "Lead Mobile Engineer, ZendWallet",
    delay: "1",
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
      </div>
    </section>
  );
}
