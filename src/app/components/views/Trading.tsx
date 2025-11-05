import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

interface Listing {
  id: string;
  seller: string;
  amount: number;
  price: number;
  type: 'sell' | 'buy';
  time: string;
  status: 'active' | 'completed' | 'pending';
}

interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  total: number;
  counterparty: string;
  date: string;
  status: 'completed' | 'pending';
}

export function Trading() {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'history'>('marketplace');

  const listings: Listing[] = [
    {
      id: 'L001',
      seller: 'Solar Farm A',
      amount: 150,
      price: 0.12,
      type: 'sell',
      time: '2 min ago',
      status: 'active',
    },
    {
      id: 'L002',
      seller: 'Building Complex B',
      amount: 80,
      price: 0.14,
      type: 'buy',
      time: '5 min ago',
      status: 'active',
    },
    {
      id: 'L003',
      seller: 'Wind Turbine C',
      amount: 200,
      price: 0.11,
      type: 'sell',
      time: '8 min ago',
      status: 'active',
    },
    {
      id: 'L004',
      seller: 'Residential Unit D',
      amount: 50,
      price: 0.13,
      type: 'buy',
      time: '12 min ago',
      status: 'active',
    },
    {
      id: 'L005',
      seller: 'Industrial Park E',
      amount: 300,
      price: 0.10,
      type: 'sell',
      time: '15 min ago',
      status: 'active',
    },
  ];

  const transactions: Transaction[] = [
    {
      id: 'T001',
      type: 'sell',
      amount: 120,
      price: 0.12,
      total: 14.4,
      counterparty: 'Building Complex B',
      date: '2024-11-05 14:23',
      status: 'completed',
    },
    {
      id: 'T002',
      type: 'buy',
      amount: 80,
      price: 0.13,
      total: 10.4,
      counterparty: 'Solar Farm A',
      date: '2024-11-05 13:45',
      status: 'completed',
    },
    {
      id: 'T003',
      type: 'sell',
      amount: 200,
      price: 0.11,
      total: 22.0,
      counterparty: 'Residential Unit D',
      date: '2024-11-05 12:30',
      status: 'completed',
    },
    {
      id: 'T004',
      type: 'buy',
      amount: 50,
      price: 0.14,
      total: 7.0,
      counterparty: 'Wind Turbine C',
      date: '2024-11-05 11:15',
      status: 'pending',
    },
    {
      id: 'T005',
      type: 'sell',
      amount: 150,
      price: 0.12,
      total: 18.0,
      counterparty: 'Industrial Park E',
      date: '2024-11-05 10:00',
      status: 'completed',
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-xl md:text-2xl text-gray-900 mb-2">Energy Trading</h1>
        <p className="text-sm text-gray-600">Buy and sell energy credits in real-time</p>
      </div>

      {/* Trading Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Available Balance</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">1,247 kWh</div>
          <div className="text-xs text-gray-500 mt-1">≈ $149.64</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs text-gray-600">Total Sold</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">3,582 kWh</div>
          <div className="text-xs text-green-600 mt-1">+12.5% this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600">Total Purchased</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">1,240 kWh</div>
          <div className="text-xs text-gray-500 mt-1">This month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs text-gray-600">Active Listings</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-900">{listings.length}</div>
          <div className="text-xs text-gray-500 mt-1">In marketplace</div>
        </motion.div>
      </div>

      {/* Market Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs text-gray-600 mb-1">Current Market Price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl text-gray-900">$0.12</span>
              <span className="text-base md:text-lg text-gray-500">per kWh</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+2.4% today</span>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('marketplace')}
          className={`px-4 py-2 text-sm transition-colors ${
            activeTab === 'marketplace'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Marketplace
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 text-sm transition-colors ${
            activeTab === 'history'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Transaction History
        </button>
      </div>

      {/* Content */}
      {activeTab === 'marketplace' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Sell Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-base md:text-lg text-gray-900">Sell Orders</h3>
              <Badge variant="outline" className="border-green-500/50 text-green-600 text-xs">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                {listings.filter((l) => l.type === 'sell').length} Active
              </Badge>
            </div>
            <div className="space-y-2 md:space-y-3">
              {listings
                .filter((l) => l.type === 'sell')
                .map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-gray-900">{listing.seller}</div>
                        <div className="text-xs text-gray-500">{listing.time}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {listing.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        {listing.amount} kWh @ ${listing.price}/kWh
                      </div>
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        Buy
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Buy Orders */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-base md:text-lg text-gray-900">Buy Orders</h3>
              <Badge variant="outline" className="border-blue-500/50 text-blue-600 text-xs">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                {listings.filter((l) => l.type === 'buy').length} Active
              </Badge>
            </div>
            <div className="space-y-2 md:space-y-3">
              {listings
                .filter((l) => l.type === 'buy')
                .map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-gray-900">{listing.seller}</div>
                        <div className="text-xs text-gray-500">{listing.time}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {listing.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        {listing.amount} kWh @ ${listing.price}/kWh
                      </div>
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        Sell
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">Recent Transactions</h3>
          <div className="space-y-2 md:space-y-3">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        transaction.type === 'sell' ? 'bg-green-100' : 'bg-blue-100'
                      }`}
                    >
                      {transaction.type === 'sell' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm text-gray-900 capitalize truncate">
                        {transaction.type} - {transaction.counterparty}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="truncate">{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs flex-shrink-0 ${
                      transaction.status === 'completed'
                        ? 'border-green-500/50 text-green-600'
                        : 'border-yellow-500/50 text-yellow-600'
                    }`}
                  >
                    {transaction.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs">
                  <div>
                    <div className="text-gray-600">Amount</div>
                    <div className="text-gray-900">{transaction.amount} kWh</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Price</div>
                    <div className="text-gray-900">${transaction.price}/kWh</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Total</div>
                    <div className="text-gray-900">${transaction.total.toFixed(2)}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1 md:text-right">
                    <Button variant="ghost" size="sm" className="h-7 text-xs w-full md:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-sm text-gray-900 mb-4">Quick Actions</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="gap-2 w-full sm:w-auto">
            <ArrowUpRight className="w-4 h-4" />
            Create Sell Order
          </Button>
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <ArrowDownRight className="w-4 h-4" />
            Create Buy Order
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
