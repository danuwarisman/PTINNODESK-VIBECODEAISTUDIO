import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { companyData } from '../../data/company';

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              KONSULTASI & PROOF OF CONCEPT (POC)
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-balance">
              Siap Menghubungkan Fasilitas Anda dengan Arsitektur IoT Presisi?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
              Diskusikan langsung bersama tim insinyur sistem Innodesk. Dapatkan audit kelayakan awal, pemilihan sensor non-invasif yang tepat, dan estimasi kalkulasi ROI dalam 3 hari kerja.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/kontak"
                className="px-5 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors flex items-center gap-2"
              >
                <span>{t.contact.formTitle}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href={`https://wa.me/${companyData.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={1.5} />
                <span>Diskusi WhatsApp Teknis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
