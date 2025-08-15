"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, LogIn } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginResponse {
  data: {
    user: {
      id: string
      email: string
      name?: string
      userType: string
    }
    token: string
  }
  message: string
  status: number
}

interface AuthLoginFormProps {
  onBack?: () => void
  onSwitchToSignup?: () => void
}

const handleApiError = async (response: Response) => {
  try {
    const errorData = await response.json()
    return errorData.message || "حدث خطأ في الخادم"
  } catch {
    return "حدث خطأ في الاتصال بالخادم"
  }
}

export function AuthLoginForm({ onBack, onSwitchToSignup }: AuthLoginFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      if (!response.ok) {
        const errorMessage = await handleApiError(response)
        throw new Error(errorMessage)
      }

      const data: LoginResponse = await response.json()
      console.log("Login successful:", data)
      
      if (data.data?.token) {
        localStorage.setItem("authToken", data.data.token)
        localStorage.setItem("user", JSON.stringify(data.data.user))
        
        alert(`مرحباً بك! تم تسجيل الدخول بنجاح`)
        
        // Redirect based on user type or to dashboard
        // window.location.href = data.data.user.userType === "Buyer" ? "/buyer/dashboard" : "/seller/dashboard"
        
      } else {
        throw new Error("لم يتم استلام رمز المصادقة")
      }
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
              <LogIn className="h-6 w-6" />
              تسجيل الدخول
            </CardTitle>
            <CardDescription>
              أدخل بياناتك لتسجيل الدخول
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

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              {onSwitchToSignup && (
                <button
                  type="button"
                  onClick={onSwitchToSignup}
                  className="text-sm text-primary hover:underline"
                >
                  ليس لديك حساب؟ أنشئ حساباً جديداً
                </button>
              )}
            </div>

            <div className="mt-4 text-center">
              <button type="button" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
                نسيت كلمة المرور؟
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
