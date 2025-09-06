import React from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatsCard from './StatsCard';
import GoalTracker from './GoalTracker';
import SpendingInsights from './SpendingInsights';
import { finbuddyStats, monthlySpending, categorySpending, recentExpenses } from '../data/finbuddyData';

const Dashboard = ({ expenses = recentExpenses }) => {
  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFEAA7', '#96CEB4', '#F7DC6F'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Financial Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {finbuddyStats.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>
      
      {/* Charts - First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Monthly Spending vs Budget</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlySpending}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, '']} />
              <Area type="monotone" dataKey="budget" stackId="1" stroke="#E5E7EB" fill="#E5E7EB" name="Budget" />
              <Area type="monotone" dataKey="spent" stackId="2" stroke="#3B82F6" fill="#3B82F6" name="Spent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Spending by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categorySpending}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categorySpending.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${value}`, 'Amount']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Second Row - Goals and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GoalTracker />
        <SpendingInsights />
      </div>
      
      {/* Recent Expenses */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center justify-between">
          <span>Recent Expenses</span>
          <span className="text-sm text-gray-500">{expenses.length} transactions</span>
        </h2>
        
        <div className="space-y-3">
          {expenses.slice(0, 10).map(expense => (
            <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">₹{expense.amount}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{expense.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{expense.category}</span>
                    <span>•</span>
                    <span>{expense.date}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      expense.method === 'whatsapp' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {expense.method === 'whatsapp' ? '💬 WhatsApp' : '✏️ Manual'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{expense.amount.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;