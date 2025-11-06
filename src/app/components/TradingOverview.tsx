import { motion } from 'framer-motion';
import { Coins, Share2, Receipt } from 'lucide-react';

const tradingData = [
  {
    label: 'Credits Available',
    value: '1,247',
    unit: 'kWh',
    icon: Coins,
    change: '+12.5%',
  },
  {
    label: 'Energy Shared',
    value: '3,582',
    unit: 'kWh',
    icon: Share2,
    change: '+8.2%',
  },
  {
    label: 'Transactions Made',
    value: '164',
    unit: 'total',
    icon: Receipt,
    change: '+23',
  },
];

export function TradingOverview() {
  return (
    <div>
      <h2 className="text-base md:text-lg text-foreground mb-4 md:mb-6">Trading Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {tradingData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{item.change}</span>
              </div>
              <div className="text-xs text-muted-foreground mb-2">{item.label}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl text-foreground">{item.value}</span>
                <span className="text-sm text-muted-foreground">{item.unit}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
