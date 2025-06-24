
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <AppSidebar />
        <main className="flex-1 p-6">
          <SidebarTrigger className="mb-4 text-white hover:text-primary" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};
