"use client"

import { Car, Users, MapPin, BarChart3, Map, Home, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "vehicles", label: "Vehicles", icon: Car },
    { id: "drivers", label: "Drivers", icon: Users },
    { id: "trips", label: "Trips", icon: MapPin },
    { id: "map", label: "Live Map", icon: Map },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={cn("w-full justify-start", activeTab === item.id && "bg-blue-600 text-white")}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
