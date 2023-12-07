import Image from "next/image";
import { ISpotifyArtist } from "@/types/types";

export const metadata = {
  title: "Spotify",
  description: "My Spotify stats, top artists and top tracks.",
};

async function getData() {
  try {
    const response = await fetch("https://losted.dev/api/spotify/artists", {
      next: { revalidate: 3600 * 24 },
    });
    return await response.json();
  } catch (err) {
    return null;
  }
}

export default async function SpotifyPage() {
  const data = await getData();
  return (
    <>
      <p className="mb-4 mt-5 text-center">Looks like you are curious 👀</p>
      <h2 className="text-xl mt-5">· Top Artists:</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-lg gap-x-12 gap-y-5 p-5 md:p-8 mx-auto place-items-center">
        {data?.map((artist: ISpotifyArtist, index: number) => {
          return (
            <a
              key={index}
              href={artist.url}
              target="_blank"
              rel="noopener"
              className="group relative flex flex-col items-center justify-center border border-black/10 dark:border-white/10 p-5 pb-3 md:p-10 md:pb-6 rounded"
            >
              <div className="absolute top-1 left-1.5 text-xs dark:text-white/20 text-black/30">
                {index + 1}.
              </div>
              <div className="relative w-44 h-44 md:w-24 md:h-24 mt-2 mb-1 rounded border border-neutral-400 dark:border-neutral-800 overflow-hidden">
                <Image
                  src={artist.coverImg}
                  alt={artist.name}
                  blurDataURL={artist.coverImg}
                  fill={true}
                  className="group-hover:scale-105 ease-in-out duration-300"
                  priority
                />
              </div>
              <span className="text-base md:text-sm">{artist.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
