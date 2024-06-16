import "dotenv/config";
import { defineConfig } from "drizzle-kit";

console.log(process.env.DATABASE_URL);

export default defineConfig({
  schema: "./database/schemas/schema.ts",
  out: "./database/supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
