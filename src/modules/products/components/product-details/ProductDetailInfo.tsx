// modules/products/components/product-detail/ProductDetailInfo.tsx
"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import ProductVariantSelector from "./ProductVariantSelector";
import type { ProductDetail } from "../../repository/product-detail.repository";
import type { CartActions } from "@/modules/cart/hooks/use-cart-stub";

type Variant = ProductDetail["product_variants"][number];

interface ProductDetailInfoProps {
  product: ProductDetail;
  selectedVariant: Variant | null;
  onVariantChange: (id: string) => void;
  cart: CartActions;
}

export default function ProductDetailInfo({ product, selectedVariant, onVariantChange, cart }: ProductDetailInfoProps) {
  const isOos = !selectedVariant?.available;
  const inCart = selectedVariant ? cart.isInCart(selectedVariant.id) : false;
  const quantity = selectedVariant ? cart.getQuantity(selectedVariant.id) : 0;

  const handleAddToCart = () => {
    if (!selectedVariant || isOos) return;
    cart.addToCart(selectedVariant.id);
  };

  const handleIncrement = () => {
    if (!selectedVariant) return;
    cart.updateQuantity(selectedVariant.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (!selectedVariant) return;
    cart.updateQuantity(selectedVariant.id, quantity - 1);
  };

  const stockStatus = selectedVariant
    ? selectedVariant.stock_quantity === 0
      ? "out"
      : selectedVariant.stock_quantity <= 10
        ? "low"
        : "ok"
    : "out";

  return (
    <div className="flex flex-col gap-5">
      {/* ── 1. Name ── */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold leading-tight">{product.name}</h1>
        {product.categories && <p className="text-sm text-muted-foreground">{product.categories.name}</p>}
      </div>

      {/* ── 2. Price — elevated weight ── */}
      {selectedVariant && (
        <p className="text-3xl font-bold tracking-tight">KSH {selectedVariant.price_ksh.toLocaleString()}</p>
      )}

      <Separator />

      {/* ── 3. Variant selector ── */}
      <ProductVariantSelector
        variants={product.product_variants}
        selectedVariantId={selectedVariant?.id ?? null}
        onChange={onVariantChange}
      />

      {/* ── 4. Stock indicator ── */}
      {selectedVariant && (
        <div>
          {stockStatus === "out" && <Badge className="bg-destructive/10 text-destructive border-0">Out of stock</Badge>}
          {stockStatus === "low" && (
            <Badge className="bg-amber-500/10 text-amber-600 border-0">
              Only {selectedVariant.stock_quantity} left
            </Badge>
          )}
          {stockStatus === "ok" && <Badge className="bg-success/10 text-success border-0">In stock</Badge>}
        </div>
      )}

      {/* ── 5. CTA — desktop only, sticky bar handles mobile ── */}
      <div className="hidden md:block">
        {isOos ? (
          <Button className="w-full" size="lg" disabled>
            Out of stock
          </Button>
        ) : inCart ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon" className="h-11 w-11 rounded-r-none" onClick={handleDecrement}>
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-12 text-center text-sm font-semibold">{quantity}</span>
              <Button variant="ghost" size="icon" className="h-11 w-11 rounded-l-none" onClick={handleIncrement}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">In your cart</p>
          </div>
        ) : (
          <Button className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="h-5 w-5" />
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
