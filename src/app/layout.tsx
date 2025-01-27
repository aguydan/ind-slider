import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Stemps",
  description: "Online job searching platform",
};

const ppNeue = localFont({
  src: "../../public/assets/fonts/ppneuemontreal-book.woff",
  variable: "--font-pp-neue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${ppNeue.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
