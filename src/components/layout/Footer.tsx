import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { companyData } from '../../data/company';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-white inline-block"></span>
              <span className="text-xl font-bold tracking-tight text-white">{companyData.name}</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              {companyData.legalName}
            </p>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              <span>Sertifikasi Standar: ISO 27001 · IEC 62053 · IP67/IP68</span>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.solutionsHeader}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/solusi" className="hover:text-white transition-colors">
                  Smart Factory
                </Link>
              </li>
              <li>
                <Link to="/solusi" className="hover:text-white transition-colors">
                  Precision Agriculture
                </Link>
              </li>
              <li>
                <Link to="/solusi" className="hover:text-white transition-colors">
                  Sub-Metering Daya
                </Link>
              </li>
              <li>
                <Link to="/solusi" className="hover:text-white transition-colors">
                  Smart Building IEQ
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-white transition-colors">
                  Demo Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.companyHeader}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/tentang" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/studi-kasus" className="hover:text-white transition-colors">
                  {t.nav.caseStudies}
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyData.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3 text-sm text-neutral-400">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.contactHeader}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-xs leading-relaxed">{companyData.headquarters.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${companyData.contact.email}`} className="text-xs hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" strokeWidth={1.5} />
                <span className="text-xs">{companyData.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {companyData.legalName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span>{t.footer.monochromeNotice}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
