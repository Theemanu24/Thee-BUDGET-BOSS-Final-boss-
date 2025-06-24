
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Settings, User, Bell, Shield, Palette, Download, Trash2, LogOut } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    username: "FinanceGuru2024",
    email: "user@example.com",
    bio: "Mastering money one budget at a time!"
  });

  const [gameSettings, setGameSettings] = useState({
    soundEffects: true,
    animations: true,
    autoSave: true,
    dailyReminders: true,
    difficulty: "Normal",
    currency: "USD ($)"
  });

  const [notifications, setNotifications] = useState({
    budgetAlerts: true,
    achievements: true,
    weeklyReports: false,
    billReminders: true,
    goalReminders: true,
    marketing: false
  });

  const [selectedTheme, setSelectedTheme] = useState("Default");

  const themes = [
    { name: "Default", colors: "from-purple-500 to-pink-500", active: true },
    { name: "Ocean", colors: "from-blue-500 to-cyan-500", active: false },
    { name: "Forest", colors: "from-green-500 to-emerald-500", active: false },
    { name: "Sunset", colors: "from-orange-500 to-red-500", active: false }
  ];

  const handleProfileSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully!",
    });
  };

  const handleProfileReset = () => {
    setProfile({
      username: "FinanceGuru2024",
      email: "user@example.com",
      bio: "Mastering money one budget at a time!"
    });
    toast({
      title: "Profile Reset",
      description: "Your profile has been reset to default values.",
    });
  };

  const toggleGameSetting = (setting: keyof typeof gameSettings) => {
    setGameSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    
    toast({
      title: "Setting Updated",
      description: `${setting} has been ${gameSettings[setting] ? 'disabled' : 'enabled'}.`,
    });
  };

  const toggleNotification = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    
    toast({
      title: "Notification Setting Updated",
      description: `${setting} notifications ${notifications[setting] ? 'disabled' : 'enabled'}.`,
    });
  };

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    toast({
      title: "Theme Changed",
      description: `Theme changed to ${themeName}. Changes will apply on next reload.`,
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password Change",
      description: "Password change feature will be available soon!",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export",
      description: "Your data export will be ready shortly. We'll email you when it's complete.",
    });
  };

  const handleResetProgress = () => {
    if (confirm("Are you sure you want to reset all your game progress? This action cannot be undone.")) {
      toast({
        title: "Progress Reset",
        description: "Your game progress has been reset. Starting fresh!",
        variant: "destructive"
      });
    }
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account Deletion",
        description: "Account deletion initiated. You will receive a confirmation email.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/signup');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold neon-text mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SETTINGS
            </span>
          </h1>
          <p className="text-xl text-purple-300">Customize your budget game experience!</p>
        </div>

        {/* Profile Settings */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="username" className="text-purple-300">Username</Label>
                <Input 
                  id="username" 
                  value={profile.username}
                  onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                  className="bg-purple-800/30 border-purple-500" 
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-purple-300">Email</Label>
                <Input 
                  id="email" 
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-purple-800/30 border-purple-500" 
                />
              </div>
            </div>
            <div>
              <Label htmlFor="bio" className="text-purple-300">Bio</Label>
              <Input 
                id="bio" 
                value={profile.bio}
                onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                className="bg-purple-800/30 border-purple-500" 
              />
            </div>
            <div className="flex gap-3">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={handleProfileSave}
              >
                Save Changes
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-300"
                onClick={handleProfileReset}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Game Settings */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Game Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Sound Effects</h4>
                    <p className="text-sm text-purple-300">Enable audio feedback</p>
                  </div>
                  <Switch 
                    checked={gameSettings.soundEffects}
                    onCheckedChange={() => toggleGameSetting('soundEffects')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Animations</h4>
                    <p className="text-sm text-purple-300">Enable visual effects</p>
                  </div>
                  <Switch 
                    checked={gameSettings.animations}
                    onCheckedChange={() => toggleGameSetting('animations')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Auto-save</h4>
                    <p className="text-sm text-purple-300">Automatically save progress</p>
                  </div>
                  <Switch 
                    checked={gameSettings.autoSave}
                    onCheckedChange={() => toggleGameSetting('autoSave')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Daily Reminders</h4>
                    <p className="text-sm text-purple-300">Get reminded to log expenses</p>
                  </div>
                  <Switch 
                    checked={gameSettings.dailyReminders}
                    onCheckedChange={() => toggleGameSetting('dailyReminders')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Difficulty Mode</h4>
                    <p className="text-sm text-purple-300">Current: {gameSettings.difficulty}</p>
                  </div>
                  <Badge>{gameSettings.difficulty}</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Currency</h4>
                    <p className="text-sm text-purple-300">Display currency</p>
                  </div>
                  <Badge>{gameSettings.currency}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Budget Alerts</span>
                  <Switch 
                    checked={notifications.budgetAlerts}
                    onCheckedChange={() => toggleNotification('budgetAlerts')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Achievement Notifications</span>
                  <Switch 
                    checked={notifications.achievements}
                    onCheckedChange={() => toggleNotification('achievements')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Weekly Reports</span>
                  <Switch 
                    checked={notifications.weeklyReports}
                    onCheckedChange={() => toggleNotification('weeklyReports')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Bill Reminders</span>
                  <Switch 
                    checked={notifications.billReminders}
                    onCheckedChange={() => toggleNotification('billReminders')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Goal Reminders</span>
                  <Switch 
                    checked={notifications.goalReminders}
                    onCheckedChange={() => toggleNotification('goalReminders')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-800/30 rounded-lg">
                  <span className="text-white">Marketing Emails</span>
                  <Switch 
                    checked={notifications.marketing}
                    onCheckedChange={() => toggleNotification('marketing')}
                    className="data-[state=checked]:bg-purple-500" 
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-300 h-20"
                onClick={handleChangePassword}
              >
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  <span>Change Password</span>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-300 h-20"
                onClick={handleExportData}
              >
                <div className="text-center">
                  <Download className="w-6 h-6 mx-auto mb-2" />
                  <span>Export Data</span>
                </div>
              </Button>
            </div>
            <div className="p-4 bg-purple-800/30 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Data Privacy</h4>
              <p className="text-sm text-purple-300 mb-3">
                Your financial data is encrypted and stored securely. We never share your personal information with third parties.
              </p>
              <Button variant="outline" size="sm" className="border-purple-500 text-purple-300">
                View Privacy Policy
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Theme Customization */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Theme Customization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {themes.map((theme) => (
                <div 
                  key={theme.name}
                  className={`p-4 bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg border-2 cursor-pointer transition-colors ${
                    selectedTheme === theme.name ? 'border-purple-400' : 'border-gray-600 hover:border-purple-400'
                  }`}
                  onClick={() => handleThemeChange(theme.name)}
                >
                  <div className="text-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${theme.colors} rounded mx-auto mb-2`}></div>
                    <span className="text-sm text-white">{theme.name}</span>
                    {selectedTheme === theme.name && (
                      <Badge className="block mt-1 bg-purple-600">Active</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="gaming-card border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-800/20 border border-red-500/30 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Reset Game Progress</h4>
              <p className="text-sm text-purple-300 mb-3">
                This will reset all your progress, achievements, and data. This action cannot be undone.
              </p>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleResetProgress}
              >
                Reset Progress
              </Button>
            </div>
            <div className="p-4 bg-red-800/20 border border-red-500/30 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Delete Account</h4>
              <p className="text-sm text-purple-300 mb-3">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="gaming-card">
          <CardContent className="p-6 text-center">
            <Button 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SettingsPage;
