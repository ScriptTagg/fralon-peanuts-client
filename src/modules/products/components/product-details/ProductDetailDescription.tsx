// modules/products/components/product-detail/ProductDetailDescription.tsx
import { Separator } from "@/shared/components/ui/separator";
import type { Json } from "@/shared/lib/supabase/database.types";

interface ProductDetailDescriptionProps {
  description: string | null;
  metadata: Json;
}

function isStringRecord(value: Json): value is Record<string, string> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((v) => typeof v === "string")
  );
}

export default function ProductDetailDescription({ description, metadata }: ProductDetailDescriptionProps) {
  const hasDescription = !!description;
  const attributes = isStringRecord(metadata) ? Object.entries(metadata) : [];
  const hasAttributes = attributes.length > 0;

  if (!hasDescription && !hasAttributes) return null;

  return (
    <div className="mt-10 space-y-8">
      <Separator />

      {hasDescription && (
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Description</h2>
          <p className="text-sm leading-relaxed text-foreground/90">{description}</p>
        </div>
      )}

      {hasAttributes && (
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Details</h2>
          <dl className="divide-y rounded-xl border overflow-hidden">
            {attributes.map(([key, value]) => (
              <div key={key} className="flex items-start gap-4 px-4 py-3">
                <dt className="w-32 shrink-0 text-xs font-medium text-muted-foreground capitalize">{key}</dt>
                <dd className="text-sm text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
