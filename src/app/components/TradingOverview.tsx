import { motion } from 'framer-motion';
import { Coins, Share2, Receipt } from 'lucide-react';

const tradingData = [
  {
    label: 'Credits Available',
    value: '1,247',
    unit: 'kWh',
    icon: Coins,
    change: '+12.5%',
    bgColor: '#1373c3',
  },
  {
    label: 'Energy Shared',
    value: '3,582',
    unit: 'kWh',
    icon: Share2,
    change: '+8.2%',
    bgColor: '#7ca43c',
  },
  {
    label: 'Transactions Made',
    value: '164',
    unit: 'total',
    icon: Receipt,
    change: '+23',
    bgColor: '#f4941c',
  },
];

export function TradingOverview() {
  return (
    <div>
      <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Trading Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {tradingData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: item.bgColor }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
              <div className="text-xl md:text-2xl text-gray-900 mb-1">{item.value} <span className="text-base text-gray-500">{item.unit}</span></div>
              <div className="text-xs text-green-600">{item.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
