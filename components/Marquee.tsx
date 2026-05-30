interface MarqueeProps {
  alt?: boolean;
  rev?: boolean;
}

export default function Marquee({ alt = false, rev = false }: MarqueeProps) {
  const cls = ["marquee", alt && "alt", rev && "rev"]
    .filter(Boolean)
    .join(" ");

  const track = alt ? (
    <span>
      Ahrefs ✦ SEMrush ✦ GA4 ✦ Search Console ✦ Webflow ✦ Notion ✦ Looker ✦
      HubSpot ✦
    </span>
  ) : (
    <span>
      Organic Growth <i>✦</i> Technical SEO <i>✦</i> Content Strategy <i>✦</i>{" "}
      Product Marketing <i>✦</i> Conversion <i>✦</i>
    </span>
  );

  return (
    <div className={cls}>
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
