"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CategoryCard({ category }: { category: Category }) {
  const { title, desc, img, fit, href } = category;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-black/10 hover:shadow-[0_32px_64px_-28px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 80vw, 360px"
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.06]",
            fit === "contain" ? "object-contain p-7" : "object-cover"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-black/[0.05] p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
          Zobacz więcej
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
