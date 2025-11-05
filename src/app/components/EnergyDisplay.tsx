import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function EnergyDisplay() {
  const [kwh, setKwh] = useState(1247.58);

  useEffect(() => {
    const interval = setInterval(() => {
      setKwh((prev) => prev + Math.random() * 0.02);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-lg" />
      
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 rounded-lg p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Zap className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <h2 className="text-cyan-400 tracking-wider">ENERGY CONSUMPTION</h2>
        </div>

        <div className="text-center mb-4">
          <motion.div
            className="text-6xl text-white tabular-nums mb-2"
            key={Math.floor(kwh)}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
          >
            {kwh.toFixed(2)}
          </motion.div>
          <div className="text-cyan-400 tracking-widest">kWh</div>
        </div>

        {/* Digital segments */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-cyan-500/20">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">VOLTAGE</div>
            <div className="text-lg text-white">230.2V</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">CURRENT</div>
            <div className="text-lg text-white">5.42A</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">POWER</div>
            <div className="text-lg text-white">1.25kW</div>
          </div>
        </div>
      </div>
    </div>
  );
}
