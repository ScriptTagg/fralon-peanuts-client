"use client";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";
import NavButton from "@/shared/components/ui/NavButton";

export default function HeroCta() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex flex-row gap-4 sm:gap-6">
      <NavButton path="/products">View Products</NavButton>
      {!isAuthenticated && (
        <NavButton path="/auth/login" variant="outline">
          Log in
        </NavButton>
      )}
    </div>
  );
}
