"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Category } from "../../types/category";
import { notFound, usePathname } from "next/navigation";
import { Fragment } from "react";

type CategoriesProps = {
  categoriesWithPosts: Category[];
};
export const Categories = ({ categoriesWithPosts }: CategoriesProps) => {
  const pathname = usePathname();

  if (!categoriesWithPosts || categoriesWithPosts.length === 0)
    return notFound();

  return (
    <div className="flex justify-center">
      <>
        <Link
          href="/"
          className={cn({
            "font-semibold": pathname === "/",
          })}
        >
          Tout
        </Link>
        <span className="ml-4">/</span>
      </>

      {categoriesWithPosts.map((categoryWithPosts, idx) => {
        return (
          <Fragment key={idx}>
            <Link
              className={cn("ml-4", {
                "font-semibold":
                  pathname === `/categorie/${categoryWithPosts.slug}`,
              })}
              href={`/categorie/${categoryWithPosts.slug}`}
            >
              {categoryWithPosts.title}
            </Link>
            {idx !== categoriesWithPosts.length - 1 && (
              <span className="ml-4"> / </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
