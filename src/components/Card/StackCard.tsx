import { IStack } from "@/types/types";

const StackCard = (props: IStack) => {
  return (
    <div className="group relative font-sans w-11/12 py-2 h-fit sm:h-[100px] border dark:border-BorderLight border-BorderDark dark:hover:shadow-white/20 hover:shadow-black/20 hover:shadow-sm my-2 hover:scale-[1.01] duration-150 cursor-default">
      <div className="mx-4 my-1.5 flex flex-row items-start">
        <div className="mt-2">
          <props.icon />
        </div>
        <div className="ml-4">
          {props.favorite === true ? (
            <span className="w-fit font-bold">{props.title} ⭐</span>
          ) : (
            <span className="font-bold">{props.title}</span>
          )}
          <p>{props.description}</p>
        </div>
      </div>
      <div className="border-zinc-400 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-all duration-100 ease-in h-2.5 w-2.5 border-l border-t absolute left-[-1px] top-[-1px] rotate-0" />
      <div className="border-zinc-400 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-all duration-100 ease-in h-2.5 w-2.5 border-l border-t absolute right-[-1px] top-[-1px] rotate-90" />
      <div className="border-zinc-400 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-all duration-100 ease-in h-2.5 w-2.5 border-l border-t absolute bottom-[-1px] left-[-1px] -rotate-90" />
      <div className="border-zinc-400 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-all duration-100 ease-in h-2.5 w-2.5 border-l border-t absolute bottom-[-1px] right-[-1px] rotate-180" />
    </div>
  );
};

export default StackCard;
