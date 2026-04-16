import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Mostafa A. Saleh",
  description: "My Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        <main className="min-h-dvh w-full max-w-[100vw] bg-background flex flex-col premium-gradient overflow-x-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
