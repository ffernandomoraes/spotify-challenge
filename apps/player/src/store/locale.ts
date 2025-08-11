import { create } from 'zustand';

import LOCALES from '@/locales';

interface LocaleStore {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useLocaleStore = create<LocaleStore>(set => ({
  locale: LOCALES.pt_BR,
  setLocale: locale => set({ locale })
}));
