import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BarChart3, BrainCircuit, FileText } from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "End-to-end analytics",
    body: "From raw data pipelines to interactive KPI dashboards in Power BI.",
  },
  {
    icon: BrainCircuit,
    title: "ML & forecasting",
    body: "Ensemble models (XGBoost, LightGBM, CatBoost) for real-world prediction.",
  },
  {
    icon: FileText,
    title: "Published research",
    body: "Co-authored an international paper on orientation-aware object detection.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Turning numbers into <span className="text-gradient">narratives</span>.</>}
    >
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="glass rounded-2xl p-8 sm:p-10 md:col-span-3">
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            I'm a Data Analyst and BI enthusiast skilled in{" "}
            <span className="text-foreground font-semibold">Python, SQL, Power BI,</span> and ensemble ML
            algorithms. I've co-authored an international research publication in Computer
            Vision and built end-to-end analytics solutions — including interactive KPI
            dashboards that support real business decisions.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Currently completing my B.E. in Computer Science (AI & ML) at Chandigarh
            University, I love the stretch between clean data engineering and the story it
            unlocks for stakeholders.
          </p>
        </Reveal>

        <div className="grid gap-4 md:col-span-2">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 100}
              className="glass group flex items-start gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="glass-strong grid size-12 shrink-0 place-items-center rounded-xl text-accent">
                <h.icon className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-semibold sm:text-lg">{h.title}</div>
                <div className="mt-1.5 text-sm text-muted-foreground sm:text-base leading-normal">{h.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}