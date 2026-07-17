"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = { q: string; a: string };

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div
      className={cn(
        "divide-y divide-black/[0.06] overflow-hidden border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {items.map((item, i) => (
        <AccordionRow
          key={item.q}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 hover:text-brand sm:px-8"
      >
        <span className="font-display text-base font-bold tracking-tight sm:text-lg">
          {item.q}
        </span>
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center border border-black/10 text-ink transition-all duration-300",
            open && "border-brand bg-brand text-white"
          )}
        >
          <Plus
            className={cn("size-4 transition-transform duration-300", open && "rotate-45")}
            aria-hidden
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl px-6 pb-6 text-[15px] leading-relaxed text-zinc-600 sm:px-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
