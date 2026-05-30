import { Button, type buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { ShoppingCart } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
};

export default function AddToCartBtn({ variant = "ghost", className }: ButtonProps) {
  return (
    <Button className={twMerge("gap-2 py-3", className)} variant={variant}>
      <ShoppingCart />
      <span className="">Add to cart</span>
    </Button>
  );
}
