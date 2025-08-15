"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck, ShoppingCart, Gavel } from "lucide-react"
import { AuthForm } from "./auth-form"

export type UserRole = "buyer" | "seller"

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [showAuth, setShowAuth] = useState(false)

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
    setShowAuth(true)
  }

  const handleBackToRoles = () => {
    setShowAuth(false)
    setSelectedRole(null)
  }

  if (showAuth && selectedRole) {
    return <AuthForm role={selectedRole} onBack={handleBackToRoles} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Gavel className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-primary">ScrapBid</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional scrap auction platform connecting buyers and sellers for efficient, secure transactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">I'm a Buyer</CardTitle>
              <CardDescription className="text-base">
                Browse and bid on scrap materials from verified sellers
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Explore scrap listings by location and type
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Place competitive bids in real-time
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Get seller contact details when you win
                </li>
              </ul>
              <Button onClick={() => handleRoleSelect("buyer")} className="w-full" size="lg">
                Continue as Buyer
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">I'm a Seller</CardTitle>
              <CardDescription className="text-base">List your scrap materials and manage auction bids</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Post scrap items with photos and details
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Monitor bids and manage auctions
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2" />
                  Connect with winning buyers directly
                </li>
              </ul>
              <Button onClick={() => handleRoleSelect("seller")} className="w-full" size="lg">
                Continue as Seller
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
