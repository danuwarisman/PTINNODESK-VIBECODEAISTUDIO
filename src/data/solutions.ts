export interface SolutionSpecification {
  parameter: string;
  value: string;
}

export interface SolutionItem {
  id: string;
  name: {
    id: string;
    en: string;
  };
  category: 'Industri' | 'Agrikultur' | 'Energi' | 'Smart Building';
  categoryLabel: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  features: {
    id: string[];
    en: string[];
  };
  specifications: SolutionSpecification[];
  architecture: {
    sensorLayer: string;
    gatewayLayer: string;
    platformLayer: string;
  };
  idealFor: string[];
  badge: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'smart-factory-monitoring',
    name: {
      id: 'Smart Factory & Machine Health Telemetry',
      en: 'Smart Factory & Machine Health Telemetry',
    },
    category: 'Industri',
    categoryLabel: {
      id: 'Industri & Manufaktur',
      en: 'Industry & Manufacturing',
    },
    summary: {
      id: 'Pemantauan getaran, suhu motor, dan konsumsi daya mesin secara real-time untuk mencegah breakdown mendadak.',
      en: 'Real-time vibration, motor temperature, and power telemetry to prevent sudden catastrophic machine breakdown.',
    },
    description: {
      id: 'Solusi end-to-end yang mengintegrasikan sensor akselerometer triaksial industri, termokopel PT100, dan Current Transformer (CT) non-invasif ke gateway komputasi tepi (Edge Gateway). Data dianalisis secara lokal untuk mendeteksi anomali frekuensi getaran bantalan (bearing defect) dan ketidakseimbangan rotor sebelum terjadi kerusakan fatal.',
      en: 'An end-to-end telemetry system combining triaxial industrial accelerometers, PT100 thermal probes, and non-invasive Current Transformers to an edge-computing gateway. Locally computed FFT spectra identify bearing faults and rotor imbalances weeks ahead of mechanical seizure.',
    },
    features: {
      id: [
        'Analisis spektrum getaran FFT frekuensi hingga 10 kHz',
        'Deteksi anomali suhu multi-titik bantalan dan gearbox',
        'Perhitungan metrik OEE (Overall Equipment Effectiveness) otomatis',
        'Notifikasi peringatan ambang batas multi-kanal (Email, Telegram, Webhook)',
        'Konektivitas dual-redundant: Ethernet industri & 4G/LTE failover',
      ],
      en: [
        'FFT vibration spectrum analysis up to 10 kHz frequency',
        'Multi-point bearing and gearbox temperature anomaly detection',
        'Automated OEE (Overall Equipment Effectiveness) metric derivation',
        'Multi-channel threshold alert dispatch (Email, Telegram, Webhooks)',
        'Dual-redundant industrial Ethernet and 4G/LTE failover connectivity',
      ],
    },
    specifications: [
      { parameter: 'Frekuensi Sampling', value: '1 Hz - 25.6 kHz (Dapat dikonfigurasi)' },
      { parameter: 'Sertifikasi Proteksi', value: 'IP67 Enclosure Industri tahan minyak' },
      { parameter: 'Protokol Transmisi', value: 'Modbus RTU, MQTT TLS 1.3, OPC UA' },
      { parameter: 'Catu Daya', value: '24V DC Industri atau PoE 802.3af' },
      { parameter: 'Suhu Operasional', value: '-20°C hingga +75°C' },
    ],
    architecture: {
      sensorLayer: 'Akselerometer IEPE, Current Transformer Split-Core, Probe PT100 Class A',
      gatewayLayer: 'Innodesk EdgeGate-400 (Quad-core ARM, Linux RT, Storage eMMC 16GB)',
      platformLayer: 'Innodesk Telemetry Cloud / On-Premises SCADA Connector',
    },
    idealFor: [
      'Pabrik otomotif & komponen presisi',
      'Pabrik semen, kertas, dan pengolahan logam',
      'Peralatan berputar (pompa, kompresor, turbin, blower)',
    ],
    badge: 'Flagship Industri',
  },
  {
    id: 'precision-agriculture-telemetry',
    name: {
      id: 'Precision Agriculture Microclimate Network',
      en: 'Precision Agriculture Microclimate Network',
    },
    category: 'Agrikultur',
    categoryLabel: {
      id: 'Agrikultur & Perkebunan',
      en: 'Agriculture & Plantations',
    },
    summary: {
      id: 'Jaringan nirkabel LoRaWAN untuk memantau kelembapan tanah multi-kedalaman, radiasi matahari, dan sistem irigasi otomatis.',
      en: 'Wireless LoRaWAN mesh network monitoring multi-depth soil moisture, solar radiation, and automated irrigation triggers.',
    },
    description: {
      id: 'Node sensor bertenaga surya mandiri yang mengukur VWC (Volumetric Water Content), EC (Electrical Conductivity), pH, dan suhu tanah pada 3 kedalaman berbeda (10cm, 30cm, 60cm). Jangkauan transmisi LoRaWAN hingga 12 km menjangkau blok perkebunan terpencil tanpa kebutuhan kabel lapangan.',
      en: 'Autonomous solar-powered sensor nodes measuring Volumetric Water Content, Electrical Conductivity, soil pH, and subsurface temperature across 3 distinct depths. Long-range LoRaWAN reaches up to 12 km across remote plantation topography without trench wiring.',
    },
    features: {
      id: [
        'Transmisi nirkabel LoRaWAN 915/923 MHz jangkauan hingga 12 km',
        'Baterai LiFePO4 internal dengan panel surya monokristalin efisiensi tinggi',
        'Sensor kapasitif multi-kedalaman tahan korosi pupuk kimia',
        'Integrasi relay penggerak katup solenoid irigasi presisi',
        'Penyimpanan data offline lokal hingga 60 hari jika sinyal terputus',
      ],
      en: [
        'LoRaWAN 915/923 MHz wireless transmission up to 12 km line-of-sight',
        'Internal LiFePO4 battery pack with high-efficiency monocrystalline solar panel',
        'Corrosion-resistant multi-depth capacitive probes immune to fertilizer salts',
        'Precision solenoid valve actuator relay integration',
        'Local offline flash logging up to 60 days buffer during transmission drops',
      ],
    },
    specifications: [
      { parameter: 'Daya Tahan Baterai', value: 'Hingga 5 tahun tanpa ganti (Solar Assisted)' },
      { parameter: 'Jarak Transmisi', value: '3 km (Kerapatan Kanopi) / 12 km (Line-of-Sight)' },
      { parameter: 'Kedalaman Sensor', value: '3 Tingkat (10 cm, 30 cm, 60 cm)' },
      { parameter: 'Rating Proteksi', value: 'IP68 Kedap Air Rendaman Tanah' },
      { parameter: 'Interval Kirim', value: '5 - 60 Menit (Dapat diatur dinamis)' },
    ],
    architecture: {
      sensorLayer: 'Innodesk AgroProbe TDR/FDR Multi-depth, Stasiun Cuaca Davis/Innodesk',
      gatewayLayer: 'Innodesk Outdoor Gateway GW-900 (Surge Protected, PoE, Backhaul 4G)',
      platformLayer: 'Innodesk Agronomics Engine & Solenoid Control API',
    },
    idealFor: [
      'Perkebunan kelapa sawit, karet, dan tebu',
      'Greenhouse hortikultura skala komersial',
      'Hutan tanaman industri dan proyek reboisasi',
    ],
    badge: 'LoRaWAN Long Range',
  },
  {
    id: 'power-quality-submetering',
    name: {
      id: 'Industrial Sub-Metering & Power Quality Hub',
      en: 'Industrial Sub-Metering & Power Quality Hub',
    },
    category: 'Energi',
    categoryLabel: {
      id: 'Energi & Utilitas',
      en: 'Energy & Utilities',
    },
    summary: {
      id: 'Pemantauan konsumsi listrik multi-panel, analisis harmonisa (THD), dan deteksi kebocoran energi untuk kepatuhan ISO 50001.',
      en: 'Multi-panel electricity metering, harmonic distortion (THD) analysis, and energy leak detection for ISO 50001 compliance.',
    },
    description: {
      id: 'Sistem sub-metering daya berakurasi tinggi (Class 0.5S) yang mengaudit penggunaan listrik per departemen atau lini mesin. Memetakan beban puncak (Peak Demand), faktor daya (Power Factor), lonjakan tegangan (voltage sags/swells), serta menyuplai data analitik untuk penalti daya reaktif PLN.',
      en: 'High-precision power monitoring system (Class 0.5S) auditing electricity consumption by department or production machine line. Tracks peak demand, power factor cos-phi, voltage sag/swell transients, and flags reactive power penalty thresholds.',
    },
    features: {
      id: [
        'Pengukuran 3-Fasa: V, I, kW, kVA, kvar, kWh, Frekuensi, Cos φ',
        'Analisis Total Harmonic Distortion (THD-V & THD-I hingga orde ke-31)',
        'Perhitungan otomatis emisi karbon ekuivalen (kg CO2e)',
        'Deteksi dini beban tidak seimbang antar fasa (phase imbalance)',
        'Ekspor laporan otomatis format PDF/Excel sesuai standar ISO 50001',
      ],
      en: [
        'Full 3-Phase metering: V, I, kW, kVA, kvar, kWh, Frequency, Power Factor',
        'Total Harmonic Distortion analysis (THD-V & THD-I up to 31st order)',
        'Automated carbon emissions calculation (kg CO2e equivalent)',
        'Early detection of phase load imbalance across distribution panels',
        'Automated ISO 50001 compliant PDF/Excel audit report compilation',
      ],
    },
    specifications: [
      { parameter: 'Kelas Akurasi', value: 'IEC 62053-22 Class 0.5S' },
      { parameter: 'Pilihan Sensor Arus', value: 'CT Split-core 50A hingga 2500A (Tanpa memutus kabel)' },
      { parameter: 'Protokol Bus', value: 'RS485 Modbus RTU / Modbus TCP over LAN' },
      { parameter: 'Sampling Laju', value: '64 sampel per siklus (3.2 kHz)' },
      { parameter: 'Mounting', value: 'Rel DIN 35mm standar panel distribusi' },
    ],
    architecture: {
      sensorLayer: 'Innodesk PowerTrans-3P Class 0.5S & Rogowski Coil Busbar Probes',
      gatewayLayer: 'Innodesk EnergyConcentrator-8X (RS485 Hub dengan Buffer Data Lokal)',
      platformLayer: 'Innodesk EnergyAnalytics Cloud & REST API Integrator',
    },
    idealFor: [
      'Gedung perkantoran & pusat perbelanjaan',
      'Pabrik manufaktur dengan konsumsi listrik skala MV/LV',
      'Pusat data (Data Center) dengan pemantauan PUE ketat',
    ],
    badge: 'Akurasi Class 0.5S',
  },
  {
    id: 'smart-facility-building-automation',
    name: {
      id: 'Smart Facility & Indoor Environmental Quality (IEQ)',
      en: 'Smart Facility & Indoor Environmental Quality (IEQ)',
    },
    category: 'Smart Building',
    categoryLabel: {
      id: 'Smart Building & Fasilitas',
      en: 'Smart Buildings & Facilities',
    },
    summary: {
      id: 'Optimalisasi HVAC, pemantauan kualitas udara (CO2, PM2.5, VOC), dan kontrol pencahayaan cerdas untuk efisiensi gedung.',
      en: 'HVAC optimization, indoor air quality monitoring (CO2, PM2.5, VOC), and smart lighting telemetry for building efficiency.',
    },
    description: {
      id: 'Ekosistem otomasi fasilitas modern yang menggabungkan sensor kualitas udara dalam ruangan (IEQ), sensor okupansi presisi tinggi, dan aktuator kontrol pendingin ruangan (Chiller/VRV). Menghilangkan pemborosan energi pendinginan pada ruang kosong dan menjaga kadar CO2 di bawah 800 ppm demi produktivitas staf.',
      en: 'A modern facility automation ecosystem combining indoor air quality sensors, occupancy detection, and HVAC damper/VRV control actuators. Eliminates wasteful cooling of unoccupied zones while sustaining CO2 levels below 800 ppm for occupant productivity.',
    },
    features: {
      id: [
        'Pengukuran serentak: CO2 NDIR, PM2.5 laser, TVOC, Suhu, Kelembapan',
        'Algoritma Demand-Controlled Ventilation (DCV) integrasi Chiller & AHU',
        'Deteksi kebocoran air pipa tersembunyi dengan sensor tali konduktif',
        'Integrasi BACnet MS/TP dan BACnet/IP ke sistem BAS eksisting',
        'Peta panas (heatmap) okupansi ruang rapat dan lantai kantor',
      ],
      en: [
        'Simultaneous telemetry: NDIR CO2, Laser PM2.5, TVOC, Temp, Relative Humidity',
        'Demand-Controlled Ventilation (DCV) logic coupled with Chiller/AHU dampers',
        'Concealed pipe water leak detection via conductive perimeter rope sensors',
        'Native BACnet MS/TP and BACnet/IP bridge to existing Building Automation Systems',
        'Thermal occupancy heatmap for conference rooms and open office floors',
      ],
    },
    specifications: [
      { parameter: 'Sensor CO2', value: 'Dual-beam NDIR Sensor (±30 ppm + 3%)' },
      { parameter: 'Konektivitas', value: 'Wi-Fi 802.11 b/g/n, BLE 5.0 Mesh, BACnet/IP' },
      { parameter: 'Tegangan Kerja', value: '12-24V AC/DC atau USB-C 5V DC' },
      { parameter: 'Display Lokal', value: 'E-Paper Monochrome 2.9 inch (Kontras tinggi)' },
      { parameter: 'Dimensi Unit', value: '95 mm x 95 mm x 28 mm (Wall Mounted)' },
    ],
    architecture: {
      sensorLayer: 'Innodesk AirSense Pro NDIR/Laser, Rope Leak Sensor, PIR Micro-motion',
      gatewayLayer: 'Innodesk BACnet Bridge / Edge Controller Local Daemon',
      platformLayer: 'Innodesk FacilityIQ Dashboard & Tenant Billing Module',
    },
    idealFor: [
      'Gedung perkantoran Grade-A & Co-working space',
      'Fasilitas farmasi, rumah sakit, dan laboratorium steril',
      'Pusat perbelanjaan dan terminal bandara',
    ],
    badge: 'Integrasi BACnet',
  },
  {
    id: 'cold-chain-logistics-telemetry',
    name: {
      id: 'Cold Chain & Fleet Telematics Gateway',
      en: 'Cold Chain & Fleet Telematics Gateway',
    },
    category: 'Industri',
    categoryLabel: {
      id: 'Logistik & Distribusi',
      en: 'Logistics & Distribution',
    },
    summary: {
      id: 'Pelacakan suhu ultra-rendah dan lokasi armada berpendingin secara simultan dengan log data tak terputus saat offline.',
      en: 'Real-time ultra-low temperature and GPS fleet tracking with unbroken offline blackbox logging.',
    },
    description: {
      id: 'Dirancang khusus untuk logistik produk farmasi, vaksin, dan makanan beku. Mengkombinasikan sensor suhu termistor medis (rentang hingga -80°C), akselerometer goncangan pengiriman, pelacak satelit GPS/GLONASS, dan transmisi 4G e-SIM multi-operator.',
      en: 'Engineered specifically for pharmaceutical cold chain, vaccine logistics, and frozen foodstuffs. Combines medical-grade RTD thermal probes (-80°C range), transit impact shock sensors, GPS/GLONASS telemetry, and multi-carrier e-SIM connectivity.',
    },
    features: {
      id: [
        'Rentang pengukuran suhu cryogenic hingga -80°C untuk rantai dingin medis',
        'Perekaman titik koordinat GPS dan status pintu kontainer (buka/tutup)',
        'Sertifikasi kalibrasi terakreditasi KAN / ISO 17025 per sensor',
        'Mode offline otomatis merekam data saat berada di luar sinyal seluler',
        'Baterai cadangan internal tahan hingga 14 hari bila sumber daya truk mati',
      ],
      en: [
        'Cryogenic temperature range down to -80°C for medical cold chain',
        'Continuous GPS waypoint tracking and reefer door open/close trip logging',
        'Accredited KAN / ISO 17025 calibration certification per serial probe',
        'Autonomous blackbox mode buffering data when traversing cellular dead zones',
        'Internal backup battery sustaining up to 14 days if vehicle auxiliary power halts',
      ],
    },
    specifications: [
      { parameter: 'Rentang Sensor Suhu', value: '-80°C hingga +60°C (Akurasi ±0.2°C)' },
      { parameter: 'Modem Seluler', value: '4G LTE Cat-M1 / NB-IoT / GSM Fallback' },
      { parameter: 'Ketahanan Enclosure', value: 'IP67 Tahan Getaran Sasis Kendaraan' },
      { parameter: 'Kapasitas Baterai', value: '7,800 mAh Li-ion Rechargeable' },
      { parameter: 'Sertifikasi Kepatuhan', value: 'WHO PQS Standard & BPOM GDP Compliant' },
    ],
    architecture: {
      sensorLayer: 'Innodesk CryoProbe PT1000, Kontak Magnet Pintu Reed-Switch',
      gatewayLayer: 'Innodesk FleetGate-Tracker (GNSS + LTE-M + BLE Receiver)',
      platformLayer: 'Innodesk ColdChain Live Platform & PDF Audit Exporter',
    },
    idealFor: [
      'Distributor vaksin dan produk biologi farmasi',
      'Eksportir hasil laut dan daging beku',
      'Supermarket rantai dingin nasional',
    ],
    badge: 'GDP / BPOM Ready',
  },
  {
    id: 'water-utility-level-flow',
    name: {
      id: 'Industrial Water Level & Flow Telemetry',
      en: 'Industrial Water Level & Flow Telemetry',
    },
    category: 'Energi',
    categoryLabel: {
      id: 'Utilitas & Lingkungan',
      en: 'Utilities & Environment',
    },
    summary: {
      id: 'Telemetri ketinggian air waduk, tangki kimia, dan debit saluran terbuka (open channel) dengan sensor radar non-kontak.',
      en: 'Telemetry for reservoir levels, chemical tanks, and open channel flow rates using non-contact radar sensors.',
    },
    description: {
      id: 'Solusi monitoring hidrologi dan fluida industri menggunakan sensor radar 80 GHz non-kontak dan flowmeter elektromagnetik. Menghilangkan risiko kontaminasi dan keausan mekanis akibat cairan agresif atau endapan lumpur.',
      en: 'Industrial fluid and hydrological telemetry utilizing 80 GHz non-contact radar emitters and electromagnetic flowmeters. Eliminates wear, fouling, and chemical contamination associated with submerged mechanical floats.',
    },
    features: {
      id: [
        'Pengukuran radar frekuensi tinggi 80 GHz tidak terpengaruh uap atau busa',
        'Kompatibel dengan asam kuat, solar, air limbah (WWTP), dan air baku',
        'Peringatan otomatis luapan (overflow alarm) dan deteksi kebocoran pipa',
        'Perhitungan debit otomatis (Q = v × A) untuk saluran parshall flume',
        'Kamera pengambil gambar berkala berkonsumsi daya rendah (opsional)',
      ],
      en: [
        'High-frequency 80 GHz radar immune to surface steam, dust, or foam',
        'Compatible with aggressive acids, diesel, WWTP effluent, and raw river water',
        'Automated overflow flood warnings and pipeline rupture early alerts',
        'Automated hydraulic discharge calculation for Parshall and V-notch flumes',
        'Ultra-low power snapshot optical verification camera (optional)',
      ],
    },
    specifications: [
      { parameter: 'Jarak Ukur Radar', value: '0.1 m hingga 35 m (Blind spot < 10 cm)' },
      { parameter: 'Akurasi Pengukuran', value: '±1 mm dalam kondisi lingkungan dinamis' },
      { parameter: 'Bahan Wetted Part', value: 'PTFE / PVDF Tahan Bahan Kimia Korosif' },
      { parameter: 'Protokol Sinyal', value: '4-20mA HART, RS485 Modbus, LoRaWAN' },
      { parameter: 'Proteksi Ledakan', value: 'ATEX / IECEx Zone 0 (Intrinsic Safety)' },
    ],
    architecture: {
      sensorLayer: 'Innodesk RadarWave-80G Level Transmitter, MagFlow Industrial Meter',
      gatewayLayer: 'Innodesk HydroGate IP68 (Baterai internal + Solar Charger)',
      platformLayer: 'Innodesk WaterIQ Municipal Scada Web Dashboard',
    },
    idealFor: [
      'Instalasi Pengolahan Air Limbah (IPAL / WWTP)',
      'Tangki bahan bakar minyak & tangki penyimpanan kimia cair',
      'Sistem peringatan dini banjir daerah aliran sungai (DAS)',
    ],
    badge: 'Radar 80 GHz',
  },
];
