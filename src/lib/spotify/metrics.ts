import {
  currentlyPlayingSong,
  recentlyPlayedSong,
} from "@/lib/spotify/spotify";
import { IMetric } from "@/types/types";

export const getPlaying = async (): Promise<IMetric | null> => {
  const currentMusic = await currentlyPlayingSong();

  if (currentMusic === null) {
    return null;
  }

  const song = currentMusic.item;

  const isPlaying = currentMusic.is_playing;
  const playedAt = null;
  const title = song.name;
  const artist = song.artists.map((artist) => artist.name).join(", ");
  const album = song.album.name;
  const albumImageUrl = song.album.images[0].url;
  const songUrl = song.external_urls.spotify;

  return {
    isPlaying,
    playedAt,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  };
};

export const getRecent = async (): Promise<IMetric | null> => {
  const recentMusic = await recentlyPlayedSong();

  const track = recentMusic.items[0].track;

  if (recentMusic.items.length === 0) {
    return null;
  }
  const isPlaying = false;
  const playedAt = recentMusic.items[0].played_at;
  const title = track.name;
  const artist = track.artists.map((artist) => artist.name).join(", ");
  const album = track.album.name;
  const albumImageUrl = track.album.images[0].url;
  const songUrl = track.external_urls.spotify;

  return {
    isPlaying,
    playedAt,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  };
};
