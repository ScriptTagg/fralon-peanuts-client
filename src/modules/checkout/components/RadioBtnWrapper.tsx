import { Label } from "@/shared/components/ui/label";
import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

export default function RadioBtnWrapper({
  children,
  active,
  htmlFor,
  className,
}: {
  children: ReactNode;
  active?: boolean;
  htmlFor: string;
  className?: string;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className={cn(
        "flex items-center gap-4 radius-card border border-foreground-border p-4",
        className,
        active && "border-2 border-primary [&_span]:text-primary [&_span]:font-semibold",
      )}
    >
      {children}
    </Label>
  );
}
