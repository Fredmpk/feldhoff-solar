import { urlFor } from "@/sanity/imageUrlBuilder";
import { ABOUT_QUERYResult } from "@/sanity/types";

export function About({ about }: { about: ABOUT_QUERYResult }) {
  return (
    <section id="about" className="pt-20 sm:pt-32 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-center text-2xl md:text-3xl xl:text-4xl tracking-wide p-8 md:pb-8 xl:pb-4 ">
          {about?.aboutTitle || ""}
        </h2>

        {/* Grid container with borders */}
        <div className="sm:grid sm:grid-cols-2 mx-4 text-sm md:text-base lg:text-lg ">
          {/* Top left - Company image */}
          <div className="flex sm:border-r border-b border-zinc-300 sm:p-12 p-6 items-start justify-center">
            <img
              className="w-1/2 sm:w-[80%]"
              src={urlFor(about?.aboutImage).url()}
              alt={about?.altAboutImage || "Unternehmenslogo"}
            />
          </div>

          {/* Top right - Company text */}
          <div className="sm:border-b border-zinc-200 lg:px-12 p-6 flex items-start">
            <div className="text-left font-semibold w-full">
              {about?.enterpriseText || ""}
            </div>
          </div>
          <div className="sm:hidden lg:px-12 lg:py-6 p-6 ml-auto mt-auto block xl:w-2/3 border-b border-t sm:border-b-0 sm:border-t-0 border-zinc-200">
            <img
              className="object-contain rounded-4xl"
              src={urlFor(about?.founderImage).url()}
              alt={about?.altFounderImage || "Unternehmenslogo"}
            />
          </div>
          {/* Bottom left - Founder text */}
          <div className="border-b sm:border-b-0 sm:border-r border-zinc-200 lg:p-12 p-6 flex items-end ">
            <div className="text-left font-semibold w-full">
              {about?.founderText || ""}
            </div>
          </div>

          {/* Bottom right - Founder image */}
          <div className="hidden lg:px-12 lg:py-6 p-6 ml-auto mt-auto sm:block xl:w-2/3">
            <img
              className="object-contain rounded-4xl"
              src={urlFor(about?.founderImage).url()}
              alt={about?.altFounderImage || "Unternehmenslogo"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
