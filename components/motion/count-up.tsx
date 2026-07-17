"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function CountUp({ value, decimals = 0, duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduce) return;
    const format = (v: number) =>
      v.toLocaleString("pl-PL", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("pl-PL", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
