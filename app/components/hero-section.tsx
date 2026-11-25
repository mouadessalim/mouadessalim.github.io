import { ArrowDownRight, HeartPulse } from "lucide-react";
import { Container } from "./ui/container";

const profileHighlights = [
  { label: "Focus", value: "Full-stack web apps" },
  { label: "Core stack", value: "TypeScript, React, Next.js" },
  { label: "Training", value: "Medicine (MD candidate)" },
];

export function HeroSection() {
  return (
    <Container as="section" className="py-8 md:py-12">
      <article className="overflow-hidden border border-border bg-card shadow-[0.7rem_0.7rem_0_color-mix(in_oklch,var(--primary),transparent_86%)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted px-4 py-3 font-mono text-[0.625rem] font-semibold tracking-[0.12em]">
          <span>CASE FILE</span>
          <span>ME-2026-08</span>
          <span className="text-(--accent)">ACTIVE</span>
        </div>
        <div className="grid lg:grid-cols-[1.5fr_0.5fr]">
          <div className="flex flex-col gap-8 p-6 md:p-10 lg:border-r lg:border-border lg:p-14">
            <div className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-widest text-primary">
              <HeartPulse aria-hidden="true" />
              Medical student &amp; software developer
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-mono text-xs text-muted-foreground">
                MOUAD ESSALIM · FULL-STACK WEB &amp; AUTOMATION
              </p>
              <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
                Studying medicine.
                <br />
                <span className="underline decoration-(--accent) decoration-[0.1em] underline-offset-[0.12em]">
                  Building web software.
                </span>
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                I&apos;m a medical student and self-taught developer. Over
                nearly a decade of writing code, I moved from Python automation
                and desktop utilities to full-stack web applications with
                TypeScript, React, and Next.js.
              </p>
            </div>
            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-2 border-b-2 border-primary pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
            >
              View repositories
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
          <aside
            className="flex flex-col border-t border-border md:border-t-0"
            aria-label="Profile summary"
          >
            {profileHighlights.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 border-b border-border p-5"
              >
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </span>
                <strong className="text-sm">{value}</strong>
              </div>
            ))}
            <div className="flex flex-col gap-1.5 p-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground">
                Status
              </span>
              <strong className="flex items-center gap-2 text-sm">
                <i
                  className="ecg-pulse h-2 w-2 rounded-full bg-(--accent)"
                  aria-hidden="true"
                />
                Building &amp; learning actively
              </strong>
            </div>
          </aside>
        </div>
      </article>
    </Container>
  );
}
