"use client";
import { urlFor } from "@/sanity/imageUrlBuilder";
import {
  PRIVATE_HOMES_QUERYResult,
  ENTERPRISE_QUERYResult,
  B2B_QUERYResult,
} from "@/sanity/types";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

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

  const handleCardClick = (key: string) => {
    // Only run on mobile screens
    if (window.innerWidth < 640) {
      // Tailwind's "sm" breakpoint is 640px
      setExpanded(expanded === key ? null : key);
    }
  };
  const handleMouseEnter = (key: string) => {
    if (window.innerWidth >= 640) {
      setHovered(key);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide p-8 md:p-12 lg:p-16">
          Unsere <span className="text-tforange">Leistungen</span>{" "}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between mx-6 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-32 gap-4 md:gap-12">
          <div
            className={` bg-tforange rounded-xl transition-all duration-300 
             flex ${hovered === "enterprise" ? "w-full" : ""} 
            ${hovered === "enterprise" ? "pb-6 " : ""}
            ${hovered === "enterprise" ? "flex-row " : "flex-col"}
            ${hovered === "privateHomes" ? "hidden" : ""}
            ${hovered === "b2b" ? "hidden" : ""}
            ${expanded === "enterprise" ? "flex-col" : "flex-row"}
            ${expanded === "enterprise" ? "items-center" : ""}
            `}
            onClick={() => handleCardClick("enterprise")}
            onMouseEnter={() => handleMouseEnter("enterprise")}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative flex-shrink-0`}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                Gewerbebetriebe
              </h3>
              <img
                src={urlFor(enterprise?.enterpriseImage).url()}
                alt="Image"
                className="rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[70%] h-[70%] object-cover"
              />
            </div>
            <div
              className={`${
                hovered === "enterprise" || expanded === "enterprise"
                  ? "block"
                  : "hidden"
              } flex flex-col ${
                expanded === "enterprise" ? "text-center" : "text-right"
              } justify-center text-sm lg:text-lg m-4`}
            >
              <PortableText
                value={enterprise?.enterpriseText || []}
                components={components}
              />
            </div>
          </div>
          <div
            className={` transition-transform bg-tfturquoise rounded-xl duration-200 
              ${hovered === "privateHomes" ? "w-full" : ""} ${hovered === "privateHomes" ? "pb-6" : ""}
            ${hovered === "privateHomes" ? "flex flex-col items-center" : ""}
              ${expanded === "privateHomes" ? "w-full" : ""} ${expanded === "privateHomes" ? "pb-6" : ""}
            ${expanded === "privateHomes" ? "flex flex-col items-center" : ""}
            ${hovered === "enterprise" ? "hidden" : ""}
            ${hovered === "b2b" ? "hidden" : ""}`}
            onMouseEnter={() => handleMouseEnter("privateHomes")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleCardClick("privateHomes")}
          >
            <div
              className={`bg-tfturquoise w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative `}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                Privathaushalte
              </h3>
              <img
                src={urlFor(privateHomes?.privateImage).url()}
                alt="Image"
                className="rounded-2xl w-[70%] h-[70%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]"
              />
            </div>
            <div
              className={`${hovered === "privateHomes" || expanded === "privateHomes" ? "block" : "hidden"} text-center items-center justify-center text-sm lg:text-lg`}
            >
              <PortableText
                value={privateHomes?.privateText || []}
                components={components}
              />
            </div>
          </div>
          <div
            className={` transition-transform bg-tforange rounded-xl duration-200 flex ${hovered === "b2b" ? "w-full" : ""} ${hovered === "b2b" ? "pb-6" : ""}
            ${expanded === "b2b" ? "w-full" : ""} ${expanded === "b2b" ? "pb-6" : ""}
            ${hovered === "b2b" ? "justify-between" : ""}
            ${hovered === "privateHomes" ? "hidden" : ""}
            ${hovered === "enterprise" ? "hidden" : ""}
            ${expanded === "b2b" ? "flex-col-reverse items-center" : ""}
            `}
            onMouseEnter={() => handleMouseEnter("b2b")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleCardClick("b2b")}
          >
            <div
              className={`${hovered === "b2b" || expanded === "b2b" ? "block" : "hidden"} text-sm lg:text-lg max-w-[70%] pt-8 px-4`}
            >
              <PortableText
                value={b2b?.b2bText || []}
                components={components}
              />
            </div>
            <div
              className={`bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl relative `}
            >
              <h3 className="absolute top-1/16 left-1/2 transform -translate-x-1/2 font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide">
                B2B
              </h3>
              <img
                src={urlFor(b2b?.b2bImage).url()}
                alt="Image"
                className="rounded-2xl w-[70%] h-[70%] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%]"
              />
            </div>
          </div>
        </div>
      </div>
      <Link href="/kontakt">
        <button className=" mx-auto block font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl bg-tforange my-8 md:my-10 lg:my-12 py-3 px-6 rounded-2xl text-white tracking-wide  cursor-pointer hover:scale-125 transition-transform duration-200 text-shadow-lg">
          Jetzt kostenlosen Beratungstermin vereinbaren
        </button>
      </Link>
    </div>
  );
}
