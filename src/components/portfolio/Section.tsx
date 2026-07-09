import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl leading-tight">{title}</h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}