"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { journey, statusLabel } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CodeBadge, Eyebrow } from "@/components/ui/badge";
import { ControlButton } from "@/components/ui/button";

export function RoadmapSection() {
  const [selectedMilestone, setSelectedMilestone] = useState(
    journey.length - 1,
  );
  const selected = journey[selectedMilestone];
  const selectedStep = String(selectedMilestone + 1).padStart(2, "0");

  return (
    <section id="roadmap" className="border-y border-border bg-muted/80">
      <Container className="flex flex-col gap-9 py-12 md:py-20">
        <SectionHeading
          number="02"
          eyebrowText="The honest version"
          title={
            <>
              Not a straight path.
              <br />A useful one.
            </>
          }
          description="I followed curiosity into good tools, dead ends, and one chapter I would handle differently now. Every stop changed what I chose next."
        />
        <div
          className="flex flex-wrap gap-x-6 gap-y-4 font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground"
          aria-label="Roadmap legend"
        >
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
            Learned
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-full border-2 border-dashed border-muted-foreground bg-background" />
            Explored
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-full border-2 border-(--accent) bg-(--accent)" />
            Learning now
          </span>
        </div>
        <figure
          className="overflow-hidden border border-border bg-card"
          aria-labelledby="ecg-title ecg-caption"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 max-md:items-start">
            <div className="flex flex-col gap-1.5">
              <Eyebrow id="ecg-title">
                Learning signal / 11 recorded beats
              </Eyebrow>
              <p className="text-[0.8rem] text-muted-foreground">
                Choose a beat to inspect that stage of the journey.
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-[0.625rem] font-bold uppercase tracking-widest text-(--accent)">
              <i
                className="ecg-pulse h-2 w-2 rounded-full bg-(--accent)"
                aria-hidden="true"
              />
              Signal active
            </span>
          </div>
          <div
            className="overflow-x-auto overscroll-x-contain [scrollbar-color:var(--primary)_var(--muted)]"
            role="group"
            aria-label="Development journey milestones"
          >
            <div className="ecg-grid relative h-60 w-260 min-w-full max-md:h-54">
              <svg
                className="absolute left-0 top-15 h-30 w-full text-primary drop-shadow-[0_0_0.2rem_color-mix(in_oklch,var(--primary),transparent_55%)] max-md:top-12 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-[2.2] [&_path]:[vector-effect:non-scaling-stroke]"
                viewBox="0 0 1040 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 68 H24 L34 60 L43 68 H55 L64 35 L73 101 L84 10 L96 78 L107 68 H119 L128 58 L138 68 H160 L170 61 L179 68 H191 L200 32 L209 103 L220 8 L232 80 L243 68 H255 L264 59 L274 68 H296 L306 61 L315 68 H327 L336 38 L345 98 L356 16 L368 77 L379 68 H391 L400 60 L410 68 H432 L442 62 L451 68 H463 L472 40 L481 94 L492 22 L504 76 L515 68 H527 L536 61 L546 68 H568 L578 64 L587 68 H599 L608 51 L617 84 L628 39 L640 73 L651 68 H663 L672 63 L682 68 H704 L714 64 L723 68 H735 L744 52 L753 82 L764 41 L776 73 L787 68 H799 L808 63 L818 68 H840 L850 63 L859 68 H871 L880 42 L889 93 L900 20 L912 77 L923 68 H935 L944 59 L954 68 H976 L986 57 L995 68 H1007 L1016 22 L1025 108 L1034 2 L1040 68" />
              </svg>
              <ol className="absolute inset-0 flex items-stretch">
                {journey.map((milestone, index) => {
                  const step = String(index + 1).padStart(2, "0");
                  const isSelected = index === selectedMilestone;
                  const explored = milestone.status === "explored";
                  const current = milestone.status === "current";
                  return (
                    <li
                      key={milestone.name}
                      className={`basis-20 ${explored ? "opacity-[0.58]" : ""}`}
                    >
                      <button
                        type="button"
                        className="group relative flex h-full w-full cursor-pointer flex-col items-center gap-2 bg-transparent px-1.5 pb-4 pt-[1.15rem] text-foreground"
                        aria-pressed={isSelected}
                        aria-label={`${step}, ${milestone.name}, ${statusLabel[milestone.status]}`}
                        onClick={() => setSelectedMilestone(index)}
                      >
                        <span className="font-mono text-[0.55rem] font-bold tracking-[0.08em] text-muted-foreground">
                          {step}
                        </span>
                        <span
                          className={`absolute top-29 h-3.5 w-3.5 rounded-full border-2 bg-card shadow-[0_0_0_0.3rem_color-mix(in_oklch,var(--card),transparent_15%)] transition-transform group-hover:scale-135 group-aria-pressed:scale-135 md:top-32 ${
                            explored
                              ? "border-dashed border-muted-foreground"
                              : current
                                ? "border-(--accent) group-aria-pressed:bg-(--accent)"
                                : "border-primary group-aria-pressed:bg-primary"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`max-w-18 text-balance text-center text-[0.67rem] font-bold leading-[1.15] ${
                            current ? "text-(--accent)" : ""
                          } mt-auto`}
                        >
                          {milestone.name}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="grid gap-5 border-t border-border bg-card p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="flex items-start gap-4">
              <CodeBadge size="lg">{selectedStep}</CodeBadge>
              <div className="flex flex-col gap-1.5">
                <p
                  className={`font-mono text-[0.58rem] font-bold uppercase tracking-widest ${
                    selected.status === "current"
                      ? "text-(--accent)"
                      : selected.status === "explored"
                        ? "text-muted-foreground"
                        : "text-primary"
                  }`}
                >
                  {statusLabel[selected.status]}
                </p>
                <h3 className="text-xl font-bold tracking-tight">
                  {selected.name}
                </h3>
                <p className="text-[0.85rem] leading-[1.55] text-muted-foreground">
                  {selected.description}
                </p>
              </div>
            </div>
            <div
              className="flex min-w-0 items-center justify-between gap-3 md:min-w-68"
              aria-label="Journey navigation"
            >
              <ControlButton
                onClick={() => setSelectedMilestone((i) => Math.max(0, i - 1))}
                disabled={selectedMilestone === 0}
                aria-label="Previous milestone"
              >
                <ChevronLeft aria-hidden="true" />
                Previous
              </ControlButton>
              <span className="font-mono text-[0.6rem] text-muted-foreground">
                {selectedMilestone + 1} / {journey.length}
              </span>
              <ControlButton
                onClick={() =>
                  setSelectedMilestone((i) =>
                    Math.min(journey.length - 1, i + 1),
                  )
                }
                disabled={selectedMilestone === journey.length - 1}
                aria-label="Next milestone"
              >
                Next
                <ChevronRight aria-hidden="true" />
              </ControlButton>
            </div>
          </div>
          <figcaption
            id="ecg-caption"
            className="border-t border-border bg-muted px-5 py-3 font-mono text-[0.58rem] uppercase leading-normal tracking-[0.07em] text-muted-foreground max-md:normal-case max-md:tracking-[0.03em]"
          >
            The muted beats mark chapters I explored but did not
            keep—including the grey-hat detour that taught me why technical
            curiosity needs boundaries.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
