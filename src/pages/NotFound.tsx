import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';

export default function NotFound() {
  const { t } = useLanguage();

  useEffect(() => {
    updatePageSeo({
      title: '404 - Halaman Tidak Ditemukan | PT Innodesk',
      description: 'Halaman yang Anda tuju tidak ditemukan di server PT Innodesk.',
    });
  }, []);

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-24 px-4 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-md text-center space-y-5">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          ERROR 404
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.notFound.title}
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {t.notFound.desc}
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded-md hover:opacity-85 transition-opacity"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{t.notFound.cta}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
