import { IWork } from "@/types/types";

export const devopslabData = {
  id: "devopslab",
  title: "DevOpsLab",
  description: "Build your next project's DevOps stack with a stack builder.",
  visitUrl: "https://my-devops-lab.com",
  previewImg: "devopslab.jpg",
  stacks: ["Next.js", "TypeScript", "React Flow", "Tailwind CSS", "AWS"],
};

export const linkinbioData = {
  id: "links",
  title: "Links",
  description:
    "Putting everything you create and share in one beautifully designed link.",
  source: "https://github.com/AltairLv/links",
  visitUrl: "https://link.losted.dev",
  previewImg: "links.jpg",
  stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer-motion", "Vercel"],
};

export const markdownData = {
  id: "markdown",
  title: "NoteSea",
  description: "Little markdown application which allows to take notes.",
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

export const allWork: IWork[] = [devopslabData, markdownData, linkinbioData];
