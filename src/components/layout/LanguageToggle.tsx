import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Ganti Bahasa / Switch Language"
      className="px-2 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
      title={language === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia'}
    >
      {language === 'id' ? 'ID' : 'EN'}
    </button>
  );
}
