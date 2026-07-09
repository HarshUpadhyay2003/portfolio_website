import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const items = [
  {
    school: "Chandigarh University, Mohali",
    degree: "B.E. Computer Science (AI & ML)",
    period: "Expected 2026",
    score: "CGPA 7.75 / 10",
  },
  {
    school: "M M M Public School, Hoshiarpur",
    degree: "Intermediate — Non-Medical + Computer Science",
    period: "2022",
    score: "88.8%",
  },
  {
    school: "SGGS Sr. Sec Public School, Mukerian",
    degree: "Matriculation",
    period: "2020",
    score: "75%",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="text-gradient">journey</span></>}
    >
      <ol className="relative space-y-5 border-l border-border/60 pl-6 sm:pl-8">
        {items.map((it, i) => (
          <Reveal
            key={it.school}
            as="li"
            delay={i * 100}
            className="relative"
          >
            <span className="absolute -left-[33px] top-7 grid size-6 place-items-center rounded-full bg-background sm:-left-[41px]">
              <span className="size-2.5 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]" />
            </span>
            <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-0.5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <GraduationCap className="size-4" />
                    {it.period}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold sm:text-xl">
                    {it.school}
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">{it.degree}</p>
                </div>
                <span className="glass shrink-0 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-accent">
                  {it.score}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}