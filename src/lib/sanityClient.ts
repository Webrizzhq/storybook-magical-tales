import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "ict525lo", // e.g., from sanity.config.ts
  dataset: "production",
  apiVersion: "2025-01-01", // use current date
  useCdn: true, // faster for public data
});
