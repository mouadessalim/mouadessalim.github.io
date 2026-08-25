"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

type JourneyStatus = "learned" | "explored" | "current";
type JourneyMilestone = {
  name: string;
  description: string;
  status: JourneyStatus;
};

const journey: JourneyMilestone[] = [
  {
    name: "Bash",
    description: "Command line navigation and automation.",
    status: "learned",
  },
  {
    name: "Python",
    description: "Scripting, logic, and backend foundations.",
    status: "learned",
  },
  {
    name: "HTML & CSS",
    description: "Structure and visual systems for the web.",
    status: "learned",
  },
  {
    name: "Tkinter",
    description: "My first Python desktop interfaces.",
    status: "learned",
  },
  {
    name: "PyQt",
    description: "Richer component-based desktop applications.",
    status: "learned",
  },
  {
    name: "Go",
    description: "Explored concurrency, then changed direction.",
    status: "explored",
  },
  {
    name: "C++",
    description: "Studied lower-level memory concepts.",
    status: "explored",
  },
  {
    name: "Rust",
    description: "Explored safe systems programming.",
    status: "explored",
  },
  {
    name: "Dart & Flutter",
    description: "Cross-platform mobile development practice.",
    status: "learned",
  },
  {
    name: "JavaScript",
    description: "Interactivity and the modern web ecosystem.",
    status: "learned",
  },
  {
    name: "GCP & Firebase",
    description: "Cloud hosting, data, and authentication.",
    status: "learned",
  },
  {
    name: "React",
    description: "Reusable components and application state.",
    status: "learned",
  },
  {
    name: "Next.js & Tailwind",
    description: "Full-stack React and systematic styling.",
    status: "current",
  },
];

const statusLabel: Record<JourneyStatus, string> = {
  learned: "Learned",
  explored: "Explored",
  current: "Learning now",
};

const shell =
  "mx-auto w-[calc(100%-2rem)] max-w-[74rem] md:w-[calc(100%-4rem)]";
const eyebrow =
  "font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary";
const sectionHeading =
  "grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] md:items-end";
const sectionTitle =
  "max-w-3xl text-balance text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]";
const controlButton =
  "flex cursor-pointer items-center gap-1.5 border border-border bg-muted px-3 py-2.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.06em] text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 max-md:px-2.5";

const practice = [
  {
    code: "HUM-01",
    title: "Clinical medicine",
    description:
      "Studying human biology, diagnostic reasoning, and the careful process of turning complex signals into clear decisions.",
    note: "The human stack",
    icon: Stethoscope,
  },
  {
    code: "DEV-02",
    title: "Software development",
    description:
      "Building clear digital systems with Python, JavaScript, React, Firebase, Google Cloud, and an expanding Next.js toolkit.",
    note: "The technical stack",
    icon: Code2,
  },
];

function SectionHeading({
  number,
  eyebrowText,
  title,
  description,
}: {
  number: string;
  eyebrowText: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <header className={sectionHeading}>
      <div className="flex items-center gap-3 md:col-span-2">
        <span className="inline-grid h-8 min-w-8 place-items-center border border-primary font-mono text-[0.625rem] font-bold text-primary">
          {number}
        </span>
        <p className={eyebrow}>{eyebrowText}</p>
      </div>
      <h2 className={sectionTitle}>{title}</h2>
      <p className="max-w-xl leading-[1.65] text-muted-foreground">
        {description}
      </p>
    </header>
  );
}

export default function Home() {
  const [selectedMilestone, setSelectedMilestone] = useState(
    journey.length - 1,
  );
  const selected = journey[selectedMilestone];
  const selectedStep = String(selectedMilestone + 1).padStart(2, "0");

  return (
    <main id="top">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-2xl">
        <div
          className={`${shell} grid grid-cols-[minmax(13rem,1.25fr)_auto_4.5rem_minmax(19rem,1fr)] items-stretch border-x border-border bg-card max-lg:grid-cols-[minmax(12rem,1fr)_3.75rem_minmax(17rem,1fr)] max-md:w-full max-md:grid-cols-[minmax(0,1fr)_auto] max-md:border-x-0`}
        >
          <a
            href="#top"
            className="flex min-w-0 items-center px-4 py-3 transition-colors hover:bg-muted hover:text-primary max-md:py-2.5"
            aria-label="Mouad Essalim, home"
          >
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="font-mono text-[0.48rem] font-bold uppercase tracking-[0.13em] text-muted-foreground">
                Subject identity
              </span>
              <strong className="truncate text-[0.82rem] leading-tight">
                Mouad Essalim
              </strong>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.07em] text-muted-foreground max-md:hidden">
                Clinical medicine / developer
              </span>
            </span>
          </a>
          <div
            className="flex flex-col justify-center gap-1 border-l border-border px-4 py-3 max-lg:hidden"
            aria-label="Availability status"
          >
            <span className="font-mono text-[0.48rem] font-bold uppercase tracking-[0.13em] text-muted-foreground">
              Status
            </span>
            <strong className="flex items-center gap-2 whitespace-nowrap font-mono text-[0.56rem] uppercase tracking-[0.06em] text-(--accent)">
              <i
                className="h-[0.45rem] w-[0.45rem] rounded-full bg-(--accent) shadow-[0_0_0_0.2rem_color-mix(in_oklch,var(--accent),transparent_82%)]"
                aria-hidden="true"
              />{" "}
              Available to build
            </strong>
          </div>
          <span
            className="wristband-barcode min-h-12 border-l border-border opacity-60 max-md:hidden"
            aria-hidden="true"
          />
          <nav
            aria-label="Main navigation"
            className="grid grid-cols-3 border-l border-border"
          >
            {[
              ["01", "Profile", "#profile"],
              ["02", "Roadmap", "#roadmap"],
              ["03", "Contact", "#contact"],
            ].map(([index, label, href], itemIndex) => (
              <a
                key={href}
                href={href}
                className={`flex flex-col justify-center gap-0.5 px-3.5 py-3 font-mono text-[0.58rem] font-bold uppercase tracking-[0.07em] transition-colors hover:bg-muted hover:text-primary max-md:w-[3.1rem] max-md:items-center max-md:px-1 max-md:py-2.5 max-md:text-[0px] ${itemIndex ? "border-l border-border" : ""}`}
              >
                <span className="text-[0.46rem] text-muted-foreground max-md:text-[0.52rem]">
                  {index}
                </span>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className={`${shell} py-8 md:py-12`}>
        <article className="overflow-hidden border border-border bg-card shadow-[0.7rem_0.7rem_0_color-mix(in_oklch,var(--primary),transparent_86%)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted px-4 py-3 font-mono text-[0.625rem] font-semibold tracking-[0.12em]">
            <span>CASE FILE</span>
            <span>ME-2026-01</span>
            <span className="text-(--accent)">ACTIVE</span>
          </div>
          <div className="grid lg:grid-cols-[1.5fr_0.5fr]">
            <div className="flex flex-col gap-8 p-6 md:p-10 lg:border-r lg:border-border lg:p-14">
              <div className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-widest text-primary">
                <HeartPulse aria-hidden="true" />
                Clinical medicine × software
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-mono text-xs text-muted-foreground">
                  SUBJECT: MOUAD ESSALIM
                </p>
                <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
                  Diagnosing people.
                  <br />
                  <span className="underline decoration-(--accent) decoration-[0.1em] underline-offset-[0.12em]">
                    Debugging systems.
                  </span>
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  A clinical medicine student and developer studying how complex
                  systems behave—whether they are biological or digital.
                </p>
              </div>
              <a
                href="#profile"
                className="inline-flex w-fit items-center gap-2 border-b-2 border-primary pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
              >
                Open case notes
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
            <aside
              className="flex flex-col border-t border-border md:border-t-0"
              aria-label="Profile summary"
            >
              {[
                ["Current study", "Clinical medicine"],
                ["Current build", "Next.js + Tailwind"],
                ["Method", "Observe · reason · iterate"],
              ].map(([label, value]) => (
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
                  Signal
                </span>
                <strong className="flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_0_0.25rem_color-mix(in_oklch,var(--accent),transparent_80%)]" />
                  Learning actively
                </strong>
              </div>
            </aside>
          </div>
        </article>
      </section>

      <section
        id="profile"
        className={`${shell} flex flex-col gap-8 py-12 md:py-20`}
      >
        <SectionHeading
          number="01"
          eyebrowText="Dual practice"
          title={
            <>
              Two disciplines.
              <br />
              One way of thinking.
            </>
          }
          description="Careful observation, structured reasoning, and a bias toward useful outcomes connect both sides of my work."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {practice.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.code}
                className="relative flex min-h-92 flex-col justify-between gap-12 overflow-hidden border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-grid h-8 min-w-8 place-items-center border border-primary font-mono text-[0.625rem] font-bold text-primary">
                    {item.code}
                  </span>
                  <Icon className="text-primary" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className={eyebrow}>{item.note}</p>
                  <h3 className="text-3xl font-bold tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="max-w-lg leading-[1.65] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span
                  className="absolute -right-8 bottom-8 h-px w-36 rotate-[-38deg] bg-(--accent)"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </section>

      <section id="roadmap" className="border-y border-border bg-muted/80">
        <div className={`${shell} flex flex-col gap-9 py-12 md:py-20`}>
          <SectionHeading
            number="02"
            eyebrowText="Development history"
            title={
              <>
                A connected record
                <br />
                of what I learned.
              </>
            }
            description="Every stop informed the next. Some became tools; others helped me choose where not to go."
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
                <p id="ecg-title" className={eyebrow}>
                  Learning signal / 13 recorded beats
                </p>
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
                          className="group flex h-full w-full cursor-pointer flex-col items-center justify-between gap-2 bg-transparent px-1.5 pb-4 pt-[1.15rem] text-foreground"
                          aria-pressed={isSelected}
                          aria-label={`${step}, ${milestone.name}, ${statusLabel[milestone.status]}`}
                          onClick={() => setSelectedMilestone(index)}
                        >
                          <span className="font-mono text-[0.55rem] font-bold tracking-[0.08em] text-muted-foreground">
                            {step}
                          </span>
                          <span
                            className={`mt-17 h-3.5 w-3.5 rounded-full border-2 bg-card shadow-[0_0_0_0.3rem_color-mix(in_oklch,var(--card),transparent_15%)] transition-transform group-hover:scale-135 group-aria-pressed:scale-135 max-md:mt-14 ${explored ? "border-dashed border-muted-foreground" : current ? "border-(--accent) group-aria-pressed:bg-(--accent)" : "border-primary group-aria-pressed:bg-primary"}`}
                            aria-hidden="true"
                          />
                          <span
                            className={`max-w-18 text-balance text-center text-[0.67rem] font-bold leading-[1.15] ${current ? "text-(--accent)" : ""}`}
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
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-primary font-mono text-[0.7rem] font-bold text-primary">
                  {selectedStep}
                </span>
                <div className="flex flex-col gap-1.5">
                  <p
                    className={`font-mono text-[0.58rem] font-bold uppercase tracking-widest ${selected.status === "current" ? "text-(--accent)" : selected.status === "explored" ? "text-muted-foreground" : "text-primary"}`}
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
                <button
                  type="button"
                  className={controlButton}
                  onClick={() =>
                    setSelectedMilestone((i) => Math.max(0, i - 1))
                  }
                  disabled={selectedMilestone === 0}
                  aria-label="Previous milestone"
                >
                  <ChevronLeft aria-hidden="true" />
                  Previous
                </button>
                <span className="font-mono text-[0.6rem] text-muted-foreground">
                  {selectedMilestone + 1} / {journey.length}
                </span>
                <button
                  type="button"
                  className={controlButton}
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
                </button>
              </div>
            </div>
            <figcaption
              id="ecg-caption"
              className="border-t border-border bg-muted px-5 py-3 font-mono text-[0.58rem] uppercase leading-normal tracking-[0.07em] text-muted-foreground max-md:normal-case max-md:tracking-[0.03em]"
            >
              The smaller, muted beats mark Go, C++, and Rust—useful
              explorations that changed the direction of the signal.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`${shell} grid gap-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20`}
      >
        <article className="flex min-h-72 flex-col justify-between gap-12 border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <Activity aria-hidden="true" />
            <span className={eyebrow}>Observation / current context</span>
          </div>
          <blockquote className="max-w-3xl text-balance text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
            “The most interesting problems live where technical precision meets
            human reality.”
          </blockquote>
        </article>
        <article className="flex flex-col gap-8 border border-border bg-card p-6">
          <FileText className="text-(--accent)" aria-hidden="true" />
          <div>
            <p className={eyebrow}>Field notes</p>
            <h2 className="mt-1.5 text-[1.8rem] font-bold">
              Outside the terminal
            </h2>
          </div>
          <ul className="flex flex-col gap-3 text-[0.9rem] text-muted-foreground">
            {[
              "Smart engineering and hybrid technology",
              "Data, music, and efficient workflows",
              "Sleek hardware with a reason to exist",
            ].map((note) => (
              <li key={note} className="border-b border-border pb-3">
                {note}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <footer id="contact" className="bg-foreground text-background">
        <div className={`${shell} flex flex-col gap-10 py-12 md:py-16`}>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary">
                Referral / collaboration
              </p>
              <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
                Have a useful problem
                <br />
                worth examining?
              </h2>
            </div>
            <a
              className="flex items-center gap-2.5 border-b border-current pb-2 font-mono text-[0.7rem] font-bold uppercase tracking-widest"
              href="mailto:essalim99@gmail.com"
            >
              Email me at essalim99@gmail.com{" "}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="flex flex-col gap-3 border-t border-current/20 pt-5 font-mono text-[0.6875rem] uppercase tracking-wider md:flex-row md:justify-between">
            <span>Mouad Essalim — Medicine & development</span>
            <span>Case file updated 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
