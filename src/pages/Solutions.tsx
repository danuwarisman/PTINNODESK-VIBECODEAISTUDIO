import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { solutionsData, SolutionItem } from '../data/solutions';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';

export default function Solutions() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSolution, setActiveSolution] = useState<SolutionItem | null>(null);

  useEffect(() => {
    updatePageSeo({
      title: 'Solusi & Produk IoT - PT Innodesk',
      description:
        'Katalog solusi sensorik industri, gateway edge computing, dan pemantauan telemetri untuk manufaktur, agrikultur, energi, dan gedung pintar.',
    });
  }, [language]);

  const categories = [
    { id: 'all', label: t.solutions.filterAll },
    { id: 'Industri', label: 'Industri & Manufaktur' },
    { id: 'Agrikultur', label: 'Agrikultur' },
    { id: 'Energi', label: 'Energi & Utilitas' },
    { id: 'Smart Building', label: 'Smart Building' },
  ];

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const nameMatch = item.name[language].toLowerCase().includes(query);
      const summaryMatch = item.summary[language].toLowerCase().includes(query);
      const descMatch = item.description[language].toLowerCase().includes(query);
      const featureMatch = item.features[language].some((f) => f.toLowerCase().includes(query));

      return matchCategory && (nameMatch || summaryMatch || descMatch || featureMatch);
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="w-full py-16 sm:py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            EKOSISTEM PERANGKAT & TELEMETRI
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            {t.solutions.heading}
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            {t.solutions.subheading}
          </p>
        </div>

        {/* Filter & Search Bar (Interactive segmented controls as allowed by frontend-design) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md bg-neutral-100 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.solutions.searchPlaceholder}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121212] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="py-4 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>MENAMPILKAN {filteredSolutions.length} DARI {solutionsData.length} SOLUSI</span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="underline hover:text-neutral-900 dark:hover:text-white cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Solutions Grid */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredSolutions.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div>
                  {/* Clean unboxed metadata header */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 font-mono">
                    <span>{item.categoryLabel[language]}</span>
                    <span>{item.badge}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
                    {item.name[language]}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed">
                    {item.summary[language]}
                  </p>

                  {/* Highlight Features */}
                  <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                    {item.features[language].slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-neutral-400 select-none">›</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
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
                  <Link
                    to="/kontak"
                    className="text-xs text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    Minta Penawaran
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="py-20 text-center rounded-lg border border-dashed border-neutral-300 dark:border-neutral-800 my-6">
            <SlidersHorizontal className="w-8 h-8 text-neutral-400 mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {t.solutions.emptyTitle}
            </h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
              {t.solutions.emptyDesc}
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Tampilkan Semua Solusi
              </Button>
            </div>
          </div>
        )}
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

            {/* Ideal For */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-2">
                {t.solutions.idealFor}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                {activeSolution.idealFor.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {item}
                  </span>
                ))}
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
    </div>
  );
}
