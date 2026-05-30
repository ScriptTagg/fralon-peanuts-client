import { H4, P } from "@/shared/components/ui/Typography";
import FavButton from "./FavButton";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";
import productImage from "../../../../public/images/product_img.png";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="p-4 border border-primary radius-card gap-2 flex flex-col w-60">
      <div className="flex-1 relative">
        <Image src={productImage} alt="peanut butter" className="w-43.5 h-50 mx-auto" />
        <FavButton />
      </div>
      <div className="flex w-full flex-col gap-1 items-center">
        <Link href="/products/peanut-butter-800g">
          <H4 className="text-body-lg font-bold">Peanut Butter - 800gms</H4>
        </Link>
        <small className="text-caption-base text-foreground-muted">Smooth / Crunchy</small>
        <P className="text-body-lg font-bold">Ksh 550</P>
        <AddToCartBtn />
      </div>
    </div>
  );
}
