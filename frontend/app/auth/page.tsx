"use client"

import { useState } from "react"
import { AuthLoginForm } from "@/components/auth/auth-login-form"
import { AuthSignupForm } from "@/components/auth/auth-signup-form"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const router = useRouter()

  if (authMode === "login") {
    return (
      <AuthLoginForm 
        onBack={() => router.push("/")}
        onSwitchToSignup={() => setAuthMode("signup")}
      />
    )
  }

  return (
    <AuthSignupForm 
      onBack={() => router.push("/")}
      onSwitchToLogin={() => setAuthMode("login")}
    />
  )
}
