import { H4 } from "@/shared/components/ui/Typography";
import SummaryItem from "./SummaryItem";
import { Button } from "@/shared/components/ui/button";

export default function CheckoutOrderSummary({ subTotal, deliveryFee }: { subTotal: number; deliveryFee: number }) {
  return (
    <div className="flex flex-col gap-2 px-2 flex-1 w-full sm:max-w-110 sm:self-end">
      <H4 className="border-b border-foreground-border py-2">Summary</H4>
      <SummaryItem label="Sub-total" amount={subTotal} />
      <SummaryItem label="Delivery fee" amount={deliveryFee} />
      <div className="border-t border-foreground-border py-2">
        <SummaryItem label="Total" total amount={subTotal + deliveryFee} />
      </div>
      <Button type="submit" className="w-full hidden sm:block">
        Confirm Order
      </Button>
    </div>
  );
}
