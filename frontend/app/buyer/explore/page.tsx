"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Heart, Clock, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")

  const categories = [
    { value: "all", label: "جميع الفئات" },
    { value: "copper", label: "نحاس" },
    { value: "steel", label: "فولاذ" },
    { value: "aluminum", label: "ألواح ألومنيوم" },
    { value: "brass", label: "نحاس أصفر" },
    { value: "electronics", label: "إلكترونيات" },
    { value: "other", label: "أخرى" },
  ]

  const sortOptions = [
    { value: "ending-soon", label: "ينتهي قريباً" },
    { value: "newest", label: "الأحدث أولاً" },
    { value: "price-low", label: "السعر: من الأقل للأعلى" },
    { value: "price-high", label: "السعر: من الأعلى للأقل" },
    { value: "most-bids", label: "الأكثر عروضاً" },
  ]

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: "حزمة أسلاك نحاسية - 50 كيلو",
      category: "نحاس",
      currentBid: 850,
      bidCount: 12,
      timeLeft: "يومان 4 ساعات",
      location: "عمان، الأردن",
      condition: "جيد",
      weight: "50 كيلو",
      seller: "أحمد م.",
      image: "/copper-wire-bundle.png",
      isWatched: false,
      endingSoon: false,
    },
    {
      id: 2,
      title: "أنابيب فولاذية - أحجام مختلفة",
      category: "فولاذ",
      currentBid: 1200,
      bidCount: 8,
      timeLeft: "5 ساعات",
      location: "الزرقاء، الأردن",
      condition: "ممتاز",
      weight: "75 كيلو",
      seller: "سارة ك.",
      image: "/steel-pipes.png",
      isWatched: true,
      endingSoon: true,
    },
    {
      id: 3,
      title: "ألواح ألومنيوم - 20 قطعة",
      category: "ألواح ألومنيوم",
      currentBid: 650,
      bidCount: 15,
      timeLeft: "يوم 12 ساعة",
      location: "إربد، الأردن",
      condition: "مقبول",
      weight: "30 كيلو",
      seller: "عمر ت.",
      image: "/aluminum-sheets.png",
      isWatched: false,
      endingSoon: false,
    },
    {
      id: 4,
      title: "مجموعة تركيبات نحاسية",
      category: "نحاس أصفر",
      currentBid: 320,
      bidCount: 5,
      timeLeft: "3 أيام 8 ساعات",
      location: "عمان، الأردن",
      condition: "جيد",
      weight: "15 كيلو",
      seller: "ليلى ح.",
      image: "/brass-fittings.png",
      isWatched: true,
      endingSoon: false,
    },
    {
      id: 5,
      title: "مجموعة مكونات إلكترونية",
      category: "إلكترونيات",
      currentBid: 180,
      bidCount: 12,
      timeLeft: "6 ساعات",
      location: "عمان، الأردن",
      condition: "مقبول",
      weight: "5 كيلو",
      seller: "خالد ر.",
      image: "/electronic-components-scrap.png",
      isWatched: false,
      endingSoon: true,
    },
    {
      id: 6,
      title: "قضبان فولاذ مقاوم للصدأ",
      category: "فولاذ",
      currentBid: 890,
      bidCount: 7,
      timeLeft: "4 أيام ساعتان",
      location: "العقبة، الأردن",
      condition: "ممتاز",
      weight: "40 كيلو",
      seller: "نور أ.",
      image: "/stainless-steel-rods.png",
      isWatched: false,
      endingSoon: false,
    },
  ]

  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || listing.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/buyer/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة إلى لوحة التحكم
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-primary">استكشاف القوائم</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>العثور على مواد الخردة</CardTitle>
            <CardDescription>ابحث وصفي من خلال المزادات المتاحة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="ابحث حسب نوع المادة، الوصف..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            عرض {filteredListings.length} من {listings.length} قائمة
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {selectedCategory !== "all" && `${categories.find((c) => c.value === selectedCategory)?.label} • `}
              {sortOptions.find((s) => s.value === sortBy)?.label}
            </span>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {listing.endingSoon && (
                    <Badge variant="destructive" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      ينتهي قريباً
                    </Badge>
                  )}
                  <Button size="sm" variant={listing.isWatched ? "default" : "secondary"} className="h-8 w-8 p-0">
                    <Heart className={`w-4 h-4 ${listing.isWatched ? "fill-current" : ""}`} />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">{listing.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span>{listing.weight}</span>
                  <span>•</span>
                  <span>{listing.condition}</span>
                  <span>•</span>
                  <span>{listing.location}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">${listing.currentBid}</p>
                    <p className="text-sm text-muted-foreground">{listing.bidCount} عروض</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{listing.timeLeft}</p>
                    <p className="text-xs text-muted-foreground">متبقي</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/buyer/item/${listing.id}`}>عرض التفاصيل</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 bg-transparent">
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-2 text-center">البائع: {listing.seller}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              تحميل المزيد من القوائم
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">لم يتم العثور على قوائم</h3>
            <p className="text-muted-foreground mb-4">جرب تعديل معايير البحث أو تصفح جميع الفئات</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
            >
              مسح المرشحات
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
