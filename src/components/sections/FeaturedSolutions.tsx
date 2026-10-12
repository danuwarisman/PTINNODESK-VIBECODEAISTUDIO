import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { solutionsData, SolutionItem } from '../../data/solutions';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export function FeaturedSolutions() {
  const { language, t } = useLanguage();
  const [activeSolution, setActiveSolution] = useState<SolutionItem | null>(null);

  const featured = solutionsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              ARSITEKTUR & PERANGKAT
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.solutions.heading}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {t.solutions.subheading}
            </p>
          </div>
          <Link
            to="/solusi"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 dark:text-white hover:opacity-75 transition-opacity self-start md:self-auto shrink-0"
          >
            <span>Semua Solusi ({solutionsData.length})</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        {/* 3-Col Solution Cards with Zero-Pill unboxed metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 font-mono">
                  <span>{item.categoryLabel[language]}</span>
                  <span>0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                  {item.name[language]}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                  {item.summary[language]}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2 border-t border-neutral-200 dark:border-neutral-800/80 pt-4 text-xs text-neutral-700 dark:text-neutral-300">
                  {item.features[language].slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-400 select-none">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveSolution(item)}
                  className="text-xs font-semibold text-neutral-950 dark:text-white hover:opacity-75 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.solutions.viewDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="text-[11px] font-mono text-neutral-500">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      {activeSolution && (
        <Modal
          isOpen={!!activeSolution}
          onClose={() => setActiveSolution(null)}
          title={activeSolution.name[language]}
          subtitle={`${activeSolution.categoryLabel[language]} · ${activeSolution.badge}`}
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {activeSolution.description[language]}
            </p>

            {/* Core Features */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3">
                {t.solutions.features}
              </h4>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                {activeSolution.features[language].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-400 select-none">■</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3">
                {t.solutions.specifications}
              </h4>
              <div className="rounded border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800 text-xs">
                {activeSolution.specifications.map((spec, i) => (
                  <div key={i} className="px-3.5 py-2.5 flex justify-between gap-4">
                    <span className="text-neutral-500">{spec.parameter}</span>
                    <span className="font-mono text-neutral-900 dark:text-neutral-100 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Architecture */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3">
                {t.solutions.architecture}
              </h4>
              <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 space-y-2 text-xs">
                <div>
                  <span className="font-mono text-neutral-500">Node Sensor: </span>
                  <span className="text-neutral-800 dark:text-neutral-200">{activeSolution.architecture.sensorLayer}</span>
                </div>
                <div>
                  <span className="font-mono text-neutral-500">Gateway: </span>
                  <span className="text-neutral-800 dark:text-neutral-200">{activeSolution.architecture.gatewayLayer}</span>
                </div>
                <div>
                  <span className="font-mono text-neutral-500">Platform: </span>
                  <span className="text-neutral-800 dark:text-neutral-200">{activeSolution.architecture.platformLayer}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
              <Button variant="outline" size="sm" onClick={() => setActiveSolution(null)}>
                {t.solutions.closeModal}
              </Button>
              <Link
                to="/kontak"
                onClick={() => setActiveSolution(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded-md hover:opacity-85 transition-opacity"
              >
                {t.solutions.ctaConsult}
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
