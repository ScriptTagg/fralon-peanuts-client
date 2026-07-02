"use client";
import { useMutation } from "@tanstack/react-query";
import type { AddressDetailsInput } from "../../schemas/address-details.schema";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";
import { createAddress } from "./create-address.api";

export const useCreateAddress = () => {
  const { user } = useAuth();
  if (!user) throw new Error("Please login to perform this action");

  return useMutation({
    mutationFn: (data: AddressDetailsInput) => createAddress(user.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account", "addresses"] });
      toast.success("Address updated successfully");
    },
    onError: (_error) => {
      toast.error("Failed to update address");
    },
  });
};
