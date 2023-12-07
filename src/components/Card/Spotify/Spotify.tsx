import SpotifyClientCard from "./SpotifyClientCard";
import SpotifyServerCard from "./SpotifyServerCard";
import { ISpotifyPlay } from "@/types/types";

async function getSpotify(): Promise<ISpotifyPlay | null> {
  try {
    const response = await fetch("https://losted.dev/api/spotify/playing");
    return await response.json();
  } catch (err) {
    return null;
  }
}

export default async function Spotify() {
  const data = await getSpotify();
  if (!data) return null;

  return (
    <SpotifyClientCard playedAt={data.playedAt}>
      <SpotifyServerCard spotify={data} />
    </SpotifyClientCard>
  );
}
