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
    <div className="flex justify-center">
      {categoriesList.map((category, idx) => {
        return (
          <li key={idx} className="list-none hightlight">
            <Link
              className={cn("ml-4 font-title", {
                " highlight-container ": category.slug === selectedCategory,
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
              <span className="ml-4"> / </span>
            )}
          </li>
        );
      })}
    </div>
  );
};
