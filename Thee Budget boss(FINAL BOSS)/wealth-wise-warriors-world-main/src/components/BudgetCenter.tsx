import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Wallet, TrendingUp, AlertTriangle, Plus, Crosshair } from 'lucide-react';

const budgetData = [
  { name: 'Food', value: 450, budget: 500, color: '#8B5CF6' },
  { name: 'Fun', value: 200, budget: 300, color: '#EC4899' },
  { name: 'Bills', value: 800, budget: 800, color: '#06B6D4' },
  { name: 'Transport', value: 150, budget: 200, color: '#10B981' },
];

const monthlyData = [
  { month: 'Jan', income: 3000, expenses: 2400 },
  { month: 'Feb', income: 3200, expenses: 2600 },
  { month: 'Mar', income: 3100, expenses: 2300 },
  { month: 'Apr', income: 3300, expenses: 2800 },
  { month: 'May', income: 3000, expenses: 2200 },
  { month: 'Jun', income: 3400, expenses: 2900 },
];

export const BudgetCenter = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold neon-text mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            BUDGET CENTER
          </span>
        </h1>
        <p className="text-xl text-purple-300">Master your money like a pro!</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="gaming-card pulse-glow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-300">
              <TrendingUp className="w-5 h-5" />
              Monthly Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400 neon-glow">$3,400</div>
            <p className="text-sm text-purple-300 mt-1">+$100 from last month</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-300">
              <Wallet className="w-5 h-5" />
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-400">$2,900</div>
            <p className="text-sm text-purple-300 mt-1">85% of income</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-300">
              <TrendingUp className="w-5 h-5" />
              Net Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-400">$500</div>
            <p className="text-sm text-purple-300 mt-1">15% savings rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Categories */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center justify-between">
            Budget Categories
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetData.map((category) => {
              const percentage = (category.value / category.budget) * 100;
              const isOverBudget = percentage > 100;
              
              return (
                <div key={category.name} className="p-4 bg-purple-800/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-purple-300">{category.name}</span>
                    <div className="flex items-center gap-2">
                      {isOverBudget && <AlertTriangle className="w-4 h-4 text-red-400" />}
                      <span className={`font-bold ${isOverBudget ? 'text-red-400' : 'text-green-400'}`}>
                        ${category.value} / ${category.budget}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className="h-3"
                  />
                  <p className="text-sm text-purple-300 mt-1">
                    {percentage.toFixed(0)}% used
                    {isOverBudget && ' - Over budget!'}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Spending Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: $${value}`}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#6B46C1" />
                <XAxis dataKey="month" stroke="#A78BFA" />
                <YAxis stroke="#A78BFA" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#4C1D95', 
                    border: '1px solid #8B5CF6',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="income" fill="#10B981" />
                <Bar dataKey="expenses" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
          <Plus className="w-6 h-6 mr-2" />
          Add Income
        </Button>
        <Button className="h-20 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
          <Plus className="w-6 h-6 mr-2" />
          Add Expense
        </Button>
        <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <Crosshair className="w-6 h-6 mr-2" />
          Set New Goal
        </Button>
      </div>
    </div>
  );
};
