import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { toast } from "sonner";
import { LINKS } from "./links";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "ef028ac8-d5c8-432a-b1da-e980a58408be";

    formData.append("access_key", accessKey);
    formData.append("subject", `New Portfolio Contact Message from ${formData.get("name")}`);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out! Jahanvi will get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Something went wrong. Please email directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error sending message", {
        description: "An unexpected error occurred. Please reach out directly via email or LinkedIn.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something</span>.</>}
      description="Open to Data Analyst, BI, and Data Science roles — and always up for a quick conversation."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="glass flex flex-col gap-6 rounded-2xl p-8 sm:p-10 md:col-span-2">
          <div className="space-y-5 text-base">
            <a
              href={LINKS.email}
              className="group flex items-center gap-4 text-foreground/90 transition-colors hover:text-foreground"
            >
              <span className="glass-strong grid size-12 shrink-0 place-items-center rounded-xl text-accent">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0 truncate">ranajahanvi63@gmail.com</span>
            </a>
            <a
              href={LINKS.phone}
              className="group flex items-center gap-4 text-foreground/90 transition-colors hover:text-foreground"
            >
              <span className="glass-strong grid size-12 shrink-0 place-items-center rounded-xl text-accent">
                <Phone className="size-5" />
              </span>
              <span>+91 89681 54121</span>
            </a>
            <div className="flex items-center gap-4 text-foreground/90">
              <span className="glass-strong grid size-12 shrink-0 place-items-center rounded-xl text-accent">
                <MapPin className="size-5" />
              </span>
              <span>Chandigarh, India</span>
            </div>
          </div>

          <div className="mt-4 border-t border-border/60 pt-6">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Elsewhere
            </div>
            <div className="flex gap-3">
              {[
                { href: LINKS.github, label: "GitHub", icon: Github },
                { href: LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid size-12 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="glass rounded-2xl p-8 sm:p-10 md:col-span-3"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-border bg-white/[0.03] px-5 py-3 text-base text-foreground outline-none transition-colors focus:border-primary focus:bg-white/[0.06]"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-white/[0.03] px-5 py-3 text-base text-foreground outline-none transition-colors focus:border-primary focus:bg-white/[0.06]"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-5 py-3.5 text-base text-foreground outline-none transition-colors focus:border-primary focus:bg-white/[0.06]"
                placeholder="Tell me about the role or project…"
              />
            </label>
            <button
              disabled={sending}
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send className="size-5" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}