import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] py-16 sm:py-24 lg:py-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white inline-block"></span>
              <span>{t.hero.eyebrow}</span>
              <span aria-hidden="true">·</span>
              <span>ISO 27001 Ready</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.12] text-balance">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solusi"
                className="px-5 py-3 text-sm font-semibold text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-md transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/demo"
                className="px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4" strokeWidth={1.5} />
                <span>{t.hero.ctaSecondary}</span>
              </Link>
              <Link
                to="/kontak"
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <span>{t.hero.ctaContact}</span>
              </Link>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
                <span>Enkripsi End-to-End TLS 1.3</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
                <span>Modbus · MQTT · LoRaWAN · OPC UA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Schematic (Zero-broken-image SVG Blueprint) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111111] p-6 shadow-sm overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border border-neutral-600 dark:border-neutral-400"></span>
                  <span className="uppercase tracking-wider">TOPOLOGI ARSITEKTUR INNODESK</span>
                </div>
                <span>REV 4.2</span>
              </div>

              {/* Schematic Diagram */}
              <div className="py-6 space-y-4">
                {/* Layer 1: Sensor Nodes */}
                <div className="p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-1.5">
                    <span>LAYER 01: SENSOR PERANGKAT FISIK</span>
                    <span className="text-neutral-400">IP67/IP68</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 border border-neutral-200 dark:border-neutral-800 rounded bg-neutral-50 dark:bg-neutral-800/40">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">Getaran IEPE</p>
                      <p className="text-[10px] text-neutral-500">10 kHz FFT</p>
                    </div>
                    <div className="p-2 border border-neutral-200 dark:border-neutral-800 rounded bg-neutral-50 dark:bg-neutral-800/40">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">Submeter CT</p>
                      <p className="text-[10px] text-neutral-500">Class 0.5S</p>
                    </div>
                    <div className="p-2 border border-neutral-200 dark:border-neutral-800 rounded bg-neutral-50 dark:bg-neutral-800/40">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">AgroProbe</p>
                      <p className="text-[10px] text-neutral-500">LoRa 12km</p>
                    </div>
                  </div>
                </div>

                {/* Connecting Bus Line */}
                <div className="flex items-center justify-center">
                  <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-700"></div>
                </div>

                {/* Layer 2: Edge Gateway */}
                <div className="p-3.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-1.5">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">LAYER 02: INNODESK EDGEGATE-400</span>
                    <span className="text-neutral-500">Linux RT</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Pengolahan sinyal lokal, penyaringan frekuensi anomali, kompresi telemetri, dan failover memori lokal bila jaringan terputus.
                  </p>
                </div>

                {/* Connecting Bus Line */}
                <div className="flex items-center justify-center">
                  <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-700"></div>
                </div>

                {/* Layer 3: Cloud & SCADA */}
                <div className="p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-1.5">
                    <span>LAYER 03: PLATFORM ANALITIK & SCADA</span>
                    <span className="text-neutral-400">TLS 1.3</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                    <span>MQTT Broker</span>
                    <span>·</span>
                    <span>REST / Webhook</span>
                    <span>·</span>
                    <span>Konektor SAP PM</span>
                  </div>
                </div>
              </div>

              {/* Bottom live indicator */}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>LATENSI TRANSMISI: &lt; 250 ms</span>
                <span>DATA INTEGRITY: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
