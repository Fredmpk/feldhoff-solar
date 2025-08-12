"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarouselCardProps {
  image: string;
  alt: string | null;
  title: string | null;
  description: string | null;
  galleryImages: { galleryImage: string; altGalleryImage: string }[];
  onGalleryClick: (
    images: { galleryImage: string; altGalleryImage: string }[],
    title: string | null
  ) => void;
}

// Helper function to truncate text to max words
function truncateWords(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export function CarouselCard({
  image,
  title,
  alt,
  description,
  galleryImages,
  onGalleryClick,
}: CarouselCardProps) {
  const truncatedDescription = description
    ? truncateWords(description, 50)
    : "";
  const needsTruncation = description
    ? description.split(" ").length > 50
    : false;

  return (
    <Card className="h-full max-w-4xl mx-auto text-tfturquoise ">
      <CardContent className="">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className=" md:aspect-auto overflow-hidden rounded-lg m-2">
            <img
              src={image || "/placeholder.svg"}
              alt={alt || ""}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Content Section */}
          <div className="px-4 md:px-4 flex flex-col justify-start space-y-6">
            <h3 className="font-bold text-2xl md:text-3xl leading-tight text-gray-900">
              {title}
            </h3>
            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {truncatedDescription}
              {needsTruncation && description && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-blue-600 hover:text-blue-800 underline ml-1 cursor-pointer">
                      mehr
                    </button>
                  </DialogTrigger>
                  <DialogContent className="!max-w-4xl !w-[90vw] !max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 overflow-y-auto h-[80vh]">
                      <p className="text-gray-600 leading-relaxed pb-4">
                        {description}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
            <div className="pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => onGalleryClick(galleryImages, title)}
                className="w-full md:w-auto px-8 py-3 text-base font-medium bg-tfturquoise text-white"
              >
                Bildergalerie
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
