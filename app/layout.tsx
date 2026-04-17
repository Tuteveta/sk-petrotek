import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SK Proteck | Generator Services & Industrial Power Solutions",
  description:
    "SK Proteck — Papua New Guinea's trusted partner for generator filtering, cleaning, oil services, maintenance, and community infrastructure projects.",
  keywords: "generator services, PNG, Papua New Guinea, industrial power, generator maintenance, Gulf Province, school construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
