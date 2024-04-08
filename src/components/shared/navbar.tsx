"use client";
import { NavbarConfig } from "@/config/navbar-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMobile from "./navbar-mobile";

export const Navbar = () => {
  let pathname = usePathname();
  if (pathname.startsWith("/categorie")) {
    pathname = "/";
  }
  return (
    <nav>
      <div className="md:flex hidden gap-8 text-gray-700 ">
        {NavbarConfig.menus.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn("hover:text-primary font-normal text-xl", {
              "text-primary underline font-semibold": pathname === item.href,
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <NavbarMobile />
    </nav>
  );
};
