import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function WattageChart() {
  const [data, setData] = useState(() => {
    const initial = [];
    for (let i = 0; i < 20; i++) {
      initial.push({
        time: `${String(14 + Math.floor(i / 6)).padStart(2, '0')}:${String((i * 10) % 60).padStart(2, '0')}`,
        wattage: 3000 + Math.random() * 1000,
      });
    }
    return initial;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        const lastTime = prevData[prevData.length - 1].time;
        const [hours, minutes] = lastTime.split(':').map(Number);
        const newMinutes = (minutes + 10) % 60;
        const newHours = minutes + 10 >= 60 ? hours + 1 : hours;
        const newTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
        
        newData.push({
          time: newTime,
          wattage: 3000 + Math.random() * 1000,
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
    >
      <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Live Wattage Monitoring</h2>
      <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="time" 
            stroke="#9ca3af"
            style={{ fontSize: '10px' }}
            className="md:text-xs"
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '10px' }}
            className="md:text-xs"
          />
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
            stroke="#1373c3"
            strokeWidth={2}
            dot={false}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
