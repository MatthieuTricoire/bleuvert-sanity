import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src="/logo.svg"
        width={400}
        height={80}
        alt="logo"
        className="hidden md:block"
      />

      <Image
        src="/logo.svg"
        width={200}
        height={80}
        alt="logo"
        className=" md:hidden"
      />
    </>
  );
};
