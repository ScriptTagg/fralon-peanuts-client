import { P } from "@/shared/components/ui/Typography";
import type { Review } from "../content/about-content";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col items-center gap-4 max-w-full sm:max-w-160 mx-auto">
      <P className="text-center">{review.message}</P>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-secondary rounded-full" />
        <P className="font-semibold text-center -mb-2">{review.reviewer}</P>
        <small className="text-caption-base text-center text-foreground-muted">{review.role}</small>
      </div>
    </article>
  );
}
