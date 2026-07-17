import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="mDM Rowery — strona główna"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <svg viewBox="0 0 34 22" aria-hidden="true" className="h-[1.15rem] w-8 shrink-0">
        <path
          d="M6 2.5h26"
          strokeWidth="3.4"
          strokeLinecap="round"
          className={cn(
            "transition-colors duration-300",
            light ? "stroke-white" : "stroke-ink"
          )}
        />
        <path d="M0 11h22" stroke="#d11d25" strokeWidth="3.4" strokeLinecap="round" />
        <path
          d="M9 19.5h17"
          strokeWidth="3.4"
          strokeLinecap="round"
          className={cn(
            "transition-colors duration-300",
            light ? "stroke-white" : "stroke-ink"
          )}
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.3rem] font-bold italic tracking-tight transition-colors duration-300",
            light ? "text-white" : "text-ink"
          )}
        >
          m<span className="text-brand">DM</span>
        </span>
        <span className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.42em] text-brand">
          Rowery
        </span>
      </span>
    </Link>
  );
}
