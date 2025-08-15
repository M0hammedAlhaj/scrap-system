"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Phone, Mail, MessageSquare, CheckCircle, Package, DollarSign, Clock, User } from "lucide-react"
import Link from "next/link"

export default function SellerContactsPage() {
  const [completedSales, setCompletedSales] = useState([
    {
      id: 1,
      item: "حزمة أسلاك نحاسية - 50 كيلو",
      finalBid: 920,
      winner: {
        name: "سارة ك.",
        phone: "+962 77 987 6543",
        email: "sarah.k@email.com",
        notes: "أفضل الاستلام بعد الساعة 2 ظهراً في أيام الأسبوع",
      },
      status: "contact_exchanged",
      saleDate: "منذ ساعتين",
      paymentStatus: "pending",
    },
    {
      id: 2,
      item: "أنابيب فولاذية - أحجام مختلفة",
      finalBid: 1350,
      winner: {
        name: "عمر ت.",
        phone: "+962 79 555 1234",
        email: "omar.t@email.com",
        notes: "يمكن الاستلام في أي وقت هذا الأسبوع",
      },
      status: "completed",
      saleDate: "منذ يوم",
      paymentStatus: "completed",
    },
    {
      id: 3,
      item: "ألواح ألومنيوم - 20 قطعة",
      finalBid: 650,
      winner: {
        name: "ليلى ح.",
        phone: "+962 78 444 5678",
        email: "layla.h@email.com",
        notes: "",
      },
      status: "awaiting_contact",
      saleDate: "منذ 3 أيام",
      paymentStatus: "pending",
    },
  ])

  const pendingSales = completedSales.filter((sale) => sale.paymentStatus === "pending")
  const completedTransactions = completedSales.filter((sale) => sale.paymentStatus === "completed")

  const markAsCompleted = (id: number) => {
    setCompletedSales((prev) =>
      prev.map((sale) => (sale.id === id ? { ...sale, status: "completed", paymentStatus: "completed" } : sale)),
    )
  }

  const getStatusBadge = (status: string, paymentStatus: string) => {
    if (paymentStatus === "completed") {
      return (
        <Badge variant="default" className="bg-success text-success-foreground">
          مكتمل
        </Badge>
      )
    }
    if (status === "contact_exchanged") {
      return <Badge variant="secondary">تم تبادل الاتصال</Badge>
    }
    if (status === "awaiting_contact") {
      return <Badge variant="outline">في انتظار الاتصال</Badge>
    }
    return <Badge variant="secondary">{status}</Badge>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/seller/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة إلى لوحة التحكم
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-primary">جهات اتصال المشترين</h1>
            <Badge variant="secondary">{pendingSales.length} معلق</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">معلق ({pendingSales.length})</TabsTrigger>
            <TabsTrigger value="completed">مكتمل ({completedTransactions.length})</TabsTrigger>
            <TabsTrigger value="all">جميع المبيعات ({completedSales.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingSales.map((sale) => (
              <Card key={sale.id} className="border-accent/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{sale.item}</CardTitle>
                      <CardDescription>
                        تم البيع {sale.saleDate} • العرض النهائي: ${sale.finalBid}
                      </CardDescription>
                    </div>
                    {getStatusBadge(sale.status, sale.paymentStatus)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Buyer Contact Info */}
                    <div className="space-y-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        المشتري: {sale.winner.name}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <Phone className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">{sale.winner.phone}</p>
                            <p className="text-xs text-muted-foreground">هاتف</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <Mail className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">{sale.winner.email}</p>
                            <p className="text-xs text-muted-foreground">بريد إلكتروني</p>
                          </div>
                        </div>
                        {sale.winner.notes && (
                          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                            <h5 className="font-medium text-sm mb-1">ملاحظات المشتري:</h5>
                            <p className="text-sm text-muted-foreground">{sale.winner.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Transaction Details */}
                    <div className="space-y-4">
                      <h4 className="font-medium">تفاصيل المعاملة</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Package className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-sm">{sale.item}</p>
                            <p className="text-xs text-muted-foreground">العنصر</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-sm">${sale.finalBid}</p>
                            <p className="text-xs text-muted-foreground">العرض النهائي</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-sm">{sale.saleDate}</p>
                            <p className="text-xs text-muted-foreground">تاريخ البيع</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      إرسال رسالة
                    </Button>
                    <Button onClick={() => markAsCompleted(sale.id)} className="flex-1">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      تحديد كمكتمل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedTransactions.map((sale) => (
              <Card key={sale.id} className="border-success/50 bg-success/5">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{sale.item}</CardTitle>
                      <CardDescription>
                        اكتمل {sale.saleDate} • العرض النهائي: ${sale.finalBid}
                      </CardDescription>
                    </div>
                    {getStatusBadge(sale.status, sale.paymentStatus)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-sm">اكتملت المعاملة مع {sale.winner.name}</p>
                      <p className="text-xs text-muted-foreground">تم استلام الدفع وتسليم العنصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {completedSales.map((sale) => (
              <Card key={sale.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{sale.item}</CardTitle>
                      <CardDescription>
                        تم البيع {sale.saleDate} • العرض النهائي: ${sale.finalBid}
                      </CardDescription>
                    </div>
                    {getStatusBadge(sale.status, sale.paymentStatus)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-sm">{sale.winner.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      {sale.paymentStatus === "pending" && (
                        <Button size="sm" onClick={() => markAsCompleted(sale.id)}>
                          إكمال
                        </Button>
                      )}
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
