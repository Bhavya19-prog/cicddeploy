import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search, Filter, MoreHorizontal, Phone, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Driver = {
  id: string;
  password: string;
  //phone: string;
  email: string;
  age:string;
  //vehicle: string;
  //status: string;
  //rating: number;
  //trips: number;
  //earnings: string;
  //licenseExpiry: string;
};

export function DriverManagement() {
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [formData, setFormData] = useState({
    password: "",
    //phone: "",
    email: "",
    age:"",
   // vehicle: "",
   // status: "online",
   // rating: 5.0,
   // trips: 0,
   // earnings: "$0",
   // licenseExpiry: "",
  })

 const handleAddDriver = async (e: React.FormEvent) => {
  e.preventDefault()


  


  try {
     const token = localStorage.getItem('token');
     if (!token) throw new Error('User not authenticated');
    const response = await fetch("https://fleet-api.prodigypulsetech.com/api/users", {
      method: "POST",
     headers: {
        "Authorization": `Bearer ${token}`, // Important: matches what Passport expects
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
   
    if (!response.ok) {
        const errorText = await response.text();
      throw new Error("Failed to add driver: " + errorText);
   }

    const newDriver = await response.json()
    setDrivers((prev) => [...prev, newDriver])

    // Reset form
    setFormData({
      password: "",
     // phone: "",
      email: "",
      age:"",
     
      //vehicle: "",
      //status: "online",
      //rating: 5.0,
      //trips: 0,
      //earnings: "$0",
      //licenseExpiry: "",
    })
  } catch (error: any) {
    console.error("Error adding driver:", error);
    alert("Error: " + error.message);
  }
}

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-800"
      case "busy":
        return "bg-yellow-100 text-yellow-800"
      case "offline":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Driver Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-6"><div className="text-2xl font-bold text-green-600">186</div><div className="text-sm text-gray-600">Total Drivers</div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="text-2xl font-bold text-blue-600">142</div><div className="text-sm text-gray-600">Online Now</div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="text-2xl font-bold text-yellow-600">28</div><div className="text-sm text-gray-600">On Trip</div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="text-2xl font-bold text-gray-600">16</div><div className="text-sm text-gray-600">Offline</div></CardContent></Card>
      </div>

      {/* ✨ Add Driver Form */}
      <form onSubmit={handleAddDriver} className="space-y-4 p-6 border rounded-md bg-gray-50">
        <h3 className="text-xl font-semibold">Add New Driver</h3>
        <Input placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <Input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <Input placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
         <Button type="submit">
          <Plus className="w-4 h-4 mr-2" />
          Add Driver
        </Button>
      </form>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Driver List</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search drivers..." className="pl-10 w-64" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {drivers.map((driver) => (
              <div key={driver.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                
                  <div>
                    <div className="font-medium">{driver.password}</div>
                    <div className="text-sm text-gray-600 flex items-center space-x-4">
                       <span className="flex items-center"><Mail className="w-3 h-3 mr-1" />{driver.email}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm font-medium">{driver.age}</div>
                    <div className="text-xs text-gray-600">age</div>
                  </div>
               
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Driver</DropdownMenuItem>
                      <DropdownMenuItem>View Trips</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuItem>Suspend Driver</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}