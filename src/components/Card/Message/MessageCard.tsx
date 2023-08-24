import { formatDistance } from "date-fns";
import { IMessage } from "@/types/types";

const MessageCard = ({ name, content, createdAt }: IMessage) => {
  return (
    <div className="space-y-1 mb-4">
      <div className="w-fit text-black dark:text-white break-words">
        <span className="mr-2">{name} &middot;</span>
        {content}
        <p className="text-neutral-500 text-xs">
          {formatDistance(new Date(createdAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
