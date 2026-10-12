import { useState, useEffect, useCallback, useRef } from 'react';

export interface TelemetryReading {
  timestamp: string;
  temperature: number; // °C (e.g. 40 - 55)
  humidity: number;    // % (e.g. 45 - 65)
  power: number;       // kW (e.g. 130 - 180)
  vibration: number;   // mm/s (e.g. 1.5 - 3.8)
}

export interface SensorDeviceState {
  id: string;
  name: string;
  location: string;
  protocol: string;
  batteryLevel: string;
  status: 'Online' | 'Syncing' | 'Standby';
  lastPing: string;
  currentValue: string;
}

const INITIAL_DEVICES: SensorDeviceState[] = [
  {
    id: 'NODE-VIB-01',
    name: 'IEPE Triaxial Vibration Transducer',
    location: 'Lini Stamping Press B-02',
    protocol: 'Modbus RTU / 485',
    batteryLevel: 'Line 24V DC',
    status: 'Online',
    lastPing: '1s yang lalu',
    currentValue: '2.4 mm/s RMS',
  },
  {
    id: 'NODE-PWR-04',
    name: 'PowerTrans-3P Class 0.5S Submeter',
    location: 'Panel Utama Distribusi MDP-1',
    protocol: 'Modbus TCP / LAN',
    batteryLevel: 'Mains 220V',
    status: 'Online',
    lastPing: '1s yang lalu',
    currentValue: '154.2 kW',
  },
  {
    id: 'NODE-TH-09',
    name: 'AirSense Pro Temp & RH Sensor',
    location: 'Cleanroom Assembly Room 3',
    protocol: 'BACnet / IP',
    batteryLevel: 'PoE 48V',
    status: 'Online',
    lastPing: '2s yang lalu',
    currentValue: '46.8°C / 54% RH',
  },
  {
    id: 'NODE-LORA-12',
    name: 'AgroProbe Multi-Depth Soil Node',
    location: 'Nursery Blok Selatan (12km)',
    protocol: 'LoRaWAN 923 MHz',
    batteryLevel: 'Solar / 98%',
    status: 'Syncing',
    lastPing: '4s yang lalu',
    currentValue: '28.4% VWC',
  },
  {
    id: 'NODE-RAD-03',
    name: 'RadarWave-80G Level Transmitter',
    location: 'Bak Equalizer IPAL WWTP',
    protocol: '4-20mA HART / LoRa',
    batteryLevel: 'Solar / 94%',
    status: 'Online',
    lastPing: '2s yang lalu',
    currentValue: '4.82 Meter',
  },
];

function generateInitialHistory(pointsCount = 25): TelemetryReading[] {
  const points: TelemetryReading[] = [];
  const now = Date.now();
  
  let currentTemp = 46.5;
  let currentHumidity = 54.0;
  let currentPower = 152.0;
  let currentVib = 2.4;

  for (let i = pointsCount - 1; i >= 0; i--) {
    const time = new Date(now - i * 2000);
    const timeStr = time.toTimeString().split(' ')[0];

    currentTemp = +(currentTemp + (Math.random() - 0.5) * 0.8).toFixed(1);
    currentHumidity = +(currentHumidity + (Math.random() - 0.5) * 0.6).toFixed(1);
    currentPower = +(currentPower + (Math.random() - 0.5) * 3.5).toFixed(1);
    currentVib = +(currentVib + (Math.random() - 0.5) * 0.15).toFixed(2);

    // Clamp
    currentTemp = Math.max(38, Math.min(58, currentTemp));
    currentHumidity = Math.max(40, Math.min(75, currentHumidity));
    currentPower = Math.max(120, Math.min(195, currentPower));
    currentVib = Math.max(1.2, Math.min(4.8, currentVib));

    points.push({
      timestamp: timeStr,
      temperature: currentTemp,
      humidity: currentHumidity,
      power: currentPower,
      vibration: currentVib,
    });
  }
  return points;
}

export function useSensorSimulation() {
  const [history, setHistory] = useState<TelemetryReading[]>(generateInitialHistory);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [intervalMs, setIntervalMs] = useState<number>(2000); // 2000ms normal, 1000ms fast
  const [devices, setDevices] = useState<SensorDeviceState[]>(INITIAL_DEVICES);
  const [totalPings, setTotalPings] = useState<number>(1420);
  const timerRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      // Stochastic walk
      const nextTemp = +(Math.max(38, Math.min(58, last.temperature + (Math.random() - 0.49) * 0.9))).toFixed(1);
      const nextHum = +(Math.max(40, Math.min(75, last.humidity + (Math.random() - 0.49) * 0.7))).toFixed(1);
      const nextPwr = +(Math.max(120, Math.min(195, last.power + (Math.random() - 0.48) * 4.2))).toFixed(1);
      const nextVib = +(Math.max(1.1, Math.min(4.9, last.vibration + (Math.random() - 0.49) * 0.22))).toFixed(2);

      const newReading: TelemetryReading = {
        timestamp: timeStr,
        temperature: nextTemp,
        humidity: nextHum,
        power: nextPwr,
        vibration: nextVib,
      };

      // Keep last 30 points
      const updated = [...prev.slice(1), newReading];
      return updated;
    });

    setTotalPings((p) => p + 1);

    // Subtly randomize device pings
    setDevices((prev) =>
      prev.map((dev) => {
        const rand = Math.random();
        let newStatus = dev.status;
        if (rand > 0.88) {
          newStatus = 'Syncing';
        } else if (rand > 0.96) {
          newStatus = 'Standby';
        } else {
          newStatus = 'Online';
        }
        return {
          ...dev,
          status: newStatus,
          lastPing: '< 1s yang lalu',
        };
      })
    );
  }, []);

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const id = window.setInterval(tick, intervalMs);
    timerRef.current = id;

    return () => {
      clearInterval(id);
    };
  }, [isRunning, intervalMs, tick]);

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const setSpeed = (speed: 'normal' | 'fast') => {
    setIntervalMs(speed === 'normal' ? 2000 : 1000);
  };

  const resetData = () => {
    setHistory(generateInitialHistory());
    setTotalPings(1420);
  };

  const currentReading = history[history.length - 1] || {
    timestamp: '--:--:--',
    temperature: 46.5,
    humidity: 54.0,
    power: 152.0,
    vibration: 2.4,
  };

  return {
    history,
    currentReading,
    isRunning,
    intervalMs,
    toggleRunning,
    setSpeed,
    resetData,
    devices,
    totalPings,
  };
}
