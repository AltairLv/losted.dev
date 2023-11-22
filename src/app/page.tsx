import { Suspense } from "react";
import ProfileCard from "@/components/Card/ProfileCard";
import { LinkButton } from "@/components/Button/Button";
import Spotify from "@/components/Card/Spotify/Spotify";
import SpotifySkeletonCard from "@/components/Card/Spotify/SpotifySkeletonCard";
import Link from "next/link";
import { Globe } from "@/components/Globe";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <ProfileCard />

      <div className="flex flex-col h-auto my-4 space-y-4 md:space-y-0 md:space-x-10 items-center md:flex-row justify-between md:justify-center">
        <LinkButton href="/work" title="My Work" />
        <LinkButton href="/stack" title="Stack" />
      </div>
      <Globe />
      <Link
        href="/guestbook"
        className="mt-5 mx-auto text-xs text-neutral-600 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-300"
      >
        You can sign my portfolio here
      </Link>
      <Suspense fallback={<SpotifySkeletonCard />}>
        <div className="flex my-10 justify-center">
          <Spotify />
        </div>
      </Suspense>
    </>
  );
}
