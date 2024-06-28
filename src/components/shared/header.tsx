import { Navbar } from "./navbar";
import { Logo } from "./logo";
import Link from "next/link";
import { MaxWidthContainer } from "../max-width-container";

export const Header = () => {
  return (
    <header className="">
      <MaxWidthContainer className=" ">
        <div className="w-full flex justify-between h-[80px] items-center ">
          <Link href="/">
            <Logo />
          </Link>
          <Navbar />
        </div>
      </MaxWidthContainer>
    </header>
  );
};
