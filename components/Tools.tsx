"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

/* eslint-disable @typescript-eslint/no-require-imports */
const tools: { img: StaticImageData; name: string; delay: string | undefined }[] = [
  { img: require("@/components/assets/ahrefs.png"),          name: "Ahrefs",         delay: undefined },
  { img: require("@/components/assets/semrush.png"),         name: "SEMrush",        delay: "1" },
  { img: require("@/components/assets/ga4.png"),             name: "GA4",            delay: "2" },
  { img: require("@/components/assets/search console.png"),  name: "Search Console", delay: "3" },
  { img: require("@/components/assets/webflow.png"),         name: "Webflow",        delay: "4" },
  { img: require("@/components/assets/notion.png"),          name: "Notion",         delay: undefined },
  { img: require("@/components/assets/looker.png"),          name: "Looker",         delay: "1" },
  { img: require("@/components/assets/hubspot.png"),         name: "HubSpot",        delay: "2" },
  { img: require("@/components/assets/surfer.png"),          name: "Surfer",         delay: "3" },
  { img: require("@/components/assets/figma.png"),           name: "Figma",          delay: "4" },
];
/* eslint-enable @typescript-eslint/no-require-imports */

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
        </div>
        <div className="tools-grid">
          {tools.map((t) => (
            <div key={t.name} className="tool reveal" data-d={t.delay}>
              <div className="tool-logo-wrap">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="52px"
                  className="tool-logo-img"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="tname">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
