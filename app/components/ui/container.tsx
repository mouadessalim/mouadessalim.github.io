import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = "div",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-[calc(100%-2rem)] max-w-296 md:w-[calc(100%-4rem)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
