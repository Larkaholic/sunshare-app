import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Zap, DollarSign, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

export function Analytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Energy consumption over time
  const consumptionData = [
    { date: 'Nov 1', consumption: 320, production: 280 },
    { date: 'Nov 2', consumption: 310, production: 290 },
    { date: 'Nov 3', consumption: 350, production: 270 },
    { date: 'Nov 4', consumption: 280, production: 310 },
    { date: 'Nov 5', consumption: 290, production: 300 },
    { date: 'Nov 6', consumption: 330, production: 285 },
    { date: 'Nov 7', consumption: 315, production: 295 },
    { date: 'Nov 8', consumption: 340, production: 275 },
    { date: 'Nov 9', consumption: 300, production: 305 },
    { date: 'Nov 10', consumption: 325, production: 290 },
    { date: 'Nov 11', consumption: 310, production: 295 },
    { date: 'Nov 12', consumption: 335, production: 280 },
    { date: 'Nov 13', consumption: 295, production: 310 },
    { date: 'Nov 14', consumption: 320, production: 285 },
  ];

  // Peak hours data
  const peakHoursData = [
    { hour: '00:00', usage: 120 },
    { hour: '03:00', usage: 90 },
    { hour: '06:00', usage: 150 },
    { hour: '09:00', usage: 280 },
    { hour: '12:00', usage: 320 },
    { hour: '15:00', usage: 290 },
    { hour: '18:00', usage: 380 },
    { hour: '21:00', usage: 340 },
  ];

  // Cost breakdown
  const costData = [
    { month: 'Jun', cost: 142 },
    { month: 'Jul', cost: 158 },
    { month: 'Aug', cost: 165 },
    { month: 'Sep', cost: 149 },
    { month: 'Oct', cost: 156 },
    { month: 'Nov', cost: 148 },
  ];

  // Energy distribution
  const distributionData = [
    { name: 'Main Building', value: 35, color: '#111827' },
    { name: 'Solar Array', value: 28, color: '#4b5563' },
    { name: 'EV Charging', value: 22, color: '#6b7280' },
    { name: 'Office Wing', value: 15, color: '#9ca3af' },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-900 mb-2">Analytics</h1>
          <p className="text-sm text-gray-600">Detailed insights and energy consumption trends</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm transition-colors ${
                timeRange === range
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {range === '7d' ? '7D' : range === '30d' ? '30D' : '90D'}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Total Consumption</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">4,420 kWh</div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
            <TrendingDown className="w-3 h-3" />
            <span>-8.2% vs last month</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Total Production</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">4,060 kWh</div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>+12.5% vs last month</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Cost This Month</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">$148.00</div>
          <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
            <TrendingDown className="w-3 h-3" />
            <span>-5.1% vs last month</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Avg. Daily Usage</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">315 kWh</div>
          <div className="text-xs text-gray-500 mt-1">Per day average</div>
        </motion.div>
      </div>

      {/* Consumption vs Production Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Consumption vs Production</h2>
        <ResponsiveContainer width="100%" height={250} className="md:!h-[350px]">
          <AreaChart data={consumptionData}>
            <defs>
              <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#111827" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#111827" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6b7280" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
            <YAxis stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Area
              type="monotone"
              dataKey="consumption"
              stroke="#111827"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorConsumption)"
              name="Consumption (kWh)"
            />
            <Area
              type="monotone"
              dataKey="production"
              stroke="#6b7280"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorProduction)"
              name="Production (kWh)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Peak Hours Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Peak Hours Analysis</h2>
          <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
            <BarChart data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
              <YAxis stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="usage" fill="#111827" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Energy Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Energy Distribution</h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {distributionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="text-xs">
                  <div className="text-gray-900">{item.name}</div>
                  <div className="text-gray-500">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Monthly Cost Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Monthly Cost Trends</h2>
        <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
          <LineChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
            <YAxis stroke="#9ca3af" style={{ fontSize: '10px' }} className="md:text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`$${value}`, 'Cost']}
            />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#111827"
              strokeWidth={2}
              dot={{ fill: '#111827', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-base md:text-lg text-gray-900 mb-4">Key Insights</h2>
        <div className="space-y-3">
          <div className="p-3 md:p-4 rounded-lg bg-gray-50 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <TrendingDown className="w-4 h-4 text-green-600" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-gray-900 mb-1">Energy consumption decreased by 8.2%</div>
                <div className="text-xs text-gray-600">
                  Your energy usage is trending downward compared to last month, saving approximately $12.18.
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 rounded-lg bg-gray-50 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-4 h-4 text-gray-700" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-gray-900 mb-1">Peak usage occurs between 6 PM - 9 PM</div>
                <div className="text-xs text-gray-600">
                  Consider shifting high-energy activities to off-peak hours to reduce costs.
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 rounded-lg bg-gray-50 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div className="min-w-0">
                <div className="text-xs md:text-sm text-gray-900 mb-1">Solar production increased by 12.5%</div>
                <div className="text-xs text-gray-600">
                  Your solar array is producing more energy than last month, creating surplus for trading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
