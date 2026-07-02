"use client";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "./update-profile.api";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";
import type { PersonalDetailsInput } from "../../schemas/personal-details.schema";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";

export const useUpdateProfile = () => {
  const { user } = useAuth();
  if (!user) throw new Error("Please login to perform this action");

  return useMutation({
    mutationFn: (data: Partial<PersonalDetailsInput>) => updateProfile(user.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
      toast.success("Profile updated successfully");
    },
    onError: (_error) => {
      toast.error("Failed to update profile");
    },
  });
};
