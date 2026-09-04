import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "JF World Trading | Napkins, Towels & Cleaning Cloths",
  description:
    "JF World Trading manufactures and supplies napkins, towels, gamchas, aprons, cleaning cloth dusters, rumal and floor cloths in Meerut.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <a
          className="floating-whatsapp"
          href={`https://wa.me/${business.phoneIntl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <Image src="/whatsapp_icon.png" alt="" width={56} height={56} priority />
        </a>
        <Footer />
      </body>
    </html>
  );
}
