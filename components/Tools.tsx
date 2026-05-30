const tools = [
  { glyph: "Ah", name: "Ahrefs", delay: undefined as string | undefined },
  { glyph: "Se", name: "SEMrush", delay: "1" },
  { glyph: "GA", name: "GA4", delay: "2" },
  { glyph: "SC", name: "Search Console", delay: "3" },
  { glyph: "Wf", name: "Webflow", delay: "4" },
  { glyph: "No", name: "Notion", delay: undefined },
  { glyph: "Lo", name: "Looker", delay: "1" },
  { glyph: "Hs", name: "HubSpot", delay: "2" },
  { glyph: "Sf", name: "Surfer", delay: "3" },
  { glyph: "Fg", name: "Figma", delay: "4" },
];

export default function Tools() {
  return (
    <section className="block" id="tools" data-screen-label="Tools">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Stack</div>
            <h2 className="section-title">
              Tools of
              <br />
              the <span className="accent">trade.</span>
            </h2>
          </div>
          <p className="section-note">
            The kit I reach for daily, swap the glyphs for real brand logos at
            build time.
          </p>
        </div>
        <div className="tools-grid">
          {tools.map((t) => (
            <div key={t.name} className="tool reveal" data-d={t.delay}>
              <span className="glyph">{t.glyph}</span>
              <span className="tname">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
