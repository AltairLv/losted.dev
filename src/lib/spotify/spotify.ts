import "server-only";
import { cache } from "react";
import {
  accessTokenSchema,
  playingSpotifySchema,
  recentSpotifySchema,
} from "@/lib/zod/schema";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
    cache: "no-cache",
  });

  const responseJson = await response.json();
  return accessTokenSchema.parse(responseJson);
};

export const currentlyPlayingSong = cache(async (access_token: string) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    }
  );
  if (response.status === 204) {
    return null;
  }
  const responseJson = await response.json();
  return playingSpotifySchema.parse(responseJson);
});

export const recentlyPlayedSong = cache(async (access_token: string) => {
  const date = Math.floor(Date.now());

  const response = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?before=${date}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    }
  );
  const responseJson = await response.json();
  return recentSpotifySchema.parse(responseJson);
});
