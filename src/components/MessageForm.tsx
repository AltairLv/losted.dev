"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import generateEmoji from "@/lib/generateEmoji";
import JSConfetti from "js-confetti";

export const MessageForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const name = session?.user?.name;
  const [username, setUsername] = useState(name);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState("");
  const isMutating = isFetching || isPending;

  useEffect(() => {
    setUsername(hasWhiteSpace(name));
  }, [name]);

  function hasWhiteSpace(s: string | undefined | null) {
    if (s && s.indexOf(" ") >= 0) {
      return s.substring(0, s.indexOf(" "));
    } else if (s === null) {
      return generateEmoji();
    }
    return s;
  }

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    const body = { message, username };
    if (message.trim() === "") {
      setMessage("");
      setIsFetching(false);
      return 0;
    }
    try {
      await createPost(body);
      setMessage("");
      setIsFetching(false);
      startTransition(() => {
        router.refresh();
      });
      return new JSConfetti().addConfetti();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      style={{ opacity: !isMutating ? 1 : 0.7 }}
      className="relative max-w-[500px] text-md"
      onSubmit={handlePost}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={isPending}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="text"
        required
        className="pl-4 pr-24 py-2 mt-1 border block w-full border-neutral-600 dark:border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      {message && (
        <div className="w-full flex flex-col text-sm break-words mt-6 space-y-2">
          <h2>Preview:</h2>
          <div className="flex flex-col space-y-1 mb-4">
            <div className="w-full text-sm break-words">
              <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                {username} :
              </span>
              {message}
            </div>
          </div>
        </div>
      )}

      <button
        className="flex items-center justify-center absolute right-1.5 top-2.5 px-2 py-1 font-medium h-7 bg-neutral-800 dark:bg-neutral-700 text-white dark:text-neutral-100 rounded w-16"
        disabled={isMutating}
        type="submit"
      >
        Sign
      </button>
    </form>
  );
};

export const createPost = async (body: {
  message: string;
  username: string | undefined | null;
}) => {
  const response = await fetch(`/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
};
