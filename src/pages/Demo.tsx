import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FastForward, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { useSensorSimulation, TelemetryReading } from '../hooks/useSensorSimulation';

export default function Demo() {
  const { language, t } = useLanguage();
  const {
    history,
    currentReading,
    isRunning,
    intervalMs,
    toggleRunning,
    setSpeed,
    resetData,
    devices,
    totalPings,
  } = useSensorSimulation();

  const [activeSeries, setActiveSeries] = useState<'all' | 'temperature' | 'power' | 'vibration'>('all');

  useEffect(() => {
    updatePageSeo({
      title: 'Demo Dashboard Simulasi Telemetri IoT - PT Innodesk',
      description:
        'Simulasi interaktif telemetri sensor IoT: pemantauan suhu bearing, kelembapan, konsumsi daya 3-fasa, dan getaran mesin real-time.',
    });
  }, [language]);

  // Compute SVG chart paths
  const chartWidth = 900;
  const chartHeight = 260;
  const paddingX = 40;
  const paddingY = 30;

  const pointsCount = history.length;
  const getX = (index: number) => {
    if (pointsCount <= 1) return paddingX;
    return paddingX + (index / (pointsCount - 1)) * (chartWidth - 2 * paddingX);
  };

  // Min/Max bounds for normalization
  const minTemp = 35;
  const maxTemp = 65;
  const minPower = 110;
  const maxPower = 205;
  const minVib = 0.5;
  const maxVib = 5.5;

  const getYTemp = (val: number) => {
    const norm = (val - minTemp) / (maxTemp - minTemp);
    return chartHeight - paddingY - norm * (chartHeight - 2 * paddingY);
  };

  const getYPower = (val: number) => {
    const norm = (val - minPower) / (maxPower - minPower);
    return chartHeight - paddingY - norm * (chartHeight - 2 * paddingY);
  };

  const getYVib = (val: number) => {
    const norm = (val - minVib) / (maxVib - minVib);
    return chartHeight - paddingY - norm * (chartHeight - 2 * paddingY);
  };

  // Build SVG Path strings
  const tempPath = history
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getYTemp(p.temperature).toFixed(1)}`)
    .join(' ');

  const powerPath = history
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getYPower(p.power).toFixed(1)}`)
    .join(' ');

  const vibPath = history
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getYVib(p.vibration).toFixed(1)}`)
    .join(' ');

  return (
    <div className="w-full py-16 sm:py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header & Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              <span className="w-2 h-2 rounded-full border border-neutral-900 dark:border-white"></span>
              <span>{t.demo.simulationNotice}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              {t.demo.heading}
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {t.demo.subheading}
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleRunning}
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isRunning
                  ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-transparent'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{t.demo.btnPause}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{t.demo.btnResume}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSpeed(intervalMs === 2000 ? 'fast' : 'normal')}
              className="px-3 py-2 text-xs font-medium rounded border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FastForward className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>{intervalMs === 2000 ? t.demo.speedNormal : t.demo.speedFast}</span>
            </button>

            <button
              type="button"
              onClick={resetData}
              className="px-3 py-2 text-xs font-medium rounded border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>{t.demo.btnReset}</span>
            </button>
          </div>
        </div>

        {/* Status Strip */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 ${isRunning ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-400'}`}></span>
            <span>{isRunning ? t.demo.statusActive : t.demo.statusPaused}</span>
            <span>·</span>
            <span>TOTAL SAMPEL: {totalPings} PAKET</span>
          </div>
          <div>
            <span>WAKTU KOMPUTASI: {currentReading.timestamp} WIB</span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {/* Card 1: Temperature */}
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                <span>01. TERMOKOPEL PT100</span>
                <span>±0.1°C</span>
              </div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                {t.demo.metricTemp}
              </h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white tabular-nums">
                  {currentReading.temperature}
                </span>
                <span className="text-sm font-mono text-neutral-500">°C</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">Batas Aman: &lt; 58°C</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">
                {currentReading.temperature > 55 ? 'Tinggi' : 'Optimal'}
              </span>
            </div>
          </div>

          {/* Card 2: Power */}
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                <span>02. POWER METER 3P</span>
                <span>Class 0.5S</span>
              </div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                {t.demo.metricPower}
              </h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white tabular-nums">
                  {currentReading.power}
                </span>
                <span className="text-sm font-mono text-neutral-500">kW</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">Beban Trafo: 64%</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Cos φ: 0.98</span>
            </div>
          </div>

          {/* Card 3: Vibration */}
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                <span>03. AKSELEROMETER IEPE</span>
                <span>10 kHz</span>
              </div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                {t.demo.metricVibration}
              </h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white tabular-nums">
                  {currentReading.vibration}
                </span>
                <span className="text-sm font-mono text-neutral-500">mm/s</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">ISO 10816: Kelas II</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">
                {currentReading.vibration > 4.0 ? 'Peringatan' : 'Stabil'}
              </span>
            </div>
          </div>

          {/* Card 4: Humidity */}
          <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                <span>04. IEQ AIRSENSE PRO</span>
                <span>±2% RH</span>
              </div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                {t.demo.metricHumidity}
              </h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white tabular-nums">
                  {currentReading.humidity}
                </span>
                <span className="text-sm font-mono text-neutral-500">% RH</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">Kadar CO2: 540 ppm</span>
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Bersih</span>
            </div>
          </div>
        </div>

        {/* Live SVG Multi-series Line Chart */}
        <div className="p-6 sm:p-8 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121212] shadow-xs">
          {/* Chart Header & Series filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800 gap-4">
            <div>
              <h2 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
                {t.demo.chartTitle}
              </h2>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Frekuensi cuplikan: Tiap {intervalMs / 1000} detik
              </p>
            </div>

            {/* Series Toggle in strict monochrome design */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveSeries('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeSeries === 'all'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Semua Seri
              </button>
              <button
                type="button"
                onClick={() => setActiveSeries('temperature')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeSeries === 'temperature'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Suhu (Solid)
              </button>
              <button
                type="button"
                onClick={() => setActiveSeries('power')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeSeries === 'power'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Daya (Putus-putus)
              </button>
              <button
                type="button"
                onClick={() => setActiveSeries('vibration')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  activeSeries === 'vibration'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                }`}
              >
                Getaran (Titik)
              </button>
            </div>
          </div>

          {/* SVG Chart Viewport */}
          <div className="py-6 overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-auto min-w-[600px] text-neutral-900 dark:text-neutral-100"
              preserveAspectRatio="none"
              aria-label="Grafik Telemetri Real-Time"
            >
              {/* Background Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const y = paddingY + ratio * (chartHeight - 2 * paddingY);
                return (
                  <line
                    key={ratio}
                    x1={paddingX}
                    y1={y}
                    x2={chartWidth - paddingX}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Series 1: Temperature (Solid Line) */}
              {(activeSeries === 'all' || activeSeries === 'temperature') && (
                <path
                  d={tempPath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Series 2: Power (Dashed Line) */}
              {(activeSeries === 'all' || activeSeries === 'power') && (
                <path
                  d={powerPath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeDasharray="6 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.75"
                />
              )}

              {/* Series 3: Vibration (Dotted Line) */}
              {(activeSeries === 'all' || activeSeries === 'vibration') && (
                <path
                  d={vibPath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="2 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.5"
                />
              )}

              {/* Latest Point markers */}
              {pointsCount > 0 && (
                <circle
                  cx={getX(pointsCount - 1)}
                  cy={getYTemp(currentReading.temperature)}
                  r="4"
                  fill="currentColor"
                />
              )}
            </svg>
          </div>

          {/* Chart Legend with monochrome patterns */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400 gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-neutral-900 dark:bg-white inline-block"></span>
                <span>{t.demo.chartLegendTemp} (Garis Solid)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 border-b-2 border-dashed border-neutral-600 dark:border-neutral-400 inline-block"></span>
                <span>{t.demo.chartLegendPower} (Garis Putus-putus)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 border-b-2 border-dotted border-neutral-500 dark:border-neutral-400 inline-block"></span>
                <span>{t.demo.chartLegendVib} (Garis Titik)</span>
              </div>
            </div>
            <div>
              <span>Rentang Buffer: 30 Cuplikan Terakhir</span>
            </div>
          </div>
        </div>

        {/* Connected Devices Status Table */}
        <div className="mt-12 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] p-6 sm:p-8">
          <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-neutral-950 dark:text-white">
                {t.demo.deviceTableTitle}
              </h2>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Topologi gateway lokal aktif via Innodesk EdgeGate-400
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              5/5 NODE AKTIF
            </span>
          </div>

          <div className="overflow-x-auto pt-4">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 font-mono uppercase tracking-wider">
                  <th className="py-2.5 px-3">{t.demo.deviceColId}</th>
                  <th className="py-2.5 px-3">{t.demo.deviceColName}</th>
                  <th className="py-2.5 px-3">{t.demo.deviceColLocation}</th>
                  <th className="py-2.5 px-3">{t.demo.deviceColProtocol}</th>
                  <th className="py-2.5 px-3">{t.demo.deviceColBattery}</th>
                  <th className="py-2.5 px-3">{t.demo.deviceColStatus}</th>
                  <th className="py-2.5 px-3 text-right">{t.demo.deviceColLastPing}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                {devices.map((dev) => (
                  <tr key={dev.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-neutral-900 dark:text-neutral-100">
                      {dev.id}
                    </td>
                    <td className="py-3 px-3 font-medium text-neutral-900 dark:text-neutral-100">
                      {dev.name}
                    </td>
                    <td className="py-3 px-3 text-neutral-600 dark:text-neutral-400">
                      {dev.location}
                    </td>
                    <td className="py-3 px-3 font-mono text-neutral-500">
                      {dev.protocol}
                    </td>
                    <td className="py-3 px-3 font-mono text-neutral-600 dark:text-neutral-400">
                      {dev.batteryLevel}
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-neutral-800 dark:text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white"></span>
                        {dev.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-neutral-500">
                      {dev.lastPing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
