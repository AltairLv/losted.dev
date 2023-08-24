import { getAuthSession } from "@/lib/auth";
import { SignIn, SignOut } from "@/components/Button/SignButton";
import { Suspense } from "react";
import { Messages } from "@/components/Card/Message/Messages";
import { MessageSkeletonCard } from "@/components/Card/Message/MessageSkeletonCard";
import { MessageForm } from "@/components/MessageForm";
import Provider from "@/components/Auth/AuthProvider";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Guestbook",
  description: "Her you can leave your mark, be part of a little story.",
};

export default async function GuestbookPage() {
  const session = await getAuthSession();
  console.log("Current Session : ", session?.user);
  return (
    <>
      <Provider>
        <div className="flex flex-col justify-center items-center mt-4 mb-8 md:mb-8 md:my-4 space-y-6 md:mt-5">
          {session?.user ? (
            <>
              <MessageForm />
              <SignOut />
            </>
          ) : (
            <div className="flex flex-col md:flex-row items-center md:space-x-5">
              <SignIn service={"Google"} />
              <p className="mb-2.5">Or</p>
              <SignIn service={"Github"} />
            </div>
          )}
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            Post your lovely message down here
          </p>
        </div>

        <Suspense fallback={<MessageSkeletonCard x={10} />}>
          <Messages />
        </Suspense>
      </Provider>
    </>
  );
}
