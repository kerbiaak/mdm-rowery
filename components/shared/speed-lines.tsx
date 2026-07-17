import { cn } from "@/lib/utils";

export function SpeedLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 10" aria-hidden="true" className={cn("h-2.5 w-8 shrink-0", className)}>
      <path d="M5 1.5h25" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M0 8h20" stroke="#d11d25" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
