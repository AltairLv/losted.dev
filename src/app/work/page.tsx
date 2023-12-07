import { workSum } from "@/data/info";
import { allWork } from "@/data/work";
import WorkItemCard from "@/components/Card/WorkItemCard";
import { IWork } from "@/types/types";

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
    </>
  );
}
