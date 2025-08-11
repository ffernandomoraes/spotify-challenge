export type Artist = {
  id: string;
  name: string;
  popularity: number;
  genres: string[];
  images: {
    url: string;
  }[];
  followers: {
    total: number;
  };
};
