import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectThumbnail } from "@/types/project";
import { ProjectCard } from "@/components/project/project-card";
import { Typography } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";

type LastProjectsProps = {
  projects: ProjectThumbnail[];
};

export const LastProjects = ({ projects }: LastProjectsProps) => {
  return (
    <section className="flex flex-col items-center">
      <Typography variant="h2" component="h2" className="border-none">
        Nos dernières réalisations
      </Typography>

      <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-4 gap-[20px] pb-[32px]">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} lastProject />
          </div>
        ))}

        <Link href={`/projets/`}>
          <Card className="max-w-2xl group h-full w-full border-0 overflow-hidden rounded-none hover:shadow-none">
            <CardContent className="p-0 relative w-full aspect-[1.33] flex flex-col items-center justify-center bg-gray-50 gap-4">
              <ArrowRight className="size-10 text-muted-foreground group-hover:translate-x-2 transition" />
              <div className="font-title">Voir tous nos projets</div>
            </CardContent>
          </Card>
        </Link>
        {/* <Link */}
        {/*   href={"/projets"} */}
        {/*   className="w-full h-full bg-gray-50/50 rounded-md flex flex-col items-center justify-center group hover:bg-gray-50 transition" */}
        {/* > */}
        {/*   <ArrowRight className="size-10 text-muted-foreground group-hover:translate-x-2 transition" /> */}
        {/*   <div className="font-title">Voir tous nos projets</div> */}
        {/* </Link> */}
      </div>
    </section>
  );
};
