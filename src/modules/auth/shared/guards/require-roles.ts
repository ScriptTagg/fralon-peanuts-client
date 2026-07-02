import type { UserRoles } from "../types";

export function requireRoles(userRoles: string[] | undefined, allowedRoles: string[]) {
  if (!userRoles) return false;
  return userRoles.some((role) => allowedRoles.includes(role));
}
