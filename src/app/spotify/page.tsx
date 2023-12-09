import { ISpotifyArtist, ISpotifyTrack } from "@/types/types";
import SpotifyArtist from "@/components/Card/Spotify/SpotifyArtist";
import { getTopSpotify } from "@/lib/spotify/metrics";
import NotFound from "@/app/not-found";
import SpotifyTrack from "@/components/Card/Spotify/SpotifyTrack";

export const metadata = {
  title: "Spotify",
  description: "My Spotify stats, top artists and top tracks.",
};

export default async function SpotifyPage() {
  const data = await getTopSpotify();

  if (!data) return NotFound();

  return (
    <>
      <p className="mb-4 mt-5 text-center">Looks like you are curious 👀</p>
      <h2 className="text-xl mt-5">· Top Artists:</h2>
      <div className="grid grid-cols-2 max-w-lg md:gap-x-12 gap-y-5 p-5 md:p-8 mx-auto place-items-center">
        {data.artists?.map((artist: ISpotifyArtist, index: number) => (
          <SpotifyArtist
            key={index}
            name={artist.name}
            cover={artist.coverImg}
            url={artist.url}
            index={index}
          />
        ))}
      </div>
      <h2 className="text-xl mt-5">· Top Tracks:</h2>
      <div className="grid grid-cols-1 max-w-lg gap-x-12 gap-y-5 p-5 md:p-8 mx-auto place-items-center">
        {data.tracks?.map((track: ISpotifyTrack, index: number) => (
          <SpotifyTrack
            key={index}
            name={track.name}
            artists={track.artists}
            cover={track.coverImg}
            url={track.url}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
