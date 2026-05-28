import { H4 } from "@/shared/components/ui/Typography";
import SummaryItem from "@/modules/cart/components/SummaryItem";
import OrderSuccessSummaryItem from "./OrderSuccessSummaryItem";
import { cartItems, deliveryFee, subTotal } from "@/modules/cart/sections/CartSection";

export default function OrderSuccessSummary() {
  return (
    <div className="flex flex-col w-full gap-2 border border-foreground-border p-4 radius-card max-w-229 mx-auto">
      <H4 className=" py-2">Summary</H4>
      <div className="flex flex-col gap-2 sm:p-2 border-y border-foreground-border">
        {cartItems.map((cartItem) => (
          <OrderSuccessSummaryItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="flex flex-col gap-1 px-2 md:px-4">
        <SummaryItem label="Sub-total" amount={subTotal} />
        <SummaryItem label="Delivery fee" amount={deliveryFee} />
        <SummaryItem label="Discount" amount={0.0} />
      </div>
      <div className="border-t border-foreground-border py-2 px-2 md:px-4">
        <SummaryItem label="Total" total amount={subTotal + deliveryFee} />
      </div>
    </div>
  );
}
