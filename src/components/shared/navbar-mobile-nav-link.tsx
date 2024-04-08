import { NavbarConfig } from "@/config/navbar-config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarMobileNavLink = ({
  title,
  href,
  toggleMenu,
}: {
  title: string;
  href: string;
  toggleMenu: () => void;
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={NavbarConfig.mobileLinkVariants}
      className={cn(
        "text-4xl uppercase text-white font-semibold tracking-wide",
        {
          "text-white font-extrabold underline": pathname === href,
        },
      )}
    >
      <Link href={href} onClick={() => toggleMenu()}>
        {title}
      </Link>
    </motion.div>
  );
};
