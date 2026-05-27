import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import MobileCartItem from "../components/MobileCartItem";
import { cartItems, deliveryFee, subTotal } from "./CartSection";
import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, Trash2 } from "lucide-react";
import NavButton from "@/shared/components/ui/NavButton";
import OrderSummary from "../components/OrderSummary";

export default function MobileCartSection() {
  return (
    <SectionWrapper className="sm:hidden">
      <div className="flex relative flex-col gap-4 divide-y divide-foreground-border">
        {cartItems.map((cartItem) => (
          <MobileCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="flex items-center justify-between border-none">
          <NavButton variant="ghost" path="/products" className="py-1 px-2 rounded-sm">
            <ChevronLeft />
            Continue shopping
          </NavButton>
          <Button variant="ghost" className="py-1 px-2 rounded-sm text-destructive">
            <Trash2 />
            clear cart
          </Button>
        </div>
        <OrderSummary deliveryFee={deliveryFee} subTotal={subTotal} />
        <NavButton path="/checkout" className="w-full sticky bottom-3">
          Proceed to checkout
        </NavButton>
      </div>
    </SectionWrapper>
  );
}
