import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio bleuvert",
  description: "Studio d'architecture d'intérieur et décoration à Pau",
  openGraph: {
    title: "Studio bleuvert",
    siteName: "Studio bleuvert",
    type: "website",
    images: "main-logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "Studio bleuvert",
    title: "Studio bleuvert",
    description: "Studio d'architecture d'intérieur et décoration à Pau",
    creator: "@matthieutricoire",
    images: {
      url: "https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png",
      alt: "Preview image for Dave Gray",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col", raleway.className)}>
        <Header />
        <main className=" flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-2">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
