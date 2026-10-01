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
    <header className="page-intro motion-sequence" data-motion="sequence">
      <p className="eyebrow" data-motion-part="eyebrow">
        {eyebrow}
      </p>
      <div className="motion-heading-mask" data-motion-part="heading">
        <h1>{title}</h1>
      </div>
      <div className="page-intro__copy" data-motion-part="copy">
        {children}
      </div>
    </header>
  );
}
