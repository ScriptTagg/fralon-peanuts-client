import { Button } from "@/shared/components/ui/button";
import { UserRound } from "lucide-react";

export default function ProfileButton() {
  return (
    <Button variant="ghost" className="rounded-sm p-2">
      <UserRound className="size-6" />
    </Button>
  );
}
