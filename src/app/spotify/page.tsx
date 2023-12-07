import { ISpotifyArtist } from "@/types/types";
import SpotifyArtist from "@/components/Card/Spotify/SpotifyArtist";

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
        {data?.map((artist: ISpotifyArtist, index: number) => (
          <SpotifyArtist
            key={index}
            name={artist.name}
            cover={artist.coverImg}
            url={artist.url}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
