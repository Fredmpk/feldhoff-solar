export function Hero() {
  return (
    <section
      className="pt-16 sm:pt-20 bg-[url('/img/hero-bg.png')] 
    bg-cover bg-top md:bg-center bg-no-repeat md:h-screen h-[60vh] flex flex-col  items-center"
    >
      <h1 className="flex text-center justify-center font-bold m-6 sm:m-8 md:m-16 lg:m-18 sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wide">
        Komplettlösungen für Photovoltaik und Energiesystemen – von der Planung
        bis zur Inbetriebnahme.
      </h1>
      <button className="flex text-center font-bold text-bottom sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl bg-tforange p-3 rounded-full text-white tracking-wide">
        Jetzt kontaktieren
      </button>
    </section>
  );
}
