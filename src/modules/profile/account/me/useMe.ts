"use client";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./me.api";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";

export const useMe = () => {
  const { isAuthenticated, user } = useAuth();
  if (!user) throw new Error("Please login to perform this action");

  return useQuery({
    queryKey: ["account"],
    queryFn: () => getCurrentUser(user.id),
    retry: false,
    enabled: isAuthenticated,
  });
};
