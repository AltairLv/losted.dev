import SpotifyClientCard from "./SpotifyClientCard";
import SpotifyServerCard from "./SpotifyServerCard";
import { fetchSpotifySchema } from "@/lib/zod/schema";

async function getSpotify() {
  try {
    const response = await fetch("https://losted.dev/api/spotify");
    const responseJson = await response.json();
    return fetchSpotifySchema.parse(responseJson);
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
