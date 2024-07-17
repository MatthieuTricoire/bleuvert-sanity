"use client"
import { Navbar } from "./navbar";
import { Logo } from "./logo";
import Link from "next/link";
import { MaxWidthContainer } from "../max-width-container";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  console.log(pathname)

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous && latest > previous && latest > 250) {
      setHidden(true)
    } else if (latest < 250) {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden && pathname === process.env.NEXT_PUBLIC_URL ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed z-20 top-0 w-full bg-white/70",
        { "relative bg-white": pathname !== "/" }
      )} >
      <MaxWidthContainer className="xl:0">
        <div className="w-full flex justify-between h-[90px] items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Navbar />
        </div>
      </MaxWidthContainer>
    </motion.header >
  );
};
