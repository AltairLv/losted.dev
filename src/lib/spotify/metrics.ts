import {
  currentlyPlayingSong,
  recentlyPlayedSong,
  topArtists,
} from "@/lib/spotify/spotify";
import { ISpotifyArtist, ISpotifyPlay } from "@/types/types";

export const getPlaying = async (
  access_token: string
): Promise<ISpotifyPlay | null> => {
  const currentMusic = await currentlyPlayingSong(access_token);

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

export const getRecent = async (
  access_token: string
): Promise<ISpotifyPlay | null> => {
  const recentMusic = await recentlyPlayedSong(access_token);

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

export const getTopArtists = async (
  access_token: string
): Promise<ISpotifyArtist[]> => {
  const theArtists = await topArtists(access_token);

  return theArtists.items.map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImg: artist.images[1].url,
  }));
};
