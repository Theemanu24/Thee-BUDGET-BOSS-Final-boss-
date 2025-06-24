
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Zap, Coins, Trophy, Target, Star } from 'lucide-react';

interface AnimatedIntroProps {
  onStartGame: () => void;
}

export const AnimatedIntro = ({ onStartGame }: AnimatedIntroProps) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [showStartButton, setShowStartButton] = useState(false);

  const scenes = [
    {
      title: "BUDGET QUEST",
      subtitle: "Level Up Your Financial Future",
      description: "Welcome to the ultimate financial adventure where every smart money decision powers up your character!",
      icon: Gamepad2,
      gradient: "from-purple-600 via-pink-600 to-purple-800",
      particles: "💰💎⚡"
    },
    {
      title: "EARN XP & LEVEL UP",
      subtitle: "Transform Budgeting Into Gaming",
      description: "Track expenses, save money, and complete challenges to gain experience points and unlock new levels!",
      icon: Zap,
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      particles: "⭐🎯🚀"
    },
    {
      title: "COLLECT COINS & REWARDS",
      subtitle: "Smart Spending = Epic Rewards",
      description: "Every dollar saved becomes virtual currency. Shop for power-ups, themes, and exclusive content!",
      icon: Coins,
      gradient: "from-green-600 via-teal-600 to-blue-600",
      particles: "💰🏆✨"
    },
    {
      title: "COMPETE & ACHIEVE",
      subtitle: "Rise Through The Ranks",
      description: "Challenge friends, climb leaderboards, and earn achievements as you master the art of financial gaming!",
      icon: Trophy,
      gradient: "from-yellow-600 via-orange-600 to-red-600",
      particles: "🏆🎖️👑"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setShowStartButton(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentScene, scenes.length]);

  if (showStartButton) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 z-50 flex items-center justify-center p-4">
        <Card className="gaming-card max-w-2xl w-full animate-scale-in">
          <CardContent className="p-12 text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center float-animation">
              <Gamepad2 className="w-16 h-16 text-white" />
            </div>
            
            <h1 className="text-6xl font-bold neon-text mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                READY TO PLAY?
              </span>
            </h1>
            
            <p className="text-xl text-purple-300 mb-8">
              Your financial adventure awaits. Transform your money habits into an epic gaming experience!
            </p>
            
            <Button
              onClick={onStartGame}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 text-xl rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Gamepad2 className="w-6 h-6 mr-2" />
              START YOUR QUEST
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentSceneData = scenes[currentScene];
  const IconComponent = currentSceneData.icon;

  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${currentSceneData.gradient} z-50 flex items-center justify-center p-4 overflow-hidden`}>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {currentSceneData.particles[Math.floor(Math.random() * currentSceneData.particles.length)]}
          </div>
        ))}
      </div>

      <Card className="gaming-card max-w-3xl w-full animate-fade-in relative">
        <CardContent className="p-12 text-center">
          {/* Animated Icon */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center float-animation border-4 border-white/30">
            <IconComponent className="w-16 h-16 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold neon-text mb-4">
            <span className="text-white drop-shadow-lg">
              {currentSceneData.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-6 font-semibold">
            {currentSceneData.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            {currentSceneData.description}
          </p>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3">
            {scenes.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentScene
                    ? 'w-12 bg-white pulse-glow'
                    : index < currentScene
                    ? 'w-8 bg-white/60'
                    : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
