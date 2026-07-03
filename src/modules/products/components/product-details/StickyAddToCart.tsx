// modules/products/components/product-detail/StickyAddToCart.tsx
"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import type { CartActions } from "@/modules/cart/hooks/use-cart-stub";
import type { ProductDetail } from "../../repository/product-detail.repository";

type Variant = ProductDetail["product_variants"][number];

interface StickyAddToCartProps {
  variant: Variant;
  cart: CartActions;
}

export default function StickyAddToCart({ variant, cart }: StickyAddToCartProps) {
  const isOos = !variant.available;
  const inCart = cart.isInCart(variant.id);
  const quantity = cart.getQuantity(variant.id);

  const handleAddToCart = () => {
    if (isOos) return;
    cart.addToCart(variant.id);
  };

  const handleIncrement = () => cart.updateQuantity(variant.id, quantity + 1);

  const handleDecrement = () => cart.updateQuantity(variant.id, quantity - 1);

  return (
    <div
      className={[
        // mobile only — hidden on md and up
        "md:hidden",
        "fixed bottom-0 left-0 right-0 z-50",
        "border-t bg-background/95 backdrop-blur-sm",
        "px-4 py-3 shadow-lg",
        "flex items-center justify-between gap-4",
      ].join(" ")}
    >
      {/* ── Left — variant name + price ── */}
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground truncate">{variant.name}</p>
        <p className="text-base font-bold">KSH {variant.price_ksh.toLocaleString()}</p>
      </div>

      {/* ── Right — CTA ── */}
      <div className="shrink-0">
        {isOos ? (
          <Button size="sm" disabled>
            Out of stock
          </Button>
        ) : inCart ? (
          <div className="flex items-center rounded-md border">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-r-none" onClick={handleDecrement}>
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-l-none" onClick={handleIncrement}>
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
        ) : (
          <Button onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
