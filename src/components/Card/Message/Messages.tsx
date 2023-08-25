import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { IMessage } from "@/types/types";
import MessageCard from "@/components/Card/Message/MessageCard";

const getGuestbook = async (): Promise<IMessage[]> => {
  const data = await db.post.findMany({
    take: 100,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      name: true,
      content: true,
      createdAt: true,
    },
  });

  return data;
};
export const Messages = async () => {
  const guests = await getGuestbook();

  if (!guests) {
    return notFound();
  }

  return (
    <>
      {guests.map((message: IMessage, index) => (
        <MessageCard
          key={index}
          content={message.content}
          createdAt={message.createdAt}
          name={message.name}
        />
      ))}
    </>
  );
};
