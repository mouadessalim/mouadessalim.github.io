import { practice } from "@/data/portfolio";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { CodeBadge, Eyebrow } from "./ui/badge";

export function PracticeSection() {
  return (
    <Container
      as="section"
      id="profile"
      className="flex flex-col gap-8 py-12 md:py-20"
    >
      <SectionHeading
        number="01"
        eyebrowText="What kept pulling me forward"
        title={
          <>
            I was never collecting
            <br />
            languages for the list.
          </>
        }
        description="Each tool was an attempt to answer the same question: how do I turn an idea in my head into something real, understandable, and useful to someone else?"
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
                <CodeBadge>{item.code}</CodeBadge>
                <Icon className="text-primary" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-3">
                <Eyebrow>{item.note}</Eyebrow>
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
    </Container>
  );
}
