import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Clock, Award, Eye } from "lucide-react"
import Link from "next/link"

export default function BuyerDashboard() {
  // Mock data for demonstration
  const stats = {
    activeBids: 8,
    watchedItems: 15,
    wonAuctions: 3,
    totalSpent: 4250,
  }

  const activeBids = [
    {
      id: 1,
      title: "حزمة أسلاك نحاسية - 50 كيلو",
      category: "نحاس",
      currentBid: 850,
      myBid: 800,
      timeLeft: "يومان",
      status: "outbid",
      image: "/copper-wire-bundle.png",
      seller: "أحمد م.",
    },
    {
      id: 2,
      title: "أنابيب فولاذية - أحجام مختلفة",
      category: "فولاذ",
      currentBid: 1200,
      myBid: 1200,
      timeLeft: "5 ساعات",
      status: "winning",
      image: "/steel-pipes.png",
      seller: "سارة ك.",
    },
    {
      id: 3,
      title: "ألواح ألومنيوم - 20 قطعة",
      category: "ألواح ألومنيوم",
      currentBid: 650,
      myBid: 600,
      timeLeft: "يوم واحد",
      status: "outbid",
      image: "/aluminum-sheets.png",
      seller: "عمر ت.",
    },
  ]

  const watchedItems = [
    {
      id: 4,
      title: "مجموعة تركيبات نحاسية",
      category: "نحاس",
      currentBid: 320,
      timeLeft: "3 أيام",
      bidCount: 5,
      image: "/brass-fittings.png",
    },
    {
      id: 5,
      title: "مجموعة مكونات إلكترونية",
      category: "إلكترونيات",
      currentBid: 180,
      timeLeft: "6 ساعات",
      bidCount: 12,
      image: "/electronic-components-scrap.png",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      action: "فوز في المزاد",
      item: "أنابيب نحاسية - 30 كيلو",
      amount: 450,
      time: "منذ ساعتين",
      status: "won",
    },
    {
      id: 2,
      action: "وضع عرض",
      item: "أنابيب فولاذية - أحجام مختلفة",
      amount: 1200,
      time: "منذ 4 ساعات",
      status: "bid",
    },
    {
      id: 3,
      action: "تم التفوق عليك في",
      item: "حزمة أسلاك نحاسية - 50 كيلو",
      amount: 800,
      time: "منذ يوم",
      status: "outbid",
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
              <Badge variant="secondary">لوحة تحكم المشتري</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/buyer/explore">
                  <Search className="w-4 h-4 mr-2" />
                  استكشاف القوائم
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
              <CardTitle className="text-sm font-medium">العروض النشطة</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeBids}</div>
              <p className="text-xs text-muted-foreground">تقوم بالمزايدة عليها حالياً</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">العناصر المراقبة</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.watchedItems}</div>
              <p className="text-xs text-muted-foreground">العناصر التي تتابعها</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المزادات المكسوبة</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.wonAuctions}</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الإنفاق</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${stats.totalSpent.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">كل الأوقات</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Bids */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>عروضك النشطة</CardTitle>
                <CardDescription>راقب نشاط المزايدة الحالي</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeBids.map((bid) => (
                  <div key={bid.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={bid.image || "/placeholder.svg"}
                      alt={bid.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{bid.title}</h4>
                      <p className="text-sm text-muted-foreground">بواسطة {bid.seller}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm">
                          عرضك: <span className="font-medium text-primary">${bid.myBid}</span>
                        </span>
                        <span className="text-sm">
                          الحالي: <span className="font-medium">${bid.currentBid}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={bid.status === "winning" ? "default" : "destructive"} className="text-xs">
                        {bid.status === "winning" ? "فائز" : "تم التفوق عليك"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{bid.timeLeft}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  عرض جميع العروض
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Watched Items */}
            <Card>
              <CardHeader>
                <CardTitle>العناصر المراقبة</CardTitle>
                <CardDescription>العناصر التي تتابعها</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {watchedItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs truncate">{item.title}</h5>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-primary">${item.currentBid}</span>
                        <span className="text-xs text-muted-foreground">{item.bidCount} عروض</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.timeLeft}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  عرض الكل
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>النشاط الأخير</CardTitle>
                <CardDescription>أحدث أعمالك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="truncate">
                        <span className="font-medium">{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <span className="font-medium text-primary ml-2">${activity.amount}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
