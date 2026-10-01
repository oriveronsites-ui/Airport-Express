import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow" data-motion="rise">
        {eyebrow}
      </p>
      <h1 data-motion="mask">{title}</h1>
      <div className="page-intro__copy" data-motion="rise">
        {children}
      </div>
    </header>
  );
}
