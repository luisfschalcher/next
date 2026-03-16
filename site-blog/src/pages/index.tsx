import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header/>
    </div>
  );
}
