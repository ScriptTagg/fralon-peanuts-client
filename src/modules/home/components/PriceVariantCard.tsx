import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function PriceVariantCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={twMerge("radius-card max-w-140 w-full flex flex-col p-8 gap-1 bg-secondary", className)}>
      {children}
    </div>
  );
}
