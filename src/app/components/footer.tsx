import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-tforange flex sm:flex-row flex-col items-center justify-between w-full py-4 relative gap-4">
      <img
        src="/img/logo-cut.png"
        alt="Logo Feldhoff-Solar"
        className="w-1/2 sm:w-1/3 sm:px-4 md:pl-4 lg:p-8 xl:px-16 "
      />
      <div className="sm:absolute sm:bottom-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-1/2">
        <Link href="/kontakt">
          <button className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl bg-tfturquoise py-3 px-8 sm:px-4 md:px-6 lg:px-12 xl:px-20 rounded-2xl text-white tracking-wide  cursor-pointer hover:scale-125 transition-transform duration-200 text-shadow-lg">
            Jetzt kontaktieren
          </button>
        </Link>
      </div>
      <div className="flex flex-col font-bold pr-4 md:pr-12 lg:pr-16 gap-4 sm:text-xs md:text-sm xl:text-base">
        <div className="flex flex-row justify-between gap-4 sm:gap-0">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
        <div className="text-center font-semibold">
          copyright © feldhoff-solar 2025
        </div>
      </div>
    </div>
  );
}
