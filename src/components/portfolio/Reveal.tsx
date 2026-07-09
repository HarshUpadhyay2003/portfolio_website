import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  as: As = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      className={className}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}