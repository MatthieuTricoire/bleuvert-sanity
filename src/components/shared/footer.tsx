import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-bleuvert-light-gray mt-10 py-4 text-black flex flex-col items-center gap-4">
      <Link href="#top">
        <Image
          className=""
          src={"/logo/Favicon.svg"}
          alt="Logo bleuvert"
          width={64}
          height={64}
        />
      </Link>
      <div className="text-sm">© 2023 · Tous droits réservés</div>
    </footer>
  );
};
