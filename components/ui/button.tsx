import React from "react";

interface ControlButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ControlButton({
  className = "",
  children,
  ...props
}: ControlButtonProps) {
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center gap-1.5 border border-border bg-muted px-3 py-2.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.06em] text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35 max-md:px-2.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
