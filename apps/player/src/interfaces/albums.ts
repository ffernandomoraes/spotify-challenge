import { Artist } from './artists';

export type AlbumImage = {
  url: string;
};

export type Album = {
  id: string;
  name: string;
  images: AlbumImage[];
  total_tracks: number;
  artists: Artist[];
};
