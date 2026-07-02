"use client";
import { useMutation } from "@tanstack/react-query";
import type { AddressDetailsInput } from "../../schemas/address-details.schema";
import { updateAddress } from "./update-address.api";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";

export const useUpdateAddress = () => {
  const { user, profile } = useAuth();
  if (!user || !profile) throw new Error("Please login to perform this action");

  return useMutation({
    mutationFn: (data: Partial<AddressDetailsInput>) => updateAddress(user.id, profile.addresses[0].id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account", "addresses"] });
      toast.success("Address updated successfully");
    },
    onError: (_error) => {
      toast.error("Failed to update address");
    },
  });
};
