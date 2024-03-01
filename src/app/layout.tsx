import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

const font = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commmunix",
  description: "Website created by DesignNDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <Navbar />
          <div className="w-full py-[125px] px-4">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
