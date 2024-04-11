import Image from "next/image";
import { Navbar } from "./navbar";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 border-b border-b-primary ">
      <header className="w-full flex justify-between h-[80px] items-center">
        <Logo />
        <Navbar />
      </header>
    </div>
  );
};
