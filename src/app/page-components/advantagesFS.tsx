"use client";

import { urlFor } from "@/sanity/imageUrlBuilder";
import { ADVANTAGES_FS_QUERYResult } from "@/sanity/types";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function AdvantagesFS({
  advantagesFS,
}: {
  advantagesFS: ADVANTAGES_FS_QUERYResult;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for each square
  const squareVariants = {
    s1: {
      hidden: { opacity: 0, x: -200, y: -200 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    s2: {
      hidden: { opacity: 0, x: 200, y: -200 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    s3: {
      hidden: { opacity: 0, x: -200, y: 200 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    s4: {
      hidden: { opacity: 0, x: 200, y: 200 },
      visible: { opacity: 1, x: 0, y: 0 },
    },
  };

  const springTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  };

  const titleTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };

  return (
    <section id="advantages" className="pt-20 sm:pt-32">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className="font-bold text-center text-2xl md:text-3xl xl:text-4xl tracking-wide p-8 md:pb-8 xl:pb-4 "
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ ...titleTransition, delay: 0.2 }}
        >
          {advantagesFS?.advantagesTitle}
        </motion.h2>
        <div
          className="flex flex-col items-center justify-center sm:w-[65%]"
          ref={ref}
        >
          <motion.h3
            className="text-center text-sm md:text-md xl:text-md tracking-wide py-2 md:py-4  w-3/4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ ...titleTransition, delay: 0.4 }}
          >
            {advantagesFS?.subTitle}
          </motion.h3>
          <div className="hidden sm:flex flex-col gap-4 md:gap-8 ">
            {/* First row */}
            <div className="flex flex-row gap-4 md:gap-8  ">
              {/* S1 - flies in from upper left */}
              <motion.div
                className="bg-tforange rounded-xl w-52 h-52 md:w-68 md:h-64 p-2 md:p-3  relative"
                variants={squareVariants.s1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ ...springTransition, delay: 0.6 }}
              >
                <div className="pl-2 md:pl-3 lg:pl-5">
                  <h4 className="text-white text-xl font-bold md:text-2xl ">
                    {advantagesFS?.titleS1}
                  </h4>
                  <p className="text-white text-md font-semibold md:text-lg pt-1 md:pt-2">
                    {advantagesFS?.textS1}
                  </p>
                  <img
                    src={urlFor(advantagesFS?.iconS1).url()}
                    className="w-8 h-8 md:w-12 md:h-12 absolute bottom-4 right-4 md:bottom-4 md:right-4 "
                  />
                </div>
              </motion.div>
              {/* S2 - flies in from upper right */}
              <motion.div
                className="bg-tfturquoise rounded-xl p-2 md:p-3 flex justify-center w-52 h-52 md:w-68 md:h-64  relative"
                variants={squareVariants.s2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ ...springTransition, delay: 0.8 }}
              >
                <div className="pr-2 md:pr-3 xl:pr-5">
                  <h4 className="text-white text-right text-xl font-bold md:text-2xl ">
                    {advantagesFS?.titleS2}
                  </h4>
                  <p className="text-white text-right text-md font-semibold md:text-lg pt-1 md:pt-2">
                    {advantagesFS?.textS2}
                  </p>
                </div>
                <img
                  src={urlFor(advantagesFS?.iconS2).url()}
                  className="w-8 h-8 md:w-12 md:h-12 absolute bottom-4 left-4 md:bottom-4 md:left-4"
                />
              </motion.div>
            </div>
            {/* Second row */}
            <div className="flex flex-row gap-4 md:gap-8 ">
              {/* S3 - flies in from down left */}
              <motion.div
                className="bg-tforange rounded-xl p-2 md:p-3 flex justify-center items-end w-52 h-52 md:w-68 md:h-64 relative"
                variants={squareVariants.s3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ ...springTransition, delay: 1.4 }}
              >
                <div className="pl-2 md:pl-3">
                  <h4 className="text-white text-left text-xl font-bold md:text-2xl ">
                    {advantagesFS?.titleS3}
                  </h4>
                  <img
                    src={urlFor(advantagesFS?.iconS3).url()}
                    className="w-8 h-8 md:w-12 md:h-12 absolute top-4 right-4 md:top-4 md:right-4"
                  />
                  <p className="text-white text-left text-md font-semibold md:text-lg pt-1 md:pt-2">
                    {advantagesFS?.textS3}
                  </p>
                </div>
              </motion.div>
              {/* S4 - flies in from down right */}
              <motion.div
                className="bg-tfturquoise rounded-xl p-2 md:p-3 flex justify-center items-end w-52 h-52 md:w-68 md:h-64 relative"
                variants={squareVariants.s4}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ ...springTransition, delay: 1.6 }}
              >
                <div className="pr-2 md:pr-3">
                  <h4 className="text-white text-right text-xl font-bold md:text-2xl ">
                    {advantagesFS?.titleS4}
                  </h4>
                  <p className="text-white text-right text-md font-semibold md:text-lg pt-1 md:pt-2">
                    {advantagesFS?.textS4}
                  </p>
                </div>
                <img
                  src={urlFor(advantagesFS?.iconS4).url()}
                  className="w-8 h-8 md:w-12 md:h-12  flex-shrink-0 absolute top-4 left-4 md:top-4 md:left-4 "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-center my-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500, // 3 seconds between slides
            disableOnInteraction: false, // Keep autoplay even after user swipes
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            {" "}
            <div className="bg-tforange rounded-xl w-52 h-52  p-2 relative mx-auto">
              <div className="pl-2">
                <h4 className="text-white text-xl font-bold ">
                  {advantagesFS?.titleS1}
                </h4>
                <p className="text-white text-md font-semibold pt-1 ">
                  {advantagesFS?.textS1}
                </p>
                <img
                  src={urlFor(advantagesFS?.iconS1).url()}
                  className="w-8 h-8 absolute top-4 right-4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-tfturquoise rounded-xl w-52 h-52  p-2 relative mx-auto">
              <div className="pl-2">
                <h4 className="text-white text-xl font-bold ">
                  {advantagesFS?.titleS2}
                </h4>
                <p className="text-white text-md font-semibold pt-1 ">
                  {advantagesFS?.textS2}
                </p>
                <img
                  src={urlFor(advantagesFS?.iconS2).url()}
                  className="w-8 h-8 absolute top-4 right-4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="bg-tforange rounded-xl w-52 h-52  p-2 relative mx-auto">
              <div className="pl-2">
                <h4 className="text-white text-xl font-bold ">
                  {advantagesFS?.titleS3}
                </h4>
                <p className="text-white text-md font-semibold pt-1 ">
                  {advantagesFS?.textS3}
                </p>
                <img
                  src={urlFor(advantagesFS?.iconS3).url()}
                  className="w-8 h-8 absolute top-4 right-4"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-tfturquoise rounded-xl w-52 h-52  p-2 relative mx-auto">
              <div className="pl-2">
                <h4 className="text-white text-xl font-bold ">
                  {advantagesFS?.titleS4}
                </h4>
                <p className="text-white text-md font-semibold pt-1 ">
                  {advantagesFS?.textS4}
                </p>
                <img
                  src={urlFor(advantagesFS?.iconS4).url()}
                  className="w-8 h-8 absolute top-4 right-4"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="w-full flex justify-center py-8">
        <div className="w-full max-w-lg carousel-wrapper">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="flex justify-center">
                <div className="bg-tforange rounded-xl w-52 h-52  p-2 relative">
                  <div className="pl-2">
                    <h4 className="text-white text-xl font-bold ">
                      {advantagesFS?.titleS1}
                    </h4>
                    <p className="text-white text-md font-semibold pt-1 ">
                      {advantagesFS?.textS1}
                    </p>
                    <img
                      src={urlFor(advantagesFS?.iconS1).url()}
                      className="w-8 h-8 absolute top-4 right-4"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div> */}
    </section>
  );
}
