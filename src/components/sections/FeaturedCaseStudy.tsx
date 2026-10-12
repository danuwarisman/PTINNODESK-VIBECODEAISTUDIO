import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { caseStudiesData } from '../../data/caseStudies';

export function FeaturedCaseStudy() {
  const { language, t } = useLanguage();
  const study = caseStudiesData[0]; // Automotive stamping vibration case study

  return (
    <section className="py-20 sm:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E0E0E]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            STUDI KASUS UNGGULAN
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {t.caseStudies.heading}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            {t.caseStudies.subheading}
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121212] p-6 sm:p-10 shadow-sm">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-3">
              <span>{study.industryLabel[language]}</span>
              <span>·</span>
              <span>{study.clientPlaceholder}</span>
            </div>
            <span>Tahun Penerapan: {study.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
            {/* Left Col: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                {study.title[language]}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-1">
                    {t.caseStudies.challenge}
                  </h4>
                  <p>{study.challenge[language]}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-1">
                    {t.caseStudies.solution}
                  </h4>
                  <p>{study.solution[language]}</p>
                </div>
              </div>

              {/* Verified results */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mb-3">
                  {t.caseStudies.outcomes}
                </h4>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {study.results[language].map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/studi-kasus"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 dark:text-white hover:opacity-75 transition-opacity"
                >
                  <span>Lihat Semua Studi Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Right Col: Quantified Metrics Strip & Stack */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {study.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono tracking-tight tabular-nums">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                      {metric.label[language]}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 font-mono">
                      {metric.context[language]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies strip */}
              <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs">
                <p className="font-mono text-neutral-500 uppercase tracking-wider text-[10px] mb-2">
                  PERANGKAT & PROTOKOL TERPAKAI
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-neutral-700 dark:text-neutral-300">
                  {study.techUsed.map((tech, idx) => (
                    <span key={tech}>
                      {tech}
                      {idx < study.techUsed.length - 1 && <span className="text-neutral-400 ml-2">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
