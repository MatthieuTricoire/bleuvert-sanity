"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import { ProjectThumbnail } from "@/types/project";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";

type CategoriesProps = {
  categoriesList: Category[];
  projectsByCategory: ProjectThumbnail[];
};

export const Categories = ({ categoriesList }: CategoriesProps) => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categorie");

  if (!categoriesList || categoriesList.length === 0) return notFound();
  //TODO: Ajouter une 404 spécifique

  return (
    <ul className="flex justify-center my-5 lg:mb-20 gap-4">
      {categoriesList.map((category, idx) => {
        return (
          <li key={idx} className="list-none flex gap-4 items-center">
            {/* <li key={idx} className="list-none first:ml-0 ml-4"> */}
            <Link
              className={cn("font-title text-base sm:text-lg", {
                "text-primary": category.slug === selectedCategory,
                "hover:underline": category.slug !== selectedCategory
              })}
              href={
                category.slug === selectedCategory
                  ? `/projets`
                  : `/projets?categorie=${category.slug}`
              }
            >
              {category.title}
            </Link>
            {idx !== categoriesList.length - 1 && (
              <span className=""> / </span>
            )}
          </li>

        );
      })}
    </ul>
  );
};
