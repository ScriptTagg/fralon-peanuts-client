import type { User as SupabaseUser } from "@supabase/supabase-js";

export type UserRoles = "admin" | "staff" | "customer";

/* export type User = {
  id: string;
  username: string;
  email: string;
  roles: UserRoles[];
}; */

export type User = SupabaseUser;

/* export type Profile = {
  id: string;
  full_name: string;
  email: string;
  avatar_url: string;
  phone: string;
  role: UserRoles;
  created_at: string;
  updated_at: string;
}; */

/* export type ForgotPasswordDto = {
  email: string;
};
 */
