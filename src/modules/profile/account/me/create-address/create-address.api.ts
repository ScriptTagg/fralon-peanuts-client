import { ApiCustomError } from "@/shared/errors/api-error";
import { supabase } from "@/shared/lib/supabase/client";
import type { AddressDetailsInput } from "../../schemas/address-details.schema";
import type { Addresses } from "../update-address/update-address.types";

export const createAddress = async (userId: string, data: AddressDetailsInput): Promise<Addresses> => {
  const { data: addresses, error } = await supabase
    .from("addresses")
    .insert({
      ...data,
      user_id: userId,
      is_default: true,
    })
    .select("*")
    .single<Addresses>();

  if (error) {
    console.log(error);
    throw new ApiCustomError("Failed to update address", 500);
  }

  return addresses;
};
