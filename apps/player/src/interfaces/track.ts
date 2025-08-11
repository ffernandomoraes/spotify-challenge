export type TrackArtist = {
  id: string;
  name: string;
};

export type TrackImage = {
  url: string;
  height: number;
  width: number;
};

export type TrackAlbum = {
  album_type: string;
  artists: TrackArtist[];
  id: string;
  images: TrackImage[];
  name: string;
};

export type Track = {
  album: TrackAlbum;
  artists: TrackArtist[];
  explicit: boolean;
  id: string;
  name: string;
  popularity: number;
  duration_ms: number;
  track_number: number;
};
