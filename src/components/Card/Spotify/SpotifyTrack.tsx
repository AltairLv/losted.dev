import Image from "next/image";

const SpotifyTrack = ({
  name,
  artists,
  cover,
  url,
  index,
}: {
  name: string;
  artists: string;
  cover: string;
  url: string;
  index: number;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group relative flex flex-row items-start w-full px-7 py-2 border border-black/10 dark:border-white/10 rounded"
    >
      <div className="absolute top-1 left-1.5 text-xs dark:text-white/20 text-black/30">
        {index + 1}.
      </div>
      <div className="relative flex-shrink-0 w-10 h-10 mt-2 mb-1 border border-neutral-400 dark:border-neutral-800 rounded overflow-hidden">
        <Image
          src={cover}
          alt={name}
          blurDataURL={cover}
          fill={true}
          className="group-hover:scale-105 ease-in-out duration-300"
          priority
        />
      </div>
      <div className="flex flex-col mt-1.5 ml-4">
        <span className="text-base md:text-sm line-clamp-1">{name}</span>
        <div className="inline-flex text-xs dark:text-gray-300">
          <span className="font-sans">by </span>
          <span className="ml-1 line-clamp-1">{artists}</span>
        </div>
      </div>
    </a>
  );
};

export default SpotifyTrack;
