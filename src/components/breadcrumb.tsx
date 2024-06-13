"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import React from "react";

export const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const splittedPath = pathname.trim().split("/");

  const breadcrumbItems: { title: string; href: string }[] = [
    { title: "ACCUEIL", href: "" },
  ];

  splittedPath.forEach((split) => {
    if (split.length === 0) return;
    breadcrumbItems.push({
      title: split.replace("-", " ").toUpperCase(),
      href: split,
    });
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, idx, breadcrumbItems) => {
          return (
            <React.Fragment key={idx}>
              {idx !== breadcrumbItems.length - 1 ? (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/${item.href}`}>
                      {item.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
