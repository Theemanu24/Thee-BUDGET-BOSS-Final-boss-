
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Wallet, Crosshair, Trophy, ShoppingBag, Settings, Bell, Calendar } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Budget Center", url: "/budget", icon: Wallet },
  { title: "Missions", url: "/missions", icon: Crosshair },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Shop", url: "/shop", icon: ShoppingBag },
  { title: "Education Hub", url: "/education", icon: Calendar },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-purple-500/30">
      <SidebarHeader className="p-6">
        <h1 className="text-2xl font-bold neon-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          THEE BUDGET GAME
        </h1>
        <p className="text-sm text-purple-300">Level up your finances!</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-purple-800/50 hover:text-primary transition-all duration-200"
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
