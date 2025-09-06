import React from 'react';

const Sidebar = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'expenses', name: 'Expenses', icon: '💳' },
    { id: 'goals', name: 'Goals', icon: '🎯' },
    { id: 'rewards', name: 'Rewards', icon: '🏆' },
    { id: 'insights', name: 'AI Insights', icon: '🤖' },
    { id: 'whatsapp', name: 'WhatsApp Chat', icon: '💬' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                currentView === item.id
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
              {item.id === 'rewards' && (
                <span className="ml-auto bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
            </button>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <h3 className="font-medium text-green-800 mb-2 flex items-center">
            💡 Quick Tip
          </h3>
          <p className="text-xs text-green-700">
            Message FinBuddy on WhatsApp: "Spent ₹25 on lunch" and I'll automatically categorize it!
          </p>
          <button className="mt-2 text-xs text-green-600 font-medium hover:text-green-800">
            Try it now →
          </button>
        </div>

        {/* Rewards Progress Mini Widget */}
        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <h3 className="font-medium text-yellow-800 mb-2 flex items-center">
            🏆 Your Progress
          </h3>
          <div className="text-xs text-yellow-700 mb-2">
            <div className="flex justify-between">
              <span>Level 3 - Gold Guardian</span>
              <span>850 pts</span>
            </div>
          </div>
          <div className="w-full bg-yellow-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-xs text-yellow-600 mt-1">150 pts to next level!</p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;