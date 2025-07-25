import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import {
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
} from "@/sanity/queries";
import AdvantagesFS from "./components/advantagesFS";

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

  return (
    <main>
      <Navbar />
      <Hero hero={hero} />
      <Services privateHomes={privateHomes} enterprise={enterprise} b2b={b2b} />
      <AdvantagesFS advantagesFS={advantagesFS} />
      <About />
    </main>
  );
}
