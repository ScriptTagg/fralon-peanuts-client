import { P } from "@/shared/components/ui/Typography";

type SummaryItemProps = {
  label: string;
  amount: number;
  total?: boolean;
};

export default function SummaryItem({ label, amount, total }: SummaryItemProps) {
  return (
    <div className={`flex items-center py-1 justify-between ${total ? "text-lg font-bold" : "font-medium"}`}>
      <P>{label}</P>
      <P>Ksh {amount}</P>
    </div>
  );
}
