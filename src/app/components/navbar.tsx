import Link from "next/link";
import { BurgerMenu } from "./burger-menu";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50 ">
      <nav className="flex items-center justify-between align-items text-lg md:text-2xl tracking-wide h-16 sm:h-20 px-3 max-w-screen overflow-hidden">
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none md:-translate-x-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
        >
          <img
            className="w-auto h-16 object-contain sm:p-3"
            src="/img/logo-cut.png"
          ></img>
        </Link>

        <ul className="items-center gap-4 lg:gap-9 hidden md:flex ml-auto">
          <li>
            <Link href="/#gallery">Galerie</Link>
          </li>
          <li>
            <Link href="/#about">Über uns</Link>
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
