import Link from "next/link";
import { RightArrowIcon } from "@/components/Icons";
import { ILinkButton } from "@/types/types";

export const LinkButton = ({ href, title }: ILinkButton) => {
  return (
    <Link
      href={href}
      scroll={true}
      className="group flex items-center justify-between w-48 md:w-40 py-2 px-4 hover:text-neutral-700 dark:hover:text-neutral-200 border-[1px] dark:border-BorderLight border-DarkBorder rounded-md transition-all"
    >
      {" "}
      {title}
      <div className="group-hover:translate-x-0.5 duration-100">
        <RightArrowIcon />
      </div>
    </Link>
  );
};
