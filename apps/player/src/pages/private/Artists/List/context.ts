import { createContext, useContext } from 'react';

type ListArtistsContextType = {
  backgroundEffectColor: string | null;
  setBackgroundEffectColor: (color: string) => void;
  resetBackgroundEffectColor: () => void;
};

const ListArtistsContext = createContext<ListArtistsContextType>({} as ListArtistsContextType);

export const useListArtists = () => {
  if (!ListArtistsContext) {
    throw new Error('useListArtists must be used within a ListArtistsProvider');
  }

  return useContext(ListArtistsContext);
};

const ListArtistsProvider = ListArtistsContext.Provider;

export default ListArtistsProvider;
