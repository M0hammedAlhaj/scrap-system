"use client"

import { AuthSignupForm } from "@/components/auth/auth-signup-form"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  
  return (
    <AuthSignupForm 
      onBack={() => router.push("/")}
      onSwitchToLogin={() => router.push("/auth/login")}
    />
  )
}
