import React from "react";

export interface IWork {
  id: string;
  title: string;
  description: string;
  visitUrl: string;
  source?: string;
  previewImg: string;
  stacks: string[];
}

export interface IStack {
  title: string;
  icon: React.FC;
  favorite?: boolean;
  description: string;
}

export interface ILinkButton {
  href: string;
  title: string;
}

export interface IWorkItem {
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

export interface IMessage {
  content: string;
  createdAt: Date;
  name: string | null;
}
