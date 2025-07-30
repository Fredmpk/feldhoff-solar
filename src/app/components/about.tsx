import { urlFor } from "@/sanity/imageUrlBuilder";
import { ABOUT_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";

export function About({ about }: { about: ABOUT_QUERYResult }) {
  return (
    <section id="advantages" className="pt-20 sm:pt-32">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-center text-2xl md:text-3xl xl:text-4xl tracking-wide p-8 md:pb-8 xl:pb-4 ">
          Das <span className="text-tforange">Unternehmen</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <img
              className="w-full p-24"
              src={urlFor(about?.aboutImage).auto("format").fit("crop").url()}
              alt={about?.altAboutImage || "Unternehmenslogo"}
            />
          </div>
          <div className="w-1/2">
            <div className="text-right font-semibold pl-12 pr-8">
              Das <span className="text-tforange font-bold">Unternehmen </span>
              {about?.enterpriseText || ""}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-left font-semibold pl-12 pr-8 w-1/2">
            Der <span className="text-tforange font-bold">Gründer </span>
            {about?.founderText || ""}
          </div>
          <div className="w-1/2 rounded-full">
            <img
              className="w-full p-24 rounded-full "
              src={urlFor(about?.founderImage).width(400).height(400).url()}
              alt={about?.altFounderImage || "Unternehmenslogo"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
