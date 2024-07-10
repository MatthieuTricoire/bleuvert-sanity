import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "body" | "ul";
  component?: "h1" | "h2" | "h3" | "div" | "span" | "ul" | "li" | "p" | "ul";
  children: ReactNode;
  className?: string;
};

export const Typography = ({
  variant = "body",
  component: Component = "div",
  children,
  className,
}: TypographyProps) => {
  let variantStyle: string;

  switch (variant) {
    case "h1":
      variantStyle =
        " font-title scroll-m-20 text-2xl font-medium tracking-tight lg:text-4xl lg:tracking-wide uppercase text-center  mt-10 lg:mb-4";
      break;
    case "h2":
      variantStyle =
        "font-title scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight  mt-10 mb-4";
      break;
    case "h3":
      variantStyle =
        "font-title scroll-m-20 text-lg md:text-2xl font-normal tracking-tight ";
      break;
    case "body":
      variantStyle = "leading-7 [&:not(:first-child)]:mt-4";
      break;
    case "ul":
      variantStyle = "my-6 ml-6 list-disc [&>li]:mt-2";
      break;
  }

  return (
    <Component className={cn(variantStyle, className)}>{children}</Component>
  );
};
