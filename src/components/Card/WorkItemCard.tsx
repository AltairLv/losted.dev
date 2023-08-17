import Image from "next/image";
import Link from "next/link";
import { WorkItemInterface } from "@/types/types";

const WorkItemCard = ({ link, title, thumbnail }: WorkItemInterface) => {
  const previewImg = `/assets/work/${thumbnail}`;

  return (
    <div className="mt-2 mb-8 flex flex-col items-center">
      {link ? (
        <Link href={`/work/${link}`} scroll={true} className="group mx-4">
          {title && <h2 className="font-thin font-sans mb-4">{title} :</h2>}
          <div className="overflow-hidden rounded-lg">
            <Image
              src={previewImg}
              alt="Preview"
              className="object-cover rounded-md select-none hover:scale-[1.03] ease-in-out duration-200"
              width={640}
              height={360}
              priority
            />
          </div>
        </Link>
      ) : (
        <Image
          src={previewImg}
          alt="Preview"
          className="object-cover rounded-md w-11/12 lg:w-[600px] select-none"
          width={640}
          height={360}
          priority
        />
      )}
    </div>
  );
};

export default WorkItemCard;
