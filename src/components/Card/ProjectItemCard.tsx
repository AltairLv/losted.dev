import { IProject } from "@/types/types";
import { GitHubIcon } from "@/components/Icons";

const ProjectItemCard = ({ title, description, more, source }: IProject) => {
  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex flex-col space-y-1 mx-4 mt-2 mb-4 rounded border-BorderDark dark:border-BorderLight hover:border-neutral-800 hover:dark:border-neutral-400 border px-2.5 py-4 text-sm transition-all duration-300 ease-in-out"
    >
      <h2 className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition after:duration-300 ease-in-out after:origin-left">
        {title}
      </h2>
      <p className="text-xs dark:text-neutral-300">{description}</p>

      <div className="inline-flex gap-2">
        {more.map((item, index) => (
          <span key={index} className="text-xs dark:text-neutral-300">
            {item}
            {index < more.length - 1 && <span> · </span>}
          </span>
        ))}
      </div>
      <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 ease-in-out duration-300">
        <GitHubIcon />
      </div>
    </a>
  );
};

export default ProjectItemCard;
