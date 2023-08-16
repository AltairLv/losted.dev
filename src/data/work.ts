import { WorkInterface } from "@/types/types";

export const devopslabData = {
  id: "devopslab",
  title: "DevOpsLab",
  description: "Build your next project's DevOps stack with a stack builder.",
  visitUrl: "https://my-devops-lab.com",
  previewImg: "devopslab.jpg",
  stacks: ["Next.js", "TypeScript", "React Flow", "Tailwind CSS", "AWS"],
};

export const linkinbioData = {
  id: "linkinbio",
  title: "Link in bio",
  description: "Set all your links in a single one page.",
  visitUrl: "https://link.losted.dev",
  previewImg: "link-in-bio.jpg",
  stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer-motion", "Vercel"],
};

export const markdownData = {
  id: "markdown",
  title: "NoteSea",
  description: "Small markdown application which allows to take notes.",
  visitUrl: "https://notesea.me",
  previewImg: "markdown.jpg",
  stacks: [
    "Next.js",
    "Tailwind CSS",
    "Express",
    "MongoDB",
    "Vercel",
    "AWS Lambda",
  ],
};

export const allWork: WorkInterface[] = [
  devopslabData,
  markdownData,
  linkinbioData,
];
