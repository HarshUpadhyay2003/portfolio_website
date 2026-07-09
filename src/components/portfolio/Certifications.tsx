import { Award } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const certs = [
  {
    issuer: "Microsoft Learn",
    title: "Preparing Data for Analysis with Microsoft Excel",
  },
  {
    issuer: "Microsoft Learn",
    title: "Extract, Transform and Load Data in Power BI",
  },
  {
    issuer: "Microsoft Learn",
    title: "Data Modeling in Power BI",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Recognized <span className="text-gradient">learning</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 100}
            className="glass group flex items-start gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-7"
          >
            <div className="glass-strong grid size-13 shrink-0 place-items-center rounded-xl text-accent">
              <Award className="size-6" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {c.issuer}
              </div>
              <div className="mt-2 font-display text-base font-bold leading-snug sm:text-lg">
                {c.title}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}