import React from 'react';
import { financialGoals } from '../data/finbuddyData';

const GoalTracker = () => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
        🎯 Goal Progress Tracker
      </h2>
      
      <div className="space-y-4">
        {financialGoals.map(goal => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const remaining = goal.targetAmount - goal.currentAmount;
          const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{goal.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${goal.currentAmount.toLocaleString()} of ${goal.targetAmount.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                    {goal.priority}
                  </span>
                  <span className="text-sm text-gray-500">
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{progress.toFixed(1)}% Complete</span>
                  <span>${remaining.toLocaleString()} to go</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(progress)}`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Target: {goal.deadline}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700 font-medium">
                    Add Funds
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Edit Goal
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">💡 Smart Tip</h3>
        <p className="text-sm text-blue-800">
          You're doing great! Consider setting up automatic transfers to reach your goals faster. 
          Based on your spending patterns, you could save an extra $200/month by reducing dining out expenses.
        </p>
      </div>
    </div>
  );
};

export default GoalTracker;