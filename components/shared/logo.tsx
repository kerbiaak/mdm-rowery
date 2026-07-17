import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="mDM Rowery — strona główna"
      className={cn("relative inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/logo-dark.png"
        alt="mDM Rowery"
        width={600}
        height={318}
        priority
        className={cn(
          "h-10 w-auto transition-opacity duration-300 lg:h-11",
          light ? "opacity-0" : "opacity-100"
        )}
      />
      <Image
        src="/images/logo-light.png"
        alt=""
        aria-hidden
        width={600}
        height={318}
        priority
        className={cn(
          "absolute left-0 top-1/2 h-10 w-auto -translate-y-1/2 transition-opacity duration-300 lg:h-11",
          light ? "opacity-100" : "opacity-0"
        )}
      />
    </Link>
  );
}
