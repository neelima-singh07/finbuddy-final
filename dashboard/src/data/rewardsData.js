// Rewards and Badges System Data

// Badge definitions
export const badgeCategories = [
  {
    id: 'saving',
    name: 'Saving Master',
    icon: '💰',
    color: 'bg-green-500'
  },
  {
    id: 'budgeting',
    name: 'Budget Pro',
    icon: '📊',
    color: 'bg-blue-500'
  },
  {
    id: 'goals',
    name: 'Goal Achiever',
    icon: '🎯',
    color: 'bg-purple-500'
  },
  {
    id: 'consistency',
    name: 'Consistency King',
    icon: '🔥',
    color: 'bg-orange-500'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Warrior',
    icon: '💬',
    color: 'bg-green-600'
  }
];

// Available badges
export const availableBadges = [
  {
    id: 'first_expense',
    name: 'First Steps',
    description: 'Added your first expense',
    category: 'budgeting',
    icon: '👶',
    points: 50,
    requirement: 'Add 1 expense',
    earned: true,
    earnedDate: '2024-01-10'
  },
  {
    id: 'expense_streak_7',
    name: '7-Day Tracker',
    description: 'Tracked expenses for 7 consecutive days',
    category: 'consistency',
    icon: '📅',
    points: 100,
    requirement: 'Track expenses for 7 days',
    earned: true,
    earnedDate: '2024-01-15'
  },
  {
    id: 'budget_saver',
    name: 'Budget Saver',
    description: 'Stayed under budget for a month',
    category: 'budgeting',
    icon: '💡',
    points: 200,
    requirement: 'Stay under monthly budget',
    earned: true,
    earnedDate: '2024-01-31'
  },
  {
    id: 'goal_achiever',
    name: 'Goal Crusher',
    description: 'Completed your first financial goal',
    category: 'goals',
    icon: '🏆',
    points: 300,
    requirement: 'Complete 1 financial goal',
    earned: false,
    progress: 65
  },
  {
    id: 'whatsapp_pro',
    name: 'WhatsApp Pro',
    description: 'Added 50 expenses via WhatsApp',
    category: 'whatsapp',
    icon: '📱',
    points: 150,
    requirement: 'Add 50 expenses via WhatsApp',
    earned: false,
    progress: 32
  },
  {
    id: 'saving_master',
    name: 'Saving Master',
    description: 'Saved ₹10,000 in total',
    category: 'saving',
    icon: '💎',
    points: 500,
    requirement: 'Save ₹10,000 total',
    earned: false,
    progress: 78
  },
  {
    id: 'expense_streak_30',
    name: '30-Day Champion',
    description: 'Tracked expenses for 30 consecutive days',
    category: 'consistency',
    icon: '🔥',
    points: 400,
    requirement: 'Track expenses for 30 days',
    earned: false,
    progress: 23
  },
  {
    id: 'category_master',
    name: 'Category Master',
    description: 'Used all expense categories',
    category: 'budgeting',
    icon: '🌟',
    points: 250,
    requirement: 'Use all 8 expense categories',
    earned: false,
    progress: 87
  }
];

// User rewards data
export const userRewards = {
  totalPoints: 850,
  level: 3,
  nextLevelPoints: 1000,
  badgesEarned: 3,
  totalBadges: 8,
  currentStreak: 15,
  longestStreak: 23
};

// Reward tiers
export const rewardTiers = [
  {
    level: 1,
    name: 'Bronze Saver',
    minPoints: 0,
    maxPoints: 499,
    color: 'bg-amber-600',
    icon: '🥉',
    benefits: ['Basic insights', 'Monthly reports']
  },
  {
    level: 2,
    name: 'Silver Spender',
    minPoints: 500,
    maxPoints: 999,
    color: 'bg-gray-400',
    icon: '🥈',
    benefits: ['Advanced insights', 'Weekly reports', 'Goal recommendations']
  },
  {
    level: 3,
    name: 'Gold Guardian',
    minPoints: 1000,
    maxPoints: 1999,
    color: 'bg-yellow-500',
    icon: '🥇',
    benefits: ['Premium insights', 'Daily tips', 'Custom categories', 'Priority support']
  },
  {
    level: 4,
    name: 'Platinum Pro',
    minPoints: 2000,
    maxPoints: 4999,
    color: 'bg-purple-500',
    icon: '💎',
    benefits: ['AI predictions', 'Investment advice', 'Exclusive features', 'Personal coach']
  },
  {
    level: 5,
    name: 'Diamond Elite',
    minPoints: 5000,
    maxPoints: 999999,
    color: 'bg-blue-600',
    icon: '💠',
    benefits: ['All features', 'VIP support', 'Beta access', 'Exclusive events']
  }
];

// Recent achievements
export const recentAchievements = [
  {
    id: 'budget_saver',
    name: 'Budget Saver',
    points: 200,
    earnedDate: '2024-01-31',
    isNew: true
  },
  {
    id: 'expense_streak_7',
    name: '7-Day Tracker',
    points: 100,
    earnedDate: '2024-01-15',
    isNew: false
  }
];

// Challenges (upcoming badges with time limits)
export const activeChallenges = [
  {
    id: 'february_saver',
    name: 'February Saver',
    description: 'Save ₹2,000 in February',
    icon: '💝',
    points: 300,
    deadline: '2024-02-29',
    progress: 45,
    target: 100
  },
  {
    id: 'no_dining_week',
    name: 'Home Chef Week',
    description: 'No dining out expenses for 7 days',
    icon: '🍳',
    points: 150,
    deadline: '2024-02-10',
    progress: 3,
    target: 7
  }
];