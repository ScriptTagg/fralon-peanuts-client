import type { Database } from "@/shared/lib/supabase/database.types";

export type Addresses = Database["public"]["Tables"]["addresses"]["Row"];
export type AddressesInsert = Database["public"]["Tables"]["addresses"]["Insert"];
export type AddressesUpdate = Database["public"]["Tables"]["addresses"]["Update"];
