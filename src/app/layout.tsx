import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://manoram.vercel.app"),
  title: "Manoram Baudel",
  description: "Hello World! I am a software developer and UI designer.",
  openGraph: {
    title: "Manoram Baudel",
    description: "Hello World! I am a software developer and UI designer.",
    siteName: "https://manoram.vercel.app",
    type: "website",
    images: ["/images/og_image.jpg"],
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
