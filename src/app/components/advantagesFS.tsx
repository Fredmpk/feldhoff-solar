import { urlFor } from "@/sanity/imageUrlBuilder";
import { ADVANTAGES_FS_QUERYResult } from "@/sanity/types";

export default function AdvantagesFS({
  advantagesFS,
}: {
  advantagesFS: ADVANTAGES_FS_QUERYResult;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className=" font-bold text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide py-8 md:py-12 lg:py-16">
        Ihre <span className="text-tforange">Vorteile</span> bei uns
      </h2>
      <div className="flex flex-col items-center justify-center w-[65%]">
        <h3 className="text-center text-sm md:text-md lg:text-lg  tracking-wide py-2 md:py-4 lg:py-6  w-3/4 ">
          {advantagesFS?.subTitle}
        </h3>
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
            <div className="bg-tforange rounded-xl w-52 h-52 md:w-68 md:h-64 lg:w-72 lg:h-72 xl:w-82 xl:h-82  p-2 md:p-4 lg:p-6 xl:p-8 relative">
              <div className="pr-2 md:pr-4 lg:pr-6 ">
                <h4 className="text-white text-xl font-bold md:text-2xl lg:text-3xl pr-4">
                  {advantagesFS?.titleS1}
                </h4>
                <p className="text-white text-md font-semibold md:text-lg lg:text-xl pt-1 md:pt-2 ">
                  {advantagesFS?.textS1}
                </p>
                <img
                  src={urlFor(advantagesFS?.iconS1).url()}
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20 absolute bottom-4 right-4 md:bottom-4 md:right-4 xl:bottom-8 xl:right-8"
                />
              </div>
            </div>
            <div className="bg-tfturquoise rounded-xl p-2 md:p-3 lg:p-4 xl:p-5 flex  justify-center w-52 h-52 md:w-68 md:h-64 lg:w-72 lg:h-72 xl:w-82 xl:h-82 relative">
              <div className="pr-2 md:pl-3 lg:pl-5 ">
                <h4 className="text-white text-right text-xl font-bold md:text-2xl lg:text-3xl pl-8">
                  {advantagesFS?.titleS2}
                </h4>
                <p className="text-white text-right text-md font-semibold md:text-lg lg:text-xl pt-1 md:pt-2 ">
                  {advantagesFS?.textS2}
                </p>
              </div>
              <img
                src={urlFor(advantagesFS?.iconS2).url()}
                className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-20 xl:h-20 absolute bottom-4 left-4 md:bottom-4 md:left-4 xl:bottom-8 xl:left-8 "
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
            <div className="bg-tforange rounded-xl p-2 md:p-4 lg:p-6 xl:p-8 flex items-center justify-center w-52 h-52 md:w-68 md:h-64 lg:w-72 lg:h-72 xl:w-82 xl:h-82">
              <img
                src={urlFor(advantagesFS?.iconS3).url()}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
              />
              <div className="pl-2 md:pl-4 lg:pl-6 xl:pl-8">
                <h4 className="text-white text-xs md:text-sm lg:text-md xl:text-lg">
                  {advantagesFS?.titleS3}
                </h4>
                <p className="text-white text-xs md:text-sm lg:text-md xl:text-lg">
                  {advantagesFS?.textS3}
                </p>
              </div>
            </div>
            <div className="bg-tfturquoise rounded-xl p-2 md:p-4 lg:p-6 xl:p-8 flex items-center justify-center w-52 h-52 md:w-68 md:h-64 lg:w-64 lg:h-64 xl:w-82 xl:h-82">
              <div className="pr-2 md:pr-4 lg:pr-6 xl:pr-8">
                <h4 className="text-white text-xs md:text-sm lg:text-md xl:text-lg">
                  {advantagesFS?.titleS4}
                </h4>
                <p className="text-white text-xs md:text-sm lg:text-md xl:text-lg">
                  {advantagesFS?.textS4}
                </p>
              </div>
              <img
                src={urlFor(advantagesFS?.iconS4).url()}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
