import Link from "next/link";

export function Hero() {
  return (
    <section
      className="pt-20 sm:pt-32 bg-[url('/img/hero-bg.png')] 
    bg-cover bg-top md:bg-center bg-no-repeat md:h-screen h-[90vh] flex flex-col  items-center"
    >
      <div className="text-center mx-6 mt-16 sm:mx-8 sm:mt-16 md:m-16 lg:m-18">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide">
          Komplettlösungen für{" "}
          <span className="text-tforange">Photovoltaik</span> und{" "}
          <span className="text-tforange">Energiesystemen</span> – von der
          Planung bis zur Inbetriebnahme.
        </h1>
      </div>
      <Link href="/kontakt">
        <button className="font-bold text-xl md:text-3xl lg:text-3xl xl:text-4xl bg-tforange py-3 px-8 sm:px-12 lg:px-20 rounded-2xl text-white tracking-wide absolute bottom-40  md:bottom-40 lg:bottom-48 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-125 transition-transform duration-200 text-shadow-lg">
          Jetzt kontaktieren
        </button>
      </Link>
    </section>
  );
}
