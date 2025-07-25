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

export const ADVANTAGES_FS_QUERY = defineQuery(`*[_type == "advantagesFS"][0]{
    _id,
    subTitle,
    titleS1,
    textS1,
    iconS1{
    asset->{url}
    },
    titleS2,
    textS2,
    iconS2{
    asset->{url}
    },
    titleS3,
    textS3,
    iconS3{
    asset->{url}
    },
    titleS4,
    textS4,
    iconS4{
    asset->{url}
    },
    }`);
