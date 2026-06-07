"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import type { StaticImageData } from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import styles from "./page.module.css";

type Cat = "seo" | "social" | "copyWriting";

type Item = {
  img: StaticImageData;
  label: string;
  cat: Cat;
};

/* eslint-disable @typescript-eslint/no-require-imports */
const ALL: Item[] = [
  {
    img: require("@/components/assets/WhatsApp Image 2026-05-31 at 19.25.13.jpeg"),
    label: "Organic sessions growth — ZendWallet",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.03.37.jpeg"),
    label: "Keyword rankings snapshot",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.05.19.jpeg"),
    label: "Semrush traffic overview",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.05.53.jpeg"),
    label: "Search visibility trend",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.06.15.jpeg"),
    label: "Top performing keywords",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.07.19.jpeg"),
    label: "Organic CTR report",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.07.36.jpeg"),
    label: "Domain authority progress",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.07.48.jpeg"),
    label: "Content performance dashboard",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.08.03.jpeg"),
    label: "Backlink acquisition report",
    cat: "seo",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.08.20.jpeg"),
    label: "Instagram page growth",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.08.36.jpeg"),
    label: "Follower growth timeline",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.08.49.jpeg"),
    label: "Post reach analytics",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.09.00.jpeg"),
    label: "Engagement rate dashboard",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.09.15.jpeg"),
    label: "LinkedIn growth metrics",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.09.25.jpeg"),
    label: "Twitter / X impressions",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.09.37.jpeg"),
    label: "Community engagement snapshot",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-01 at 19.09.48.jpeg"),
    label: "Social media ROI overview",
    cat: "social",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-05 at 18.14.24.jpeg"),
    label: "African School of Economics",
    cat: "copyWriting",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-05 at 18.13.56.jpeg"),
    label: "Press one Africa ",
    cat: "copyWriting",
  },
  {
    img: require("@/components/assets/WhatsApp Image 2026-06-05 at 18.15.17.jpeg"),
    label: "African School of Economics 2",
    cat: "copyWriting",
  },
];
/* eslint-enable @typescript-eslint/no-require-imports */

const FILTERS = [
  { key: "all" as const,    label: "All work",       count: ALL.length },
  { key: "seo" as const,    label: "SEO · Semrush",  count: ALL.filter((i) => i.cat === "seo").length },
  { key: "social" as const, label: "Social Growth",  count: ALL.filter((i) => i.cat === "social").length },
  { key: "copyWriting" as const, label: "Copy Writing",  count: ALL.filter((i) => i.cat === "copyWriting").length },
];

type Filter = "all" | Cat;

export default function ProofPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const visible = filter === "all" ? ALL : ALL.filter((i) => i.cat === filter);

  const close = useCallback(() => setLightboxIdx(null), []);

  const prev = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxIdx, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  const changeFilter = (f: Filter) => {
    setFilter(f);
    setLightboxIdx(null);
  };

  const current = lightboxIdx !== null ? visible[lightboxIdx] : null;

  return (
    <>
      <Nav />

      <main className={styles.main}>

        {/* ── Hero ─────────────────────────────────── */}
        <section className={styles.hero}>
          <div className="wrap">
            <Link href="/" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to portfolio
            </Link>

            <div className={`eyebrow ${styles.eyebrow}`}>Behind the numbers</div>

            <h1 className={styles.title}>
              Real.{" "}
              <span className="accent">Proof.</span>
            </h1>

            <p className={styles.subtitle}>
              {ALL.length} screenshots pulled straight from live dashboards —
              no stock photos, no mockups, no filters.
            </p>

            <div className={styles.heroMeta}>
              <span className={styles.metaPill}>
                <span className={styles.dot} />
                {ALL.filter((i) => i.cat === "seo").length} SEO &amp; Semrush
              </span>
              <span className={styles.metaPill}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                {ALL.filter((i) => i.cat === "social").length} Social Growth
              </span>
              <span className={styles.metaPill}>
                <span className={`${styles.dot} ${styles.dotBlue}`} />
                {ALL.filter((i) => i.cat === "copyWriting").length} Copy Writing
              </span>
            </div>
          </div>
        </section>

        {/* ── Filter bar ───────────────────────────── */}
        <div className={styles.filterBar}>
          <div className="wrap">
            <div className={styles.filterInner}>
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`${styles.filterBtn}${filter === f.key ? ` ${styles.filterBtnActive}` : ""}`}
                  onClick={() => changeFilter(f.key)}
                >
                  {f.label}
                  <span className={styles.filterCount}>{f.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Gallery grid ─────────────────────────── */}
        <section className={styles.gallery}>
          <div className="wrap">
            <div className={styles.grid}>
              {visible.map((item, i) => (
                <button
                  key={`${filter}-${i}`}
                  className={styles.card}
                  onClick={() => setLightboxIdx(i)}
                  aria-label={`Open screenshot: ${item.label}`}
                >
                  <div className={styles.cardImg}>
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      sizes="(max-width: 680px) 100vw, 50vw"
                      className={styles.img}
                    />
                    <div className={styles.cardOverlay}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                        <path d="M3 19L19 3M19 3H8M19 3V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardLabel}>{item.label}</span>
                    <span className={item.cat === "seo" ? styles.catSeo : item.cat === "copyWriting" ? styles.catCopyWriting : styles.catSocial}>
                      {item.cat === "seo" ? "SEO" : item.cat === "copyWriting" ? "Copy Writing" : "Social"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Lightbox ─────────────────────────────────── */}
      {current !== null && lightboxIdx !== null && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true" aria-label={current.label}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>

            <div className={styles.lightboxTop}>
              <span className={styles.lbLabel}>{current.label}</span>
              <div className={styles.lbControls}>
                <span className={styles.lbCounter}>{lightboxIdx + 1} / {visible.length}</span>
                <button className={styles.lbClose} onClick={close} aria-label="Close lightbox">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.lbImgWrap}>
              <Image
                src={current.img}
                alt={current.label}
                fill
                sizes="100vw"
                className={styles.lbImg}
                priority
              />
              <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous screenshot">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next screenshot">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className={styles.lbHint}>← → to navigate · Esc to close</p>
          </div>
        </div>
      )}

      <Footer />
      <ClientEffects />
    </>
  );
}
