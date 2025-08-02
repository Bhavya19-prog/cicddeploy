import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Users, Car, MapPin } from "lucide-react"

export function Analytics() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Active Drivers",
      value: "186",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Fleet Utilization",
      value: "78%",
      change: "-2.3%",
      trend: "down",
      icon: Car,
    },
    {
      title: "Completed Trips",
      value: "8,429",
      change: "+18.7%",
      trend: "up",
      icon: MapPin,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Analytics & Reports</h2>
        <div className="flex space-x-2">
          <Button variant="outline">Export Report</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown
          const trendColor = metric.trend === "up" ? "text-green-600" : "text-red-600"

          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                <Icon className="w-4 h-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`flex items-center text-xs ${trendColor}`}>
                  <TrendIcon className="w-3 h-3 mr-1" />
                  {metric.change} from last month
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📊</div>
                <div>Revenue Chart</div>
                <div className="text-sm">Interactive chart would be displayed here</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trip Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🥧</div>
                <div>Trip Distribution Chart</div>
                <div className="text-sm">Pie chart showing trip categories</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", trips: 247, rating: 4.9 },
                { name: "Jane Smith", trips: 198, rating: 4.8 },
                { name: "Mike Johnson", trips: 176, rating: 4.7 },
              ].map((driver, index) => (
                <div key={driver.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{driver.name}</div>
                      <div className="text-sm text-gray-600">{driver.trips} trips</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">⭐ {driver.rating}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { route: "Airport → Downtown", trips: 89 },
                { route: "Mall → Residential", trips: 67 },
                { route: "Station → Business District", trips: 54 },
              ].map((route) => (
                <div key={route.route} className="flex items-center justify-between">
                  <div className="text-sm">{route.route}</div>
                  <div className="text-sm font-medium">{route.trips} trips</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peak Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "8:00 - 10:00 AM", demand: "High", trips: 156 },
                { time: "12:00 - 2:00 PM", demand: "Medium", trips: 89 },
                { time: "6:00 - 8:00 PM", demand: "High", trips: 134 },
              ].map((period) => (
                <div key={period.time} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{period.time}</div>
                    <div className="text-xs text-gray-600">{period.demand} demand</div>
                  </div>
                  <div className="text-sm font-medium">{period.trips}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
