import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export const useTranslation = () => {
  const { language, isClient } = useLanguage();
  
  const t = (key) => {
    if (!isClient) {
      // Return English as fallback during SSR
      return translations['en'][key] || key;
    }
    return translations[language][key] || key;
  };
  
  return { t, language, isClient };
};
