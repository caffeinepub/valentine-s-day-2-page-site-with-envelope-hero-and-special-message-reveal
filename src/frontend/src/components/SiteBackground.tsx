import type { ReactNode } from "react";

interface SiteBackgroundProps {
  children: ReactNode;
}

export default function SiteBackground({ children }: SiteBackgroundProps) {
  return <div className="site-background">{children}</div>;
}
