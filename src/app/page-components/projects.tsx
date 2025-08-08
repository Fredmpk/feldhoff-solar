"use client";

import { useState } from "react";
import { BaseCarousel } from "@/components/base-carousel";
import { CarouselCard } from "@/components/carousel-card";
import { ImageGalleryModal } from "@/components/image-gallery-modal";
import { PROJECTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/imageUrlBuilder";

export default function Projects({
  projects,
}: {
  projects: PROJECTS_QUERYResult;
}) {
  const [galleryModal, setGalleryModal] = useState<{
    isOpen: boolean;
    images: { galleryImage: string; altGalleryImage: string }[];
    title: string | null;
  }>({
    isOpen: false,
    images: [],
    title: "",
  });

  const handleGalleryClick = (
    images: { galleryImage: string; altGalleryImage: string }[],
    title: string | null
  ) => {
    setGalleryModal({
      isOpen: true,
      images: images.map((img) => ({
        galleryImage: img.galleryImage,
        altGalleryImage: img.altGalleryImage,
      })),
      title,
    });
  };
  const closeGallery = () => {
    setGalleryModal({
      isOpen: false,
      images: [],
      title: "",
    });
  };

  return (
    <section id="projekte" className="min-h-screen bg-gray-50 pt-20 sm:pt-32">
      <div className="container mx-auto pb-12">
        <div className="text-center mb-12">
          <h2 className="font-bold text-center text-2xl md:text-3xl xl:text-4xl tracking-wide p-8 md:pb-8 xl:pb-4 ">
            Projektgalerie
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
            Hier werden alle Projekte dargestellt, die wir bisher umgesetzt
            haben.
          </p>
        </div>
        <BaseCarousel className="mb-12">
          {projects.map((item) => (
            <CarouselCard
              key={item._id}
              image={urlFor(item.projectsMainImage).url()}
              alt={item.altProjectsMainImage}
              title={item.projectsTitle}
              description={item.projectsText}
              galleryImages={
                item.imageGallery
                  ?.filter(
                    (
                      galleryItem
                    ): galleryItem is {
                      galleryImage: { asset: { url: string } };
                      altGalleryImage: string | null;
                    } => galleryItem?.galleryImage?.asset?.url != null
                  )
                  .map((galleryItem) => ({
                    galleryImage: galleryItem.galleryImage.asset.url,
                    altGalleryImage: galleryItem.altGalleryImage || "",
                  })) || []
              }
              onGalleryClick={handleGalleryClick}
            />
          ))}
        </BaseCarousel>
      </div>

      <ImageGalleryModal
        isOpen={galleryModal.isOpen}
        onClose={closeGallery}
        images={galleryModal.images.map((img) => ({
          image: img.galleryImage,
          alt: img.altGalleryImage,
        }))}
        title={galleryModal.title}
      />
    </section>
  );
}
