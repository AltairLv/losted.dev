import { workSum } from "@/data/info";
import { allProject, allWork } from "@/data/work";
import WorkItemCard from "@/components/Card/WorkItemCard";
import { IProject, IWork } from "@/types/types";
import ProjectItemCard from "@/components/Card/ProjectItemCard";

export const metadata = {
  title: "Work",
  description: "Here, you can find the projects he's been working on.",
};

export default function WorkPage() {
  return (
    <>
      <p className="mb-4 mt-5 text-center">{workSum()}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center my-6">
        {allWork.map((project: IWork, index) => (
          <WorkItemCard
            key={index}
            link={project.id}
            title={project.title}
            thumbnail={project.previewImg}
          />
        ))}
      </div>
      <h2 className="text-base mt-5">· More Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center my-6">
        {allProject.map((project: IProject, index) => (
          <ProjectItemCard
            key={index}
            title={project.title}
            description={project.description}
            more={project.more}
            source={project.source}
          />
        ))}
      </div>
    </>
  );
}
