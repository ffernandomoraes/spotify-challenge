import { createContext, useContext } from 'react';

type TopWorldContextType = {
  backgroundEffectColor: string | null;
  setBackgroundEffectColor: (color: string) => void;
  resetBackgroundEffectColor: () => void;
};

const TopWorldContext = createContext<TopWorldContextType>({} as TopWorldContextType);

export const useTopWorld = () => {
  if (!TopWorldContext) {
    throw new Error('useTopWorld must be used within a TopWorldProvider');
  }

  return useContext(TopWorldContext);
};

const TopWorldProvider = TopWorldContext.Provider;

export default TopWorldProvider;
