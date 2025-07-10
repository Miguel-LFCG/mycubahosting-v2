import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const ClientOnlyTranslatedContent = ({ translationKey, fallback, className = "", component: Component = "span", ...props }) => {
  const { language, isClient } = useLanguage();
  
  if (!isClient) {
    return <Component className={className} {...props}>{fallback}</Component>;
  }
  
  const translatedText = translations[language][translationKey] || fallback;
  
  return <Component className={className} {...props}>{translatedText}</Component>;
};

export default ClientOnlyTranslatedContent;
