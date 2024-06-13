import Image from "next/image";

type LogoProps = {
  footer?: boolean;
};
export const Logo = ({ footer }: LogoProps) => {
  return (
    <>
      <Image
        src="/logo/logo-no-text.svg"
        width={300}
        height={80}
        alt="logo"
        className="hidden md:block max-h-20"
      />

      <Image
        src="/logo/logo-no-text.svg"
        width={200}
        height={80}
        alt="logo"
        className=" md:hidden"
      />
    </>
  );
};
