import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, MapPin, Clock, DollarSign } from "lucide-react"

export function TripManagement() {
  const trips = [
    {
      id: "T001",
      driver: "John Doe",
      customer: "Alice Johnson",
      pickup: "Downtown Mall",
      dropoff: "Airport Terminal 1",
      distance: "12.5 km",
      duration: "25 min",
      fare: "$25.50",
      status: "completed",
      timestamp: "2024-01-25 14:30",
      rating: 5,
    },
    {
      id: "T002",
      driver: "Jane Smith",
      customer: "Bob Wilson",
      pickup: "Central Station",
      dropoff: "Business District",
      distance: "8.2 km",
      duration: "18 min",
      fare: "$18.75",
      status: "ongoing",
      timestamp: "2024-01-25 15:15",
      rating: null,
    },
    {
      id: "T003",
      driver: "Mike Johnson",
      customer: "Carol Davis",
      pickup: "Hotel Grand",
      dropoff: "Shopping Center",
      distance: "15.3 km",
      duration: "32 min",
      fare: "$32.00",
      status: "completed",
      timestamp: "2024-01-25 13:45",
      rating: 4,
    },
    {
      id: "T004",
      driver: "Sarah Wilson",
      customer: "David Brown",
      pickup: "Residential Area",
      dropoff: "Office Complex",
      distance: "6.8 km",
      duration: "15 min",
      fare: "$0.00",
      status: "cancelled",
      timestamp: "2024-01-25 12:20",
      rating: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "ongoing":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Trip Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-gray-600">Today's Trips</div>
              </div>
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">28</div>
                <div className="text-sm text-gray-600">Ongoing Trips</div>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$12,847</div>
                <div className="text-sm text-gray-600">Today's Revenue</div>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="text-2xl">⭐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Recent Trips</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search trips..." className="pl-10 w-64" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Trip ID</th>
                  <th className="text-left p-4">Driver</th>
                  <th className="text-left p-4">Customer</th>
                  <th className="text-left p-4">Route</th>
                  <th className="text-left p-4">Distance</th>
                  <th className="text-left p-4">Duration</th>
                  <th className="text-left p-4">Fare</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Rating</th>
                  <th className="text-left p-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip) => (
                  <tr key={trip.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{trip.id}</td>
                    <td className="p-4">{trip.driver}</td>
                    <td className="p-4">{trip.customer}</td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="font-medium">{trip.pickup}</div>
                        <div className="text-gray-600">→ {trip.dropoff}</div>
                      </div>
                    </td>
                    <td className="p-4">{trip.distance}</td>
                    <td className="p-4">{trip.duration}</td>
                    <td className="p-4 font-medium">{trip.fare}</td>
                    <td className="p-4">
                      <Badge className={getStatusColor(trip.status)}>{trip.status}</Badge>
                    </td>
                    <td className="p-4">{trip.rating ? `⭐ ${trip.rating}` : "-"}</td>
                    <td className="p-4 text-sm text-gray-600">{trip.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
