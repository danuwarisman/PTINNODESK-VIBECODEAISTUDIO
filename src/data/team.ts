export interface TeamMember {
  id: string;
  name: string;
  role: {
    id: string;
    en: string;
  };
  bio: {
    id: string;
    en: string;
  };
  credentials: string;
  focus: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'arya-pratama',
    name: 'Ir. Arya Pratama, M.Sc.',
    role: {
      id: 'Chief Executive Officer & Co-Founder',
      en: 'Chief Executive Officer & Co-Founder',
    },
    bio: {
      id: '15+ tahun pengalaman dalam otomatisasi sistem kontrol industri dan rekayasa telekomunikasi. Sebelumnya memimpin inisiatif Industry 4.0 di konsorsium manufaktur multinasional.',
      en: '15+ years in industrial control automation and telecom engineering. Previously directed Industry 4.0 initiatives across multinational manufacturing consortiums.',
    },
    credentials: 'M.Sc. Mechatronics (RWTH Aachen) · B.Eng. Elektro ITB',
    focus: 'Strategi Enterprise & Arsitektur Sistem',
  },
  {
    id: 'dian-sasmita',
    name: 'Dr. Dian Sasmita',
    role: {
      id: 'Chief Technology Officer (CTO)',
      en: 'Chief Technology Officer (CTO)',
    },
    bio: {
      id: 'Pakar embedded systems, protokol nirkabel berdaya rendah (LoRaWAN/BLE Mesh), dan edge computing. Memegang 3 paten desain perangkat transmisi sensor industri.',
      en: 'Expert in low-power embedded systems, LPWAN topologies, and edge intelligence. Holds 3 patents in industrial telemetry hardware circuit design.',
    },
    credentials: 'Ph.D. Computer Engineering (NTU Singapore) · IEEE Senior Member',
    focus: 'Desain Hardware, Firmware & Edge AI',
  },
  {
    id: 'raditya-wardhana',
    name: 'Raditya Wardhana, S.T.',
    role: {
      id: 'VP of Hardware Engineering & Quality',
      en: 'VP of Hardware Engineering & Quality',
    },
    bio: {
      id: 'Memimpin desain sirkuit PCB multilayer, validasi ketahanan lingkungan IP68, dan kepatuhan standar EMC/EMI untuk lingkungan manufaktur ekstrem.',
      en: 'Leads multi-layer PCB layout, environmental IP68 compliance validation, and EMC/EMI electromagnetic shielding certification for extreme plant conditions.',
    },
    credentials: 'B.Eng. Teknik Fisika UGM · IPC Certified Designer',
    focus: 'Pengujian Termal, Vibrasi & Fabrikasi',
  },
  {
    id: 'clarissa-utami',
    name: 'Clarissa Utami, M.Eng.',
    role: {
      id: 'VP of Software & Industrial Cloud Platforms',
      en: 'VP of Software & Industrial Cloud Platforms',
    },
    bio: {
      id: 'Spesialis arsitektur data telemetri waktu-nyata berkapasitas jutaan data point per detik, integrasi protokol MQTT TLS, SCADA, dan standar keamanan ISO 27001.',
      en: 'Specialist in high-throughput time-series telemetry pipelines, MQTT TLS topologies, SCADA protocol bridges, and ISO 27001 cybersecurity frameworks.',
    },
    credentials: 'M.Eng. Software Systems (TUM) · B.Comp.Sc. UI',
    focus: 'Cloud Telemetri, API & Kedaulatan Data',
  },
];
