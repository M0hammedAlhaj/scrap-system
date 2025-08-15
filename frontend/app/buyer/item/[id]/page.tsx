"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, MapPin, Weight, Package, User, TrendingUp, AlertCircle, Zap } from "lucide-react"
import Link from "next/link"
import { useRealTimeAuction } from "@/hooks/use-real-time-auction"
import { RealTimeNotifications } from "@/components/real-time-notifications"
import { LiveCountdownTimer } from "@/components/live-countdown-timer"
import { LiveBidHistory } from "@/components/live-bid-history"

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [bidAmount, setBidAmount] = useState("")
  const [isWatched, setIsWatched] = useState(false)

  // Mock item data - in real app would fetch based on params.id
  const item = {
    id: params.id,
    title: "Copper Wire Bundle - 50kg",
    category: "Copper",
    description:
      "High-quality copper wire bundle from electrical installations. Clean, stripped copper with minimal oxidation. Perfect for recycling or reuse in electrical projects. All wires are sorted and bundled for easy handling.",
    startingPrice: 500,
    reservePrice: 800,
    endTime: "March 15, 2024 at 3:00 PM",
    location: "Amman, Jordan",
    condition: "Good",
    weight: "50kg",
    seller: {
      name: "Ahmad M.",
      rating: 4.8,
      totalSales: 47,
      memberSince: "2022",
    },
    images: ["/copper-wire-bundle.png", "/placeholder-dfm0r.png", "/copper-wire-bundle-side.png"],
    specifications: {
      Material: "Copper",
      Weight: "50kg",
      Condition: "Good",
      Origin: "Electrical installations",
      Purity: "99.9% copper",
      Processing: "Stripped and sorted",
    },
  }

  const { auctionData, notifications, clearNotification, placeBid } = useRealTimeAuction(params.id, {
    currentBid: 850,
    bidCount: 12,
    timeLeft: "2 days 4 hours",
    timeLeftSeconds: 187200, // 2 days 4 hours in seconds
    bidHistory: [
      { bidder: "Sarah K.", amount: 850, time: "2 hours ago" },
      { bidder: "Omar T.", amount: 820, time: "4 hours ago" },
      { bidder: "Layla H.", amount: 800, time: "6 hours ago" },
      { bidder: "Khaled R.", amount: 750, time: "1 day ago" },
      { bidder: "Nour A.", amount: 700, time: "1 day ago" },
    ],
    isActive: true,
    hasNewBid: false,
  })

  const [selectedImage, setSelectedImage] = useState(0)
  const minimumBid = auctionData.currentBid + 10

  const handlePlaceBid = () => {
    const bid = Number.parseFloat(bidAmount)
    if (bid >= minimumBid) {
      console.log("[v0] Placing bid:", bid)
      placeBid(bid)
      setBidAmount("")
    } else {
      alert(`Minimum bid is $${minimumBid}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <RealTimeNotifications notifications={notifications} onClear={clearNotification} />

      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/buyer/explore">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Listings
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-primary truncate">{item.title}</h1>
            {auctionData.isActive && (
              <Badge variant="secondary" className="animate-pulse">
                <Zap className="w-3 h-3 mr-1" />
                Live Auction
              </Badge>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={item.images[selectedImage] || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="sm"
                        variant={isWatched ? "default" : "secondary"}
                        onClick={() => setIsWatched(!isWatched)}
                      >
                        <Heart className={`w-4 h-4 ${isWatched ? "fill-current" : ""}`} />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {item.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                          selectedImage === index ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(item.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-muted">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Bid Activity</CardTitle>
                <CardDescription>Real-time bidding updates</CardDescription>
              </CardHeader>
              <CardContent>
                <LiveBidHistory bidHistory={auctionData.bidHistory} bidCount={auctionData.bidCount} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className={auctionData.hasNewBid ? "ring-2 ring-primary/50 animate-pulse" : ""}>
              <CardHeader>
                <LiveCountdownTimer
                  timeLeft={auctionData.timeLeft}
                  timeLeftSeconds={auctionData.timeLeftSeconds}
                  isActive={auctionData.isActive}
                  endTime={item.endTime}
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current bid:</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold text-xl ${auctionData.hasNewBid ? "text-primary animate-pulse" : "text-primary"}`}
                      >
                        ${auctionData.currentBid}
                      </span>
                      {auctionData.hasNewBid && (
                        <Badge variant="secondary" className="text-xs animate-bounce">
                          NEW!
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Starting price:</span>
                    <span>${item.startingPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Reserve price:</span>
                    <span>${item.reservePrice}</span>
                  </div>
                </div>

                <Separator />

                {auctionData.isActive ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Minimum bid: ${minimumBid}</span>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder={`${minimumBid}`}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handlePlaceBid} disabled={!bidAmount}>
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Bid
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground">This auction has ended</p>
                  </div>
                )}

                <Button variant="outline" className="w-full bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  {isWatched ? "Remove from Watchlist" : "Add to Watchlist"}
                </Button>
              </CardContent>
            </Card>

            {/* Item Details */}
            <Card>
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm text-muted-foreground">Category</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Weight className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.weight}</p>
                    <p className="text-sm text-muted-foreground">Weight</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.location}</p>
                    <p className="text-sm text-muted-foreground">Location</p>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit">
                  Condition: {item.condition}
                </Badge>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{item.seller.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>★ {item.seller.rating}</span>
                      <span>•</span>
                      <span>{item.seller.totalSales} sales</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Member since {item.seller.memberSince}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Seller Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
