import { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { companyData } from '../data/company';
import { teamData } from '../data/team';
import { CtaBanner } from '../components/sections/CtaBanner';
import { Award, Shield, Check, Clock } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();

  useEffect(() => {
    updatePageSeo({
      title: 'Tentang Kami - PT Innodesk Teknologi Nusantara',
      description:
        'Profil perusahaan, visi misi, nilai rekayasa, perjalanan timeline, dan kepemimpinan teknik PT Innodesk.',
    });
  }, [language]);

  return (
    <div className="w-full py-16 sm:py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl pb-16 border-b border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            PROFIL PERUSAHAAN
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            {t.about.heading}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {companyData.shortBio[language]}
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="py-16 border-b border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
              <Award className="w-4 h-4 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              <span>{t.about.visionTitle}</span>
            </div>
            <p className="text-lg font-bold text-neutral-950 dark:text-white leading-relaxed">
              {companyData.vision[language]}
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
              <Shield className="w-4 h-4 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              <span>{t.about.missionTitle}</span>
            </div>
            <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {companyData.mission.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{item[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Engineering Values (Numbered human editorial style) */}
        <div className="py-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              PRINSIP OPERASIONAL
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.values.map((val) => (
              <div
                key={val.id}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111111]"
              >
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  {val.number}
                </span>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white mt-1 mb-2">
                  {val.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {val.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Journey */}
        <div className="py-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              REKAM JEJAK
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.about.timelineTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.timeline.map((step) => (
              <div
                key={step.year}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
                    <span>TAHUN {step.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-950 dark:text-white mb-2 leading-snug">
                    {step.title[language]}
                  </h3>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
                  {step.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Leadership */}
        <div className="py-16 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              TIM REKAYASA
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.about.teamTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111111] flex flex-col justify-between"
              >
                <div>
                  {/* Monochromatic Technical Avatar Box */}
                  <div className="w-16 h-16 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100 mb-4 select-none">
                    {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 dark:text-white leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    {member.role[language]}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {member.bio[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 space-y-1">
                  <p className="text-[11px] font-mono text-neutral-500">{member.credentials}</p>
                  <p className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                    Fokus: {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Compliance Standards */}
        <div className="py-16">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              KEPATUHAN & AUDIT
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.about.credentialsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212]">
              <p className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">ISO/IEC 27001:2022</p>
              <p className="text-xs text-neutral-500 mt-1">Sistem Manajemen Keamanan Informasi untuk telemetri cloud & API</p>
            </div>
            <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212]">
              <p className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">IEC 62053-22 Class 0.5S</p>
              <p className="text-xs text-neutral-500 mt-1">Standar internasional akurasi pengukuran meter daya listrik aktif</p>
            </div>
            <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212]">
              <p className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">IP67 & IP68 Ingress Protection</p>
              <p className="text-xs text-neutral-500 mt-1">Uji ketahanan debu, pelarut minyak industri, dan rendaman air</p>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
