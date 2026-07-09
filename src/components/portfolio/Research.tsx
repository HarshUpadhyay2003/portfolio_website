import { BookOpen, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { LINKS } from "./links";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title={<>Published <span className="text-gradient">research</span></>}
    >
      <Reveal className="glass rounded-2xl p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="glass-strong grid size-16 shrink-0 place-items-center rounded-2xl text-accent">
            <BookOpen className="size-8" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="rounded-full border border-border/60 px-2.5 py-1 text-xs sm:text-sm">Co-Author</span>
              <span>2025</span>
              <span>·</span>
              <span>SSRN</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
              Enhancing YOLO with Rotated Bounding Boxes and ResNet50 Backbone for Accurate
              Orientation-Aware Object Detection
            </h3>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
              A deep learning approach that combines rotated bounding boxes with a ResNet50
              backbone to improve orientation-aware object detection accuracy over the standard
              YOLO baseline.
            </p>
            <a
              href={LINKS.ssrn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-primary"
            >
              Read on SSRN
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}