export interface CaseStudyMetric {
  value: string;
  label: {
    id: string;
    en: string;
  };
  context: {
    id: string;
    en: string;
  };
}

export interface CaseStudyItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  clientPlaceholder: string;
  industry: 'Manufaktur' | 'Agrikultur' | 'Energi & Utilitas' | 'Smart Building';
  industryLabel: {
    id: string;
    en: string;
  };
  year: string;
  challenge: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  results: {
    id: string[];
    en: string[];
  };
  metrics: CaseStudyMetric[];
  techUsed: string[];
  featured: boolean;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'automotive-assembly-vibration',
    title: {
      id: 'Penerapan Pemeliharaan Prediktif Getaran & Arus pada 48 Mesin Stamping Otomotif',
      en: 'Predictive Vibration & Current Telemetry Deployment Across 48 Automotive Stamping Presses',
    },
    clientPlaceholder: 'Pabrikan Komponen Otomotif Multinasional (Cikarang)',
    industry: 'Manufaktur',
    industryLabel: {
      id: 'Manufaktur & Otomotif',
      en: 'Manufacturing & Automotive',
    },
    year: '2024',
    challenge: {
      id: 'Kerusakan bearing pada mesin press hidrolik 800 ton sering terjadi tanpa gejala kasat mata, mengakibatkan rata-rata downtime tidak terencana 14 jam per bulan dengan kerugian estimasi Rp 350 juta per kejadian stop-line.',
      en: 'Frequent catastrophic bearing failure on 800-ton hydraulic press machines occurred with no visible warning signs, causing an average of 14 hours unplanned monthly downtime with estimated losses of IDR 350M per line stoppage.',
    },
    solution: {
      id: 'Pemasangan 192 titik sensor akselerometer triaksial IEPE dan sensor arus split-core yang dihubungkan ke 12 unit Innodesk EdgeGate-400. Sistem menjalankan komputasi FFT tepi lokal dan memicu peringatan getaran high-frequency sebelum panas bearing melonjak.',
      en: 'Installed 192 triaxial IEPE accelerometer points and split-core current transducers wired to 12 Innodesk EdgeGate-400 edge units. The system runs localized FFT edge analytics, flagging micro-fracture harmonics weeks before thermal escalation.',
    },
    results: {
      id: [
        'Downtime tidak terencana terpangkas sebesar 68% dalam 6 bulan pertama',
        'Deteksi dini 4 anomali kritis bantalan poros utama sebelum insiden stop produksi',
        'Biaya penggantian spare part mekanikal darurat menurun hingga 42%',
        'Korelasi data getaran dengan siklus kerja mesin terintegrasi langsung ke SAP PM',
      ],
      en: [
        'Unplanned downtime reduced by 68% within the initial 6 months',
        'Early detection of 4 critical main shaft bearing anomalies prior to breakdown',
        'Emergency mechanical spare parts procurement costs dropped by 42%',
        'Vibration telemetry coupled directly into plant SAP PM maintenance workorders',
      ],
    },
    metrics: [
      {
        value: '-68%',
        label: { id: 'Downtime Tidak Terencana', en: 'Unplanned Downtime' },
        context: { id: 'Dari 14 jam/bln menjadi < 4.5 jam/bln', en: 'From 14 hrs/mo down to < 4.5 hrs/mo' },
      },
      {
        value: 'Rp 1.8M',
        label: { id: 'Estimasi Penghematan Biaya', en: 'Estimated Cost Avoidance' },
        context: { id: 'Tercapai dalam 9 bulan operasional', en: 'Achieved in first 9 months of operation' },
      },
      {
        value: '192',
        label: { id: 'Sensor Titik Terpasang', en: 'Sensor Nodes Active' },
        context: { id: 'Protokol Modbus RTU & MQTT TLS', en: 'Modbus RTU & MQTT TLS protocols' },
      },
    ],
    techUsed: ['Innodesk EdgeGate-400', 'Sensor Getaran IEPE 10kHz', 'Split-core CT 400A', 'MQTT TLS 1.3', 'SAP PM Connector'],
    featured: true,
  },
  {
    id: 'oil-palm-microclimate-lorawan',
    title: {
      id: 'Telemetri Mikroklimat & Irigasi Presisi Bibit Kelapa Sawit di Area 1.200 Hektar',
      en: 'Microclimate & Precision Irrigation Telemetry Across 1,200 Hectares of Nursery Topography',
    },
    clientPlaceholder: 'Grup Perkebunan Kelapa Sawit Nasional (Riau)',
    industry: 'Agrikultur',
    industryLabel: {
      id: 'Agrikultur & Perkebunan',
      en: 'Agriculture & Plantations',
    },
    year: '2023',
    challenge: {
      id: 'Tingkat mortalitas bibit sawit mencapai 18% akibat kekurangan atau kelebihan air pada blok pembibitan terpencil, serta ketergantungan pada pengecekan manual yang memakan waktu petugas berjam-jam setiap harinya.',
      en: 'Seedling mortality rate peaked at 18% due to inconsistent soil hydration across remote nursery blocks, hindered by manual dipstick checks requiring excessive patrol hours across vast acreage.',
    },
    solution: {
      id: 'Penyebaran 80 node sensor nirkabel bertenaga surya Innodesk AgroProbe (mengukur VWC 3 kedalaman dan suhu tanah) terhubung ke 3 Gateway LoRaWAN berketinggian tiang 25 meter. Dilengkapi aktuasi solenoid otomatis untuk membuka irigasi saat kadar air < 22%.',
      en: 'Deployed 80 autonomous solar-powered Innodesk AgroProbe telemetry nodes (measuring 3-depth VWC and soil temperature) coupled to 3 LoRaWAN tower gateways. Integrated precision solenoid actuators triggered automated watering when soil moisture dipped below 22%.',
    },
    results: {
      id: [
        'Mortalitas bibit sawit berhasil diturunkan drastis dari 18% menjadi hanya 4.2%',
        'Efisiensi penggunaan air irigasi meningkat 34% berkat pemadaman otomatis saat tanah jenuh',
        'Data tanah dan cuaca tersinkronisasi otomatis setiap 15 menit ke dashboard agronomi',
        'Waktu patroli tenaga kerja lapangan dapat dialihkan ke kegiatan perawatan tanaman bernilai tambah',
      ],
      en: [
        'Seedling mortality collapsed from 18% down to only 4.2%',
        'Irrigation water usage efficiency improved by 34% via automated cut-off when saturated',
        'Soil microclimate updates synchronized every 15 minutes to agronomy dashboard',
        'Field patrol personnel redeployed to high-value plant nurturing tasks',
      ],
    },
    metrics: [
      {
        value: '-76%',
        label: { id: 'Penurunan Kematian Bibit', en: 'Reduction in Mortality' },
        context: { id: 'Dari 18% ke 4.2% dalam 1 siklus tanam', en: 'From 18% down to 4.2% in single crop cycle' },
      },
      {
        value: '34%',
        label: { id: 'Penghematan Volume Air', en: 'Water Conservation' },
        context: { id: 'Irigasi cerdas berbasis kebutuhan nyata', en: 'Demand-driven smart pulse irrigation' },
      },
      {
        value: '12 km',
        label: { id: 'Jangkauan LoRaWAN', en: 'LoRaWAN Coverage' },
        context: { id: 'Tanpa kabel transmisi darat', en: 'Zero ground cabling requirements' },
      },
    ],
    techUsed: ['Innodesk AgroProbe TDR', 'LoRaWAN 923MHz Gateway', 'Solar LiFePO4 Module', 'Solenoid Actuator Hub'],
    featured: true,
  },
  {
    id: 'commercial-tower-energy-hvac',
    title: {
      id: 'Optimasi Energi Sub-Metering & Kontrol HVAC Gedung Perkantoran 32 Lantai',
      en: 'Sub-Metering Energy Optimization & HVAC Control for a 32-Story Commercial Tower',
    },
    clientPlaceholder: 'Pengelola Properti Perkantoran Grade-A (Jakarta Pusat)',
    industry: 'Smart Building',
    industryLabel: {
      id: 'Smart Building & Energi',
      en: 'Smart Buildings & Energy',
    },
    year: '2024',
    challenge: {
      id: 'Tagihan listrik bulanan mencapai Rp 1.4 Miliar dengan 58% diserap oleh sistem pendingin Chiller. Kurangnya transparansi sub-metering per lantai menyulitkan audit efisiensi energi dan pembebanan tagihan ke tenant.',
      en: 'Monthly electricity overhead exceeded IDR 1.4 Billion, with 58% absorbed by central chiller HVAC cooling loops. Absence of granular per-floor submetering obstructed energy audits and fair tenant apportioning.',
    },
    solution: {
      id: 'Implementasi 96 power meter Class 0.5S di seluruh Main Distribution Panel (MDP) per lantai dan ruang chiller, dipadukan 128 sensor kualitas udara CO2/Suhu Innodesk AirSense. Integrasi BACnet ke chiller plant memungkinkan penyesuaian otomatis set-point suhu berdasar kepadatan aktual.',
      en: 'Integrated 96 Class 0.5S power transducers across all floor MDP risers and central chiller plant, paired with 128 Innodesk AirSense CO2/thermal sensors. A native BACnet bridge automated chiller temperature set-points based on real-time occupant density.',
    },
    results: {
      id: [
        'Konsumsi listrik keseluruhan gedung turun 21.4% (penghematan rata-rata Rp 290 juta/bulan)',
        'Faktor daya (Power Factor) terjaga konsisten di atas 0.95, meniadakan denda kVARh PLN',
        'Portal penagihan mandiri bagi penyewa (tenant sub-billing) selesai secara otomatis',
        'Sertifikasi Greenship Gold tercapai berkat kepatuhan standar monitoring energi real-time',
      ],
      en: [
        'Overall tower power consumption reduced by 21.4% (avg. savings IDR 290M/month)',
        'Power Factor maintained strictly above 0.95, totally eliminating PLN kVARh penalties',
        'Automated tenant utility sub-billing platform operating without manual meter reads',
        'Greenship Gold green building certification achieved through audited real-time energy telemetry',
      ],
    },
    metrics: [
      {
        value: '-21.4%',
        label: { id: 'Penurunan Konsumsi kWh', en: 'Total kWh Reduction' },
        context: { id: 'Penghematan Rp 290 Juta per bulan', en: 'Saving IDR 290M per calendar month' },
      },
      {
        value: '>0.96',
        label: { id: 'Faktor Daya (Cos φ)', en: 'Power Factor Maintained' },
        context: { id: 'Bebas penalti kVARh dari utilitas PLN', en: 'Zero utility reactive power penalties' },
      },
      {
        value: '96',
        label: { id: 'Panel Sub-Meter Terkoneksi', en: 'Sub-Meters Connected' },
        context: { id: 'Data diperbarui setiap 10 detik', en: 'Telemetry refreshed every 10 seconds' },
      },
    ],
    techUsed: ['PowerTrans-3P Class 0.5S', 'AirSense IEQ Sensors', 'BACnet/IP Gateway', 'Innodesk FacilityIQ Cloud'],
    featured: true,
  },
  {
    id: 'cement-plant-conveyor-telemetry',
    title: {
      id: 'Monitoring Suhu & Getaran Belt Conveyor Pabrik Semen Panjang 2.8 Kilometer',
      en: 'Belt Conveyor Roller Temperature & Vibration Telemetry on a 2.8 km Cement Production Line',
    },
    clientPlaceholder: 'Produsen Semen Nasional (Jawa Timur)',
    industry: 'Energi & Utilitas',
    industryLabel: {
      id: 'Utilitas & Industri Berat',
      en: 'Heavy Industry & Utilities',
    },
    year: '2023',
    challenge: {
      id: 'Roller conveyor batubara sering mengalami keausan mendadak akibat debu abrasif klinker. Gesekan berlebih beberapa kali menimbulkan titik panas (hotspot) berisiko kebakaran fatal pada sabuk conveyor.',
      en: 'Coal conveyor idler rollers suffered sudden abrasive seizure from clinker dust. High friction caused intermittent thermal hotspots posing fire hazards along the elevated 2.8 km transport structure.',
    },
    solution: {
      id: 'Pemasangan sensor termal non-kontak inframerah dan sensor getaran nirkabel berdaya baterai tahan 5 tahun pada 120 titik idler bearing kritis. Gateway nirkabel berjejaring mengirim peringatan jika suhu roller melebihi 65°C.',
      en: 'Installed wireless non-contact infrared thermal pyrometers and vibration telemetry nodes with 5-year battery autonomy along 120 critical conveyor idler stations. Wireless mesh gateways alert operators whenever any roller exceeds 65°C.',
    },
    results: {
      id: [
        'Nol (0) insiden kebakaran conveyor sejak implementasi sistem IoT',
        'Waktu penggantian roller terjadwal saat jam istirahat maintenance tanpa memutus proses produksi',
        'Efisiensi patroli inspeksi mekanik meningkat hingga 75%',
      ],
      en: [
        'Zero conveyor thermal fire incidents since telemetry deployment',
        'Roller replacements safely scheduled during routine pauses without halting production',
        'Mechanical patrol inspection efficiency boosted by 75%',
      ],
    },
    metrics: [
      {
        value: '0 Insiden',
        label: { id: 'Kejadian Kebakaran', en: 'Fire Incidents' },
        context: { id: 'Sejak sistem dipasang Oktober 2023', en: 'Zero incidents since Oct 2023 go-live' },
      },
      {
        value: '< 5 Detik',
        label: { id: 'Latensi Alarm Termal', en: 'Thermal Alert Latency' },
        context: { id: 'Langsung memicu interlock keamanan', en: 'Directly triggers safety interlock stop' },
      },
      {
        value: '120',
        label: { id: 'Titik Idler Terpantau', en: 'Idler Points Monitored' },
        context: { id: 'Jaringan nirkabel tahan debu IP67', en: 'IP67 dustproof wireless nodes' },
      },
    ],
    techUsed: ['Innodesk Pyrometer IR-Wireless', 'Mesh Industrial Gateway', 'Modbus TCP Interlock PLC'],
    featured: false,
  },
];
