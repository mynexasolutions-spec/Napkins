import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";

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
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
