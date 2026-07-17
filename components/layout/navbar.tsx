"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { EASE } from "@/components/motion/reveal";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overDark = !scrolled || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mobileItem = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
        scrolled && !open
          ? "border-b border-black/[0.06] bg-white/85 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo light={overDark} className="relative z-50" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Nawigacja główna">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "group relative text-sm font-medium transition-colors duration-300",
                overDark ? "text-white/75 hover:text-white" : "text-zinc-600 hover:text-ink",
                isActive(link.href) && (overDark ? "text-white" : "text-ink")
              )}
            >
              {link.label}
              <span
                aria-hidden
                className={cn(
                  "absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-brand transition-all duration-300 group-hover:w-5",
                  isActive(link.href) ? "w-5" : "w-0"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-sm font-semibold transition-colors duration-300 xl:flex",
              overDark ? "text-white/85 hover:text-white" : "text-ink hover:text-brand"
            )}
          >
            <Phone className="size-4 text-brand" aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <Button
            href="/kontakt"
            size="md"
            variant={overDark ? "light" : "primary"}
            className="hidden sm:inline-flex"
          >
            Umów serwis
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            className={cn(
              "relative z-50 flex size-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
              overDark
                ? "border-white/20 bg-white/10 text-white backdrop-blur-md"
                : "border-black/10 bg-white text-ink"
            )}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink lg:hidden"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/20 blur-[120px]"
            />
            <motion.nav
              aria-label="Menu"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
              }}
              className="container-x flex h-full flex-col justify-center"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={mobileItem}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-bold tracking-tight transition-colors duration-300",
                      isActive(link.href) ? "text-brand" : "text-white hover:text-brand"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-6 text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItem} className="mt-8 space-y-1.5 text-sm text-zinc-400">
                <p>
                  <a href={CONTACT.phoneHref} className="font-semibold text-white">
                    {CONTACT.phoneDisplay}
                  </a>{" "}
                  · {CONTACT.street}, {CONTACT.city}
                </p>
                <p>
                  pn–pt 09:00–18:00 · sob 09:00–13:00
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
