import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { caseStudiesData } from '../data/caseStudies';

export default function CaseStudies() {
  const { language, t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  useEffect(() => {
    updatePageSeo({
      title: 'Studi Kasus & Hasil Terukur - PT Innodesk',
      description:
        'Studi kasus implementasi IoT di sektor manufaktur, perkebunan, smart building, dan utilitas industri dengan hasil terukur.',
    });
  }, [language]);

  const industries = [
    { id: 'all', label: t.caseStudies.filterAll },
    { id: 'Manufaktur', label: 'Manufaktur & Otomotif' },
    { id: 'Agrikultur', label: 'Agrikultur & Sawit' },
    { id: 'Smart Building', label: 'Smart Building' },
    { id: 'Energi & Utilitas', label: 'Energi & Utilitas' },
  ];

  const filtered = useMemo(() => {
    if (selectedIndustry === 'all') return caseStudiesData;
    return caseStudiesData.filter((c) => c.industry === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <div className="w-full py-16 sm:py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            VALIDASI DAMPAK OPERASIONAL
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            {t.caseStudies.heading}
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            {t.caseStudies.subheading}
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md bg-neutral-100 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 mb-10 w-fit">
          {industries.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedIndustry === ind.id
                  ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] p-6 sm:p-10 transition-colors"
            >
              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{study.industryLabel[language]}</span>
                  <span>·</span>
                  <span>{study.clientPlaceholder}</span>
                </div>
                <span>Tahun: {study.year}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight leading-snug mt-6">
                {study.title[language]}
              </h2>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                {study.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono tracking-tight tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                      {m.label[language]}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 font-mono">
                      {m.context[language]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-2">
                    {t.caseStudies.challenge}
                  </h3>
                  <p className="leading-relaxed">{study.challenge[language]}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-2">
                    {t.caseStudies.solution}
                  </h3>
                  <p className="leading-relaxed">{study.solution[language]}</p>
                </div>
              </div>

              {/* Results & Tech stack */}
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-2">
                    {t.caseStudies.outcomes}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                    {study.results[language].map((res, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 flex flex-col md:items-end gap-3">
                  <Link
                    to="/kontak"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded hover:opacity-85 transition-opacity"
                  >
                    <span>{t.caseStudies.ctaContact}</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
