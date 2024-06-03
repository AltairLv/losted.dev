import Image from "next/image";
import clsx from "clsx";
import { ISpotifyPlay } from "@/types/types";

const SpotifyServerCard = ({ spotify }: { spotify: ISpotifyPlay }) => {
  const { isPlaying } = spotify;
  return (
    <div className="relative font-sans flex flex-row min-w-[250px] py-1 border-[1px] dark:border-BorderLight border-BorderDark justify-between items-center space-x-3 px-2 z-10">
      <div
        className={clsx(
          isPlaying
            ? "border-zinc-400"
            : "border-zinc-400/40 dark:border-zinc-600",
          "border-zinc-400 h-3 w-3 border-l border-t absolute left-[-1px] top-[-1px] rotate-0"
        )}
      />
      <div
        className={clsx(
          isPlaying
            ? "border-zinc-400"
            : "border-zinc-400/40 dark:border-zinc-600",
          " h-3 w-3 border-l border-t absolute right-[-1px] top-[-1px] rotate-90"
        )}
      />
      <div
        className={clsx(
          isPlaying
            ? "border-zinc-400"
            : "border-zinc-400/40 dark:border-zinc-600",
          " h-3 w-3 border-l border-t absolute bottom-[-1px] left-[-13px] -rotate-90"
        )}
      />
      <div
        className={clsx(
          isPlaying
            ? "border-zinc-400"
            : "border-zinc-400/40 dark:border-zinc-600",
          "h-3 w-3 border-l border-t absolute bottom-[-1px] right-[-1px] rotate-180"
        )}
      />

      <a
        href={spotify.songUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="group h-11 w-11"
      >
        <Image
          src={spotify.albumImageUrl}
          alt={spotify.title}
          height={50}
          width={50}
          placeholder="blur"
          blurDataURL={spotify.albumImageUrl}
          priority
          className="rounded-sm object-contain group-hover:opacity-80"
        />
        <span className="absolute top-1 left-[58px] flex h-2.5 w-2.5">
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
    </div>
  );
};

export default SpotifyServerCard;
