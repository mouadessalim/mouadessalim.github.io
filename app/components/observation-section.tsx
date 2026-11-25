import { Layers } from "lucide-react";
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
      className="grid gap-6 py-12 lg:grid-cols-[1.4fr_0.6fr] md:py-20"
    >
      <article className="flex min-h-72 flex-col justify-center gap-6 border border-border border-l-4 border-l-(--accent) bg-card p-8 shadow-[0.6rem_0.6rem_0_color-mix(in_oklch,var(--primary),transparent_86%)] md:p-12">
        <blockquote className="max-w-3xl text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.04em] text-foreground">
          “I learned more from chasing the wrong tools honestly than I ever
          would have learned from pretending the path was straight.”
        </blockquote>
      </article>
      <article className="flex flex-col justify-between gap-8 border border-border bg-muted/40 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Eyebrow>Working toolkit</Eyebrow>
            <h2 className="mt-1.5 text-xl font-bold tracking-tight">
              What I build with today
            </h2>
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
