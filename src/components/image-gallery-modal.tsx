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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-7xl mx-4 bg-white rounded-lg overflow-hidden max-h-[95vh]">
        <div className="flex items-center justify-between p-4 border-b shrink-0">
          <h2 className="text-xl font-semibold">{title} Gallery</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 overflow-hidden">
          {/* Remove all height constraints from BaseCarousel and let images determine size */}
          <div className="w-full">
            <BaseCarousel>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center items-center p-4"
                >
                  <img
                    src={urlFor(image.image).url() || "/placeholder.svg"}
                    alt={image.alt}
                    className="block max-w-full max-h-[75vh] w-auto h-auto"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
              ))}
            </BaseCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
