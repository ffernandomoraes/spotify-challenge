import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type StoreSessionProps = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const useStoreSession = create<StoreSessionProps>()(
  persist(
    set => ({
      token: null,
      setToken: token => set({ token }),
      clearToken: () => set({ token: null })
    }),
    {
      name: 'spotify-player-session',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
