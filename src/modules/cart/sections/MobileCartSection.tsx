import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import MobileCartItem from "../components/MobileCartItem";
import { cartItems } from "./CartSection";
import { Button } from "@/shared/components/ui/button";
import { ChevronLeft, Trash2 } from "lucide-react";
import NavButton from "@/shared/components/ui/NavButton";

export default function MobileCartSection() {
  return (
    <SectionWrapper className="md:hidden">
      <div className="flex flex-col gap-4 divide-y divide-foreground-border">
        {cartItems.map((cartItem) => (
          <MobileCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="flex items-center justify-between">
          <NavButton variant="ghost" path="/products" className="py-2 px-3 rounded-sm">
            <ChevronLeft />
            Continue shopping
          </NavButton>
          <Button variant="ghost" className="py-2 px-3 rounded-sm text-destructive">
            <Trash2 />
            clear cart
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
