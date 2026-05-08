import { H5, P } from "@/shared/components/ui/Typography";
import type { Reason } from "../content/about-content";
import { cn } from "@/shared/lib/utils";

export default function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 p-6 md:p-8 border border-primary radius-card",
        reason.id === 2 && "bg-secondary",
      )}
    >
      <small
        className={cn("text-xl font-secondary text-secondary font-black", reason.id === 2 && "text-primary")}
      >{`0${reason.id}`}</small>
      <H5>{reason.title}</H5>
      <P>{reason.description}</P>
    </article>
  );
}
