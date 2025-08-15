"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"

export default function PostItem() {
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    weight: "",
    condition: "",
    location: "",
    startingPrice: "",
    reservePrice: "",
    auctionDuration: "",
  })

  const categories = [
    "نحاس",
    "فولاذ",
    "ألومنيوم",
    "نحاس أصفر",
    "حديد",
    "رصاص",
    "فولاذ مقاوم للصدأ",
    "إلكترونيات",
    "كابلات",
    "أخرى",
  ]

  const conditions = ["ممتاز", "جيد", "مقبول", "ضعيف"]

  const durations = [
    { value: "1", label: "يوم واحد" },
    { value: "3", label: "3 أيام" },
    { value: "7", label: "7 أيام" },
    { value: "14", label: "14 يوم" },
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // Mock image upload - in real app would upload to storage
      const newImages = Array.from(files).map(
        (file, index) =>
          `/placeholder.svg?height=200&width=200&query=scrap ${formData.category || "material"} ${index}`,
      )
      setImages((prev) => [...prev, ...newImages].slice(0, 5)) // Max 5 images
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", { ...formData, images })
    alert("Item posted successfully!")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/seller/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                العودة إلى لوحة التحكم
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-primary">إضافة عنصر جديد</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>المعلومات الأساسية</CardTitle>
              <CardDescription>قدم التفاصيل الأساسية حول عنصر الخردة الخاص بك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">عنوان العنصر *</Label>
                  <Input
                    id="title"
                    placeholder="مثال: حزمة أسلاك نحاسية - 50 كيلو"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">الفئة *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">الوصف *</Label>
                <Textarea
                  id="description"
                  placeholder="صف الحالة والمنشأ وأي تفاصيل ذات صلة حول مادة الخردة الخاصة بك..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="weight">الوزن (كيلو) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="50"
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">الحالة *</Label>
                  <Select
                    value={formData.condition}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>
                          {condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">الموقع *</Label>
                  <Input
                    id="location"
                    placeholder="عمان، الأردن"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>الصور</CardTitle>
              <CardDescription>ارفع حتى 5 صور عالية الجودة لعنصرك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">رفع الصور</p>
                    <p className="text-sm text-muted-foreground">انقر للتصفح أو اسحب وأفلت الصور هنا</p>
                    <Badge variant="secondary" className="mt-2">
                      {images.length}/5 صور
                    </Badge>
                  </label>
                </div>

                {/* Image Preview */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`معاينة ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Auction Settings */}
          <Card>
            <CardHeader>
              <CardTitle>إعدادات المزاد</CardTitle>
              <CardDescription>حدد التسعير ومدة المزاد</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startingPrice">السعر الابتدائي ($) *</Label>
                  <Input
                    id="startingPrice"
                    type="number"
                    placeholder="100"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startingPrice: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reservePrice">السعر الاحتياطي ($)</Label>
                  <Input
                    id="reservePrice"
                    type="number"
                    placeholder="500 (اختياري)"
                    value={formData.reservePrice}
                    onChange={(e) => setFormData((prev) => ({ ...prev, reservePrice: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground">الحد الأدنى للسعر الذي ستقبله</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">مدة المزاد *</Label>
                  <Select
                    value={formData.auctionDuration}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, auctionDuration: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدة" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" asChild>
              <Link href="/seller/dashboard">إلغاء</Link>
            </Button>
            <Button type="submit" className="px-8">
              نشر العنصر للمزاد
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
