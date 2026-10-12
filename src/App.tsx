import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTopOnRoute, BackToTopFloating } from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-[#0A0A0A] dark:text-[#FAFAFA] font-sans antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/solusi" element={<Solutions />} />
              <Route path="/studi-kasus" element={<CaseStudies />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopFloating />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
