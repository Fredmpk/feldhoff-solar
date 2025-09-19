"use client";
import { urlFor } from "@/sanity/imageUrlBuilder";
import { sanityFetch } from "@/sanity/live";
import { HERO_QUERY } from "@/sanity/queries";
import { HERO_QUERYResult } from "@/sanity/types";
import { Easing, motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export function Hero({ hero }: { hero: HERO_QUERYResult }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // useEffect(() => {
  //   if (isInView) {
  //     const timer = setTimeout(() => {}, 2000); // Dauer der longest fly-in animation
  //     return () => clearTimeout(timer);
  //   }
  // }, [isInView]);
  return (
    <section
      ref={ref}
      className="mt-20 sm:mt-32 bg-cover bg-top md:bg-center bg-no-repeat h-[90vh] flex flex-col items-center justify-between rounded-b-lg"
      style={{
        backgroundImage: `url(${urlFor(hero?.heroImage).url()})`,
      }}
    >
      <div className="text-center mx-6 mt-12 sm:mx-8 sm:mt-16 md:m-16 lg:m-18">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide leading-relaxed">
          {hero?.heroTitle || ""}
        </h1>

        {/*nur schwarz und ins cms*/}
      </div>
      <motion.div
        className="pb-48 "
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" as Easing }}
      >
        <Link href="/kontakt">
          <button className="font-bold text-xl md:text-3xl lg:text-3xl xl:text-4xl bg-tforange py-3 px-8 sm:px-12 lg:px-20 rounded-2xl text-white tracking-wide cursor-pointer hover:scale-125 transition-transform duration-200 text-shadow-lg">
            Jetzt kontaktieren
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
