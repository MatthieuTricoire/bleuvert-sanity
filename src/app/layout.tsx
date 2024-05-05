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
        <main className="flex flex-col flex-1 max-w-7xl w-full mx-auto">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
