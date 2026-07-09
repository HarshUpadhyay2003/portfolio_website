import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" />
            Available for full-time roles · 2026 grad
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Jahanvi <span className="text-gradient">Rana</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl md:text-2xl min-h-[2rem]">
            <span className="text-gradient font-semibold">
              <Typewriter words={["Data Analyst", "BI Enthusiast", "Data Scientist"]} />
            </span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Transforming raw data into actionable insights — through clean pipelines,
            predictive models, and dashboards that drive decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={LINKS.resume}
              className="glass inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            {[
              { href: LINKS.github, label: "GitHub", icon: Github },
              { href: LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: LINKS.kaggle, label: "Kaggle", icon: KaggleIcon },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass grid size-12 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="glass mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4 sm:p-10"
        >
          {[
            { k: "5+", v: "Analytics projects" },
            { k: "1", v: "Research publication" },
            { k: "7.75", v: "CGPA / 10" },
            { k: "3", v: "Microsoft certifications" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground sm:text-base">{s.v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function KaggleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.83 22H14.6a.61.61 0 0 1-.5-.24l-4.62-5.85-1.3 1.24v4.42a.44.44 0 0 1-.44.44H4.44A.44.44 0 0 1 4 21.56V2.44A.44.44 0 0 1 4.44 2h3.3a.44.44 0 0 1 .44.44v11.5l6.03-6.11a.7.7 0 0 1 .53-.23h4.05c.35 0 .53.41.28.66l-6.36 6.19 6.5 8.13c.19.25 0 .58-.38.58Z" />
    </svg>
  );
}