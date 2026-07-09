import {
  Code2,
  Database,
  LineChart,
  PieChart,
  Table2,
} from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SkillsCarousel } from "./SkillsCarousel";

const competencies = [
  "Business Intelligence",
  "Data Visualization",
  "Predictive Analytics",
  "Dashboard Development",
  "Machine Learning",
  "Data Cleaning",
  "ETL",
  "Data Modeling",
  "Business Reporting",
  "KPI Analytics",
  "Forecasting",
  "Statistical Analysis",
  "Decision Support",
];

const groups = [
  {
    icon: Code2,
    title: "Programming & Libraries",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SQL"],
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    items: [
      "EDA",
      "Data Cleaning",
      "Validation",
      "Feature Engineering",
      "Time-Series Analysis",
      "Data Storytelling",
    ],
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    items: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "KPI Dashboards",
      "Drill-through",
      "Bookmarks",
    ],
  },
  {
    icon: Database,
    title: "SQL Competencies",
    items: [
      "Joins",
      "CTEs",
      "Window Functions",
      "Aggregates",
      "Subqueries",
      "Views",
      "Filtering",
      "Grouping",
    ],
  },
  {
    icon: Table2,
    title: "Excel & Tools",
    items: [
      "Pivot Tables",
      "Power Query",
      "Conditional Formatting",
      "VLOOKUP",
      "Git & GitHub",
      "Google Colab",
      "Kaggle",
      "Jupyter",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Core competencies & <span className="text-gradient">technical stack</span></>}
      description="A working toolkit spanning analytics, BI, and ML — grounded in strong SQL and Python fundamentals."
    >
      <Reveal className="mb-10">
        <SkillsCarousel />
      </Reveal>

      <Reveal className="glass mb-10 rounded-2xl p-6 sm:p-8">
        <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Core competencies
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {competencies.map((c) => (
            <li
              key={c}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-foreground/90 sm:text-base"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 80}
            className="glass group rounded-2xl p-7 transition-transform hover:-translate-y-1"
          >
            <div className="glass-strong mb-5 grid size-13 place-items-center rounded-xl text-accent transition-colors group-hover:text-primary">
              <g.icon className="size-6" />
            </div>
            <div className="font-display text-lg font-bold sm:text-xl">{g.title}</div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-md border border-border/60 bg-white/[0.03] px-3 py-1.5 text-xs sm:text-sm text-muted-foreground font-medium"
                >
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}