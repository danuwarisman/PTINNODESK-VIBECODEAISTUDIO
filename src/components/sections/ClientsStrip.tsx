import { useLanguage } from '../../hooks/useLanguage';
import { companyData } from '../../data/company';

export function ClientsStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
          {t.hero.trustedBy}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {companyData.partners.map((partner) => (
            <div
              key={partner.name}
              className="p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-center text-center transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
            >
              <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
                {partner.name}
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">
                {partner.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
