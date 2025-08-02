import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, MapPin, DollarSign, TrendingUp, AlertTriangle } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Vehicles",
      value: "248",
      change: "+12%",
      icon: Car,
      color: "text-blue-600",
    },
    {
      title: "Active Drivers",
      value: "186",
      change: "+8%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Today's Trips",
      value: "1,247",
      change: "+23%",
      icon: MapPin,
      color: "text-purple-600",
    },
    {
      title: "Revenue Today",
      value: "$12,847",
      change: "+15%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
  ]

  const recentTrips = [
    { id: "T001", driver: "John Doe", vehicle: "KA-01-AB-1234", status: "completed", fare: "$25.50" },
    { id: "T002", driver: "Jane Smith", vehicle: "KA-02-CD-5678", status: "ongoing", fare: "$18.75" },
    { id: "T003", driver: "Mike Johnson", vehicle: "KA-03-EF-9012", status: "completed", fare: "$32.00" },
    { id: "T004", driver: "Sarah Wilson", vehicle: "KA-04-GH-3456", status: "cancelled", fare: "$0.00" },
  ]

  const alerts = [
    { type: "maintenance", message: "Vehicle KA-01-AB-1234 due for service", priority: "high" },
    { type: "fuel", message: "Low fuel alert for 3 vehicles", priority: "medium" },
    { type: "driver", message: "Driver license expiring soon - John Doe", priority: "high" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{trip.id}</div>
                    <div className="text-sm text-gray-600">
                      {trip.driver} • {trip.vehicle}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{trip.fare}</div>
                    <Badge
                      variant={
                        trip.status === "completed"
                          ? "default"
                          : trip.status === "ongoing"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {trip.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{alert.message}</div>
                    <Badge variant={alert.priority === "high" ? "destructive" : "secondary"} className="mt-1">
                      {alert.priority} priority
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
