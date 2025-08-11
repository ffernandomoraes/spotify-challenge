import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { isDevelopment } from '@/envs';
import LOCALES from '@/locales';
import enTranslation from '@/locales/en/translation.json';
import frTranslation from '@/locales/fr/translation.json';
import ptBRTranslation from '@/locales/pt_BR/translation.json';

type LocaleKey = (typeof LOCALES)[keyof typeof LOCALES];
type LocaleValue = { translation: Record<string, unknown> };

const resources: Record<LocaleKey, LocaleValue> = {
  [LOCALES.pt_BR]: { translation: ptBRTranslation },
  [LOCALES.en]: { translation: enTranslation },
  [LOCALES.fr]: { translation: frTranslation }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('i18nextLng') || LOCALES.pt_BR,
  fallbackLng: LOCALES.en,
  interpolation: { escapeValue: false },
  debug: isDevelopment
});

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
