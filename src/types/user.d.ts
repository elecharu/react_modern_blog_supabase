import type { JWT, JwtPayload } from "@supabase/supabase-js";

type Claims = (JwtPayload & {
  sub: string;
  reole?: string;
  user_metadata?: {
    "avatar_url": string;
    "email": string;
    "email_verified": boolean;
    "full_name": string;
    "iss": string;
    "name": string;
    "phone_verified": boolean;
    "preferred_username": string;
    "provider_id": string;
    "sub": string;
    "user_name": string
  }
}) | null;