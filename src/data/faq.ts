export interface FAQItem {
  id: string;
  category: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Implementasi',
    question: {
      id: 'Berapa lama rata-rata durasi implementasi sistem IoT PT Innodesk dari survei hingga go-live?',
      en: 'What is the typical deployment timeline from initial site assessment to live telemetry?',
    },
    answer: {
      id: 'Untuk proyek percontohan (Proof of Concept / PoC) dengan 20-50 sensor, proses memakan waktu 2 hingga 4 minggu mencakup site survey, instalasi non-invasif, dan kalibrasi dashboard. Untuk implementasi skala penuh pabrik atau perkebunan, timeline berkisar antara 6 hingga 12 minggu tanpa mengganggu siklus operasional produksi eksisting.',
      en: 'For a Proof of Concept (PoC) spanning 20–50 nodes, execution requires 2 to 4 weeks covering site inspection, non-invasive installation, and dashboard calibration. Full-scale enterprise rollouts span 6 to 12 weeks with zero interruption to active production cycles.',
    },
  },
  {
    id: 'faq-2',
    category: 'Hardware & Kompatibilitas',
    question: {
      id: 'Apakah instalasi sensor Innodesk memerlukan perombakan mesin lama atau pemotongan kabel listrik?',
      en: 'Does installing Innodesk telemetry hardware require modifying existing machines or cutting power cables?',
    },
    answer: {
      id: 'Tidak. Sebagian besar sensor kami dirancang dengan prinsip non-invasif. Pengukuran arus listrik menggunakan Current Transformer (CT) tipe split-core yang cukup dikalungkan pada konduktor tanpa memutus daya. Sensor getaran ditempelkan menggunakan base magnetik industri atau perekat cyanoacrylate struktural khusus.',
      en: 'No. The majority of our sensory hardware is engineered to be strictly non-invasive. Electrical metering utilizes split-core Current Transformers clamped around live conductors without shutdown. Vibration transmitters mount securely using industrial magnetic stubs or structural industrial adhesive bases.',
    },
  },
  {
    id: 'faq-3',
    category: 'Hardware & Kompatibilitas',
    question: {
      id: 'Bagaimana jika area pabrik atau perkebunan kami tidak memiliki jangkauan sinyal internet seluler?',
      en: 'What if our factory perimeter or plantation acreage has zero cellular mobile coverage?',
    },
    answer: {
      id: 'Kami menggunakan topologi jaringan privat jarak jauh LoRaWAN atau Industrial Mesh yang mampu menjangkau radius hingga 12 km mandiri. Untuk koneksi ke server, gateway kami dapat dipadukan dengan terminal satelit berbiaya terjangkau atau jaringan intranet lokal (on-premises LAN) tanpa ketergantungan internet publik.',
      en: 'We leverage private, autonomous long-range LoRaWAN or Industrial Mesh topologies with up to 12 km coverage radius. For uplinks, our gateways support cost-effective low-orbit satellite terminals or private on-premises LAN backhaul without relying on public internet.',
    },
  },
  {
    id: 'faq-4',
    category: 'Keamanan Data',
    question: {
      id: 'Bagaimana PT Innodesk memastikan keamanan dan privasi data telemetri operasional kami?',
      en: 'How does PT Innodesk safeguard operational telemetry data security and privacy?',
    },
    answer: {
      id: 'Seluruh transmisi data dienkripsi dengan standar TLS 1.3 dan AES-256 langsung dari level gateway. Kami mendukung instalasi on-premises di mana data tidak pernah meninggalkan server lokal perusahaan Anda, atau private cloud berdedikasi dengan isolasi jaringan VPN dan sertifikasi ISO 27001.',
      en: 'All data frames are encrypted using TLS 1.3 and AES-256 directly at the gateway hardware level. We fully support on-premises deployments where raw telemetry never exits your firewall, or single-tenant private cloud instances with dedicated VPN isolation and ISO 27001 certified governance.',
    },
  },
  {
    id: 'faq-5',
    category: 'Integrasi',
    question: {
      id: 'Apakah platform Innodesk dapat diintegrasikan dengan sistem SCADA, ERP, atau SAP kami?',
      en: 'Can Innodesk platforms integrate natively with our existing SCADA, ERP, or SAP installations?',
    },
    answer: {
      id: 'Ya. Platform kami menyediakan konektor standar terbuka termasuk OPC UA Server, Modbus TCP Slave, MQTT Broker bridge, serta RESTful API dan Webhook dengan dokumentasi Swagger lengkap. Anda dapat mengirimkan peringatan otomatis ke modul maintenance work-order SAP PM Anda.',
      en: 'Yes. Our platform provides standardized open connectors including OPC UA Server, Modbus TCP Slave, MQTT Broker bridges, as well as comprehensive RESTful APIs and Webhooks with complete OpenAPI documentation to trigger automated SAP PM maintenance work-orders.',
    },
  },
  {
    id: 'faq-6',
    category: 'Skema Komersial',
    question: {
      id: 'Bagaimana skema pengadaan dan garansi perangkat keras PT Innodesk?',
      en: 'What are the commercial procurement models and hardware warranty policies?',
    },
    answer: {
      id: 'Kami menawarkan model belanja modal (CapEx) dengan garansi perangkat keras 24 bulan dan opsi kontrak pemeliharaan berkelanjutan, maupun model berbasis langganan (OpEx / IoT as a Service) yang mencakup penggantian hardware berkala, kartu SIM data industri, dan pembaruan firmware berkala.',
      en: 'We offer conventional CapEx procurement backed by a 24-month hardware warranty and extended maintenance SLAs, as well as OpEx / IoT-as-a-Service subscriptions bundling continuous hardware replacements, industrial multi-carrier SIMs, and routine firmware security updates.',
    },
  },
];
