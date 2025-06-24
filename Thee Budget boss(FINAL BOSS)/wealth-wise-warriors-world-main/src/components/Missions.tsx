
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Trophy, Clock, Coins } from 'lucide-react';

const dailyMissions = [
  {
    id: 1,
    title: "Track 5 Expenses",
    description: "Log any 5 purchases or expenses today",
    progress: 3,
    total: 5,
    reward: "50 XP + 10 Coins",
    difficulty: "Easy",
    timeLeft: "18h 30m"
  },
  {
    id: 2,
    title: "Stay Under Budget",
    description: "Don't exceed your daily spending limit",
    progress: 1,
    total: 1,
    reward: "75 XP + 25 Coins",
    difficulty: "Medium",
    timeLeft: "18h 30m"
  },
  {
    id: 3,
    title: "Learn Something New",
    description: "Complete one lesson in Education Hub",
    progress: 0,
    total: 1,
    reward: "30 XP + Badge",
    difficulty: "Easy",
    timeLeft: "18h 30m"
  }
];

const weeklyMissions = [
  {
    id: 4,
    title: "Save $100",
    description: "Put aside $100 in your savings this week",
    progress: 65,
    total: 100,
    reward: "200 XP + 100 Coins + Special Badge",
    difficulty: "Hard",
    timeLeft: "4d 18h"
  },
  {
    id: 5,
    title: "Perfect Week",
    description: "Complete all daily missions for 7 days",
    progress: 4,
    total: 7,
    reward: "500 XP + Legendary Badge",
    difficulty: "Legendary",
    timeLeft: "4d 18h"
  }
];

export const Missions = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold neon-text mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MISSIONS & CHALLENGES
          </span>
        </h1>
        <p className="text-xl text-purple-300">Complete missions to level up and earn rewards!</p>
      </div>

      {/* Mission Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-purple-400">12</div>
            <p className="text-sm text-purple-300">Completed Today</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold text-yellow-400">7</div>
            <p className="text-sm text-purple-300">Day Streak</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Coins className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-green-400">1,250</div>
            <p className="text-sm text-purple-300">Coins Earned</p>
          </CardContent>
        </Card>

        <Card className="gaming-card pulse-glow">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-blue-400">18h</div>
            <p className="text-sm text-purple-300">Reset Timer</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Missions */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Daily Missions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {dailyMissions.map((mission) => {
            const progressPercentage = (mission.progress / mission.total) * 100;
            const isCompleted = mission.progress >= mission.total;
            
            return (
              <div key={mission.id} className="p-6 bg-purple-800/30 rounded-lg border border-purple-500/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-purple-300">{mission.title}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${mission.difficulty === 'Easy' && 'bg-green-600'}
                          ${mission.difficulty === 'Medium' && 'bg-yellow-600'}
                          ${mission.difficulty === 'Hard' && 'bg-red-600'}
                          ${mission.difficulty === 'Legendary' && 'bg-purple-600'}
                        `}
                      >
                        {mission.difficulty}
                      </Badge>
                    </div>
                    <p className="text-purple-300 mb-2">{mission.description}</p>
                    <p className="text-sm text-green-400 font-semibold">Reward: {mission.reward}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-300 mb-2">Time left: {mission.timeLeft}</p>
                    {isCompleted ? (
                      <Button disabled className="bg-green-600">
                        <Trophy className="w-4 h-4 mr-2" />
                        Completed
                      </Button>
                    ) : (
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                        Start Mission
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Progress</span>
                    <span className="text-purple-300">{mission.progress}/{mission.total}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Weekly Missions */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Weekly Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyMissions.map((mission) => {
            const progressPercentage = (mission.progress / mission.total) * 100;
            const isCompleted = mission.progress >= mission.total;
            
            return (
              <div key={mission.id} className="p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/30 rounded-lg border border-purple-500/50">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-purple-300">{mission.title}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${mission.difficulty === 'Hard' && 'bg-red-600'}
                          ${mission.difficulty === 'Legendary' && 'bg-gradient-to-r from-purple-600 to-pink-600'}
                        `}
                      >
                        {mission.difficulty}
                      </Badge>
                    </div>
                    <p className="text-purple-300 mb-2">{mission.description}</p>
                    <p className="text-sm text-green-400 font-semibold">Reward: {mission.reward}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-300 mb-2">Time left: {mission.timeLeft}</p>
                    {isCompleted ? (
                      <Button disabled className="bg-green-600">
                        <Trophy className="w-4 h-4 mr-2" />
                        Completed
                      </Button>
                    ) : (
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                        Continue
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Progress</span>
                    <span className="text-purple-300">
                      {typeof mission.progress === 'number' && mission.progress < 10 
                        ? `${mission.progress}/${mission.total}` 
                        : `$${mission.progress}/$${mission.total}`
                      }
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
