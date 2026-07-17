import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-[0_14px_30px_-12px_rgba(209,29,37,0.6)] hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_20px_45px_-14px_rgba(209,29,37,0.65)]",
        dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-black",
        light:
          "bg-white text-ink shadow-[0_14px_35px_-14px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:bg-zinc-100",
        outline: "border border-ink/15 text-ink hover:-translate-y-0.5 hover:border-ink/40",
        outlineLight:
          "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/15",
      },
      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export function Button({ href, variant, size, className, children, ...rest }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
