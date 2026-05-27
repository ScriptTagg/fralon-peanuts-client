import { P } from "@/shared/components/ui/Typography";

export default function Ordervalue({ title, children }: { title: string; children: string }) {
  return (
    <div className="space-y-1">
      <P className="text-primary font-semibold">{title}</P>
      <small className="">{children}</small>
    </div>
  );
}
