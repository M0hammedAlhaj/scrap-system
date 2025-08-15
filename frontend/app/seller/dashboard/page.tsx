import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye, Clock, DollarSign, Package } from "lucide-react"
import Link from "next/link"

export default function SellerDashboard() {
  // Mock data for demonstration
  const stats = {
    activeListings: 12,
    totalBids: 47,
    pendingOffers: 8,
    totalRevenue: 15420,
  }

  const recentItems = [
    {
      id: 1,
      title: "حزمة أسلاك نحاسية - 50 كيلو",
      category: "نحاس",
      currentBid: 850,
      bidCount: 12,
      timeLeft: "يومان",
      status: "active",
      image: "/copper-wire-bundle.png",
    },
    {
      id: 2,
      title: "أنابيب فولاذية - أحجام مختلفة",
      category: "فولاذ",
      currentBid: 1200,
      bidCount: 8,
      timeLeft: "5 ساعات",
      status: "ending-soon",
      image: "/steel-pipes.png",
    },
    {
      id: 3,
      title: "ألواح ألومنيوم - 20 قطعة",
      category: "ألواح ألومنيوم",
      currentBid: 650,
      bidCount: 15,
      timeLeft: "يوم واحد",
      status: "active",
      image: "/aluminum-sheets.png",
    },
  ]

  const recentBids = [
    {
      id: 1,
      itemTitle: "حزمة أسلاك نحاسية - 50 كيلو",
      bidder: "أحمد م.",
      amount: 850,
      time: "منذ ساعتين",
      status: "new",
    },
    {
      id: 2,
      itemTitle: "أنابيب فولاذية - أحجام مختلفة",
      bidder: "سارة ك.",
      amount: 1200,
      time: "منذ 4 ساعات",
      status: "viewed",
    },
    {
      id: 3,
      itemTitle: "ألواح ألومنيوم - 20 قطعة",
      bidder: "عمر ت.",
      amount: 650,
      time: "منذ يوم",
      status: "viewed",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-primary">مزاد الخردة</h1>
              <Badge variant="secondary">لوحة تحكم البائع</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/seller/post-item">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة عنصر جديد
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">القوائم النشطة</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeListings}</div>
              <p className="text-xs text-muted-foreground">العناصر المدرجة حالياً</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي العروض</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.totalBids}</div>
              <p className="text-xs text-muted-foreground">عبر جميع العناصر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">العروض المعلقة</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.pendingOffers}</div>
              <p className="text-xs text-muted-foreground">في انتظار ردك</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Items */}
          <Card>
            <CardHeader>
              <CardTitle>قوائمك الأخيرة</CardTitle>
              <CardDescription>راقب مزاداتك النشطة وأداءها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm font-medium text-primary">${item.currentBid}</span>
                      <span className="text-sm text-muted-foreground">{item.bidCount} عروض</span>
                      <Badge variant={item.status === "ending-soon" ? "destructive" : "secondary"} className="text-xs">
                        {item.timeLeft}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                عرض جميع القوائم
              </Button>
            </CardContent>
          </Card>

          {/* Recent Bids */}
          <Card>
            <CardHeader>
              <CardTitle>العروض الأخيرة</CardTitle>
              <CardDescription>أحدث العروض على عناصرك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentBids.map((bid) => (
                <div key={bid.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{bid.itemTitle}</h4>
                    <p className="text-sm text-muted-foreground">بواسطة {bid.bidder}</p>
                    <p className="text-xs text-muted-foreground">{bid.time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary">${bid.amount}</span>
                    <Badge variant={bid.status === "new" ? "default" : "secondary"} className="text-xs">
                      {bid.status === "new" ? "جديد" : "مشاهد"}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                عرض جميع العروض
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
