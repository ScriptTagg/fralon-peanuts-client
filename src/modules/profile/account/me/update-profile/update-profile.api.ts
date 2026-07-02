import { ApiCustomError } from "@/shared/errors/api-error";
import { supabase } from "@/shared/lib/supabase/client";
import type { ProfileWithAddresses } from "./update-profile.types";
import type { PersonalDetailsInput } from "../../schemas/personal-details.schema";

export const updateProfile = async (
  userId: string,
  data: Partial<PersonalDetailsInput>,
): Promise<ProfileWithAddresses> => {
  const { data: profile, error } = await supabase
    .from("profiles")
    .update({ ...data })
    .eq("id", userId)
    .select("*, addresses(*)")
    .single<ProfileWithAddresses>();
  if (error) throw new ApiCustomError("Failed to update profile", 500);

  return profile;
};
