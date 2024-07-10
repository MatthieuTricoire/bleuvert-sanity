import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Project } from "@/types/project";

type BreadcrumbComponentProps = {
  project: Project;
};
export const BreadcrumbComponent = ({ project }: BreadcrumbComponentProps) => {
  return (
    <Breadcrumb className="self-start mx-auto">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{project.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
