import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Device {
  id: string;
  status: 'active' | 'offline';
  lastReading: string;
  wattage: number;
}

export function DeviceList() {
  const [devices, setDevices] = useState<Device[]>([
    { id: 'ESP32-M001', status: 'active', lastReading: '2 sec ago', wattage: 1240 },
    { id: 'ESP32-M002', status: 'active', lastReading: '3 sec ago', wattage: 980 },
    { id: 'ESP32-M003', status: 'offline', lastReading: '2 min ago', wattage: 0 },
    { id: 'ESP32-M004', status: 'active', lastReading: '1 sec ago', wattage: 1200 },
    { id: 'ESP32-M005', status: 'active', lastReading: '4 sec ago', wattage: 750 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prevDevices) =>
        prevDevices.map((device) => {
          if (device.status === 'active') {
            return {
              ...device,
              wattage: device.wattage + (Math.random() - 0.5) * 100,
              lastReading: `${Math.floor(Math.random() * 5)} sec ago`,
            };
          }
          return device;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
    >
      <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Connected Devices</h2>
      <div className="space-y-2 md:space-y-3">
        {devices.map((device, index) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 + 0.5 }}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-3 md:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  device.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-gray-900 truncate">{device.id}</div>
                <div className="text-xs text-gray-500">Last: {device.lastReading}</div>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <div className="text-xs md:text-sm text-gray-900">
                {device.status === 'active' ? `${device.wattage.toFixed(0)} W` : '—'}
              </div>
              <div className="text-xs text-gray-500 capitalize">{device.status}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
