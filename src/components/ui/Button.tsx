import { clsx } from "clsx";
import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
};

export function Button({ href, variant = "primary", className, children, external, onClick }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary: "bg-foreground text-background hover:opacity-85 hover:scale-[1.02]",
    secondary: "border border-foreground/25 text-foreground hover:border-foreground/60 hover:scale-[1.02]",
    ghost: "text-foreground/80 hover:text-foreground",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} onClick={onClick} className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
