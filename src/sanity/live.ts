import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";
import { token } from "./env";
// import { token } from "./env";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "2025-06-24" }),
  serverToken: token,
  browserToken: token,
});
