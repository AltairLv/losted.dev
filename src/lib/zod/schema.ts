import { z } from "zod";

export const accessTokenSchema = z.object({
  access_token: z.string(),
});

export const playingSpotifySchema = z.object({
  is_playing: z.boolean(),
  item: z.object({
    name: z.string(),
    artists: z.array(z.object({ name: z.string() })),
    album: z.object({
      name: z.string(),
      images: z.array(z.object({ url: z.string() })),
    }),
    external_urls: z.object({ spotify: z.string() }),
  }),
});

export const recentSpotifySchema = z.object({
  items: z.array(
    z.object({
      played_at: z.string().datetime({ offset: true }).pipe(z.coerce.date()),
      track: z.object({
        name: z.string(),
        artists: z.array(z.object({ name: z.string() })),
        album: z.object({
          name: z.string(),
          images: z.array(z.object({ url: z.string() })),
        }),
        external_urls: z.object({ spotify: z.string() }),
      }),
    })
  ),
});

export const fetchSpotifySchema = z
  .object({
    isPlaying: z.boolean(),
    playedAt: z
      .string()
      .datetime({ offset: true })
      .pipe(z.coerce.date())
      .nullable(),
    title: z.string(),
    artist: z.string(),
    album: z.string(),
    albumImageUrl: z.string(),
    songUrl: z.string(),
  })
  .nullable();

export const topArtistsSchema = z.object({
  items: z.array(
    z.object({
      external_urls: z.object({
        spotify: z.string(),
      }),
      images: z.array(
        z.object({
          url: z.string(),
        })
      ),
      name: z.string(),
    })
  ),
});

export const topTracksSchema = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      artists: z.array(
        z.object({
          name: z.string(),
        })
      ),
      external_urls: z.object({
        spotify: z.string(),
      }),
      album: z.object({
        images: z.array(z.object({ url: z.string() })),
      }),
    })
  ),
});
