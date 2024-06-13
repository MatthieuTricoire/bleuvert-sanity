"use client";
import { NavbarConfig } from "@/config/navbar-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMobile from "./navbar-mobile";

export const Navbar = () => {
  let pathname = usePathname();
  let mainCategory: string = "/";

  const splitedPath = pathname.split("/");

  if (splitedPath.length > 1) {
    mainCategory = splitedPath[1];
  }

  return (
    <nav>
      <div className="md:flex hidden gap-8 text-gray-700 font-title">
        {NavbarConfig.menus.map((item, idx) => {
          console.log("item", item);
          return (
            <Link
              href={`/${item.href}`}
              key={idx}
              className={cn("hover:text-primary font-normal text-xl", {
                "text-primary underline font-semibold":
                  mainCategory === item.href,
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <NavbarMobile />
    </nav>
  );
};
