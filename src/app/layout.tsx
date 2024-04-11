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
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: "https://cdn.sanity.io/images/oqnh3zqe/production/3fc58161898112d794cc883ca8e30af47da32884-2421x512.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "Studio bleuvert",
    title: "Studio bleuvert",
    description: "Studio d'architecture d'intérieur et décoration à Pau",
    creator: "@matthieutricoire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "overflow-y-scroll min-h-screen flex flex-col",
          raleway.className,
        )}
      >
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
