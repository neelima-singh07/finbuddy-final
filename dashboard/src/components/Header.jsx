import React from 'react';

const Header = ({ onAddExpense }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FB</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">FinBuddy</h1>
              <p className="text-xs text-gray-500">Smart Financial Management</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onAddExpense}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
            >
              <span>+</span>
              <span>Add Expense</span>
            </button>
            
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 font-medium">WhatsApp Connected</span>
            </div>
            
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">NS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;