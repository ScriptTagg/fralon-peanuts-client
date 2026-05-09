import type { ReactNode } from "react";

export default function CategoryCard({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-120 w-full h-36 sm:h-40 flex flex-col items-end justify-end radius-card bg-secondary p-2">
      {children}
    </div>
  );
}
