import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Copy, Check } from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { useLanguage } from '../hooks/useLanguage';
import { companyData } from '../data/company';
import { faqData } from '../data/faq';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import {
  ContactFormData,
  ValidationErrors,
  validateContactForm,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../utils/validators';

export default function Contact() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Konsultasi Implementasi IoT Industri',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    updatePageSeo({
      title: 'Kontak & Konsultasi IoT - PT Innodesk',
      description:
        'Hubungi tim sales dan rekayasa PT Innodesk: formulir proposal, WhatsApp resmi, alamat kantor, dan FAQ teknis.',
    });
  }, [language]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (method: 'email' | 'whatsapp') => {
    const validationErrors = validateContactForm(formData, language);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus(t.contact.validationErrors);
      return;
    }

    setErrors({});
    if (method === 'email') {
      const mailtoUrl = buildMailtoUrl(formData);
      setSubmittedStatus(t.contact.successMailPrompt);
      window.location.href = mailtoUrl;
    } else {
      const waUrl = buildWhatsAppUrl(formData);
      setSubmittedStatus(t.contact.successWhatsAppPrompt);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopySummary = () => {
    const text = `Halo Tim PT Innodesk,\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nTopik: ${formData.subject}\n\nPesan:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accordionItems = faqData.map((item) => ({
    id: item.id,
    title: item.question[language],
    content: (
      <div className="space-y-2">
        <p>{item.answer[language]}</p>
        <span className="inline-block text-[11px] font-mono text-neutral-400">
          Kategori: {item.category}
        </span>
      </div>
    ),
  }));

  return (
    <div className="w-full py-16 sm:py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            KOMUNIKASI TEKNIS & PROPOSAL
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            {t.contact.heading}
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        {/* 2-Col Layout: Contact Form & Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-neutral-200 dark:border-neutral-800">
          {/* Left Col: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mb-6 tracking-tight">
                {t.contact.formTitle}
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label={t.contact.nameLabel}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    error={errors.name}
                    required
                  />
                  <Input
                    label={t.contact.emailLabel}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label={t.contact.companyLabel}
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.companyPlaceholder}
                    error={errors.company}
                    required
                  />
                  <Input
                    label={t.contact.phoneLabel}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    error={errors.phone}
                  />
                </div>

                {/* Subject selector */}
                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {t.contact.subjectLabel} <span className="text-neutral-400">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white"
                  >
                    <option value="Konsultasi Implementasi IoT Industri">
                      Konsultasi Implementasi IoT Industri (Pabrik / Manufaktur)
                    </option>
                    <option value="Proof of Concept (PoC) Telemetri">
                      Permintaan Proof of Concept (PoC) Terjadwal
                    </option>
                    <option value="Monitoring Daya & Sub-Metering Energi">
                      Monitoring Daya & Sub-Metering Listrik
                    </option>
                    <option value="Precision Agriculture LoRaWAN">
                      Precision Agriculture & Sensor Tanah LoRaWAN
                    </option>
                    <option value="Kemitraan Sistem Integrator / OEM">
                      Kemitraan Sistem Integrator / Distribusi Hardware
                    </option>
                    <option value="Pertanyaan Teknis Lainnya">
                      Pertanyaan Teknis / Kustomisasi Sensor Lainnya
                    </option>
                  </select>
                </div>

                {/* Message */}
                <Textarea
                  label={t.contact.messageLabel}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  error={errors.message}
                  required
                />

                {/* Submission Feedback Alert */}
                {submittedStatus && (
                  <div className="p-3.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-800 dark:text-neutral-200">
                    <p className="font-semibold">{submittedStatus}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => handleSubmit('email')}
                    icon={<Send className="w-4 h-4" strokeWidth={1.5} />}
                  >
                    {t.contact.submitEmail}
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => handleSubmit('whatsapp')}
                    icon={<MessageSquare className="w-4 h-4" strokeWidth={1.5} />}
                  >
                    {t.contact.submitWhatsApp}
                  </Button>

                  {formData.message && (
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white inline-flex items-center justify-center gap-1.5 py-2 px-3 cursor-pointer"
                      title="Salin draf teks ke clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Tersalin' : 'Salin Draf'}</span>
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-neutral-500 pt-2 font-mono">
                  Data Anda tidak disimpan di server peramban; form akan langsung membuka klien email atau aplikasi WhatsApp resmi Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Col: Office Info, Map coordinates & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                {t.contact.officeTitle}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-neutral-900 dark:text-white font-medium">{companyData.headquarters.address}</p>
                    <p className="text-neutral-400 text-xs font-mono mt-1">Koordinat GPS: {companyData.headquarters.coordinates}</p>
                    <a
                      href={companyData.headquarters.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-neutral-900 dark:text-white underline"
                    >
                      Buka di Google Maps ›
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <Mail className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-neutral-400">Email Korespondensi Resmi:</p>
                    <a href={`mailto:${companyData.contact.email}`} className="text-neutral-900 dark:text-white font-mono">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-neutral-400">Telepon Sentral:</p>
                    <span className="text-neutral-900 dark:text-white font-mono">{companyData.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                <Clock className="w-4 h-4 text-neutral-900 dark:text-white" strokeWidth={1.5} />
                <span>{t.contact.hoursTitle}</span>
              </div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {companyData.contact.hours}
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {companyData.contact.supportAvailability}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section (F-10) */}
        <div className="pt-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              KNOWLEDGE BASE & FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.contact.faqTitle}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {t.contact.faqSub}
            </p>
          </div>

          <div className="max-w-3xl">
            <Accordion items={accordionItems} defaultOpenId="faq-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
