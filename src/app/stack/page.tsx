import { stackSum } from "@/data/info";
import { allStack } from "@/data/stack";
import StackCard from "@/components/Card/StackCard";
import { IStack } from "@/types/types";

export const metadata = {
  title: "Stack",
  description: "Here you can find the tech stack he's working with.",
};

export default function StackPage() {
  return (
    <>
      <p className="mb-4 mt-5 text-center">{stackSum()}</p>
      <div className="flex flex-col w-full items-center mb-3">
        {allStack.map((stack: IStack) => (
          <StackCard
            key={stack.title}
            title={stack.title}
            favorite={stack.favorite}
            description={stack.description}
            icon={stack.icon}
          />
        ))}
      </div>
    </>
  );
}
