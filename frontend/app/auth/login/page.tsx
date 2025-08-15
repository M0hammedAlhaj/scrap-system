"use client"

import { AuthLoginForm } from "@/components/auth/auth-login-form"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  
  return (
    <AuthLoginForm 
      onBack={() => router.push("/")}
      onSwitchToSignup={() => router.push("/auth/signup")}
    />
  )
}
