import type { Metadata } from "next";
import {Inter} from "next/font/google";
import '../styles/globals.css'
import clsx from "clsx";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Blogs Nextjs App",
  description: "Blogs create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={clsx(
      'text-white bg-black'
    )}>
      <body
        className={`${inter.className} bg-[#080809] transition ease antialiased`}
      >
        <Header />
        <main className="flex flex-col justify-center items-center mx-auto">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
