import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/badge";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <Container className="flex flex-col gap-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-col gap-4">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              Have a project or question?
              <br />
              Write to me.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              className="flex items-center gap-2.5 border-b border-current pb-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-widest transition-opacity hover:opacity-75"
              href="mailto:essalim99@gmail.com"
            >
              essalim99@gmail.com <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="flex items-center gap-2.5 border-b border-current/50 pb-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-widest transition-opacity hover:opacity-75"
              href="https://github.com/mouadessalim"
              target="_blank"
              rel="noreferrer"
            >
              github.com/mouadessalim <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-current/20 pt-5 font-mono text-[0.6875rem] uppercase tracking-wider md:flex-row md:justify-between">
          <span>Mouad Essalim · Medical student &amp; web developer</span>
          <span>Updated 2026</span>
        </div>
      </Container>
    </footer>
  );
}
