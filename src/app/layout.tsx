import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Manoram Baudel",
  description: "I am a software developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main min-h-screen text-sm font-medium text-neutral-700 flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
