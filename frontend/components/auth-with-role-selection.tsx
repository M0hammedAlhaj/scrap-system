"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck, ShoppingCart, Gavel, ArrowLeft, UserPlus, LogIn } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type UserRole = "buyer" | "seller"
export type AuthMode = "login" | "signup"

// Jordan Governorates
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

interface AuthWithRoleSelectionProps {
  defaultMode?: AuthMode
  onBack?: () => void
}

export function AuthWithRoleSelection({ defaultMode = "signup", onBack }: AuthWithRoleSelectionProps) {
  const [authMode, setAuthMode] = useState<AuthMode>(defaultMode)
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
  })

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
    setShowAuth(true)
  }

  const handleBackToRoles = () => {
    setShowAuth(false)
    setSelectedRole(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (authMode === "signup") {
        const userType = selectedRole === "buyer" ? "Buyer" : "Seller"
        
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
            userType: userType,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Registration failed")
        }

        const data = await response.json()
        console.log("Registration successful:", data)
        
        // TODO: Handle successful registration (e.g., redirect to login or dashboard)
        alert("تم إنشاء الحساب بنجاح!")
        
      } else {
        // TODO: Implement login logic
        console.log("Login form submitted:", { email: formData.email, password: formData.password, role: selectedRole })
        alert("تسجيل الدخول قيد التطوير")
      }
    } catch (err: any) {
      setError(err.message || "حدث خطأ ما")
    } finally {
      setLoading(false)
    }
  }

  // If showing auth form
  if (showAuth && selectedRole) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Button variant="ghost" onClick={handleBackToRoles} className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة لاختيار الدور
          </Button>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                {authMode === "login" ? <LogIn className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
                {authMode === "login" ? "مرحباً بعودتك" : "إنشاء حساب جديد"}
              </CardTitle>
              <CardDescription>
                {authMode === "login" 
                  ? `تسجيل الدخول إلى حساب ${selectedRole === "buyer" ? "المشتري" : "البائع"}` 
                  : `التسجيل كـ ${selectedRole === "buyer" ? "مشتري" : "بائع"} للبدء`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === "signup" && (
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
                )}

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

                {authMode === "signup" && (
                  <>
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
                  </>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? "جاري المعالجة..." : (authMode === "login" ? "تسجيل الدخول" : "إنشاء الحساب")}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                  className="text-sm text-primary hover:underline"
                >
                  {authMode === "login" ? "ليس لديك حساب؟ أنشئ حساباً جديداً" : "لديك حساب بالفعل؟ سجل الدخول"}
                </button>
              </div>

              {authMode === "login" && (
                <div className="mt-4 text-center">
                  <button type="button" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
                    نسيت كلمة المرور؟
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Role selection screen
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {onBack && (
          <Button variant="ghost" onClick={onBack} className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة
          </Button>
        )}

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {authMode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر دورك في المنصة للمتابعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary h-full flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">أنا مشتري</CardTitle>
              <CardDescription className="text-base">
                تصفح ومزايدة على مواد الخردة من البائعين المعتمدين
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-1 flex flex-col">
              <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  استكشف قوائم الخردة حسب الموقع والنوع
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  ضع عروض تنافسية في الوقت الفعلي
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  احصل على تفاصيل اتصال البائع عند الفوز
                </li>
              </ul>
              <Button onClick={() => handleRoleSelect("buyer")} className="w-full mt-auto" size="lg">
                متابعة كمشتري
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary h-full flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Gavel className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">أنا بائع</CardTitle>
              <CardDescription className="text-base">أدرج مواد الخردة وأدر عروض المزاد</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-1 flex flex-col">
              <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  انشر عناصر الخردة مع الصور والتفاصيل
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  راقب العروض وأدر المزادات
                </li>
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  تواصل مع المشترين الفائزين مباشرة
                </li>
              </ul>
              <Button onClick={() => handleRoleSelect("seller")} className="w-full mt-auto" size="lg">
                متابعة كبائع
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
