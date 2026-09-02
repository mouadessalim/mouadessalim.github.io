import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Container } from "./ui/container";
import { CodeBadge, Eyebrow } from "./ui/badge";
import { SectionHeading } from "./ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border bg-muted/80">
      <Container className="flex flex-col gap-8 py-12 md:py-20">
        <SectionHeading
          number="03"
          eyebrowText="Selected work"
          title={
            <>
              Ideas that made it
              <br />
              into working software.
            </>
          }
          description="A record of projects that moved beyond experiments—built to solve a concrete problem, shipped, and learned from."
        />

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <article
              key={project.href}
              className="grid border border-border bg-card md:grid-cols-[10rem_minmax(0,1fr)_auto]"
            >
              <div className="flex flex-col justify-between gap-8 border-b border-border p-5 md:border-b-0 md:border-r">
                <CodeBadge>{project.code}</CodeBadge>
                <div className="flex flex-col gap-1 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="flex flex-col gap-5 p-5 md:p-7">
                <div className="flex items-center gap-3">
                  <Code2 className="text-primary" aria-hidden="true" />
                  <Eyebrow>{project.category}</Eyebrow>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-balance text-3xl font-bold tracking-[-0.035em] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="border border-border bg-muted px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground md:w-40 md:flex-col md:items-end md:justify-between md:border-l md:border-t-0"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                View source
                <ExternalLink aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
