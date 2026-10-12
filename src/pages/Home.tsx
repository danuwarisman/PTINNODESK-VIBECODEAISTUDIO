import { useEffect } from 'react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { Hero } from '../components/sections/Hero';
import { ClientsStrip } from '../components/sections/ClientsStrip';
import { FeaturedSolutions } from '../components/sections/FeaturedSolutions';
import { Stats } from '../components/sections/Stats';
import { FeaturedCaseStudy } from '../components/sections/FeaturedCaseStudy';
import { CtaBanner } from '../components/sections/CtaBanner';

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    updatePageSeo({
      title: 'PT Innodesk - Solusi & Ekosistem IoT Industri',
      description:
        'Penyedia solusi Internet of Things (IoT) enterprise: perangkat sensor tangguh, gateway edge computing, dan pemantauan telemetri real-time.',
    });
  }, [language]);

  return (
    <div className="w-full">
      <Hero />
      <ClientsStrip />
      <FeaturedSolutions />
      <Stats />
      <FeaturedCaseStudy />
      <CtaBanner />
    </div>
  );
}
