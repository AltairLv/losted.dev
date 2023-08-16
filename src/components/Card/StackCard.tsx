import { StackInterface } from "@/types/types";

const StackCard = (props: StackInterface) => {
  return (
    <div className="font-sans w-11/12 md:w-2/3 py-2 border dark:border-BorderLight border-BorderDark dark:hover:shadow-white/20 hover:shadow-black/20 hover:shadow-sm rounded-lg my-2 hover:scale-[1.01] duration-150 cursor-default">
      <div className="mx-4 my-1.5 flex flex-row items-center">
        <div>
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
    </div>
  );
};

export default StackCard;
