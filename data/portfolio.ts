import { Code2, Stethoscope, type LucideIcon } from "lucide-react";

export type JourneyStatus = "learned" | "explored" | "current";

export type JourneyMilestone = {
  name: string;
  description: string;
  status: JourneyStatus;
};

export const journey: JourneyMilestone[] = [
  {
    name: "Bash Snake",
    description:
      "At 13, I tried to make Snake inside a terminal. It was clumsy, limited, and enough to make coding feel like mine.",
    status: "learned",
  },
  {
    name: "Python",
    description:
      "Python felt logical immediately. I could turn an idea into working behavior without fighting the language first.",
    status: "learned",
  },
  {
    name: "Tkinter & PyQt",
    description:
      "I wanted windows, buttons, and real apps—not scripts. I kept testing GUI libraries until I understood that Python was not the production interface path I was looking for.",
    status: "learned",
  },
  {
    name: "Grey-hat detour",
    description:
      "As a teenager I wandered into Kali Linux, phishing experiments, obfuscation, RATs, and SQL injection on old sites. I left that chapter behind; it taught me how easily curiosity becomes irresponsible when it has no boundaries.",
    status: "explored",
  },
  {
    name: "Selenium",
    description:
      "Web scraping brought me back from breaking things to making useful systems: browsers became something I could observe, automate, and learn from.",
    status: "learned",
  },
  {
    name: "Go & C++",
    description:
      "I explored concurrency, memory, and what sits below the abstractions I was used to. Neither became home, but both sharpened how I think.",
    status: "explored",
  },
  {
    name: "Dart & Flutter",
    description:
      "Flutter finally gave me the direct path from logic to visible interface that I had been searching for since Python.",
    status: "learned",
  },
  {
    name: "JavaScript",
    description:
      "The web stopped looking like documents and started looking like the production environment I had wanted all along.",
    status: "learned",
  },
  {
    name: "GCP & Firebase",
    description:
      "I learned that an interface is only the surface; authentication, data, deployment, and reliability are part of the product too.",
    status: "learned",
  },
  {
    name: "React",
    description:
      "Components gave structure to the way I naturally build: isolate a problem, understand its state, then compose the pieces.",
    status: "learned",
  },
  {
    name: "Next.js & Tailwind",
    description:
      "This is where I am now: learning to build complete web products with clearer systems, better judgment, and fewer unnecessary detours.",
    status: "current",
  },
];

export const statusLabel: Record<JourneyStatus, string> = {
  learned: "Learned",
  explored: "Explored",
  current: "Learning now",
};

export type PracticeItem = {
  code: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
};

export type Project = {
  code: string;
  title: string;
  description: string;
  year: string;
  status: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    code: "PRJ-01",
    title: "CSGO Value Calculator",
    description:
      "A Windows desktop utility that calculates the value of a Steam Counter-Strike inventory from a SteamID or profile link, with currency-aware pricing and an Electron interface backed by Python automation.",
    year: "2021",
    status: "Archived",
    stack: ["Python", "Electron", "Selenium", "Steam"],
    href: "https://github.com/mouadessalim/CsgoValueCalculator",
  },
];

export const practice: PracticeItem[] = [
  {
    code: "WHY-01",
    title: "I have always wanted to see the result",
    description:
      "A terminal game was enough at 13, but scripts quickly stopped being enough. I kept chasing the moment when logic becomes something another person can see, touch, and actually use. That search took me through Python GUIs, Flutter, and eventually the web.",
    note: "The recurring motive",
    icon: Code2,
  },
  {
    code: "NOW-02",
    title: "Medicine changed how I build",
    description:
      "Clinical study trained me to slow down, notice weak signals, and resist an answer that only looks clever. I bring that discipline into software: understand the real problem first, then choose the smallest system that can solve it well.",
    note: "The present lens",
    icon: Stethoscope,
  },
];
