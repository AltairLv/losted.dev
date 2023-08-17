import { Suspense } from "react";
import ProfileCard from "@/components/Card/ProfileCard";
import { LinkButton } from "@/components/Button/Button";
import Spotify from "@/components/Card/Spotify/Spotify";
import SpotifySkeletonCard from "@/components/Card/Spotify/SpotifySkeletonCard";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <ProfileCard />
      <div className="flex flex-col h-auto my-4 space-y-4 md:space-y-0 md:space-x-10 items-center md:flex-row justify-between md:justify-center">
        <LinkButton href="/work" title="My Work" />
        <LinkButton href="/stack" title="Stack" />
      </div>
      <Suspense fallback={<SpotifySkeletonCard />}>
        <div className="flex my-10 justify-center">
          <Spotify />
        </div>
      </Suspense>
    </>
  );
}
