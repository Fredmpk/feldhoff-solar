import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
    _id,
  heroImage{
    asset->{url}
  },
  }`);

export const PRIVATE_HOMES_QUERY = defineQuery(`*[_type == "privateHomes"][0]{
    _id,
    privateImage{
    asset->{url}
    },
    privateText
    }`);

export const ENTERPRISE_QUERY = defineQuery(`*[_type == "enterprise"][0]{
    _id,
    enterpriseImage{
    asset->{url}
    },
    enterpriseText
    }`);
export const B2B_QUERY = defineQuery(`*[_type == "b2b"][0]{
    _id,
    b2bImage{
    asset->{url}
    },
    b2bText
    }`);
