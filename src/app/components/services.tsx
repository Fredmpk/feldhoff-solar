import { urlFor } from "@/sanity/imageUrlBuilder";
import {
  PRIVATE_HOMES_QUERYResult,
  ENTERPRISE_QUERYResult,
  B2B_QUERYResult,
} from "@/sanity/types";

export function Services({
  privateHomes,
  enterprise,
  b2b,
}: {
  privateHomes: PRIVATE_HOMES_QUERYResult;
  enterprise: ENTERPRISE_QUERYResult;
  b2b: B2B_QUERYResult;
}) {
  return (
    <section>
      <h2 className="font-bold text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide p-8 md:p-12 lg:p-16">
        Unsere <span className="text-tforange">Leistungen</span>{" "}
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-between mx-6 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-32 gap-4 md:gap-6">
        <div className="bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl flex flex-col items-center ">
          <h3 className="text-center font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide pt-4 sm:pb-1 md:pb-2 lg:pt-6 lg:pb-2">
            Gewerbebetriebe
          </h3>
          <img
            src={urlFor(enterprise?.enterpriseImage).url()}
            alt="Image"
            className="rounded-2xl w-[70%] h-[70%] object-cover"
          />
        </div>
        <div className="bg-tfturquoise w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl flex flex-col items-center">
          {" "}
          <h3 className="text-center font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide pt-4 sm:pb-1 md:pb-2 lg:pt-6 lg:pb-2 ">
            Privathaushalte
          </h3>
          <img
            src={urlFor(privateHomes?.privateImage).url()}
            alt="Image"
            className="rounded-2xl w-[70%] h-[70%] object-cover"
          />
        </div>
        <div className="bg-tforange w-64 sm:w-50 md:w-54 lg:w-72 xl:w-82 2xl:w-96   h-64 sm:h-50 md:h-54 lg:h-72 xl:h-82 2xl:h-96   rounded-xl flex flex-col items-center">
          <h3 className="text-center font-bold text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide pt-4 sm:pb-1 md:pb-2 lg:pt-6 lg:pb-2">
            B2B
          </h3>
          <img
            src={urlFor(b2b?.b2bImage).url()}
            alt="Image"
            className="rounded-2xl w-[70%] h-[70%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
