import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

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
    <html lang="en">
      <body className={`${ralewaySans.className} antialiased`}>{children}</body>
    </html>
  );
}
