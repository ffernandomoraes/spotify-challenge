import { create } from 'zustand';

type StoreLoaderProps = {
  isLoading: boolean;
  setIsLoading: (_: boolean) => void;
};

export const useStoreLoader = create<StoreLoaderProps>(set => ({
  isLoading: true,
  setIsLoading: isLoading => set({ isLoading })
}));
