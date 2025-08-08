import Image from "next/image";
import { Navbar } from "./page-components/navbar";
import { Hero } from "./page-components/hero";
import { About } from "./page-components/about";
import { Services } from "./page-components/services";
import {
  ABOUT_QUERYResult,
  ADVANTAGES_FS_QUERYResult,
  B2B_QUERYResult,
  ENTERPRISE_QUERYResult,
  HERO_QUERYResult,
  PRIVATE_HOMES_QUERYResult,
} from "@/sanity/types";
import { sanityFetch } from "@/sanity/live";
import {
  B2B_QUERY,
  ENTERPRISE_QUERY,
  HERO_QUERY,
  PRIVATE_HOMES_QUERY,
  ADVANTAGES_FS_QUERY,
  ABOUT_QUERY,
} from "@/sanity/queries";
import AdvantagesFS from "./page-components/advantagesFS";

export default async function Home() {
  const { data: hero } = (await sanityFetch({ query: HERO_QUERY })) as {
    data: HERO_QUERYResult;
  };
  const { data: privateHomes } = (await sanityFetch({
    query: PRIVATE_HOMES_QUERY,
  })) as {
    data: PRIVATE_HOMES_QUERYResult;
  };
  const { data: enterprise } = (await sanityFetch({
    query: ENTERPRISE_QUERY,
  })) as {
    data: ENTERPRISE_QUERYResult;
  };
  const { data: b2b } = (await sanityFetch({ query: B2B_QUERY })) as {
    data: B2B_QUERYResult;
  };
  const { data: advantagesFS } = (await sanityFetch({
    query: ADVANTAGES_FS_QUERY,
  })) as {
    data: ADVANTAGES_FS_QUERYResult;
  };
  const { data: about } = (await sanityFetch({
    query: ABOUT_QUERY,
  })) as {
    data: ABOUT_QUERYResult;
  };

  return (
    <main>
      <section className="overflow-hidden">
        {" "}
        <Hero hero={hero} />
      </section>
      <section className="overflow-hidden">
        {" "}
        <Services
          privateHomes={privateHomes}
          enterprise={enterprise}
          b2b={b2b}
        />
      </section>
      <section className="overflow-hidden">
        {" "}
        <AdvantagesFS advantagesFS={advantagesFS} />
      </section>
      <section className="overflow-hidden">
        {" "}
        <About about={about} />
      </section>
    </main>
  );
}
