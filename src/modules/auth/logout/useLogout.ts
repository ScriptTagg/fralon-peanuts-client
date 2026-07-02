import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { logout } from "./logout.api";
import { queryClient } from "@/shared/lib/query-client";
import { authBreadcrumbs } from "@/shared/lib/sentry/sentry-breadcrumbs";

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onMutate: () => {
      authBreadcrumbs("Logout started");
    },
    onSuccess: (_data) => {
      authBreadcrumbs("Logout successful");
      queryClient.clear();
      toast.success("Logout successful");
    },
    onError: (error) => {
      authBreadcrumbs("Logout failed", { error: String(error) });
      queryClient.clear();
    },
  });
};
