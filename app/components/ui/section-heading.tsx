import React from "react";
import { CodeBadge, Eyebrow } from "./badge";

export interface SectionHeadingProps {
  number: string;
  eyebrowText: string;
  title: React.ReactNode;
  description: string;
}

export function SectionHeading({
  number,
  eyebrowText,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] md:items-end">
      <div className="flex items-center gap-3 md:col-span-2">
        <CodeBadge>{number}</CodeBadge>
        <Eyebrow>{eyebrowText}</Eyebrow>
      </div>
      <h2 className="max-w-3xl text-balance text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]">
        {title}
      </h2>
      <p className="max-w-xl leading-[1.65] text-muted-foreground">
        {description}
      </p>
    </header>
  );
}
