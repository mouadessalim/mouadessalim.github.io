import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <Container className="flex flex-col gap-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-col gap-4">
            <Eyebrow>The next useful chapter</Eyebrow>
            <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              If my way of thinking
              <br />
              fits what you are building, write to me.
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
      </Container>
    </footer>
  );
}
