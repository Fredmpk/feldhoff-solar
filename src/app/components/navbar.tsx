import Link from "next/link";
import { BurgerMenu } from "./burger-menu";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50 ">
      <nav className="flex items-center justify-between align-items text-lg md:text-2xl tracking-wide h-20 sm:h-32 px-3 max-w-screen overflow-hidden">
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none md:-translate-x-0 "
        >
          <img
            className="w-auto h-20 sm:h-28 object-contain sm:pl-3 pt-1 pr-8 pb-3 md:pl-8 lg:pl-16"
            src="/img/logo-sonne.png"
          ></img>
        </Link>

        <ul className=" gap-5 md:gap-10 lg:gap-20 pt-9 lg:pt-8 hidden md:flex ml-auto font-bold md:text-sm lg:text-md xl:text-lg pr-3 tracking-widest">
          <li>
            <Link href="/#offers">Leistungen</Link>
          </li>
          <li>
            <Link href="/#advantages">Vorteile</Link>
          </li>

          <li>
            <Link href="/#company">Unternehmen</Link>
          </li>
          <li>
            <Link href="/#contact">Kontakt</Link>
          </li>
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  );
}
