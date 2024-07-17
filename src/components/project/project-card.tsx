import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ProjectThumbnail } from "@/types/project";

type ProjectProps = {
  project: ProjectThumbnail;
  lastProject?: boolean;
};

export const ProjectCard = ({ project, lastProject }: ProjectProps) => {
  return (
    <Link key={project._id} href={`/projet/${project.slug}`} className="place-items-center">
      <Card className="max-w-2xl group h-full w-full border-0 overflow-hidden rounded-none hover:shadow-none">
        <CardContent className="p-0 relative w-full aspect-[1.33]">
          {project.mainImageUrl && project.mainImageUrl.src && (
            <Image
              className="object-cover object-center  group-hover:opacity-90 transition "
              src={project.mainImageUrl.src}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 20vw"
              priority
              blurDataURL={project.mainImageUrl.blurDataUrl}
              alt={`Image de couverture du projet ${project.title}`}
              fill
            />
          )}
        </CardContent>
        <CardHeader className="p-0">
          <CardTitle className="font-normal  font-title text-lg tracking-widest mt-2 ">
            <div className="text-center group-hover:font-medium">{project.title}</div>
            {!lastProject && (
              <div className="text-center font-light text-sm">{project.subtitle}</div>
            )}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
