export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  phone?: string;
}

export function validateContactForm(data: ContactFormData, lang: 'id' | 'en' = 'id'): ValidationErrors {
  const errors: ValidationErrors = {};

  // Name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = lang === 'id' ? 'Nama wajib diisi minimal 2 karakter' : 'Full name must be at least 2 characters';
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = lang === 'id' ? 'Alamat email perusahaan tidak valid' : 'Valid corporate email address required';
  }

  // Company
  if (!data.company || data.company.trim().length < 2) {
    errors.company = lang === 'id' ? 'Nama perusahaan / organisasi wajib diisi' : 'Company or organization name is required';
  }

  // Subject
  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = lang === 'id' ? 'Pilih atau tentukan topik kebutuhan' : 'Please select or enter an inquiry topic';
  }

  // Message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = lang === 'id' ? 'Deskripsi pesan minimal 10 karakter' : 'Message must be at least 10 characters';
  }

  return errors;
}

export function buildMailtoUrl(data: ContactFormData): string {
  const recipient = 'contact@innodesk.co.id';
  const subject = `[Inquiry Innodesk] ${data.subject || 'Konsultasi IoT'} - ${data.company}`;
  const body = `Halo Tim Rekayasa PT Innodesk,

Berikut adalah informasi kebutuhan proyek IoT dari organisasi kami:

• Nama Pengirim: ${data.name}
• Perusahaan: ${data.company}
• Email: ${data.email}
• Telepon / WA: ${data.phone || '-'}
• Topik: ${data.subject}

Rincian Kebutuhan & Kondisi Lapangan:
${data.message}

---
Dikirim melalui formulir kontak resmi Website PT Innodesk (innodesk.co.id)`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppUrl(data: ContactFormData): string {
  const phone = '6281289001200';
  const text = `Halo Tim PT Innodesk, saya ${data.name} dari *${data.company}*.

Saya ingin berkonsultasi mengenai implementasi IoT:
*Topik:* ${data.subject}
*Email:* ${data.email}
*Telepon:* ${data.phone || '-'}

*Rincian Kebutuhan:*
${data.message}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
