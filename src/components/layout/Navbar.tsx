import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/tentang', label: t.nav.about },
    { path: '/solusi', label: t.nav.solutions },
    { path: '/studi-kasus', label: t.nav.caseStudies },
    { path: '/demo', label: t.nav.demo },
    { path: '/kontak', label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-neutral-900 dark:bg-white inline-block"></span>
          <span>PT Innodesk</span>
        </Link>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors duration-150 relative py-1 ${
                  active
                    ? 'text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950 dark:bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary action + theme/language controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <LanguageToggle />
          <Link
            to="/kontak"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>{t.nav.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? 'font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 mt-2">
            <Link
              to="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 rounded-md"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
