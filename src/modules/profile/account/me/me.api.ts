import { supabase } from "@/shared/lib/supabase/client";
import { ApiCustomError } from "@/shared/errors/api-error";
import type { Profile } from "./update-profile/update-profile.types";

export const getCurrentUser = async (userId: string): Promise<Profile> => {
  const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", userId).single<Profile>();
  if (error) throw new ApiCustomError("Failed to fetch user data", 500);
  return profile;
};
