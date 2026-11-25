import { Activity, Layers } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";

const toolkit = [
  {
    area: "Web",
    tools: "TypeScript, React, Next.js, Tailwind CSS",
  },
  {
    area: "Backend & cloud",
    tools: "Firebase (Auth, Firestore), REST APIs",
  },
  {
    area: "Automation & desktop",
    tools: "Python, Selenium, Flutter, Electron",
  },
];

export function ObservationSection() {
  return (
    <Container
      as="section"
      className="grid gap-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20"
    >
      <article className="flex min-h-72 flex-col justify-between gap-10 border border-border bg-card p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Activity className="text-primary" aria-hidden="true" />
          <Eyebrow>Now / 2026</Eyebrow>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.035em] md:text-4xl">
            Balancing clinical coursework with practical web tools.
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Right now my time is split between medical school and sharpening my
            full-stack TypeScript workflow. I&apos;m particularly interested in
            fast, static-first web apps, developer utilities, and clean tools
            for students and clinicians.
          </p>
        </div>
      </article>
      <article className="flex flex-col justify-between gap-8 border border-border bg-card p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Eyebrow>Working toolkit</Eyebrow>
            <h3 className="mt-1.5 text-2xl font-bold tracking-tight">
              What I build with today
            </h3>
          </div>
          <Layers className="shrink-0 text-(--accent)" aria-hidden="true" />
        </div>
        <dl className="flex flex-col gap-3 text-[0.9rem]">
          {toolkit.map(({ area, tools }) => (
            <div
              key={area}
              className="flex flex-col gap-0.5 border-b border-border pb-3 last:border-b-0 last:pb-0"
            >
              <dt className="font-mono text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                {area}
              </dt>
              <dd className="font-medium text-foreground">{tools}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Container>
  );
}
