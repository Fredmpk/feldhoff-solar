import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
    _id,
    heroTitle,
    heroImage{
    asset->{url}
  },
  }`);

export const PRIVATE_HOMES_QUERY = defineQuery(`*[_type == "privateHomes"][0]{
    _id,
    privateTitle,
    privateImage{
    asset->{url}
    },
    privateText
    }`);

export const ENTERPRISE_QUERY = defineQuery(`*[_type == "enterprise"][0]{
    _id,
    enterpriseTitle,
    enterpriseImage{
    asset->{url}
    },
    enterpriseText
    }`);
export const B2B_QUERY = defineQuery(`*[_type == "b2b"][0]{
    _id,
    b2bTitle,
    b2bImage{
    asset->{url}
    },
    b2bText
    }`);

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]{
    _id,
    aboutTitle,
    aboutImage{
    asset->{url}
    },
    altAboutImage,
    enterpriseText,
    founderImage{
    asset->{url}
    },
    altFounderImage,
    founderText
    }`);

export const ADVANTAGES_FS_QUERY = defineQuery(`*[_type == "advantagesFS"][0]{
    _id,
    advantagesTitle,
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

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects"][]{
    _id,
    projectsTitle,
    projectsMainImage{
    asset->{url}
    },
    altProjectsMainImage,
imageGallery[] {
galleryImage{
    asset->{url}
    },
    altGalleryImage,
    },
    projectsText
    }`);

export const LEGAL_QUERY = defineQuery(`*[_type == "legal"][0]{
    _id,
    name,
    street,
    city,
    tel,
    mail,
    privacy
    }`);
