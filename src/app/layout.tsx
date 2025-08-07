import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { Navbar } from "./page-components/navbar";
import Footer from "./page-components/footer";
import { SanityLive } from "@/sanity/live";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "feldhoff-solar",
  description: "Komplettlösungen für Photovoltaik und Energiesysteme",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body
        className={`${ralewaySans.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
