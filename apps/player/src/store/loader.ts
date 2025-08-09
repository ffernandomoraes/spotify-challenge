import { create } from 'zustand';

type StoreLoaderProps = {
  isLoading: boolean;
  setIsLoading: (_: boolean) => void;
};

export const useStoreLoader = create<StoreLoaderProps>(set => ({
  isLoading: false,
  setIsLoading: isLoading => set({ isLoading })
}));
