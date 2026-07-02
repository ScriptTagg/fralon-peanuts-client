import { ApiCustomError } from "@/shared/errors/api-error";
import { supabase } from "@/shared/lib/supabase/client";
import type { AddressDetailsInput } from "../../schemas/address-details.schema";
import type { Addresses } from "./update-address.types";

export const updateAddress = async (
  userId: string,
  addressId: string,
  data: Partial<AddressDetailsInput>,
): Promise<Addresses> => {
  const { data: addresses, error } = await supabase
    .from("addresses")
    .update(data)
    .eq("id", addressId)
    .eq("user_id", userId)
    .select("*")
    .single<Addresses>();

  if (error) {
    console.log(error);
    throw new ApiCustomError("Failed to update address", 500);
  }

  return addresses;
};
