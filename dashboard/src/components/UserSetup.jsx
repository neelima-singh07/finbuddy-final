import React, { useState } from 'react';
import { userProfile, financialGoals } from '../data/finbuddyData';

const UserSetup = ({ onComplete }) => {
  const [profile, setProfile] = useState(userProfile);
  const [goals, setGoals] = useState(financialGoals);
  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
    category: 'savings',
    priority: 'medium'
  });

  const handleProfileUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const addGoal = () => {
    if (newGoal.name && newGoal.targetAmount) {
      const goal = {
        ...newGoal,
        id: Date.now(),
        currentAmount: 0,
        targetAmount: parseFloat(newGoal.targetAmount)
      };
      setGoals(prev => [...prev, goal]);
      setNewGoal({
        name: '',
        targetAmount: '',
        deadline: '',
        category: 'savings',
        priority: 'medium'
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to FinBuddy! 🤖💰</h1>
        <p className="text-gray-600">Let's set up your financial profile and goals</p>
      </div>

      {/* User Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          👤 Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleProfileUpdate('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleProfileUpdate('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
            <input
              type="tel"
              value={profile.whatsappNumber}
              onChange={(e) => handleProfileUpdate('whatsappNumber', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+1234567890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income ($)</label>
            <input
              type="number"
              value={profile.monthlyIncome}
              onChange={(e) => handleProfileUpdate('monthlyIncome', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Financial Goals Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          🎯 Financial Goals
        </h2>
        
        {/* Existing Goals */}
        <div className="space-y-3 mb-6">
          {goals.map(goal => (
            <div key={goal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{goal.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span>${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</span>
                  <span>Due: {goal.deadline}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    goal.priority === 'high' ? 'bg-red-100 text-red-800' :
                    goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {goal.priority}
                  </span>
                </div>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Goal */}
        <div className="border-t pt-6">
          <h3 className="font-medium mb-3">Add New Goal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <input
              type="text"
              placeholder="Goal name"
              value={newGoal.name}
              onChange={(e) => setNewGoal(prev => ({ ...prev, name: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Target amount"
              value={newGoal.targetAmount}
              onChange={(e) => setNewGoal(prev => ({ ...prev, targetAmount: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newGoal.priority}
              onChange={(e) => setNewGoal(prev => ({ ...prev, priority: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <button
              onClick={addGoal}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Goal
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Integration */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center text-green-800">
          💬 WhatsApp Integration
        </h2>
        <p className="text-green-700 mb-4">
          Connect with FinBuddy on WhatsApp to track expenses on the go! Simply message us your expenses and we'll categorize them automatically.
        </p>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600 mb-2">Example messages:</p>
          <div className="space-y-1 text-sm">
            <p className="bg-gray-100 p-2 rounded">💰 "Spent $25 on lunch at McDonald's"</p>
            <p className="bg-gray-100 p-2 rounded">🚗 "Gas $45"</p>
            <p className="bg-gray-100 p-2 rounded">🛍️ "Shopping $120 at Target"</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Connect WhatsApp
        </button>
      </div>

      {/* Complete Setup */}
      <div className="text-center">
        <button
          onClick={onComplete}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Complete Setup & Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default UserSetup;