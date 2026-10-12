# PT Innodesk — Industrial IoT Company Profile Website

Website resmi company profile **PT Innodesk (PT Innodesk Teknologi Nusantara)**, penyedia arsitektur Internet of Things (IoT) terintegrasi dari sensorik fisik lapangan hingga analisis data telemetri real-time.

Dibangun dengan prinsip desain **monokromik** (hitam, putih, skala abu-abu), tipografi tegas (*Plus Jakarta Sans* & *JetBrains Mono*), tanpa ketergantungan pada backend atau database, serta performa tinggi.

---

## 1. Fitur Utama & Kebutuhan Fungsional (PRD Compliance)

- **F-01 Routing Bebas Reload**: Menggunakan React Router 7 (`/`, `/tentang`, `/solusi`, `/studi-kasus`, `/demo`, `/kontak`, `*` 404).
- **F-02 Navbar Responsif & Top Bar Contract**: Sticky navbar dengan single-line links, hamburger mobile drawer, dan penanda rute aktif.
- **F-03 Hero Section Terarah**: Headline tajam, unboxed metadata, 3 CTA fungsional, dan skematik topologi arsitektur IoT multi-layer.
- **F-04 Counter Angka Animatif**: Menghitung naik otomatis saat masuk viewport dengan angka tabular (`tabular-nums`) dan dukungan *prefers-reduced-motion*.
- **F-05 Katalog Solusi & Filter**: Filter kategori (Semua, Industri, Agrikultur, Energi, Smart Building) serta pencarian teks real-time dengan status kosong yang informatif.
- **F-06 Modal Spesifikasi Detail**: Menampilkan arsitektur sensor, gateway, platform cloud, parameter teknis, dan target implementasi.
- **F-07 Studi Kasus Berdampak**: Kartu studi kasus dengan metrik bisnis terukur (penurunan downtime -68%, efisiensi air 34%, penghematan kWh 21.4%).
- **F-08 Demo Dashboard Simulasi**: Simulasi telemetri 4 variabel (Suhu bearing, Daya 3P, Getaran velocity RMS, Kelembapan) dengan grafik garis multi-series SVG monokromik, tombol Jeda/Lanjut, pengatur kecepatan (1x/2x), dan tabel log status perangkat.
- **F-09 Multi-Channel Form Kontak**: Validasi input sisi klien (Nama, Email, Perusahaan, Topik, Pesan). Saat dikirim, otomatis membuka klien email (`mailto:`) atau WhatsApp Business dengan draf terisi lengkap.
- **F-10 Accordion FAQ**: Pertanyaan umum seputar implementasi non-invasif, ketahanan IP68, keamanan data TLS 1.3, dan skema CapEx/OpEx.
- **F-11 Dark Mode Persisten**: Tersimpan di `localStorage` dan mendeteksi preferensi sistem secara otomatis menggunakan token variabel CSS.
- **F-13 SEO & Metadata**: Sinkronisasi tag `<title>`, `<meta description>`, Open Graph, `sitemap.xml`, dan `robots.txt`.
- **F-14 Halaman 404**: Desain elegan dan tautan kembali ke beranda.
- **F-15 Toggle Bahasa ID / EN**: Mendukung Bahasa Indonesia dan Bahasa Inggris penuh melalui kamus statis.

---

## 2. Struktur Proyek

```
.
├── public/
│   ├── _redirects         # Rewrite rule untuk Netlify / Cloudflare Pages
│   ├── robots.txt         # Konfigurasi perayap mesin pencari
│   └── sitemap.xml        # Peta situs terstruktur
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, ThemeToggle, LanguageToggle, ScrollToTop
│   │   ├── sections/      # Hero, Stats, ClientsStrip, FeaturedSolutions, FeaturedCaseStudy, CtaBanner
│   │   └── ui/            # Button, Card, Input, Accordion, Modal
│   ├── data/              # Sumber data konten statis (Zero Backend)
│   │   ├── company.ts     # Data profil, visi misi, timeline, mitra, dan kontak
│   │   ├── solutions.ts   # Katalog solusi, spesifikasi, dan arsitektur
│   │   ├── caseStudies.ts # Studi kasus dan metrik hasil
│   │   ├── team.ts        # Profil dewan insinyur dan pimpinan
│   │   ├── faq.ts         # Daftar tanya-jawab teknis
│   │   └── translations.ts# Kamus teks dwibahasa ID/EN
│   ├── hooks/             # useTheme, useLanguage, useCounter, useSensorSimulation
│   ├── pages/             # Home, About, Solutions, CaseStudies, Demo, Contact, NotFound
│   ├── utils/             # validators.ts, seo.ts
│   ├── App.tsx            # Root router & layout wrapper
│   ├── index.css          # Desain token CSS monokromik & utilitas
│   └── main.tsx           # Entry point aplikasi React
├── vercel.json            # Konfigurasi rewrite SPA untuk hosting Vercel
└── package.json
```

---

## 3. Cara Menjalankan Secara Lokal

1. **Pasang Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Akses di peramban pada `http://localhost:3000`.

3. **Kompilasi / Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `dist/`.

---

## 4. Cara Mengubah Konten (Tanpa Mengubah Kode Komponen)

Seluruh teks, angka capaian, daftar produk, dan data studi kasus disimpan terpisah pada berkas di direktori `src/data/`:

1. **Ubah Informasi Perusahaan & Kontak**:
   Buka `src/data/company.ts` untuk mengubah alamat kantor, email, nomor WhatsApp (`whatsappClean`), capaian angka (`stats`), dan daftar mitra (`partners`).

2. **Tambah atau Ubah Solusi IoT**:
   Buka `src/data/solutions.ts`. Anda cukup menambahkan objek solusi baru dengan parameter `name`, `category`, `features`, `specifications`, dan `architecture`.

3. **Ubah Data Studi Kasus**:
   Buka `src/data/caseStudies.ts`. Masukkan tantangan klien, hasil persentase efisiensi, dan daftar teknologi.

4. **Ubah Tanya Jawab (FAQ)**:
   Buka `src/data/faq.ts` untuk memperbarui pertanyaan dan jawaban teknis.

5. **Ubah Terjemahan Bahasa**:
   Buka `src/data/translations.ts` untuk menyesuaikan teks navigasi atau label tombol.

---

## 5. Panduan Deployment ke Hosting Statis

### Vercel
Aplikasi sudah menyertakan `vercel.json` dengan konfigurasi rewrite:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Cukup hubungkan repositori ke Vercel; build command adalah `npm run build` dengan output directory `dist`.

### Netlify / Cloudflare Pages
Berkas `public/_redirects` otomatis disalin ke root build saat kompilasi:
```
/*    /index.html   200
```
Ini memastikan rute seperti `/solusi` atau `/demo` tidak menghasilkan 404 saat pengguna melakukan refresh halaman.

---

## 6. Keputusan Desain Utama (Design Rationale)

1. **Disiplin Monokromik Murni**:
   Tidak ada warna aksen warna-warni (tanpa biru korporat generic atau ungu AI). Hierarki visual semata-mata dibentuk lewat bobot kontras tipografi (Plus Jakarta Sans 800/700/600/400), garis batas hairline tipis (1px solid `#E5E5E5` / `#262626`), dan pemanfaatan ruang negatif (*white space*).
2. **Anti-Pill & Unboxed Metadata**:
   Sesuai panduan arsitektur antarmuka, metadata tanggal, kategori, dan sertifikasi tidak dibungkus kapsul warna-warni. Ditampilkan sebagai teks tajam dengan pemisah titik (`·`).
3. **Pembedaan Grafik Monokromik**:
   Grafik telemetri pada demo dashboard membedakan seri data melalui tipe garis: garis tebal solid untuk Suhu, garis putus-putus (*dashed*) untuk Daya listrik, dan garis titik (*dotted*) untuk Getaran vibrasi.
4. **Performa & Aksesibilitas**:
   Waktu muat instan tanpa beban panggilan database eksternal. Dukungan navigasi keyboard penuh, kontras warna memenuhi standar WCAG 2.1 AA, dan transisi halus yang menghormati *prefers-reduced-motion*.
