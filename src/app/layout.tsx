import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
const lato = Lato({ weight: ["400", "700",], subsets: ["latin"] });
const garamong = Roboto({ weight: ["400", "500", "700",], subsets: ["latin"] });

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
          "overflow-y-scroll min-h-screen flex flex-col relative text-[#25110C]",
          `${raleway.variable}`,
          poppins.className,
          garamong.className
        )}
      >
        <Header />

        <main className="flex flex-col flex-1 ">{children}</main>

        <Footer />

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
