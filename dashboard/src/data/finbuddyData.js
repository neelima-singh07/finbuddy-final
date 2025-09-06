// FinBuddy Mock Data

// User profile and goals
export const userProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  whatsappNumber: '+1234567890',
  monthlyIncome: 5000,
  setupComplete: true
};

export const financialGoals = [
  {
    id: 1,
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 3500,
    deadline: '2024-12-31',
    category: 'savings',
    priority: 'high'
  },
  {
    id: 2,
    name: 'Vacation Fund',
    targetAmount: 3000,
    currentAmount: 1200,
    deadline: '2024-08-15',
    category: 'travel',
    priority: 'medium'
  },
  {
    id: 3,
    name: 'New Car',
    targetAmount: 25000,
    currentAmount: 8500,
    deadline: '2025-06-30',
    category: 'transport',
    priority: 'low'
  }
];

// Expense categories
export const expenseCategories = [
  { id: 1, name: 'Food & Dining', color: '#FF6B6B', icon: '🍽️' },
  { id: 2, name: 'Transportation', color: '#4ECDC4', icon: '🚗' },
  { id: 3, name: 'Shopping', color: '#45B7D1', icon: '🛍️' },
  { id: 4, name: 'Entertainment', color: '#96CEB4', icon: '🎬' },
  { id: 5, name: 'Bills & Utilities', color: '#FFEAA7', icon: '💡' },
  { id: 6, name: 'Healthcare', color: '#DDA0DD', icon: '🏥' },
  { id: 7, name: 'Education', color: '#98D8C8', icon: '📚' },
  { id: 8, name: 'Other', color: '#F7DC6F', icon: '📦' }
];

// Recent expenses
export const recentExpenses = [
  {
    id: 1,
    amount: 45.50,
    category: 'Food & Dining',
    description: 'Lunch at Italian restaurant',
    date: '2024-01-15',
    method: 'whatsapp'
  },
  {
    id: 2,
    amount: 120.00,
    category: 'Transportation',
    description: 'Gas station fill-up',
    date: '2024-01-14',
    method: 'manual'
  },
  {
    id: 3,
    amount: 89.99,
    category: 'Shopping',
    description: 'Online clothing purchase',
    date: '2024-01-13',
    method: 'whatsapp'
  },
  {
    id: 4,
    amount: 25.00,
    category: 'Entertainment',
    description: 'Movie tickets',
    date: '2024-01-12',
    method: 'manual'
  },
  {
    id: 5,
    amount: 150.00,
    category: 'Bills & Utilities',
    description: 'Electricity bill',
    date: '2024-01-10',
    method: 'whatsapp'
  }
];

// Monthly spending data for charts
export const monthlySpending = [
  { month: 'Aug', spent: 2800, budget: 3000 },
  { month: 'Sep', spent: 3200, budget: 3000 },
  { month: 'Oct', spent: 2900, budget: 3000 },
  { month: 'Nov', spent: 3100, budget: 3000 },
  { month: 'Dec', spent: 3400, budget: 3000 },
  { month: 'Jan', spent: 2650, budget: 3000 }
];

// Category spending breakdown
export const categorySpending = [
  { name: 'Food & Dining', value: 850, color: '#FF6B6B' },
  { name: 'Transportation', value: 420, color: '#4ECDC4' },
  { name: 'Shopping', value: 380, color: '#45B7D1' },
  { name: 'Bills & Utilities', value: 650, color: '#FFEAA7' },
  { name: 'Entertainment', value: 200, color: '#96CEB4' },
  { name: 'Other', value: 150, color: '#F7DC6F' }
];

// AI Insights
export const aiInsights = [
  {
    type: 'warning',
    title: 'Overspending Alert',
    message: 'You\'ve spent 15% more on dining out this month compared to last month.',
    action: 'Consider cooking at home more often to save money.'
  },
  {
    type: 'success',
    title: 'Goal Progress',
    message: 'Great job! You\'re on track to reach your Emergency Fund goal by December.',
    action: 'Keep up the consistent saving habit.'
  },
  {
    type: 'info',
    title: 'Smart Tip',
    message: 'Your transportation costs are 20% below average. Consider investing the savings.',
    action: 'Allocate extra funds to your vacation goal.'
  }
];

// Stats for dashboard cards
export const finbuddyStats = [
  {
    title: 'Monthly Budget',
    value: '₹3,000',
    spent: '₹2,650',
    change: '-11.7%',
    trend: 'up',
    icon: {
      path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-green-500'
    }
  },
  {
    title: 'Active Goals',
    value: '3',
    change: 'On Track',
    trend: 'up',
    icon: {
      path: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      bgColor: 'bg-blue-500'
    }
  },
  {
    title: 'Total Saved',
    value: '₹13,200',
    change: '+8.5%',
    trend: 'up',
    icon: {
      path: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
      bgColor: 'bg-purple-500'
    }
  },
  {
    title: 'WhatsApp Messages',
    value: '47',
    change: 'This Month',
    trend: 'up',
    icon: {
      path: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      bgColor: 'bg-green-600'
    }
  }
];