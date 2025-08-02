import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function VehicleManagement() {
  const vehicles = [
    {
      id: "V001",
      plateNumber: "KA-01-AB-1234",
      model: "Toyota Camry",
      driver: "John Doe",
      status: "active",
      location: "Downtown",
      fuel: "85%",
      lastService: "2024-01-15",
    },
    {
      id: "V002",
      plateNumber: "KA-02-CD-5678",
      model: "Honda Civic",
      driver: "Jane Smith",
      status: "maintenance",
      location: "Service Center",
      fuel: "45%",
      lastService: "2024-01-10",
    },
    {
      id: "V003",
      plateNumber: "KA-03-EF-9012",
      model: "Hyundai Elantra",
      driver: "Mike Johnson",
      status: "active",
      location: "Airport",
      fuel: "92%",
      lastService: "2024-01-20",
    },
    {
      id: "V004",
      plateNumber: "KA-04-GH-3456",
      model: "Nissan Altima",
      driver: "Unassigned",
      status: "inactive",
      location: "Parking Lot A",
      fuel: "78%",
      lastService: "2024-01-08",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Vehicle Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Fleet Overview</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search vehicles..." className="pl-10 w-64" />
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
                  <th className="text-left p-4">Vehicle ID</th>
                  <th className="text-left p-4">Plate Number</th>
                  <th className="text-left p-4">Model</th>
                  <th className="text-left p-4">Driver</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Fuel</th>
                  <th className="text-left p-4">Last Service</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{vehicle.id}</td>
                    <td className="p-4">{vehicle.plateNumber}</td>
                    <td className="p-4">{vehicle.model}</td>
                    <td className="p-4">{vehicle.driver}</td>
                    <td className="p-4">
                      <Badge className={getStatusColor(vehicle.status)}>{vehicle.status}</Badge>
                    </td>
                    <td className="p-4">{vehicle.location}</td>
                    <td className="p-4">{vehicle.fuel}</td>
                    <td className="p-4">{vehicle.lastService}</td>
                    <td className="p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Vehicle</DropdownMenuItem>
                          <DropdownMenuItem>Schedule Service</DropdownMenuItem>
                          <DropdownMenuItem>Track Location</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
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
