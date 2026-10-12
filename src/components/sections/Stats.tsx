import { useLanguage } from '../../hooks/useLanguage';
import { useCounter } from '../../hooks/useCounter';
import { companyData, AchievementStat } from '../../data/company';

function StatCard({ stat }: { stat: AchievementStat }) {
  const { language } = useLanguage();
  const { elementRef, formattedValue } = useCounter(stat.value, 1800);

  return (
    <div
      ref={elementRef}
      className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111111] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-mono tabular-nums">
            {formattedValue}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-neutral-500 font-mono">
            {stat.suffix}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-2">
          {stat.label[language]}
        </h3>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 leading-relaxed">
        {stat.description[language]}
      </p>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E0E0E]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            PENCAPAIAN OPERASIONAL
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {t.stats.heading}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {t.stats.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {companyData.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
