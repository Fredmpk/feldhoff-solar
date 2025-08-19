"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BaseCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function BaseCarousel({ children, className = "" }: BaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const translateX = -currentIndex * 100;
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full px-4">
            {child}
          </div>
        ))}
      </div>

      {/* Desktop arrows - always show */}

      <Button
        variant="outline"
        size="icon"
        className=" absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 hidden sm:flex text-tfturquoise"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 text-tfturquoise" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z hidden sm:flex text-tfturquoise"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4  text-tfturquoise" />
      </Button>

      {/* Mobile dots indicator */}
      <div className="flex justify-center my-4 space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
