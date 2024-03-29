import React from "react";

export interface IWork {
  id: string;
  title: string;
  description: string;
  visitUrl?: string;
  source?: string;
  previewImg: string;
  stacks: string[];
}

export interface IProject {
  title: string;
  description: string;
  more: string[];
  source: string;
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

export interface IMessage {
  content: string;
  createdAt: Date;
  name: string | null;
}

export interface ISpotifyClientCard {
  playedAt: Date | null;
  children: React.ReactNode;
}

export interface ISpotifyPlay {
  isPlaying: boolean;
  playedAt: null | Date;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export interface ISpotifyArtist {
  name: string;
  url: string;
  coverImg: string;
}

export interface ISpotifyTrack {
  name: string;
  artists: string;
  url: string;
  coverImg: string;
}

export interface ISpotifyTop {
  artists: ISpotifyArtist[];
  tracks: ISpotifyTrack[];
}
