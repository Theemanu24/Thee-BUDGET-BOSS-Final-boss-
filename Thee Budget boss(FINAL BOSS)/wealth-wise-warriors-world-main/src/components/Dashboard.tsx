
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wallet, Target, Trophy, TrendingUp, Play, Gamepad2, Sparkles, Zap, Star, Coins, Shield, Flame } from 'lucide-react';
import { GameIntro } from './GameIntro';
import { AnimatedIntro } from './AnimatedIntro';
import { UserAvatar } from './UserAvatar';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showAnimatedIntro, setShowAnimatedIntro] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has seen intro before and if game has started
    const hasSeenIntro = localStorage.getItem('budgetQuestIntroSeen');
    const hasStartedGame = localStorage.getItem('budgetQuestGameStarted');
    
    if (!hasStartedGame) {
      setShowAnimatedIntro(true);
    } else {
      setGameStarted(true);
    }
    
    if (!hasSeenIntro && hasStartedGame) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem('budgetQuestIntroSeen', 'true');
  };

  const handleStartGame = () => {
    setShowAnimatedIntro(false);
    setGameStarted(true);
    localStorage.setItem('budgetQuestGameStarted', 'true');
    
    // Show game intro after starting
    setTimeout(() => {
      setShowIntro(true);
    }, 500);
  };

  const handlePlayGame = () => {
    toast({
      title: "🎮 Game Mode Activated!",
      description: "Starting your Budget Quest adventure!",
    });
    navigate('/missions');
  };

  const handleContinueChallenge = () => {
    toast({
      title: "Challenge Started!",
      description: "Keep tracking your expenses to complete today's challenge!",
    });
    navigate('/budget');
  };

  const handleLearnMore = () => {
    toast({
      title: "Great choice!",
      description: "Learn about the 50/30/20 rule to improve your finances!",
    });
    navigate('/education');
  };

  const handleViewProfile = () => {
    navigate('/profile');
  };

  const handleViewShop = () => {
    navigate('/shop');
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  if (showAnimatedIntro) {
    return <AnimatedIntro onStartGame={handleStartGame} />;
  }

  return (
    <div className="space-y-8 relative min-h-screen">
      {showIntro && <GameIntro onComplete={handleIntroComplete} />}
      
      {/* Header */}
      <div className="relative">
        <div className="relative flex justify-between items-start p-8">
          <div className="text-center flex-1">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                WELCOME BACK PLAYER
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <p className="text-xl text-purple-300 font-medium">Ready to manage your finances?</p>
              <Star className="w-6 h-6 text-purple-400" />
            </div>

            {/* Player status */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Level 7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">2,547 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">350/500 XP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ml-8">
            <UserAvatar />
          </div>
        </div>
      </div>

      {/* Play Game Button */}
      <div className="text-center">
        <Button
          onClick={handlePlayGame}
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-6 px-12 text-2xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play className="w-8 h-8 mr-3" />
          PLAY GAME
          <Sparkles className="w-8 h-8 ml-3" />
        </Button>
        
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => setShowIntro(true)}
            className="border-2 border-purple-500 text-purple-300 hover:bg-purple-800/50 bg-purple-900/30 backdrop-blur-sm px-6 py-2 text-base font-medium"
          >
            <Gamepad2 className="w-4 h-4 mr-2" />
            Show Game Intro
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="gaming-card hover:scale-105 transition-transform duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Wallet className="w-5 h-5 text-green-400" />
              </div>
              Virtual Cash
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400 mb-2">$2,547</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <p className="text-sm text-green-300">+$150 this week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="gaming-card hover:scale-105 transition-transform duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              Active Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-400 mb-2">3/5</div>
            <p className="text-sm text-blue-300">Goals completed</p>
          </CardContent>
        </Card>

        <Card className="gaming-card hover:scale-105 transition-transform duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              Current Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-400 mb-3">Level 7</div>
            <Progress value={70} className="mb-3 h-2" />
            <p className="text-sm text-yellow-300">350/500 XP</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-3 text-xl">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-lg hover:from-purple-700/50 hover:to-pink-700/50 transition-colors">
            <span className="font-medium">Completed Daily Challenge: Track 5 expenses</span>
            <span className="text-green-400 font-semibold bg-green-500/20 px-2 py-1 rounded">+50 XP</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-lg hover:from-purple-700/50 hover:to-pink-700/50 transition-colors">
            <span className="font-medium">Saved $25 on groceries budget</span>
            <span className="text-yellow-400 font-semibold bg-yellow-500/20 px-2 py-1 rounded">+25 Coins</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-lg hover:from-purple-700/50 hover:to-pink-700/50 transition-colors">
            <span className="font-medium">Achieved 7-day saving streak!</span>
            <span className="text-pink-400 font-semibold bg-pink-500/20 px-2 py-1 rounded">🏆 Badge Earned</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="gaming-card hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-purple-300 text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Today's Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium text-gray-200">Track every expense for the next 24 hours</p>
            <Progress value={40} className="mb-4 h-2" />
            <Button 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-semibold py-2"
              onClick={handleContinueChallenge}
            >
              Continue Challenge
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card className="gaming-card hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300 text-lg">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              Financial Tip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-medium text-gray-200">Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings!</p>
            <Button 
              variant="outline" 
              className="w-full border-2 border-blue-500 text-blue-300 hover:bg-blue-800/50 font-semibold py-2 bg-blue-900/20 backdrop-blur-sm"
              onClick={handleLearnMore}
            >
              Learn More
              <Star className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button 
          onClick={handleViewProfile}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
        >
          <Shield className="w-4 h-4 mr-2" />
          Profile
        </Button>
        <Button 
          onClick={handleViewShop}
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Shop
        </Button>
        <Button 
          onClick={handleViewLeaderboard}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
        >
          <Trophy className="w-4 h-4 mr-2" />
          Leaderboard
        </Button>
        <Button 
          onClick={() => navigate('/settings')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Zap className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};
