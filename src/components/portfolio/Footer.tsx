import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "./links";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jahanvi Rana. Built with care.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: LINKS.email, label: "Email", icon: Mail },
            { href: LINKS.github, label: "GitHub", icon: Github },
            { href: LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}