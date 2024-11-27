import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:juw8TQGa4Nym@ep-nameless-waterfall-a57c66b2.us-east-2.aws.neon.tech/Ai%20from%20builder%20main?sslmode=require',
  }
});