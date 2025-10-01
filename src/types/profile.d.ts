import type { Database } from './database';


interface Profile {
  id: string;
  created_at: Date;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}
