import { H4 } from "@/shared/components/ui/Typography";
import SummaryItem from "./SummaryItem";
import NavButton from "@/shared/components/ui/NavButton";

export default function OrderSummary({ subTotal, deliveryFee }: { subTotal: number; deliveryFee: number }) {
  return (
    <div className="flex flex-col px-2 gap-2 sm:max-w-110 sm:ml-auto">
      <H4 className="border-b border-foreground-border py-2">Summary</H4>
      <SummaryItem label="Sub-total" amount={subTotal} />
      <SummaryItem label="Delivery fee" amount={deliveryFee} />
      <div className="border-t border-foreground-border py-2">
        <SummaryItem label="Total" total amount={subTotal + deliveryFee} />
      </div>
      <NavButton path="/checkout" className="w-full hidden sm:block">
        Proceed to checkout
      </NavButton>
    </div>
  );
}
