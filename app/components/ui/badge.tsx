import React from "react";

interface CodeBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
}

export function CodeBadge({
  size = "md",
  className = "",
  children,
  ...props
}: CodeBadgeProps) {
  const sizeClasses = {
    sm: "h-6 min-w-6 text-[0.55rem]",
    md: "h-8 min-w-8 text-[0.625rem]",
    lg: "h-12 w-12 text-[0.7rem]",
  }[size];

  return (
    <span
      className={`inline-grid shrink-0 place-items-center border border-primary font-mono font-bold text-primary ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
}

export function Eyebrow({
  as: Component = "p",
  className = "",
  children,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={`font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
