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
      "At 13, I tried writing Snake inside a Bash terminal. Moving characters across a grid of text was clumsy, slow, and got me hooked on programming.",
    status: "learned",
  },
  {
    name: "Python",
    description:
      "My first real language. I used it for file scripts, API wrappers, and small utilities whenever I wanted to automate repetitive tasks on Windows and Linux.",
    status: "learned",
  },
  {
    name: "Tkinter & PyQt",
    description:
      "I wanted windows and buttons instead of terminal prompts. Building desktop GUIs in Python worked, but styling and packaging executables for other people was frustrating.",
    status: "learned",
  },
  {
    name: "Security detour",
    description:
      "As a teenager, I spent time in Kali Linux testing SQL injection on old sites and studying how session tokens and local browser storage get abused. Seeing how fragile client state can be changed how I think about auth and security.",
    status: "explored",
  },
  {
    name: "Selenium",
    description:
      "Browser automation shifted my focus back to practical utilities: scraping dynamic pages, pricing Steam inventories, and letting Python drive headless browsers.",
    status: "learned",
  },
  {
    name: "Go & C++",
    description:
      "Stepped below high-level scripting to work with static types, memory management, and concurrency. I don't use either daily, but they made runtime cost much less abstract.",
    status: "explored",
  },
  {
    name: "Dart & Flutter",
    description:
      "The first UI toolkit where layout, state, and cross-platform builds actually felt cohesive after years of fighting Python desktop libraries.",
    status: "learned",
  },
  {
    name: "JavaScript & TS",
    description:
      "Moving to the browser solved distribution overnight: anyone could use what I built through a link instead of downloading an installer.",
    status: "learned",
  },
  {
    name: "GCP & Firebase",
    description:
      "Used Firebase Auth, Firestore, and cloud hosting to move past local-only tools and support real accounts, persistent data, and deployment.",
    status: "learned",
  },
  {
    name: "React",
    description:
      "Component-driven UI and predictable state management gave me what I liked about Flutter with the reach and ecosystem of the web.",
    status: "learned",
  },
  {
    name: "Next.js & Tailwind",
    description:
      "My current stack for building fast, accessible web applications in TypeScript, from static sites like this portfolio to full-stack apps.",
    status: "current",
  },
];

export const statusLabel: Record<JourneyStatus, string> = {
  learned: "Learned",
  explored: "Explored",
  current: "Current focus",
};

export type PracticeItem = {
  code: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
};

export type ProjectNotice = {
  label: string;
  text: string;
  linkLabel: string;
  href: string;
};

export type Project = {
  code: string;
  title: string;
  category: string;
  description: string;
  year: string;
  status: string;
  stack: string[];
  href: string;
  notice?: ProjectNotice;
};

export const projects: Project[] = [
  {
    code: "PRJ-01",
    title: "CSGO Value Calculator",
    category: "Desktop utility / Steam inventory",
    description:
      "Windows desktop app that totals the market value of a Counter-Strike Steam inventory from a SteamID or profile URL, pairing an Electron frontend with Python/Selenium price scraping and currency conversion.",
    year: "2021",
    status: "Archived",
    stack: ["Python", "Electron", "Selenium", "Steam"],
    href: "https://github.com/mouadessalim/CsgoValueCalculator",
  },
  {
    code: "PRJ-02",
    title: "CookedGrabber",
    category: "Security PoC / Windows storage",
    description:
      "Archived proof-of-concept examining how Chromium browsers store session cookies and DPAPI-encrypted credentials locally on Windows, and why local storage alone does not protect active sessions.",
    year: "2022",
    status: "Archived",
    stack: ["Python", "Chromium", "Discord API", "Windows"],
    href: "https://github.com/mouadessalim/CookedGrabber",
    notice: {
      label: "Blocked in Brazil",
      text: "Access to this repository is blocked in Brazil following a Brazilian government legal takedown notice forwarded by GitHub Trust & Safety.",
      linkLabel: "View notice",
      href: "https://github.com/github/gov-takedowns/blob/master/Brazil/2026/2026-11-06-Brazil.md",
    },
  },
  {
    code: "PRJ-03",
    title: "Discord QR Token Logger",
    category: "Security PoC / Authentication",
    description:
      "Archived proof-of-concept showing how Discord's remote-auth WebSocket handshake can be proxied behind a spoofed QR login prompt to intercept session tokens when users scan untrusted codes.",
    year: "2022",
    status: "Archived",
    stack: ["Python", "WebSockets", "QR Code", "Discord API"],
    href: "https://github.com/9P9/Discord-QR-Token-Logger",
  },
];

export const practice: PracticeItem[] = [
  {
    code: "BG-01",
    title: "From local scripts to the browser",
    description:
      "Most of my stack choices came from hitting practical walls. Terminal scripts pushed me toward Python desktop GUIs; painful desktop packaging pushed me to Flutter and then the web. Today I build with React, Next.js, and Firebase so I can ship a complete application behind a URL without installer headaches.",
    note: "Engineering",
    icon: Code2,
  },
  {
    code: "BG-02",
    title: "Building under real time constraints",
    description:
      "Medical school leaves very little room for over-engineered side projects and zero patience for cluttered software. Clinical study trained me to gather context before jumping to a fix, keep systems simple enough to maintain months later, and write interfaces that respect the user's attention.",
    note: "Clinical training",
    icon: Stethoscope,
  },
];
