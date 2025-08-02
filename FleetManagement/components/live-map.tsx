import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Zap } from "lucide-react"

export function LiveMap() {
  const activeVehicles = [
    { id: "V001", driver: "John Doe", status: "available", location: "Downtown" },
    { id: "V002", driver: "Jane Smith", status: "busy", location: "Airport" },
    { id: "V003", driver: "Mike Johnson", status: "available", location: "Mall" },
    { id: "V004", driver: "Sarah Wilson", status: "busy", location: "Station" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Live Fleet Tracking</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Navigation className="w-4 h-4 mr-2" />
            Center Map
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Real-time Updates
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Map View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simulated map background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>

                {/* Simulated roads */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-gray-300"></div>
                </div>

                {/* Simulated vehicle markers */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>

                <div className="text-center text-gray-500 z-10">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="font-medium">Live Fleet Map</div>
                  <div className="text-sm">Real-time vehicle tracking would be displayed here</div>
                  <div className="text-xs mt-2">Green: Available • Yellow: Busy • Red: Offline</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Active Vehicles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium text-sm">{vehicle.id}</div>
                        <div className="text-xs text-gray-600">{vehicle.driver}</div>
                        <div className="text-xs text-gray-500">{vehicle.location}</div>
                      </div>
                    </div>
                    <Badge
                      variant={vehicle.status === "available" ? "default" : "secondary"}
                      className={
                        vehicle.status === "available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {vehicle.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Map Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MapPin className="w-4 h-4 mr-2" />
                  Show All Vehicles
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Navigation className="w-4 h-4 mr-2" />
                  Track Specific Vehicle
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Zap className="w-4 h-4 mr-2" />
                  Heat Map View
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
