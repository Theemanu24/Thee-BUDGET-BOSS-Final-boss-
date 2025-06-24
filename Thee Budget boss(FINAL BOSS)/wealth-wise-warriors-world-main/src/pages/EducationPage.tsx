
import React from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, CheckCircle, Lock, Star, TrendingUp, Calculator, PiggyBank } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Budgeting Basics",
    description: "Learn the fundamentals of creating and managing a budget",
    progress: 100,
    completed: true,
    duration: "2 hours",
    level: "Beginner",
    xpReward: 500,
    icon: Calculator
  },
  {
    id: 2,
    title: "Saving Strategies",
    description: "Master different techniques to save money effectively",
    progress: 60,
    completed: false,
    duration: "3 hours",
    level: "Beginner",
    xpReward: 750,
    icon: PiggyBank
  },
  {
    id: 3,
    title: "Investment Fundamentals",
    description: "Introduction to investing and building wealth",
    progress: 0,
    completed: false,
    duration: "4 hours",
    level: "Intermediate",
    xpReward: 1000,
    icon: TrendingUp
  },
  {
    id: 4,
    title: "Advanced Portfolio Management",
    description: "Learn advanced investment strategies and portfolio optimization",
    progress: 0,
    completed: false,
    duration: "6 hours",
    level: "Advanced",
    xpReward: 1500,
    icon: Star,
    locked: true
  }
];

const quickTips = [
  { tip: "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings", category: "Budgeting" },
  { tip: "Automate your savings to make it effortless", category: "Saving" },
  { tip: "Start investing early to benefit from compound interest", category: "Investing" },
  { tip: "Track your expenses for at least a month to understand spending patterns", category: "Budgeting" }
];

const achievements = [
  { name: "Course Crusher", description: "Complete 3 courses", completed: false },
  { name: "Knowledge Seeker", description: "Spend 10 hours learning", completed: true },
  { name: "Expert Level", description: "Complete an advanced course", completed: false }
];

const EducationPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold neon-text mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EDUCATION HUB
            </span>
          </h1>
          <p className="text-xl text-purple-300">Level up your financial knowledge!</p>
        </div>

        {/* Learning Progress */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Your Learning Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 neon-glow">1</div>
                <p className="text-purple-300">Courses Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">8.5</div>
                <p className="text-purple-300">Hours Learned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2,250</div>
                <p className="text-purple-300">XP Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Available Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id} className={`gaming-card ${course.locked ? 'opacity-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          {course.locked ? (
                            <Lock className="w-6 h-6 text-white" />
                          ) : (
                            <course.icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                            <Badge variant={course.level === "Advanced" ? "default" : "secondary"}>
                              {course.level}
                            </Badge>
                            {course.completed && <CheckCircle className="w-5 h-5 text-green-400" />}
                          </div>
                          <p className="text-purple-300 mb-3">{course.description}</p>
                          <div className="flex items-center gap-4 text-sm text-purple-400">
                            <span>{course.duration}</span>
                            <span>+{course.xpReward} XP</span>
                          </div>
                          {!course.completed && !course.locked && (
                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-purple-300">Progress</span>
                                <span className="text-purple-300">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        {course.locked ? (
                          <Button disabled className="bg-gray-600">
                            Locked
                          </Button>
                        ) : course.completed ? (
                          <Button variant="outline" className="border-green-500 text-green-400">
                            Review
                          </Button>
                        ) : (
                          <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                            <Play className="w-4 h-4 mr-2" />
                            {course.progress > 0 ? 'Continue' : 'Start'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="text-purple-300">Daily Financial Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quickTips.map((item, index) => (
                  <div key={index} className="p-4 bg-purple-800/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <p className="text-purple-300 text-sm">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="text-purple-300">Learning Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg ${achievement.completed ? 'bg-green-800/30' : 'bg-purple-800/30'}`}>
                    <div className="flex items-center gap-3">
                      {achievement.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-purple-400 rounded-full"></div>
                      )}
                      <div>
                        <h4 className="font-semibold text-white">{achievement.name}</h4>
                        <p className="text-sm text-purple-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EducationPage;
