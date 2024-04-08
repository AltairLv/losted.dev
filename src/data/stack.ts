import {
  NestIcon,
  NextIcon,
  PostgreIcon,
  PrismaIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/Icons";
import { IStack } from "@/types/types";

const reactjs = {
  title: "React.js",
  icon: ReactIcon,
  description: "A front end JavaScript library.",
};

const nextjs = {
  title: "Next.js",
  icon: NextIcon,
  favorite: true,
  description: "A React.js framework.",
};

const nestjs = {
  title: "NestJS",
  icon: NestIcon,
  favorite: true,
  description: "A progressive server-side framework.",
};

const tailwind = {
  title: "Tailwind",
  icon: TailwindIcon,
  favorite: true,
  description: "A CSS framework to build custom designs quickly.",
};

const typescript = {
  title: "TypeScript",
  icon: TypescriptIcon,
  favorite: true,
  description: "Development tool that enhances code quality.",
};
const prisma = {
  title: "Prisma",
  icon: PrismaIcon,
  favorite: true,
  description: "Powerful database toolkit.",
};

const postgre = {
  title: "PostgreSQL",
  icon: PostgreIcon,
  description: "An open-source relational database system.",
};
export const allStack: IStack[] = [
  nextjs,
  reactjs,
  nestjs,
  prisma,
  postgre,
  tailwind,
  typescript,
];
