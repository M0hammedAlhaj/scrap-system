"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle,
  Copy,
  User,
  Package,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function ContactExchangePage({ params }: { params: { id: string } }) {
  const [contactShared, setContactShared] = useState(false)
  const [message, setMessage] = useState("")
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    preferredContact: "phone",
    notes: "",
  })

  // Mock data - in real app would fetch based on params.id
  const auctionDetails = {
    id: params.id,
    item: "Copper Wire Bundle - 50kg",
    winningBid: 920,
    seller: {
      name: "Ahmad M.",
      rating: 4.8,
      phone: "+962 79 123 4567",
      email: "ahmad.m@email.com",
      location: "Amman, Jordan",
      preferredContact: "phone",
      notes: "Available for pickup weekdays 9 AM - 5 PM. Please call 30 minutes before arrival.",
    },
    buyer: {
      name: "You",
      phone: "+962 77 987 6543",
      email: "buyer@email.com",
    },
    status: "contact_exchange",
    paymentDue: "24 hours",
    pickupLocation: "Industrial Area, Amman",
  }

  const handleShareContact = () => {
    console.log("[v0] Sharing contact info:", contactInfo)
    setContactShared(true)
  }

  const handleSendMessage = () => {
    console.log("[v0] Sending message:", message)
    alert("Message sent to seller!")
    setMessage("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/notifications">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Notifications
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-primary">Contact Exchange</h1>
            <Badge variant="secondary">Auction Won</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Auction Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Congratulations! You Won This Auction
                </CardTitle>
                <CardDescription>Exchange contact information to complete the transaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{auctionDetails.item}</p>
                      <p className="text-xs text-muted-foreground">Item</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">${auctionDetails.winningBid}</p>
                      <p className="text-xs text-muted-foreground">Winning Bid</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{auctionDetails.seller.name}</p>
                      <p className="text-xs text-muted-foreground">Seller</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Contact Information</CardTitle>
                <CardDescription>Contact details shared by the seller</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Phone className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{auctionDetails.seller.phone}</p>
                      <p className="text-xs text-muted-foreground">Phone (Preferred)</p>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(auctionDetails.seller.phone)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{auctionDetails.seller.email}</p>
                      <p className="text-xs text-muted-foreground">Email</p>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(auctionDetails.seller.email)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{auctionDetails.seller.location}</p>
                    <p className="text-xs text-muted-foreground">Location</p>
                  </div>
                </div>
                {auctionDetails.seller.notes && (
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-medium text-sm mb-2">Seller Notes:</h4>
                    <p className="text-sm text-muted-foreground">{auctionDetails.seller.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Share Your Contact Information */}
            {!contactShared ? (
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Contact Information</CardTitle>
                  <CardDescription>Provide your contact details to the seller</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+962 77 123 4567"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions or preferred pickup times..."
                      rows={3}
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo((prev) => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>
                  <Button onClick={handleShareContact} className="w-full">
                    Share Contact Information
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-success/50 bg-success/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <h3 className="font-medium text-success">Contact Information Shared</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your contact details have been shared with the seller. They will contact you soon to arrange payment
                    and pickup.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Direct Messaging */}
            <Card>
              <CardHeader>
                <CardTitle>Send Message to Seller</CardTitle>
                <CardDescription>Communicate directly with the seller</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Hi! I won your auction for the copper wire bundle. When would be a good time to arrange pickup?"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSendMessage} disabled={!message.trim()}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Complete your transaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Exchange Contact Info</p>
                      <p className="text-xs text-muted-foreground">Share your details with the seller</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Arrange Payment</p>
                      <p className="text-xs text-muted-foreground">Coordinate payment method</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Schedule Pickup</p>
                      <p className="text-xs text-muted-foreground">Arrange item collection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Details */}
            <Card>
              <CardHeader>
                <CardTitle>Transaction Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Item:</span>
                  <span className="font-medium">{auctionDetails.item}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Winning Bid:</span>
                  <span className="font-medium text-primary">${auctionDetails.winningBid}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Seller:</span>
                  <span className="font-medium">{auctionDetails.seller.name}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span>Payment Due:</span>
                  <Badge variant="secondary" className="text-xs">
                    {auctionDetails.paymentDue}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you encounter any issues with this transaction, our support team is here to help.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
