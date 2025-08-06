import { createClient } from "next-sanity";
import { dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-06-24",
  useCdn: true,
});
