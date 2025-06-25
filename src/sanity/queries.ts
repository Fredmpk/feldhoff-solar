import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
    _id,
  heroImage{
    asset->{url}
  },
  }`);
