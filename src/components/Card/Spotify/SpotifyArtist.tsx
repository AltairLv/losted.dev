import Image from "next/image";

const SpotifyArtist = ({
  name,
  cover,
  url,
  index,
}: {
  name: string;
  cover: string;
  url: string;
  index: number;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group relative flex flex-col items-center justify-center w-36 h-40 border border-black/10 dark:border-white/10 rounded"
    >
      <div className="absolute top-1 left-1.5 text-xs dark:text-white/20 text-black/30">
        {index + 1}.
      </div>
      <div className="relative w-20 h-20 md:w-24 md:h-24 mt-3.5 mb-1 rounded border border-neutral-400 dark:border-neutral-800 overflow-hidden">
        <Image
          src={cover}
          alt={name}
          blurDataURL={cover}
          fill={true}
          className="group-hover:scale-105 ease-in-out duration-300"
          priority
        />
      </div>
      <span className="text-base md:text-sm">{name}</span>
    </a>
  );
};

export default SpotifyArtist;
