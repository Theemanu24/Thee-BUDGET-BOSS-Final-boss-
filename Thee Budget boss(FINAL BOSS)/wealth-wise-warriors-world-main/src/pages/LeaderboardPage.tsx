
import React from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Crown, Medal, Star, TrendingUp } from 'lucide-react';

const leaderboardData = [
  { rank: 1, username: "BudgetMaster2024", level: 15, xp: 12500, savings: 25000, icon: Crown, color: "text-yellow-400" },
  { rank: 2, username: "FinanceGuru", level: 12, xp: 9800, savings: 18500, icon: Trophy, color: "text-gray-300" },
  { rank: 3, username: "MoneyWizard", level: 11, xp: 8900, savings: 16200, icon: Medal, color: "text-amber-600" },
  { rank: 4, username: "SavingsPro", level: 10, xp: 7600, savings: 14800, icon: Star, color: "text-purple-400" },
  { rank: 5, username: "CashFlow King", level: 9, xp: 6800, savings: 12900, icon: Star, color: "text-purple-400" },
  { rank: 6, username: "FinanceGuru2024", level: 7, xp: 5200, savings: 9500, icon: Star, color: "text-purple-400" },
  { rank: 7, username: "BudgetNinja", level: 6, xp: 4100, savings: 7800, icon: Star, color: "text-purple-400" },
  { rank: 8, username: "MoneyMaven", level: 5, xp: 3500, savings: 6200, icon: Star, color: "text-purple-400" },
];

const achievements = [
  { title: "Savings Streak", description: "Save money for 30 days straight", rarity: "Epic" },
  { title: "Budget Master", description: "Stay under budget for 6 months", rarity: "Legendary" },
  { title: "Goal Crusher", description: "Complete 10 financial goals", rarity: "Rare" },
  { title: "Expense Tracker", description: "Log expenses for 100 days", rarity: "Common" }
];

const LeaderboardPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold neon-text mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LEADERBOARD
            </span>
          </h1>
          <p className="text-xl text-purple-300">Compete with other budget masters!</p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboardData.slice(0, 3).map((player) => (
            <Card key={player.rank} className={`gaming-card ${player.rank === 1 ? 'pulse-glow' : ''}`}>
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-2">
                  <player.icon className={`w-8 h-8 ${player.color}`} />
                </div>
                <CardTitle className="text-purple-300">#{player.rank}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-bold text-lg text-white mb-2">{player.username}</h3>
                <p className="text-purple-300">Level {player.level}</p>
                <p className="text-green-400 font-semibold">${player.savings.toLocaleString()}</p>
                <p className="text-sm text-purple-400">{player.xp} XP</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Global Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.map((player) => (
                <div 
                  key={player.rank} 
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    player.username === "FinanceGuru2024" ? 'bg-purple-700/50 border border-purple-500' : 'bg-purple-800/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-purple-300 w-8">#{player.rank}</span>
                      <player.icon className={`w-5 h-5 ${player.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{player.username}</h4>
                      <p className="text-sm text-purple-400">Level {player.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-400">${player.savings.toLocaleString()}</p>
                    <p className="text-sm text-purple-300">{player.xp} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="p-4 bg-purple-800/30 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{achievement.title}</h4>
                    <Badge variant={achievement.rarity === "Legendary" ? "default" : "secondary"}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-purple-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LeaderboardPage;
