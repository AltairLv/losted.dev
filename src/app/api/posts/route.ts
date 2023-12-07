import { NextResponse } from "next/server";
import { db } from "@/lib/db/prisma";
import { getAuthSession } from "@/lib/auth/auth";

export async function POST(request: Request): Promise<Response> {
  const { message, username } = await request.json();
  const session = await getAuthSession();

  const dbUser = await db.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  if (!session?.user || !dbUser) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  await db.post.create({
    data: {
      authorId: dbUser?.id,
      content: message,
      name: username,
    },
  });

  return NextResponse.json("Request successfully sent.", { status: 200 });
}
