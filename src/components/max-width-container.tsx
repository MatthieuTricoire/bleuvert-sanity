import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type MaxWidthContainterProps = {
  children: ReactNode;
  className?: string;
};
export const MaxWidthContainer = ({
  children,
  className,
}: MaxWidthContainterProps) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5",
        className,
      )}
    >
      {children}
    </div>
  );
};
