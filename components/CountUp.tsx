"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fmt = (val: number) => {
      if (decimals > 0) return val.toFixed(decimals);
      if (val >= 1000) return Math.round(val).toLocaleString("en-US");
      return Math.round(val).toString();
    };

    if (reduce) {
      setDisplay(fmt(target));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const dur = 1600;
        const start = performance.now();
        const ease = (t: number) => 1 - (1 - t) ** 3;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setDisplay(fmt(target * ease(p)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {prefix && <span className="pre">{prefix}</span>}
      {display}
      {suffix && <span className="suf">{suffix}</span>}
    </span>
  );
}
