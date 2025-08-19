import ContactForm from "@/app/kontakt/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/sanity/imageUrlBuilder";
import { sanityFetch } from "@/sanity/live";
import { HERO_QUERY, LEGAL_QUERY } from "@/sanity/queries";
import { HERO_QUERYResult, LEGAL_QUERYResult } from "@/sanity/types";
import React from "react";

export default async function Contact() {
  const { data: hero } = (await sanityFetch({ query: HERO_QUERY })) as {
    data: HERO_QUERYResult;
  };

  const { data: impressum } = (await sanityFetch({ query: LEGAL_QUERY })) as {
    data: LEGAL_QUERYResult;
  };
  return (
    <section
      className="pt-20 sm:pt-32 bg-cover bg-top md:bg-center bg-no-repeat flex flex-col rounded-b-lg "
      style={{
        backgroundImage: `url(${urlFor(hero?.heroImage).url()})`,
      }}
    >
      <div className="text-center mx-4 mt-4 sm:mx-6 sm:mt-6 md:m-4 lg:m-12 ">
        <h1 className="font-bold text-center text-lg md:text-xl lg:text-2xl xl:text-2xl tracking-wide">
          {hero?.heroTitle || ""}
        </h1>

        <div className="flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="flex w-full sm:w-2/3">
            {" "}
            <ContactForm />
          </div>
          <div className="w-full sm:w-1/3   p-4 ">
            <div className="w-full">
              <Card className=" bg-zinc-300 opacity-70 rounded-lg w-full">
                <CardContent className="p-6 space-y-4 w-full text-lg xl:text-xl text-black font-semibold text-left">
                  <h2 className="font-bold text-left text-lg  lg:text-xl xl:text-2xl tracking-wide">
                    Oder auf herkömmlichen Wege:
                  </h2>
                  <div>
                    <p>{impressum?.name}</p>
                  </div>
                  <div>
                    <p>{impressum?.street}</p>
                  </div>
                  <div>
                    <p>{impressum?.city}</p>
                  </div>
                  <div>
                    <p>{impressum?.mail}</p>
                  </div>
                  <div>
                    <p>{impressum?.tel}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
