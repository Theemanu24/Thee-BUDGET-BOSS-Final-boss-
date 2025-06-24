
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, AlertTriangle, CheckCircle, Star, TrendingUp, Calendar, Settings } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const initialNotifications = [
  {
    id: 1,
    type: "achievement",
    title: "New Achievement Unlocked!",
    message: "You've completed the 'Savings Streak' challenge!",
    time: "2 minutes ago",
    read: false,
    icon: Star,
    color: "text-yellow-400"
  },
  {
    id: 2,
    type: "warning",
    title: "Budget Alert",
    message: "You're approaching your Food budget limit (90% used)",
    time: "1 hour ago",
    read: false,
    icon: AlertTriangle,
    color: "text-red-400"
  },
  {
    id: 3,
    type: "success",
    title: "Goal Completed",
    message: "Congratulations! You've reached your monthly savings goal of $500",
    time: "3 hours ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-400"
  },
  {
    id: 4,
    type: "info",
    title: "Weekly Progress Report",
    message: "Your financial health score improved by 15 points this week!",
    time: "1 day ago",
    read: true,
    icon: TrendingUp,
    color: "text-blue-400"
  },
  {
    id: 5,
    type: "reminder",
    title: "Bill Reminder",
    message: "Your electricity bill is due tomorrow ($85)",
    time: "1 day ago",
    read: false,
    icon: Calendar,
    color: "text-purple-400"
  }
];

const initialSettings = [
  { name: "Budget Alerts", description: "Get notified when approaching budget limits", enabled: true },
  { name: "Achievement Notifications", description: "Celebrate your financial milestones", enabled: true },
  { name: "Goal Reminders", description: "Stay on track with your financial goals", enabled: true },
  { name: "Bill Reminders", description: "Never miss a payment deadline", enabled: true },
  { name: "Weekly Reports", description: "Receive weekly progress summaries", enabled: false },
  { name: "Learning Suggestions", description: "Get personalized course recommendations", enabled: true }
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [notificationSettings, setNotificationSettings] = useState(initialSettings);
  const { toast } = useToast();

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast({
      title: "All notifications marked as read",
      description: "Your notification inbox is now clear!",
    });
  };

  const clearAll = () => {
    setNotifications([]);
    toast({
      title: "All notifications cleared",
      description: "Your notification history has been cleared.",
    });
  };

  const toggleNotificationSetting = (index: number) => {
    setNotificationSettings(prev => 
      prev.map((setting, i) => 
        i === index ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
    
    const settingName = notificationSettings[index].name;
    const newState = !notificationSettings[index].enabled;
    
    toast({
      title: `${settingName} ${newState ? 'Enabled' : 'Disabled'}`,
      description: `${settingName} notifications are now ${newState ? 'on' : 'off'}.`,
    });
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold neon-text mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NOTIFICATIONS
            </span>
          </h1>
          <p className="text-xl text-purple-300">Stay updated on your financial journey!</p>
          <div className="mt-4">
            <Badge className="bg-red-600">
              {unreadCount} New
            </Badge>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="gaming-card">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-300"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                Mark All as Read
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-300"
                onClick={clearAll}
                disabled={notifications.length === 0}
              >
                Clear All
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Settings className="w-4 h-4 mr-2" />
                Notification Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {notifications.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300">No notifications yet!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border-l-4 cursor-pointer transition-colors ${
                      !notification.read 
                        ? 'bg-purple-800/50 border-l-purple-400 hover:bg-purple-800/70' 
                        : 'bg-purple-800/20 border-l-gray-600 hover:bg-purple-800/30'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-4">
                      <notification.icon className={`w-6 h-6 ${notification.color} mt-1`} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white mb-1">{notification.title}</h4>
                            <p className="text-purple-300 text-sm mb-2">{notification.message}</p>
                            <p className="text-xs text-purple-400">{notification.time}</p>
                          </div>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notificationSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-purple-800/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">{setting.name}</h4>
                    <p className="text-sm text-purple-300">{setting.description}</p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleNotificationSetting(index)}
                    className="data-[state=checked]:bg-purple-500"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">This Week's Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 neon-glow">3</div>
                <p className="text-purple-300">Achievements Earned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">2</div>
                <p className="text-purple-300">Budget Alerts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5</div>
                <p className="text-purple-300">Goals Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotificationsPage;
