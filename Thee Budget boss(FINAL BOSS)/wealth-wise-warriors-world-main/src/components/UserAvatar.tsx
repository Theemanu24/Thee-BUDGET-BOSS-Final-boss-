
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Settings, Trophy, Coins, Star } from 'lucide-react';

export const UserAvatar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const userData = {
    name: "Player One",
    level: 7,
    xp: 350,
    maxXp: 500,
    coins: 2547,
    rank: "Budget Master",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-purple-800/30 transition-colors"
        onClick={() => setShowProfile(!showProfile)}
      >
        {/* XP and Coins Display */}
        <div className="hidden md:flex flex-col items-end text-sm">
          <div className="flex items-center space-x-2 text-purple-300">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold">{userData.xp}/{userData.maxXp} XP</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-300">
            <Coins className="w-4 h-4 text-green-400" />
            <span className="font-semibold">{userData.coins.toLocaleString()}</span>
          </div>
        </div>

        {/* Avatar with Level Badge */}
        <div className="relative">
          <Avatar className="w-12 h-12 border-2 border-purple-400 ring-2 ring-purple-500/50">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">
              <User className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <Badge className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold px-1 py-0 min-w-0 h-5 flex items-center justify-center">
            {userData.level}
          </Badge>
        </div>

        {/* User Info */}
        <div className="hidden lg:block">
          <p className="text-white font-semibold">{userData.name}</p>
          <p className="text-purple-300 text-sm">{userData.rank}</p>
        </div>
      </div>

      {/* Profile Dropdown */}
      {showProfile && (
        <Card className="absolute top-full right-0 mt-2 w-80 gaming-card z-50 animate-fade-in">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-16 h-16 border-2 border-purple-400">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-white font-bold text-lg">{userData.name}</h3>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Level {userData.level} • {userData.rank}
                </Badge>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-purple-800/30 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-xl">{userData.xp}</div>
                <div className="text-purple-300 text-sm">Experience</div>
              </div>
              <div className="bg-purple-800/30 rounded-lg p-3 text-center">
                <div className="text-green-400 font-bold text-xl">{userData.coins.toLocaleString()}</div>
                <div className="text-purple-300 text-sm">Coins</div>
              </div>
            </div>

            {/* XP Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-purple-300 mb-1">
                <span>Level Progress</span>
                <span>{userData.xp}/{userData.maxXp} XP</span>
              </div>
              <div className="w-full bg-purple-800/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(userData.xp / userData.maxXp) * 100}%` }}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Button variant="outline" className="w-full border-purple-500 text-purple-300 hover:bg-purple-800/50">
                <User className="w-4 h-4 mr-2" />
                View Full Profile
              </Button>
              <Button variant="outline" className="w-full border-purple-500 text-purple-300 hover:bg-purple-800/50">
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </Button>
              <Button variant="outline" className="w-full border-purple-500 text-purple-300 hover:bg-purple-800/50">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
