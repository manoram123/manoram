import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Manoram Baudel",
  description: "I am a software developer.",
  openGraph: {
    title: "Manoram Baudel",
    description:
      "Hey there, I'm Manoram Baudel. Web development is my passion—I thrive on crafting seamless, user-friendly websites that marry creativity with cutting-edge tech. I'm all about transforming ideas into captivating digital experiences.",
    siteName: "https://manoram.vercel.app",
    type: "website",
    images: ["/images/manoram.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="main min-h-screen text-sm dark:bg-neutral-950 dark:text-neutral-300 font-medium text-neutral-700 flex flex-col pb-24">
            <div className="fixed z-10 top-0 w-full h-14">
              <Navbar />
            </div>
            <div className="flex flex-col flex-1 mt-14">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
