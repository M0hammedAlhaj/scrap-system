"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, UserPlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RegisterResponse {
  data: {
    id: string
    email: string
    name?: string
    userType: string
  }
  message: string
  status: number
}

interface AuthSignupFormProps {
  onBack?: () => void
  onSwitchToLogin?: () => void
}

const JORDAN_GOVERNORATES = [
  "عمّان",
  "إربد", 
  "الزرقاء",
  "البلقاء",
  "مادبا",
  "الكرك",
  "الطفيلة",
  "معان",
  "العقبة",
  "جرش",
  "عجلون",
  "المفرق"
]

const handleApiError = async (response: Response) => {
  try {
    const errorData = await response.json()
    return errorData.message || "حدث خطأ في الخادم"
  } catch {
    return "حدث خطأ في الاتصال بالخادم"
  }
}

export function AuthSignupForm({ onBack, onSwitchToLogin }: AuthSignupFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
    userType: "Buyer" 
  })

  const handleInputChange = (e: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phone,
          city: formData.city,
          state: formData.state,
          userType: formData.userType,
        }),
      })

      if (!response.ok) {
        const errorMessage = await handleApiError(response)
        throw new Error(errorMessage)
      }

      const data: RegisterResponse = await response.json()
      console.log("Registration successful:", data)
      
      alert("تم إنشاء الحساب بنجاح!")
      
      // Optionally redirect to login or dashboard
      // window.location.href = "/auth/login"
      
    } catch (err: any) {
      setError(err.message || "حدث خطأ ما")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {onBack && (
          <Button variant="ghost" onClick={onBack} className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة
          </Button>
        )}

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <UserPlus className="h-6 w-6" />
              إنشاء حساب جديد
            </CardTitle>
            <CardDescription>
              أنشئ حساباً جديداً للانضمام إلى منصة مزاد الخردة
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                  className="placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل كلمة المرور"
                  className="placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="أدخل رقم هاتفك"
                  className="placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">نوع الحساب</Label>
                <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
                  <SelectTrigger className="placeholder:text-gray-400">
                    <SelectValue placeholder="اختر نوع الحساب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Buyer">مشتري</SelectItem>
                    <SelectItem value="Seller">بائع</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">المحافظة</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                    <SelectTrigger className="placeholder:text-gray-400">
                      <SelectValue placeholder="اختر المحافظة" />
                    </SelectTrigger>
                    <SelectContent>
                      {JORDAN_GOVERNORATES.map((governorate) => (
                        <SelectItem key={governorate} value={governorate}>
                          {governorate}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">المنطقة</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="أدخل اسم المنطقة"
                    className="placeholder:text-gray-400"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "جارٍ إنشاء الحساب..." : "إنشاء الحساب"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              {onSwitchToLogin && (
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-sm text-primary hover:underline"
                >
                  لديك حساب بالفعل؟ سجل الدخول
                </button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
