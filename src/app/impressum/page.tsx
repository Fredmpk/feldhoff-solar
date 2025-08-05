import { sanityFetch } from "@/sanity/live";
import { LEGAL_QUERY } from "@/sanity/queries";
import { LEGAL_QUERYResult } from "@/sanity/types";
import Link from "next/link";

export default async function Impressum() {
  const { data: legal } = (await sanityFetch({
    query: LEGAL_QUERY,
  })) as {
    data: LEGAL_QUERYResult;
  };

  return (
    <div className=" flex flex-col items-center justify-center py-20 sm:py-32">
      <h1 className="font-bold text-center text-2xl md:text-3xl xl:text-4xl tracking-wide p-8 md:pb-8 xl:pb-4 ">
        Impressum
      </h1>
      <div className="text-left flex flex-col gap-2">
        <h2 className="font-bold text-center text-lg md:text-xl xl:text-2xl tracking-wide py-8 md:pb-8 xl:pb-4 ">
          Name und Kontaktdaten des Verantwortlichen:
        </h2>
        <p>{legal?.name}</p>
        <p>{legal?.street}</p>
        <p>{legal?.city}</p>
        <Link
          href={`tel:${legal?.tel}`}
          className="hover:text-green-500 hover:underline"
        >
          {legal?.tel}
        </Link>
        <Link
          href={`mailto:${legal?.mail}`}
          className="hover:text-blue-500 hover:underline"
        >
          {legal?.mail}
        </Link>
      </div>
    </div>
  );
}
