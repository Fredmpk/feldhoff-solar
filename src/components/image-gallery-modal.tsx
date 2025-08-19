"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BaseCarousel } from "./base-carousel";
import { urlFor } from "@/sanity/imageUrlBuilder";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    image: any; // Sanity image type
    alt: string;
  }[];
  title: string | null;
}

export function ImageGalleryModal({
  isOpen,
  onClose,
  images,
  title,
}: ImageGalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-7xl bg-white rounded-lg overflow-hidden flex flex-col max-h-[98vh]">
        {/* Header - Fixed height */}
        <div className="flex items-center justify-between p-4 border-b shrink-0 pb-4">
          <h2 className="text-xl font-semibold">{title} Gallery</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image container - Flexible height */}
        <div className="flex-1 overflow-hidden min-h-0">
          <BaseCarousel>
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-[70vh] lg:h-[80vh] flex justify-center items-center p-4"
              >
                <img
                  src={urlFor(image.image).url() || "/placeholder.svg"}
                  alt={image.alt}
                  className="max-w-full max-h-full w-auto h-auto object-contain "
                />
              </div>
            ))}
          </BaseCarousel>
        </div>
      </div>
    </div>
  );
}
