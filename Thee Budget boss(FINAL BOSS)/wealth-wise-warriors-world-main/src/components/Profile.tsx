
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Target, Wallet } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold neon-text mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PLAYER PROFILE
          </span>
        </h1>
      </div>

      {/* Profile Overview */}
      <Card className="gaming-card pulse-glow">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-purple-500">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-4xl bg-gradient-to-r from-purple-500 to-pink-500">FG</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-300 mb-2">FinanceGuru2024</h2>
              <p className="text-xl text-purple-400 mb-4">Level 7 • The Strategic Saver</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-300">XP Progress</span>
                    <span className="text-purple-300">350/500</span>
                  </div>
                  <Progress value={70} className="h-3" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-600 text-white">Strategic Saver</Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">Budget Master</Badge>
                  <Badge variant="secondary" className="bg-yellow-600 text-white">Goal Crusher</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold text-yellow-400">12</div>
            <p className="text-sm text-purple-300">Achievements</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-purple-400">2,450</div>
            <p className="text-sm text-purple-300">Total XP</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-green-400">8/10</div>
            <p className="text-sm text-purple-300">Goals Met</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Wallet className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-blue-400">45</div>
            <p className="text-sm text-purple-300">Day Streak</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-lg border border-yellow-500/30">
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                <h3 className="font-semibold text-yellow-400">Budget Master</h3>
                <p className="text-sm text-purple-300">Stayed under budget for 30 days</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-lg border border-green-500/30">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold text-green-400">Goal Getter</h3>
                <p className="text-sm text-purple-300">Completed 5 savings goals</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg border border-blue-500/30">
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold text-blue-400">Streak Legend</h3>
                <p className="text-sm text-purple-300">45-day tracking streak</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personality Traits */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300">Spending Personality</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">The Strategic Saver</h3>
            <p className="text-purple-300 mb-6">
              You're methodical with money, preferring to plan purchases and prioritize long-term goals. 
              You excel at finding deals and avoiding impulse buys!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">95%</div>
                <p className="text-sm text-purple-300">Planning</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">78%</div>
                <p className="text-sm text-purple-300">Discipline</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">65%</div>
                <p className="text-sm text-purple-300">Risk Taking</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">89%</div>
                <p className="text-sm text-purple-300">Goal Focus</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
