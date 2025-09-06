import React from 'react';
import { aiInsights } from '../data/finbuddyData';

const SpendingInsights = () => {
  const getInsightIcon = (type) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'success': return '✅';
      case 'info': return '💡';
      default: return '📊';
    }
  };

  const getInsightColor = (type) => {
    switch (type) {
      case 'warning': return 'bg-red-50 border-red-200';
      case 'success': return 'bg-green-50 border-green-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getTextColor = (type) => {
    switch (type) {
      case 'warning': return 'text-red-800';
      case 'success': return 'text-green-800';
      case 'info': return 'text-blue-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
        🤖 AI-Powered Insights
      </h2>
      
      <div className="space-y-4">
        {aiInsights.map((insight, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getInsightColor(insight.type)}`}>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{getInsightIcon(insight.type)}</span>
              <div className="flex-1">
                <h3 className={`font-semibold mb-2 ${getTextColor(insight.type)}`}>
                  {insight.title}
                </h3>
                <p className={`text-sm mb-3 ${getTextColor(insight.type)}`}>
                  {insight.message}
                </p>
                <div className={`text-xs font-medium ${getTextColor(insight.type)} bg-white bg-opacity-50 px-3 py-1 rounded-full inline-block`}>
                  💡 {insight.action}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
        <h3 className="font-medium text-purple-900 mb-2 flex items-center">
          🧠 FinBuddy's Learning
        </h3>
        <p className="text-sm text-purple-800">
          I'm analyzing your spending patterns and learning your habits. The more you use WhatsApp to track expenses, 
          the smarter my recommendations become!
        </p>
        <div className="mt-3 flex items-center text-xs text-purple-700">
          <div className="flex-1 bg-purple-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
          <span className="ml-2">68% accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default SpendingInsights;