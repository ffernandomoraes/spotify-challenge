import { createContext, useContext } from 'react';

import { Artist } from '@/interfaces/artists';

type ArtistDetailsContextType = {
  isLoading: boolean;
  artist: Artist | undefined;
};

const ArtistDetailsContext = createContext<ArtistDetailsContextType>({} as ArtistDetailsContextType);

const ArtistDetailsProvider = ArtistDetailsContext.Provider;

export function useArtistDetails() {
  if (!ArtistDetailsContext) {
    throw new Error('useArtistDetails must be used within an ArtistDetailsProvider');
  }

  return useContext(ArtistDetailsContext);
}

export default ArtistDetailsProvider;
