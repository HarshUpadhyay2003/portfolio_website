import { useState } from "react";
import { ChevronDown, Coins, ExternalLink, PlayCircle, Tv } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const projects = [
  {
    icon: Tv,
    title: "OTT Streaming Analytics Dashboard",
    tagline: "End-to-end BI on engagement, growth, and revenue.",
    tools: ["Python", "SQL", "Power BI", "DAX", "Excel", "Pandas", "Matplotlib"],
    kaggle: "https://www.kaggle.com/code/ranajahanvi/ott-streaming-platform",
    demo: "https://drive.google.com/file/d/1zg2HGlrUExk5zCjRtMdK1k5geEIWZ7Jn/view",
    details: [
      "Built an end-to-end BI solution analyzing engagement, growth, and revenue trends.",
      "Automated Python pipelines for data cleaning, transformation, and validation.",
      "Interactive multi-page Power BI dashboard: Executive KPIs, Segmentation, Geography, Content.",
      "Dynamic DAX measures for Monthly Revenue, Active Users, Retention, and Conversion.",
      "Drill-throughs, bookmarks, and slicers for decision support.",
    ],
  },
  {
    icon: Coins,
    title: "Gold Market Intelligence & Forecasting",
    tagline: "Predictive analytics for global & Indian gold prices.",
    tools: ["Python", "Power BI", "XGBoost", "LightGBM", "CatBoost"],
    kaggle: "https://www.kaggle.com/code/ranajahanvi/gold-prediction-model",
    demo: "https://drive.google.com/file/d/152X6GEbXTDm5v7WR89sKmGtMc5DLDdbl/view",
    details: [
      "Predictive analytics platform forecasting global and Indian gold prices.",
      "Engineered complex time-series features from multi-source financial data.",
      "Compared XGBoost, LightGBM, and CatBoost models using MAE, RMSE, and R².",
      "Power BI dashboards for Price Trends, Macro Indicators, Heatmaps, and Forecasting.",
    ],
  },
];

export function Projects() {
  const [openStates, setOpenStates] = useState<boolean[]>([true, false]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span></>}
      description="Two flagship builds spanning BI reporting and predictive modeling — click a card to expand the details."
    >
      <div className="grid gap-6 md:grid-cols-2 items-start">
        {projects.map((p, i) => {
          const isOpen = openStates[i];
          return (
            <Reveal
              key={p.title}
              delay={i * 120}
              className="glass group relative flex flex-col rounded-2xl p-7 transition-all hover:-translate-y-1 hover:z-10 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="glass-strong grid size-14 place-items-center rounded-xl text-accent">
                  <p.icon className="size-6" />
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                     href={p.kaggle}
                     target="_blank"
                     rel="noreferrer"
                     aria-label="Open on Kaggle"
                     className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/90 transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink className="size-4" />
                    Kaggle
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Watch live demo"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:-translate-y-0.5"
                  >
                    <PlayCircle className="size-4" />
                    Demo
                  </a>
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground">{p.tagline}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border/60 bg-white/[0.03] px-2.5 py-1 text-xs sm:text-sm text-muted-foreground font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const nextStates = [...openStates];
                  nextStates[i] = !nextStates[i];
                  setOpenStates(nextStates);
                }}
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
              >
                {isOpen ? "Hide details" : "Show details"}
                <ChevronDown
                  className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <ul className="overflow-hidden space-y-3 text-base text-foreground/85">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}