"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { VehicleManagement } from "@/components/vehicle-management"
import { DriverManagement } from "@/components/driver-management"
import { TripManagement } from "@/components/trip-management"
import { Analytics } from "@/components/analytics"
import { LiveMap } from "@/components/live-map"

export default function FleetManagement() {
  const [activeTab, setActiveTab] = useState("dashboard")
   const [data, setData] = useState(null);
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "vehicles":
        return <VehicleManagement />
      case "drivers":
        return <DriverManagement />
      case "trips":
        return <TripManagement />
      case "analytics":
        return <Analytics />
      case "map":
        return <LiveMap />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
