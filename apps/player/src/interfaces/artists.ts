export type ArtistImage = {
  url: string;
  height: number;
  width: number;
};

export type ArtistFollower = {
  total: number;
};

export type Artist = {
  id: string;
  name: string;
  popularity: number;
  genres: string[];
  images: ArtistImage[];
  followers: ArtistFollower;
};
