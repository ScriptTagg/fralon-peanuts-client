import Image from "next/image";
import productImage from "../../../../public/images/product_img.png";
import { cartItems } from "../sections/CartSection";
import { P } from "@/shared/components/ui/Typography";
import { Button } from "@/shared/components/ui/button";
import { X } from "lucide-react";

type MobileCartProps = {
  cartItem: (typeof cartItems)[0];
};

export default function MobileCartItem({ cartItem }: MobileCartProps) {
  return (
    <div className="flex justify-between py-2">
      <div className="flex items-center gap-4">
        <div className="w-20 h-25 rounded-sm relative">
          <Image src={productImage} alt="peanut butter" className="" />
        </div>
        <div className="flex flex-col justify-center">
          <P>{cartItem.name}</P>
          <small className="text-caption-base text-foreground-caption">
            {cartItem.variant} | {cartItem.size}
          </small>
          <P>{cartItem.quantity}</P>
        </div>
      </div>
      <div className="flex items-end flex-col justify-between">
        <Button variant="ghost" className="p-2 rounded-sm">
          <X className="text-destructive" />
        </Button>
        <P className="text-right font-semibold">{cartItem.subTotal}</P>
      </div>
    </div>
  );
}
