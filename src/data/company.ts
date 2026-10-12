export interface AchievementStat {
  id: string;
  value: number;
  suffix: string;
  label: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export interface CompanyValue {
  id: string;
  number: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export interface TimelineMilestone {
  year: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export interface ClientPartner {
  name: string;
  sector: string;
  tag: string;
}

export const companyData = {
  name: 'PT Innodesk',
  legalName: 'PT Innodesk Teknologi Nusantara',
  tagline: {
    id: 'Arsitektur IoT Terpadu dari Sensor hingga Keputusan Strategis',
    en: 'Integrated IoT Architecture from Sensor Nodes to Strategic Decisions',
  },
  shortBio: {
    id: 'PT Innodesk adalah perusahaan penyedia ekosistem Internet of Things (IoT) enterprise. Kami merancang perangkat sensor cerdas, gateway industri, platform pemantauan telemetri real-time, dan integrasi sistem SCADA/ERP untuk mendorong efisiensi operasional terukur.',
    en: 'PT Innodesk is an enterprise Internet of Things (IoT) solutions provider. We engineer intelligent sensor hardware, industrial telemetry gateways, real-time monitoring platforms, and SCADA/ERP integrations to drive measurable operational efficiency.',
  },
  foundedYear: '2020',
  headquarters: {
    address: 'Menara Inovasi Lt. 14, Kawasan Bisnis Mega Kuningan, Jakarta Selatan 12950',
    city: 'Jakarta Selatan',
    country: 'Indonesia',
    coordinates: '-6.2274, 106.8286',
    mapsUrl: 'https://maps.google.com/?q=Mega+Kuningan+Jakarta',
  },
  contact: {
    email: 'contact@innodesk.co.id',
    businessEmail: 'procurement@innodesk.co.id',
    phone: '+62 21 5088 9200',
    whatsapp: '+62 812 8900 1200',
    whatsappClean: '6281289001200',
    hours: 'Senin - Jumat: 08:30 - 17:30 WIB',
    supportAvailability: 'SLA Support 24/7 untuk Mitra Kontrak Enterprise',
  },
  vision: {
    id: 'Menjadi mitra teknologi IoT industri terdepan di Asia Tenggara yang memberdayakan sektor produktif melalui kedaulatan data dan otomatisasi presisi.',
    en: 'To be the premier industrial IoT partner in Southeast Asia empowering productive sectors through data sovereignty and precision automation.',
  },
  mission: [
    {
      id: 'Merancang perangkat keras sensorik tangguh standar industri dengan ketahanan tinggi terhadap kondisi lingkungan ekstrem.',
      en: 'Engineer rugged industrial-grade sensory hardware resilient to extreme environmental operating conditions.',
    },
    {
      id: 'Menyediakan platform agregasi data terdesentralisasi yang aman, berlatensi rendah, dan modular untuk integrasi enterprise.',
      en: 'Provide decentralized, low-latency, and modular data aggregation platforms for secure enterprise integration.',
    },
    {
      id: 'Mendampingi transformasi digital mitra B2B dengan pendekatan bertahap berbasis ROI yang dapat dihitung secara transparan.',
      en: 'Guide B2B partners through digital transformation with phased roadmaps rooted in transparently measurable ROI.',
    },
  ],
  stats: [
    {
      id: 'devices',
      value: 12450,
      suffix: '+',
      label: {
        id: 'Perangkat Aktif',
        en: 'Active Connected Nodes',
      },
      description: {
        id: 'Sensor & gateway beroperasi 24/7 di lapangan',
        en: 'Sensors & gateways operating 24/7 in field deployments',
      },
    },
    {
      id: 'projects',
      value: 86,
      suffix: '+',
      label: {
        id: 'Penerapan Industri',
        en: 'Industrial Deployments',
      },
      description: {
        id: 'Pabrik, perkebunan, utilitas, dan gedung komersial',
        en: 'Factories, plantations, utilities, and commercial facilities',
      },
    },
    {
      id: 'uptime',
      value: 99.94,
      suffix: '%',
      label: {
        id: 'Ketersediaan Jaringan SLA',
        en: 'SLA Telemetry Uptime',
      },
      description: {
        id: 'Keandalan pengiriman paket data telemetri',
        en: 'Reliability across edge-to-cloud telemetry pipelines',
      },
    },
    {
      id: 'savings',
      value: 32,
      suffix: '%',
      label: {
        id: 'Rata-rata Penurunan Downtime',
        en: 'Average Downtime Reduction',
      },
      description: {
        id: 'Melalui deteksi anomali getaran & termal dini',
        en: 'Achieved through early vibration & thermal anomaly detection',
      },
    },
  ] as AchievementStat[],
  values: [
    {
      id: 'val-1',
      number: '01',
      title: {
        id: 'Ketangguhan Rekayasa (Industrial-Grade)',
        en: 'Industrial-Grade Engineering',
      },
      description: {
        id: 'Setiap prototipe dan modul produksi melewati pengujian termal, getaran mekanis, dan proteksi intrusi IP67/IP68 sebelum tiba di fasilitas klien.',
        en: 'Every hardware prototype and production unit undergoes thermal stress, mechanical vibration, and IP67/IP68 intrusion testing prior to client deployment.',
      },
    },
    {
      id: 'val-2',
      number: '02',
      title: {
        id: 'Kedaulatan & Keamanan Data Klien',
        en: 'Data Sovereignty & Security',
      },
      description: {
        id: 'Infrastruktur mendukung on-premises private cloud maupun hybrid cloud. Seluruh paket transmisi dienkripsi AES-256 end-to-end dari node sensor.',
        en: 'Architecture supports on-premises private cloud or hybrid cloud. All transmissions maintain end-to-end AES-256 encryption directly from sensor nodes.',
      },
    },
    {
      id: 'val-3',
      number: '03',
      title: {
        id: 'Hasil Terukur Berbasis Dampak Bisnis',
        en: 'Measurable Business Outcomes',
      },
      description: {
        id: 'Kami tidak sekadar memasang sensor, melainkan mengkorelasikan telemetri fisik dengan indikator finansial: penurunan downtime, konsumsi kWh, dan yield hasil panen.',
        en: 'We do not merely install sensors; we link physical telemetry directly to bottom-line metrics: reduced downtime, kWh efficiency, and harvest yields.',
      },
    },
    {
      id: 'val-4',
      number: '04',
      title: {
        id: 'Interoperabilitas & Fleksibilitas Protokol',
        en: 'Protocol Interoperability',
      },
      description: {
        id: 'Dukungan terbuka terhadap standar industri termasuk Modbus RTU/TCP, MQTT, OPC UA, LoRaWAN, BLE Mesh, dan REST API tanpa vendor lock-in.',
        en: 'Open native support for standard protocols including Modbus RTU/TCP, MQTT, OPC UA, LoRaWAN, BLE Mesh, and REST APIs without proprietary lock-in.',
      },
    },
  ] as CompanyValue[],
  timeline: [
    {
      year: '2020',
      title: {
        id: 'Pendirian & Riset Gateway Perdana',
        en: 'Founding & First Industrial Gateway R&D',
      },
      description: {
        id: 'PT Innodesk didirikan di Bandung oleh insinyur mekatronika dan telekomunikasi dengan fokus gateway edge-computing berdaya rendah.',
        en: 'Founded in Bandung by mechatronics and telecom engineers focusing on low-power industrial edge-computing gateways.',
      },
    },
    {
      year: '2022',
      title: {
        id: 'Penyebaran Skala Besar Sektor Manufaktur',
        en: 'Large-scale Deployment in Manufacturing',
      },
      description: {
        id: 'Implementasi 2.000+ sensor getaran & arus listrik di lini perakitan komponen otomotif Jawa Barat untuk pemeliharaan prediktif.',
        en: 'Deployed 2,000+ vibration and current sensors across West Java automotive assembly lines for predictive maintenance.',
      },
    },
    {
      year: '2024',
      title: {
        id: 'Ekspansi Agrikultur & Solusi Smart Grid',
        en: 'Agriculture & Smart Grid Expansion',
      },
      description: {
        id: 'Meluncurkan seri sensor tanah mikroklimat LoRaWAN jarak jauh serta gateway sub-metering daya untuk gedung bertingkat.',
        en: 'Released long-range LoRaWAN soil microclimate sensor series and building sub-metering power gateways.',
      },
    },
    {
      year: '2026',
      title: {
        id: 'Arsitektur Edge AI & Otomasi Generasi Baru',
        en: 'Next-Gen Edge AI & Automation Architecture',
      },
      description: {
        id: 'Mencapai 12.000+ node aktif terdistribusi dan sertifikasi ISO 27001 untuk keamanan pengelolaan telemetri enterprise.',
        en: 'Surpassed 12,000+ active deployed nodes with ISO 27001 certification for enterprise telemetry security management.',
      },
    },
  ] as TimelineMilestone[],
  partners: [
    { name: 'Nusantara Heavy Machinery', sector: 'Manufaktur Alat Berat', tag: 'Prediktif Vibrasi' },
    { name: 'PT Agritech Palma Mandiri', sector: 'Perkebunan & Agrikultur', tag: 'Telemetri Mikroklimat' },
    { name: 'Surya Cipta Industrial Park', sector: 'Pengelola Kawasan Industri', tag: 'Sub-Metering Daya' },
    { name: 'Metro Tower Commercial', sector: 'Gedung Komersial', tag: 'Smart HVAC & Energi' },
    { name: 'Logistik Andalas Raya', sector: 'Cold Chain & Rantai Dingin', tag: 'Monitoring Suhu GPS' },
    { name: 'Tirta Bersih Municipal', sector: 'Utilitas Pengolahan Air', tag: 'Level Tangki & Flowmeter' },
  ] as ClientPartner[],
};
