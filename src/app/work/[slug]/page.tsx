import React from "react";
import { allWork } from "@/data/work";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkItemCard from "@/components/Card/WorkItemCard";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/Icons";
import { WorkInterface } from "@/types/types";

function getWork(slug: string): WorkInterface | undefined {
  const projectId = slug;
  return allWork.find((project: WorkInterface) => project.id == projectId);
}

export function generateStaticParams(): { slug: string }[] {
  return allWork.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = await getWork(params.slug);
  if (!project) {
    return;
  }
  return {
    title: project?.title,
    description: project?.description,
    openGraph: {
      title: `${project?.title} | Losted`,
      description: project?.description,
      siteName: "Losted",
      type: "website",
      url: `https://losted.dev/${project?.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project?.title} | Losted`,
      description: project?.description,
    },
  };
}

export default function Work({ params }: { params: { slug: string } }) {
  const project = getWork(params.slug);

  if (!project) {
    notFound();
  }
  return (
    <>
      <div className="flex flex-col my-6">
        <WorkItemCard thumbnail={project.previewImg} />
        <div className="mx-3">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="font-sans text-2xl underline underline-offset-4">
              {project.title}
            </h1>
            <a
              href={project.visitUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex font-sans font-bold px-3 py-1 items-center border border-BorderDark dark:border-BorderLight rounded-lg gap-2 hover:border-indigo-400 hover:text-neutral-700 dark:hover:text-neutral-200 duration-100"
            >
              VISIT <ArrowUpRightIcon />
            </a>
          </div>
          <p className="mb-2 text-base font-sans">{project.description}</p>
          <h2 className="text-xl font-sans">Stack 🛠️</h2>
          <div className="indent-2 mt-1 font-normal">
            {project.stacks.map((stack, index) => (
              <li key={index} className="text-base list-disc">
                {stack}
              </li>
            ))}
          </div>
        </div>
      </div>
      {project.source && (
        <div className="flex mx-auto">
          <a
            href={project.source}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center space-x-2 px-3 py-1.5 hover:text-neutral-700 dark:hover:text-neutral-200 border dark:border-BorderLight border-BorderDark rounded-lg"
          >
            {" "}
            <span>Source</span>
            <GitHubIcon />
          </a>
        </div>
      )}
    </>
  );
}
