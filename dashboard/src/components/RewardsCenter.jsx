import React, { useState } from 'react';
import { 
  availableBadges, 
  userRewards, 
  rewardTiers, 
  recentAchievements, 
  activeChallenges,
  badgeCategories 
} from '../data/rewardsData';

const RewardsCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const currentTier = rewardTiers.find(tier => 
    userRewards.totalPoints >= tier.minPoints && userRewards.totalPoints <= tier.maxPoints
  );
  
  const nextTier = rewardTiers.find(tier => tier.level === currentTier.level + 1);
  const progressToNext = nextTier ? 
    ((userRewards.totalPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100 : 100;

  const earnedBadges = availableBadges.filter(badge => badge.earned);
  const unEarnedBadges = availableBadges.filter(badge => !badge.earned);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Current Level Card */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-3xl mr-3">{currentTier.icon}</span>
              {currentTier.name}
            </h2>
            <p className="text-purple-100 mt-1">Level {currentTier.level}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{userRewards.totalPoints}</p>
            <p className="text-purple-100">Total Points</p>
          </div>
        </div>
        
        {nextTier && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to {nextTier.name}</span>
              <span>{nextTier.minPoints - userRewards.totalPoints} points to go</span>
            </div>
            <div className="w-full bg-purple-400 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressToNext}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{userRewards.badgesEarned}</div>
          <div className="text-sm text-gray-600">Badges Earned</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{userRewards.currentStreak}</div>
          <div className="text-sm text-gray-600">Current Streak</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">{userRewards.longestStreak}</div>
          <div className="text-sm text-gray-600">Longest Streak</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">{currentTier.level}</div>
          <div className="text-sm text-gray-600">Current Level</div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          🏆 Recent Achievements
        </h3>
        <div className="space-y-3">
          {recentAchievements.map(achievement => {
            const badge = availableBadges.find(b => b.id === achievement.id);
            return (
              <div key={achievement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{badge.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{badge.name}</h4>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-600">+{achievement.points}</div>
                  <div className="text-xs text-gray-500">{achievement.earnedDate}</div>
                  {achievement.isNew && (
                    <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Challenges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          ⚡ Active Challenges
        </h3>
        <div className="space-y-4">
          {activeChallenges.map(challenge => (
            <div key={challenge.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{challenge.icon}</span>
                  <div>
                    <h4 className="font-medium">{challenge.name}</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">+{challenge.points}</div>
                  <div className="text-xs text-gray-500">Ends {challenge.deadline}</div>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{challenge.progress}/{challenge.target}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBadges = () => (
    <div className="space-y-6">
      {/* Earned Badges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          ✅ Earned Badges ({earnedBadges.length})
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {earnedBadges.map(badge => {
            const category = badgeCategories.find(cat => cat.id === badge.category);
            return (
              <div key={badge.id} className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h4 className="font-semibold text-gray-800">{badge.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                <div className="mt-2">
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    +{badge.points} pts
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Earned: {badge.earnedDate}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Available Badges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          🎯 Available Badges ({unEarnedBadges.length})
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {unEarnedBadges.map(badge => {
            const category = badgeCategories.find(cat => cat.id === badge.category);
            return (
              <div key={badge.id} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 text-center opacity-75">
                <div className="text-4xl mb-2 grayscale">{badge.icon}</div>
                <h4 className="font-semibold text-gray-600">{badge.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
                <div className="mt-2">
                  <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full">
                    +{badge.points} pts
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {badge.requirement}
                </div>
                {badge.progress && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{badge.progress}% complete</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        🏅 Leaderboard
      </h3>
      <div className="space-y-3">
        {[
          { rank: 1, name: 'You', points: userRewards.totalPoints, isUser: true },
          { rank: 2, name: 'Sarah M.', points: 1240 },
          { rank: 3, name: 'Alex K.', points: 1180 },
          { rank: 4, name: 'Mike R.', points: 980 },
          { rank: 5, name: 'Lisa P.', points: 920 }
        ].map(user => (
          <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${
            user.isUser ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                user.rank === 1 ? 'bg-yellow-500' :
                user.rank === 2 ? 'bg-gray-400' :
                user.rank === 3 ? 'bg-amber-600' : 'bg-gray-300'
              }`}>
                {user.rank}
              </div>
              <span className={`font-medium ${user.isUser ? 'text-blue-700' : 'text-gray-800'}`}>
                {user.name}
              </span>
            </div>
            <span className="font-bold text-gray-700">{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Rewards Center</h1>
        <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
          <span className="text-yellow-600 font-medium">{userRewards.totalPoints} Points</span>
          <span className="text-yellow-500">⭐</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-1">
        <div className="flex space-x-1">
          {[
            { id: 'overview', name: 'Overview', icon: '📊' },
            { id: 'badges', name: 'Badges', icon: '🏆' },
            { id: 'leaderboard', name: 'Leaderboard', icon: '🏅' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="font-medium">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'badges' && renderBadges()}
      {activeTab === 'leaderboard' && renderLeaderboard()}
    </div>
  );
};

export default RewardsCenter;