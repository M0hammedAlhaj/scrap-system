"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCircle, XCircle, MessageSquare, ArrowLeft, Trophy, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "auction_won",
      title: "تهانينا! لقد فزت في المزاد",
      message: "لقد فزت في مزاد 'حزمة أسلاك نحاسية - 50 كيلو' بعرض $920",
      item: "حزمة أسلاك نحاسية - 50 كيلو",
      seller: "أحمد م.",
      amount: 920,
      time: "منذ ساعتين",
      status: "unread",
      actionRequired: true,
    },
    {
      id: 2,
      type: "auction_lost",
      title: "انتهى المزاد - تم التفوق عليك",
      message: "انتهى مزاد 'أنابيب فولاذية - أحجام مختلفة'. العرض النهائي كان $1,350",
      item: "أنابيب فولاذية - أحجام مختلفة",
      finalBid: 1350,
      yourBid: 1200,
      time: "منذ 5 ساعات",
      status: "read",
      actionRequired: false,
    },
    {
      id: 3,
      type: "contact_shared",
      title: "البائع شارك معلومات الاتصال",
      message: "أحمد م. شارك تفاصيل الاتصال الخاصة به لمزادك الفائز",
      item: "حزمة أسلاك نحاسية - 50 كيلو",
      seller: "أحمد م.",
      time: "منذ يوم",
      status: "unread",
      actionRequired: true,
    },
    {
      id: 4,
      type: "payment_reminder",
      title: "تذكير بالدفع",
      message: "يرجى إكمال الدفع لمزادك الفائز خلال 24 ساعة",
      item: "ألواح ألومنيوم - 20 قطعة",
      amount: 650,
      time: "منذ يوم",
      status: "read",
      actionRequired: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, status: "read" } : notif)))
  }

  const unreadCount = notifications.filter((n) => n.status === "unread").length
  const actionRequiredCount = notifications.filter((n) => n.actionRequired).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "auction_won":
        return <Trophy className="w-5 h-5 text-success" />
      case "auction_lost":
        return <XCircle className="w-5 h-5 text-muted-foreground" />
      case "contact_shared":
        return <MessageSquare className="w-5 h-5 text-primary" />
      case "payment_reminder":
        return <AlertTriangle className="w-5 h-5 text-accent" />
      default:
        return <Bell className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/buyer/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة إلى لوحة التحكم
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-primary">الإشعارات</h1>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount} غير مقروء
              </Badge>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">الكل ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">غير مقروء ({unreadCount})</TabsTrigger>
            <TabsTrigger value="action-required">يتطلب إجراء ({actionRequiredCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={`${notification.status === "unread" ? "border-primary/50 bg-primary/5" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-1">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{notification.time}</span>
                            {notification.actionRequired && (
                              <Badge variant="secondary" className="text-xs">
                                يتطلب إجراء
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {notification.status === "unread" && (
                            <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      {notification.type === "auction_won" && (
                        <div className="mt-4 p-4 bg-success/10 rounded-lg border border-success/20">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-success">فوز في المزاد!</h4>
                            <span className="font-bold text-success">${notification.amount}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            العنصر: {notification.item} • البائع: {notification.seller}
                          </p>
                          <Button asChild size="sm">
                            <Link href={`/contact-exchange/${notification.id}`}>تبادل معلومات الاتصال</Link>
                          </Button>
                        </div>
                      )}

                      {notification.type === "contact_shared" && (
                        <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <h4 className="font-medium text-primary mb-2">معلومات الاتصال متاحة</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {notification.seller} شارك تفاصيل الاتصال الخاصة به لـ {notification.item}
                          </p>
                          <Button asChild size="sm">
                            <Link href={`/contact-exchange/${notification.id}`}>عرض تفاصيل الاتصال</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((n) => n.status === "unread")
              .map((notification) => (
                <Card key={notification.id} className="border-primary/50 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="action-required" className="space-y-4">
            {notifications
              .filter((n) => n.actionRequired)
              .map((notification) => (
                <Card key={notification.id} className="border-accent/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          <Badge variant="secondary" className="text-xs">
                            يتطلب إجراء
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
