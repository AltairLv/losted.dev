import Image from "next/image";
import clsx from "clsx";
import { ISpotifyPlay } from "@/types/types";
import Link from "next/link";

const SpotifyServerCard = ({ spotify }: { spotify: ISpotifyPlay }) => {
  return (
    <div className="font-sans flex flex-row min-w-[250px] py-1 border-[1px] dark:border-BorderLight border-BorderDark rounded-md justify-between items-center space-x-3 px-2 z-10">
      <a
        href={spotify.songUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="h-11 w-11"
      >
        <Image
          src={spotify.albumImageUrl}
          alt={spotify.title}
          height={50}
          width={50}
          placeholder="blur"
          blurDataURL={spotify.albumImageUrl}
          priority
          className="rounded-sm object-contain hover:opacity-80"
        />
      </a>
      <div className="flex flex-col w-fit max-w-[150px]">
        <a
          href={spotify.songUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="w-fit max-w-[150px] font-semibold text-sm truncate hover:underline underline-offset-2 hover:text-neutral-700 dark:hover:text-neutral-200"
          title={spotify.title}
        >
          {spotify.title}
        </a>
        <p className="text-xs truncate">{spotify.album}</p>

        <p className="text-xs truncate">by {spotify.artist}</p>
      </div>
      <Link href={"/spotify"} prefetch={false} className="relative">
        <span className="absolute -top-9 left-0.5 flex h-2.5 w-2.5">
          <span
            className={clsx(
              spotify.isPlaying ? "animate-ping bg-green-500" : "bg-orange-300",
              "absolute inline-flex h-full w-full rounded-full opacity-75"
            )}
          ></span>
          <span
            className={clsx(
              spotify.isPlaying ? "bg-green-600" : "bg-orange-400",
              "relative inline-flex rounded-full h-2.5 w-2.5 "
            )}
          ></span>
        </span>
      </Link>
    </div>
  );
};

export default SpotifyServerCard;
