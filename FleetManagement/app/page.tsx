"use client";

import useAuth from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { DashboardOverview } from "@/components/dashboard-overview";
import { VehicleManagement } from "@/components/vehicle-management";
import { DriverManagement } from "@/components/driver-management";
import { TripManagement } from "@/components/trip-management";
import { Analytics } from "@/components/analytics";
import { LiveMap } from "@/components/live-map";

export default function FleetManagement() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/login"); // ✅ Redirect now works
    }
  }, [loading, isAuthenticated, router]);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "vehicles":
        return <VehicleManagement />;
      case "drivers":
        return <DriverManagement />;
      case "trips":
        return <TripManagement />;
      case "analytics":
        return <Analytics />;
      case "map":
        return <LiveMap />;
      default:
        return <DashboardOverview />;
    }
  };

  if (loading || !isAuthenticated) return null;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
}