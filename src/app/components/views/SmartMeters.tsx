import { motion } from 'framer-motion';
import { Gauge, Wifi, WifiOff, Activity, AlertCircle, CheckCircle, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Meter {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'offline' | 'warning';
  wattage: number;
  current: number;
  voltage: number;
  powerFactor: number;
  lastSync: string;
  model: string;
}

export function SmartMeters() {
  const [selectedMeter, setSelectedMeter] = useState<string | null>('ESP32-M001');
  const [meters, setMeters] = useState<Meter[]>([
    {
      id: 'ESP32-M001',
      name: 'Main Building',
      location: 'Floor 1',
      status: 'active',
      wattage: 1240,
      current: 5.4,
      voltage: 230.2,
      powerFactor: 0.95,
      lastSync: '2 sec ago',
      model: 'PZEM-004T',
    },
    {
      id: 'ESP32-M002',
      name: 'Solar Array',
      location: 'Rooftop',
      status: 'active',
      wattage: 980,
      current: 4.2,
      voltage: 231.5,
      powerFactor: 0.98,
      lastSync: '1 sec ago',
      model: 'PZEM-004T',
    },
    {
      id: 'ESP32-M003',
      name: 'Backup Generator',
      location: 'Basement',
      status: 'offline',
      wattage: 0,
      current: 0,
      voltage: 0,
      powerFactor: 0,
      lastSync: '5 min ago',
      model: 'PZEM-004T',
    },
    {
      id: 'ESP32-M004',
      name: 'EV Charging',
      location: 'Parking',
      status: 'active',
      wattage: 1200,
      current: 5.2,
      voltage: 229.8,
      powerFactor: 0.93,
      lastSync: '3 sec ago',
      model: 'PZEM-004T',
    },
    {
      id: 'ESP32-M005',
      name: 'Office Wing',
      location: 'Floor 2',
      status: 'warning',
      wattage: 750,
      current: 3.3,
      voltage: 227.1,
      powerFactor: 0.89,
      lastSync: '4 sec ago',
      model: 'PZEM-004T',
    },
  ]);

  const [meterHistory, setMeterHistory] = useState(() => {
    const data = [];
    for (let i = 0; i < 30; i++) {
      data.push({
        time: `${i}m`,
        wattage: 1000 + Math.random() * 500,
      });
    }
    return data;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMeters((prev) =>
        prev.map((meter) => {
          if (meter.status === 'active' || meter.status === 'warning') {
            return {
              ...meter,
              wattage: Math.max(0, meter.wattage + (Math.random() - 0.5) * 100),
              current: Math.max(0, meter.current + (Math.random() - 0.5) * 0.5),
              voltage: meter.voltage + (Math.random() - 0.5) * 2,
              powerFactor: Math.min(1, Math.max(0.8, meter.powerFactor + (Math.random() - 0.5) * 0.02)),
            };
          }
          return meter;
        })
      );

      setMeterHistory((prev) => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: `${newData.length}m`,
          wattage: 1000 + Math.random() * 500,
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'offline':
        return <WifiOff className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const selectedMeterData = meters.find((m) => m.id === selectedMeter);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-900 mb-2">Smart Meters</h1>
          <p className="text-sm text-gray-600">Monitor and manage all connected energy meters</p>
        </div>
        <Button variant="outline" className="gap-2 w-full sm:w-auto">
          <Settings className="w-4 h-4" />
          <span className="sm:inline">Configure Meters</span>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="text-xs text-gray-600 mb-2">Total Meters</div>
          <div className="text-2xl md:text-3xl text-gray-900">{meters.length}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="text-xs text-gray-600 mb-2">Active</div>
          <div className="text-2xl md:text-3xl text-green-600">
            {meters.filter((m) => m.status === 'active').length}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="text-xs text-gray-600 mb-2">Warning</div>
          <div className="text-2xl md:text-3xl text-yellow-600">
            {meters.filter((m) => m.status === 'warning').length}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="text-xs text-gray-600 mb-2">Offline</div>
          <div className="text-2xl md:text-3xl text-gray-500">
            {meters.filter((m) => m.status === 'offline').length}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Meter List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-base md:text-lg text-gray-900">All Meters</h2>
          <div className="space-y-2 md:space-y-3">
            {meters.map((meter, index) => (
              <motion.div
                key={meter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => setSelectedMeter(meter.id)}
                className={`bg-white rounded-xl p-3 md:p-4 shadow-sm border cursor-pointer transition-all ${
                  selectedMeter === meter.id
                    ? 'border-gray-900 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(meter.status)}`} />
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm text-gray-900 truncate">{meter.name}</div>
                      <div className="text-xs text-gray-500">{meter.id}</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {getStatusIcon(meter.status)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600 truncate">{meter.location}</span>
                  <span className="text-gray-900 flex-shrink-0 ml-2">
                    {meter.status === 'offline' ? '—' : `${meter.wattage.toFixed(0)} W`}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meter Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedMeterData ? (
            <>
              <motion.div
                key={selectedMeter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6 gap-3">
                  <div className="min-w-0">
                    <h2 className="text-base md:text-lg text-gray-900 mb-1 truncate">{selectedMeterData.name}</h2>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
                      <span className="truncate">{selectedMeterData.id}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate">{selectedMeterData.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{selectedMeterData.model}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      selectedMeterData.status === 'active'
                        ? 'border-green-500/50 text-green-600'
                        : selectedMeterData.status === 'warning'
                        ? 'border-yellow-500/50 text-yellow-600'
                        : 'border-gray-500/50 text-gray-600'
                    }
                  >
                    {selectedMeterData.status === 'active' ? (
                      <Wifi className="w-3 h-3 mr-1" />
                    ) : (
                      <WifiOff className="w-3 h-3 mr-1" />
                    )}
                    {selectedMeterData.status.toUpperCase()}
                  </Badge>
                </div>

                {/* Real-time Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Wattage</div>
                    <div className="text-base md:text-xl text-gray-900">
                      {selectedMeterData.wattage.toFixed(0)} W
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Current</div>
                    <div className="text-base md:text-xl text-gray-900">
                      {selectedMeterData.current.toFixed(1)} A
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Voltage</div>
                    <div className="text-base md:text-xl text-gray-900">
                      {selectedMeterData.voltage.toFixed(1)} V
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Power Factor</div>
                    <div className="text-base md:text-xl text-gray-900">
                      {selectedMeterData.powerFactor.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-600">
                  <span>Last sync: {selectedMeterData.lastSync}</span>
                  <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                    View Configuration
                  </Button>
                </div>
              </motion.div>

              {/* Historical Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-sm text-gray-900 mb-4">30-Minute History</h3>
                <ResponsiveContainer width="100%" height={200} className="md:!h-[250px]">
                  <LineChart data={meterHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
                    <YAxis stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="wattage"
                      stroke="#111827"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200 text-center">
              <Gauge className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm md:text-base text-gray-600">Select a meter to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
