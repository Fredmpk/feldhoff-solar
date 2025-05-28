import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Gewerbe } from "./components/gewerbe";
import { Privat } from "./components/privat";
import { B2B } from "./components/b2b";
import { About } from "./components/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gewerbe />
      <Privat />
      <B2B />
      <About />
    </main>
  );
}
