import { Button } from "@/shared/components/ui/button";
import { Heart } from "lucide-react";

export default function FavButton() {
  return (
    <Button variant="ghost" className="p-2">
      <Heart className="size-6" />
    </Button>
  );
}
