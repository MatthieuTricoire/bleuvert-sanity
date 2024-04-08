import { NavbarConfig } from "@/config/navbar-config";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavbarMobileNavLink } from "./navbar-mobile-nav-link";

const NavbarMobile = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="cursor-pointer md:hidden text-black" onClick={toggleMenu}>
        <Menu className="text-primary" />
      </div>

      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.div
            variants={NavbarConfig.menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen bg-primary origin-top text-black py-8 px-2"
          >
            <div className="flex h-full flex-col">
              <X
                onClick={toggleMenu}
                className="cursor-pointer self-end text-white size-8"
              />
              <motion.div
                variants={NavbarConfig.containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-end px-4 gap-4"
              >
                {NavbarConfig.menus.map((item, idx) => {
                  return (
                    <div key={idx} className="overflow-hidden">
                      <NavbarMobileNavLink
                        key={idx}
                        title={item.label}
                        href={item.href}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
