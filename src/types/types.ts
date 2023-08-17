import React from "react";

export interface WorkInterface {
  id: string;
  title: string;
  description: string;
  visitUrl: string;
  source?: string;
  previewImg: string;
  stacks: string[];
}

export interface StackInterface {
  title: string;
  icon: React.FC;
  favorite?: boolean;
  description: string;
}

export interface LinkButtonInterface {
  href: string;
  title: string;
}

export interface WorkItemInterface {
  link?: string;
  title?: string;
  thumbnail: string;
}

export interface ISpotifyClientCard {
  playedAt: Date | null;
  children: React.ReactNode;
}

export interface IMetric {
  isPlaying: boolean;
  playedAt: null | Date;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}
