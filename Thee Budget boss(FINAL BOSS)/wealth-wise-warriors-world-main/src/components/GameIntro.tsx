
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, Coins, Target, Star, Zap } from 'lucide-react';

interface GameIntroProps {
  onComplete: () => void;
}

export const GameIntro = ({ onComplete }: GameIntroProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const introSteps = [
    {
      title: "WELCOME TO BUDGET QUEST",
      subtitle: "The Ultimate Financial Gaming Experience",
      description: "Transform your financial journey into an epic adventure where every dollar saved earns you XP and every goal achieved unlocks new rewards!",
      icon: Sparkles,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "LEVEL UP YOUR FINANCES",
      subtitle: "Earn XP • Unlock Achievements • Climb Leaderboards",
      description: "Track expenses, set budgets, and complete missions to gain experience points. Each financial milestone brings you closer to becoming a Budget Master!",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "COLLECT VIRTUAL COINS",
      subtitle: "Spend Wisely • Earn Rewards • Shop for Power-ups",
      description: "Every smart financial decision earns you coins. Use them to buy XP boosters, unlock themes, and purchase exclusive items in the Budget Shop!",
      icon: Coins,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "COMPLETE EPIC MISSIONS",
      subtitle: "Daily Challenges • Financial Goals • Skill Building",
      description: "Take on daily challenges, set saving goals, and learn financial skills through our Education Hub. Each completed mission makes you stronger!",
      icon: Target,
      color: "from-blue-400 to-cyan-400"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < introSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentStep, introSteps.length]);

  const handleSkip = () => {
    setShowIntro(false);
    setTimeout(onComplete, 300);
  };

  const handleNext = () => {
    if (currentStep < introSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSkip();
    }
  };

  if (!showIntro) return null;

  const currentStepData = introSteps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="gaming-card max-w-2xl w-full animate-fade-in">
        <CardContent className="p-8 text-center">
          {/* Animated Icon */}
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${currentStepData.color} flex items-center justify-center float-animation`}>
            <IconComponent className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold neon-text mb-2">
            <span className={`bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}>
              {currentStepData.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-purple-300 mb-6">{currentStepData.subtitle}</p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {introSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-purple-400 pulse-glow'
                    : index < currentStep
                    ? 'bg-purple-600'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={handleSkip}
              className="border-purple-500 text-purple-300 hover:bg-purple-800/50"
            >
              Skip Intro
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
            >
              {currentStep < introSteps.length - 1 ? (
                <>
                  Next
                  <Star className="w-4 h-4" />
                </>
              ) : (
                <>
                  Start Your Quest
                  <Zap className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 neon-glow">∞</div>
              <p className="text-purple-300">Unlimited XP</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$</div>
              <p className="text-purple-300">Real Savings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">🏆</div>
              <p className="text-purple-300">Achievements</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">🎯</div>
              <p className="text-purple-300">Fun Missions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
