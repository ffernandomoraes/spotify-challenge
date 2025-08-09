import { create } from 'zustand';

import { SessionProps } from '@/interfaces/session';

type StoreSessionProps = {
  session: SessionProps | null;
  setSession: (_: SessionProps) => void;
  clearSession: () => void;
};

export const useStoreSession = create<StoreSessionProps>(set => ({
  session: null,
  setSession: session => set({ session }),
  clearSession: () => set({ session: null })
}));
