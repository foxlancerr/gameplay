import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google'
const poppin = Poppins({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "Gamply | Leading Game Development Community for Creators & Enthusiasts",
  description: "Join Gamply, the top-rated game development community where creators and gaming enthusiasts collaborate, share resources, and bring innovative gaming ideas to life. Explore tutorials, tools, and a vibrant community.",
  keywords: [
    "game development community",
    "game developers",
    "game development tutorials",
    "gaming enthusiasts",
    "indie game development",
    "game creation tools",
    "collaborative game design",
    "Gamply community",
    "innovative games",
    "game design resources"
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppin.className} antialiased flex flex-col min-h-screen`}
      >
        <Header></Header>
        <main className="flex-grow sm:px-28 px-5">
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
