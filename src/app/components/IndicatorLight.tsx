import { motion } from 'framer-motion';

interface IndicatorLightProps {
  color: 'red' | 'blue' | 'yellow';
  label: string;
  delay?: number;
}

export function IndicatorLight({ color, label, delay = 0 }: IndicatorLightProps) {
  const colorMap = {
    red: {
      bg: 'bg-destructive',
      shadow: 'shadow-destructive/50',
      glow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)',
    },
    blue: {
      bg: 'bg-primary',
      shadow: 'shadow-primary/50',
      glow: '0 0 20px rgba(19, 115, 195, 0.8), 0 0 40px rgba(19, 115, 195, 0.4)',
    },
    yellow: {
      bg: 'bg-secondary',
      shadow: 'shadow-secondary/50',
      glow: '0 0 20px rgba(244, 148, 28, 0.8), 0 0 40px rgba(244, 148, 28, 0.4)',
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
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
}
