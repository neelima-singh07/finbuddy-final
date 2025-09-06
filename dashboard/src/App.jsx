import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserSetup from './components/UserSetup';
import ExpenseForm from './components/ExpenseForm';
import GoalTracker from './components/GoalTracker';
import SpendingInsights from './components/SpendingInsights';
import WhatsAppConnect from './components/WhatsAppConnect';
import RewardsCenter from './components/RewardsCenter';
import { recentExpenses } from './data/finbuddyData';

function App() {
  const [currentView, setCurrentView] = useState('setup'); // 'setup', 'dashboard', 'expenses', 'goals', 'rewards', 'insights', etc.
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenses, setExpenses] = useState(recentExpenses);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Check if setup is complete from localStorage
  useEffect(() => {
    const setupComplete = localStorage.getItem('finbuddy_setup_complete');
    if (setupComplete === 'true') {
      setIsSetupComplete(true);
      setCurrentView('dashboard');
    }
  }, []);

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
    setCurrentView('dashboard');
    localStorage.setItem('finbuddy_setup_complete', 'true');
  };

  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [newExpense, ...prev]);
    // In a real app, this would sync with backend
    localStorage.setItem('finbuddy_expenses', JSON.stringify([newExpense, ...expenses]));
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard expenses={expenses} />;
      case 'expenses':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">Expense Management</h1>
              <button
                onClick={() => setShowExpenseForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                + Add Expense
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">All Expenses</h2>
              <div className="space-y-3">
                {expenses.map(expense => (
                  <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">₹{expense.amount}</span>
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
                      <button className="text-sm text-red-500 hover:text-red-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'goals':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">Financial Goals</h1>
            <GoalTracker />
          </div>
        );
      case 'rewards':
        return <RewardsCenter />;
      case 'insights':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">AI-Powered Insights</h1>
            <SpendingInsights />
          </div>
        );
      case 'whatsapp':
        return <WhatsAppConnect />;
      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Account Settings</h3>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('finbuddy_setup_complete');
                      setCurrentView('setup');
                      setIsSetupComplete(false);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Reset Setup
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Notifications</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span>Budget alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span>Goal reminders</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span>WhatsApp notifications</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard expenses={expenses} />;
    }
  };

  if (currentView === 'setup' && !isSetupComplete) {
    return <UserSetup onComplete={handleSetupComplete} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onAddExpense={() => setShowExpenseForm(true)} />
      <div className="flex flex-1">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1 p-6 overflow-auto">
          {renderMainContent()}
        </main>
      </div>
      
      {showExpenseForm && (
        <ExpenseForm 
          onAddExpense={handleAddExpense}
          onClose={() => setShowExpenseForm(false)}
        />
      )}
    </div>
  );
}

export default App;