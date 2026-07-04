// modules/products/components/product-detail/ProductDetailGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { supabase } from "@/shared/lib/supabase/client";
import { cn } from "@/shared/lib/utils";
import type { ProductDetail } from "../../repository/product-detail.repository";

type ProductImage = ProductDetail["product_images"][number];

interface ProductDetailGalleryProps {
  images: ProductImage[];
  productName: string;
}

const BUCKET = "products";

function getImageUrl(storagePath: string): string {
  return supabase.storage.from(BUCKET).getPublicUrl(storagePath).data.publicUrl;
}

export default function ProductDetailGallery({ images, productName }: ProductDetailGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // reset to first image whenever the images array changes (variant switch)
  useEffect(() => {
    setSelectedIndex(0);
  }, [images]);

  const selectedImage = images[selectedIndex] ?? null;
  const imageUrl = selectedImage ? getImageUrl(selectedImage.storage_path) : null;
  const hasMultiple = images.length > 1;

  return (
    <div className="flex flex-col gap-3">
      {/* ── Main image ── */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={productName}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-opacity duration-200"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-12 w-12 text-foreground-muted" />
          </div>
        )}
      </div>

      {/* ── Thumbnail strip — only if more than one image ── */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, index) => {
            const url = getImageUrl(img.storage_path);
            const isSelected = index === selectedIndex;
            return (
              <button
                key={img.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                  isSelected ? "border-primary" : "border-transparent hover:border-muted-foreground/40",
                )}
              >
                <Image src={url} alt={`${productName} view ${index + 1}`} fill sizes="64px" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
