import { motion } from 'framer-motion';

interface IndicatorLightProps {
  color: 'red' | 'blue' | 'yellow';
  label: string;
  delay?: number;
}

export function IndicatorLight({ color, label, delay = 0 }: IndicatorLightProps) {
  const colorMap = {
    red: {
      bg: 'bg-red-500',
      shadow: 'shadow-red-500/50',
      glow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)',
    },
    blue: {
      bg: 'bg-blue-500',
      shadow: 'shadow-blue-500/50',
      glow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
    },
    yellow: {
      bg: 'bg-yellow-400',
      shadow: 'shadow-yellow-400/50',
      glow: '0 0 20px rgba(250, 204, 21, 0.8), 0 0 40px rgba(250, 204, 21, 0.4)',
    },
  };

  const { bg, shadow, glow } = colorMap[color];

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className={`w-4 h-4 rounded-full ${bg} ${shadow}`}
        animate={{
          opacity: [1, 0.3, 1],
          boxShadow: [glow, '0 0 5px rgba(0, 0, 0, 0.2)', glow],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: delay,
          ease: 'easeInOut',
        }}
      />
      <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
    </div>
  );
}
