import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Zap, Activity, Gauge as GaugeIcon, Percent } from 'lucide-react';

interface Metric {
  label: string;
  value: number;
  unit: string;
  icon: any;
  format: (val: number) => string;
}

export function EnergyMetrics() {
  const [wattage, setWattage] = useState(3420);
  const [current, setCurrent] = useState(14.8);
  const [voltage, setVoltage] = useState(231.2);
  const [powerFactor, setPowerFactor] = useState(0.94);

  useEffect(() => {
    const interval = setInterval(() => {
      setWattage((prev) => prev + (Math.random() - 0.5) * 100);
      setCurrent((prev) => prev + (Math.random() - 0.5) * 0.5);
      setVoltage((prev) => prev + (Math.random() - 0.5) * 2);
      setPowerFactor((prev) => Math.min(1, Math.max(0.8, prev + (Math.random() - 0.5) * 0.02)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics: Metric[] = [
    {
      label: 'Total Wattage',
      value: wattage,
      unit: 'W',
      icon: Zap,
      format: (val) => val.toFixed(0),
    },
    {
      label: 'Current',
      value: current,
      unit: 'A',
      icon: Activity,
      format: (val) => val.toFixed(1),
    },
    {
      label: 'Voltage',
      value: voltage,
      unit: 'V',
      icon: GaugeIcon,
      format: (val) => val.toFixed(1),
    },
    {
      label: 'Power Factor',
      value: powerFactor,
      unit: '',
      icon: Percent,
      format: (val) => val.toFixed(2),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-xs md:text-sm text-gray-600">{metric.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <motion.span
                key={metric.value}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="text-2xl md:text-3xl text-gray-900"
              >
                {metric.format(metric.value)}
              </motion.span>
              <span className="text-base md:text-lg text-gray-500">{metric.unit}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
