"use client";
import { useState } from "react";
import { TopNav } from "../TopNav";
import { Sidebar } from "../Sidebar";
import { Dashboard } from "../views/Dashboard";
import { SmartMeters } from "../views/SmartMeters";
import { Trading } from "../views/Trading";
import { Analytics } from "../views/Analytics";

export default function AppFromFigma() {
  const [activeView, setActiveView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "smart-meters":
        return <SmartMeters />;
      case "trading":
        return <Trading />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-xl md:text-2xl text-foreground mb-2">
                Settings
              </h1>
              <p className="text-sm text-muted-foreground">
                Configure your SunShare preferences
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border text-center">
              <p className="text-muted-foreground">Settings panel coming soon</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
      {/* Brand accent bar */}
      <div className="h-1 bg-primary" />

      <div className="flex">
        <Sidebar
          activeView={activeView}
          onViewChange={setActiveView}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{renderView()}</div>
        </main>
      </div>
    </div>
  );
}
