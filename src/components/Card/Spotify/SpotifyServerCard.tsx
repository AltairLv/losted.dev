import Image from "next/image";
import clsx from "clsx";
import { MusicIcon } from "@/components/Icons";
import { IMetric } from "@/types/types";

const SpotifyServerCard = ({ spotify }: { spotify: IMetric }) => {
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
      <div className="flex flex-col w-fit max-w-[120px]">
        <a
          href={spotify.songUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="w-fit max-w-[120px] font-semibold text-sm truncate hover:underline underline-offset-2 hover:text-neutral-700 dark:hover:text-neutral-200"
          title={spotify.title}
        >
          {spotify.title}
        </a>
        <p className="text-xs truncate">{spotify.album}</p>

        <p className="text-xs truncate">by {spotify.artist}</p>
      </div>
      <div>
        <div
          className={clsx(
            spotify.isPlaying
              ? "text-green-500 animate-swing"
              : "text-orange-300"
          )}
        >
          <MusicIcon />
        </div>
      </div>
    </div>
  );
};

export default SpotifyServerCard;
