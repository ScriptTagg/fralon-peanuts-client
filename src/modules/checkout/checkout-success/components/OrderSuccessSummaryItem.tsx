import { cartItems } from "@/modules/cart/sections/CartSection";
import { P } from "@/shared/components/ui/Typography";
import Image from "next/image";
import productImage from "../../../../../public/images/product_img.png";

type ItemProps = (typeof cartItems)[0];

export default function OrderSuccessSummaryItem({ cartItem }: { cartItem: ItemProps }) {
  return (
    <div className="flex justify-between gap-4 py-2">
      <div className="flex items-center gap-1">
        <div className="w-10 h-12 rounded-sm relative">
          <Image src={productImage} alt="peanut butter" className="" />
        </div>
        <div className="flex flex-col justify-center">
          <P className="font-semibold">
            {cartItem.name} ({cartItem.size})
          </P>
          <small className="text-caption-base text-foreground-caption">
            {cartItem.variant} | Qty: {cartItem.quantity}
          </small>
        </div>
      </div>
      <P className="text-lg font-bold">Ksh {cartItem.subTotal}</P>
    </div>
  );
}
