// modules/cart/hooks/use-cart-stub.ts
"use client";

import { useState } from "react";

export interface CartItem {
  variantId: string;
  quantity: number;
}

// STUB — replace with real cart (Zustand / context / server)
// Keep this interface shape when building the real hook
export interface CartActions {
  items: CartItem[];
  addToCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  getQuantity: (variantId: string) => number;
  isInCart: (variantId: string) => boolean;
}

export function useCartStub(): CartActions {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (variantId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === variantId);
      if (existing) {
        return prev.map((i) => (i.variantId === variantId ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { variantId, quantity: 1 }];
    });
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.variantId !== variantId));
    } else {
      setItems((prev) => prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i)));
    }
  };

  const removeFromCart = (variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  };

  const getQuantity = (variantId: string) => items.find((i) => i.variantId === variantId)?.quantity ?? 0;

  const isInCart = (variantId: string) => getQuantity(variantId) > 0;

  return { items, addToCart, updateQuantity, removeFromCart, getQuantity, isInCart };
}
