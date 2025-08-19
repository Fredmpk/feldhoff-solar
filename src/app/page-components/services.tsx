"use client";

import { urlFor } from "@/sanity/imageUrlBuilder";
import {
  PRIVATE_HOMES_QUERYResult,
  ENTERPRISE_QUERYResult,
  B2B_QUERYResult,
} from "@/sanity/types";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Easing, motion, useInView } from "framer-motion";
import Image from "next/image";

export function Services({
  privateHomes,
  enterprise,
  b2b,
}: {
  privateHomes: PRIVATE_HOMES_QUERYResult;
  enterprise: ENTERPRISE_QUERYResult;
  b2b: B2B_QUERYResult;
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        if (!children || (Array.isArray(children) && children.length === 0)) {
          return <div className="py-4" />;
        }
        return <p className="pb-4">{children}</p>;
      },
      h1: ({ children }) => <h1 className="text-2xl pb-4">{children}</h1>,
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold mb-3">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-bold mb-2">{children}</h3>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-gray-200 pl-4 my-4">
          {children}
        </blockquote>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-semibold pb-4">{children}</h4>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside ml-6 pb-4">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-6 pb-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="pb-2">{children}</li>,
      number: ({ children }) => <li className="pb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <span className="font-bold">{children}</span>,
      em: ({ children }) => <span className="italic">{children}</span>,
      underline: ({ children }) => (
        <span className="underline">{children}</span>
      ),
    },
  };

  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expansionPhase, setExpansionPhase] = useState<number>(0);
  const [expansionTimer, setExpansionTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isReady, setIsReady] = useState<boolean>(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 2000); // Dauer der longest fly-in animation
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Animation variants for each card
  const cardVariants = {
    enterprise: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.6,
          ease: "easeInOut" as Easing,
          delay: 0.4,
        },
      },
    },
    privateHomes: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.6,
          ease: "easeInOut" as Easing,
          delay: 0.6,
        },
      },
    },
    b2b: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.6,
          ease: "easeInOut" as Easing,
          delay: 0.4,
        },
      },
    },
  };

  const titleTransition = {
    duration: 0.8,
    ease: "easeInOut" as Easing,
  };

  // Dynamic width class function with multiple phases
  const getCardWidth = (cardKey: string) => {
    if (hovered !== cardKey) return "";

    switch (expansionPhase) {
      case 1:
        return "w-1/2"; // 50% width
      case 2:
        return "w-2/3"; // 66% width
      case 3:
        return "w-3/4"; // 75% width
      case 4:
        return "w-full"; // 100% width
      default:
        return "";
    }
  };

  // Clear all timers helper
  const clearExpansionTimers = () => {
    if (expansionTimer) {
      clearTimeout(expansionTimer);
      setExpansionTimer(null);
    }
  };

  // Enhanced mouse enter with smooth phases
  const handleMouseEnter = (key: string) => {
    if (window.innerWidth < 640 || !isReady) {
      setHovered(null);

      return;
    }
    // Clear any existing timers
    clearExpansionTimers();

    setHovered(key);
    setExpansionPhase(1);

    // Create staggered expansion phases
    const timer1 = setTimeout(() => setExpansionPhase(2), 120); // 50% → 66%
    const timer2 = setTimeout(() => setExpansionPhase(3), 240); // 66% → 75%
    const timer3 = setTimeout(() => setExpansionPhase(4), 360); // 75% → 100%

    setExpansionTimer(timer3);
  };

  // Enhanced mouse leave
  const handleMouseLeave = () => {
    clearExpansionTimers();
    setHovered(null);
    setExpansionPhase(0);
  };

  const handleCardClick = (key: string) => {
    // Only run on mobile screens
    if (window.innerWidth < 640) {
      // Tailwind's "sm" breakpoint is 640px
      setExpanded(expanded === key ? null : key);
    }
  };

  return (
    <section className="flex flex-col gap-4 pt-20 sm:pt-32" id="leistungen">
      <div>
        <motion.h2
          className="font-bold text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide pt-4 sm:pt-8 pb-12 md:pb-16 lg:pb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ ...titleTransition, delay: 0.2 }}
        >
          Unsere Leistungen
        </motion.h2>

        <div
          ref={ref}
          className={`flex flex-col items-center sm:flex-row   ${
            hovered === "enterprise"
              ? "items-start justify-start"
              : hovered === "b2b"
                ? "items-end justify-end"
                : "justify-center sm:justify-between items-center"
          }
          mx-6 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-32 
          gap-4 sm:gap-0
          `}
        >
          {/* Enterprise Card - flies in from left */}
          <motion.div
            className={`bg-tforange rounded-xl transition-all duration-500 ease-out
             flex overflow-hidden
             ${getCardWidth("enterprise")}
            ${hovered === "enterprise" ? "flex-row " : "flex-col"}
            ${hovered === "privateHomes" ? "hidden" : ""}
            ${hovered === "b2b" ? "hidden" : ""}
            ${expanded === "enterprise" ? "flex-col" : "flex-row"}
            ${expanded === "enterprise" ? "items-center" : ""}
            `}
            variants={cardVariants.enterprise}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onClick={() => handleCardClick("enterprise")}
            onMouseEnter={() => handleMouseEnter("enterprise")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative flex-shrink-0`}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                {enterprise?.enterpriseTitle || ""}
              </h3>
              <div className="rounded-2xl w-[70%] h-[70%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]">
                <Image
                  src={urlFor(enterprise?.enterpriseImage).url()}
                  alt="Enterprise Image"
                  fill
                  style={{ objectFit: "cover", borderRadius: "1rem" }} // rounded-2xl
                />
              </div>
            </div>
            <div
              className={`
    text-sm lg:text-lg
    ${
      hovered === "enterprise" || expanded === "enterprise"
        ? "sm:w-[60%] sm:h-86 lg:h-100 opacity-100 pt-8 px-4 transition-opacity duration-200 text-left"
        : "w-0 opacity-0 h-0 overflow-hidden"
    }
  `}
            >
              {(hovered === "enterprise" && expansionPhase === 4) ||
              expanded === "enterprise" ? (
                <PortableText
                  value={enterprise?.enterpriseText || []}
                  components={components}
                />
              ) : null}
            </div>
          </motion.div>

          {/* Private Homes Card - flies in from bottom */}
          <motion.div
            className={`transition-all duration-500 ease-out bg-tfturquoise rounded-xl overflow-hidden
              ${getCardWidth("privateHomes")}
              ${hovered === "privateHomes" || expanded === "privateHomes" ? "flex flex-col items-center pb-6 w-full" : ""}
              ${hovered === "enterprise" || hovered === "b2b" ? "hidden" : ""}`}
            variants={cardVariants.privateHomes}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onMouseEnter={() => handleMouseEnter("privateHomes")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick("privateHomes")}
          >
            <div
              className={`bg-tfturquoise w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative `}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                {privateHomes?.privateTitle || ""}
              </h3>
              <div className="rounded-2xl w-[70%] h-[70%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]">
                <Image
                  src={urlFor(privateHomes?.privateImage).url()}
                  alt="Enterprise Image"
                  fill
                  style={{ objectFit: "cover", borderRadius: "1rem" }} // rounded-2xl
                />
              </div>
            </div>
            <div
              className={`${hovered === "privateHomes" || expanded === "privateHomes" ? "opacity-100" : " opacity-0"} text-left items-center justify-center text-sm lg:text-lg
              transition-opacity duration-300 delay-200 px-4`}
            >
              {hovered === "privateHomes" || expanded === "privateHomes" ? (
                <PortableText
                  value={privateHomes?.privateText || []}
                  components={components}
                />
              ) : null}
            </div>
          </motion.div>

          {/* B2B Card - flies in from right */}
          <motion.div
            className={`transition-all duration-500 ease-out bg-tforange rounded-xl flex overflow-hidden
            ${getCardWidth("b2b")}
            ${expanded === "b2b" ? "w-full" : ""} ${expanded === "b2b" ? "pb-6" : ""}
            ${hovered === "b2b" ? "items-start justify-between" : "items-center"}
            ${hovered === "privateHomes" ? "hidden" : ""}
            ${hovered === "enterprise" ? "hidden" : ""}
            ${expanded === "b2b" ? "flex-col-reverse items-center" : "flex-row items-center"}
            `}
            variants={cardVariants.b2b}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onMouseEnter={() => handleMouseEnter("b2b")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick("b2b")}
          >
            <div
              className={`${(hovered === "b2b" && expansionPhase === 4) || expanded === "b2b" ? "block opacity-100 px-4 max-w-full sm:h-120 lg:h-152 xl:h-124 transition-opacity duration-300 delay-200" : "opacity-0 w-0 h-0 overflow-hidden"} text-sm lg:text-lg pt-8
               duration-300 delay-200`}
            >
              {(hovered === "b2b" && expansionPhase === 4) ||
              expanded === "b2b" ? (
                <PortableText
                  value={b2b?.b2bText || []}
                  components={components}
                />
              ) : null}
            </div>
            <div
              className={`bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative flex-shrink-0 `}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                {b2b?.b2bTitle || ""}
              </h3>
              <div className="rounded-2xl w-[70%] h-[70%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]">
                <Image
                  src={urlFor(b2b?.b2bImage).url()}
                  alt="Enterprise Image"
                  fill
                  style={{ objectFit: "cover", borderRadius: "1rem" }} // rounded-2xl
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ ...titleTransition, delay: 1.0 }}
      >
        <Link href="/kontakt">
          <button className="mx-8 sm:mx-auto block font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-tforange my-8 md:my-10 lg:my-12 py-3 px-2 sm:px-6 lg:py-4 lg:px-8 rounded-2xl text-white tracking-wide cursor-pointer hover:scale-108 transition-transform duration-200 text-shadow-lg">
            Jetzt kostenlosen Beratungstermin vereinbaren
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
