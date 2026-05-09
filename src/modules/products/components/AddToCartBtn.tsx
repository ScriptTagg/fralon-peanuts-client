import { Button } from "@/shared/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCartBtn() {
  return (
    <Button className="gap-2" variant="ghost">
      <ShoppingCart />
      <span className="">Add to cart</span>
    </Button>
  );
}
