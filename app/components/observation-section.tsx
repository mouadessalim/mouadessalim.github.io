import { Activity, FileText } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";

const fieldNotes = [
  "Curiosity needs ethics, not just technical ability",
  "The right medium matters as much as the language",
  "I still learn by making the thing before I feel ready",
];

export function ObservationSection() {
  return (
    <Container
      as="section"
      className="grid gap-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20"
    >
      <article className="flex min-h-72 flex-col justify-between gap-12 border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <Activity aria-hidden="true" />
          <Eyebrow>Observation / current context</Eyebrow>
        </div>
        <blockquote className="max-w-3xl text-balance text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
          “I learned more from chasing the wrong tools honestly than I ever
          would have learned from pretending the path was straight.”
        </blockquote>
      </article>
      <article className="flex flex-col gap-8 border border-border bg-card p-6">
        <FileText className="text-(--accent)" aria-hidden="true" />
        <div>
          <Eyebrow>Field notes</Eyebrow>
          <h2 className="mt-1.5 text-[1.8rem] font-bold">What I carry forward</h2>
        </div>
        <ul className="flex flex-col gap-3 text-[0.9rem] text-muted-foreground">
          {fieldNotes.map((note) => (
            <li key={note} className="border-b border-border pb-3">
              {note}
            </li>
          ))}
        </ul>
      </article>
    </Container>
  );
}
