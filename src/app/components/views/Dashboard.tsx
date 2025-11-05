import { EnergyMetrics } from '../EnergyMetrics';
import { TradingOverview } from '../TradingOverview';
import { WattageChart } from '../WattageChart';
import { DeviceList } from '../DeviceList';

export function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="mb-4 md:mb-8">
        <h1 className="text-xl md:text-2xl text-gray-900 mb-2">Dashboard</h1>
        <p className="text-sm text-gray-600">Real-time energy monitoring and trading overview</p>
      </div>

      {/* Energy Metrics */}
      <EnergyMetrics />

      {/* Trading Overview */}
      <TradingOverview />

      {/* Chart and Device List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <WattageChart />
        </div>
        <div className="lg:col-span-1">
          <DeviceList />
        </div>
      </div>
    </div>
  );
}
