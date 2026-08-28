import { Container } from "@/components/ui/container";

const navItems = [
  { index: "01", label: "Profile", href: "#profile" },
  { index: "02", label: "Roadmap", href: "#roadmap" },
  { index: "03", label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-2xl">
      <Container className="grid grid-cols-[minmax(13rem,1.25fr)_auto_4.5rem_minmax(19rem,1fr)] items-stretch border-x border-border bg-card max-lg:grid-cols-[minmax(12rem,1fr)_3.75rem_minmax(17rem,1fr)] max-md:w-full max-md:grid-cols-[minmax(0,1fr)_auto] max-md:border-x-0">
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
          {navItems.map((item, itemIndex) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col justify-center gap-0.5 px-3.5 py-3 font-mono text-[0.58rem] font-bold uppercase tracking-[0.07em] transition-colors hover:bg-muted hover:text-primary max-md:w-[3.1rem] max-md:items-center max-md:px-1 max-md:py-2.5 max-md:text-[0px] ${
                itemIndex ? "border-l border-border" : ""
              }`}
            >
              <span className="text-[0.46rem] text-muted-foreground max-md:text-[0.52rem]">
                {item.index}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
