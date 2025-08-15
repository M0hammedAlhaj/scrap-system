"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Bell, User } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-black text-lg">م</span>
            </div>
            <span className="font-heading font-black text-xl text-foreground">مزاد الخردة</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-body">
              الرئيسية
            </Link>
            <Link
              href="/seller/dashboard"
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              بيع
            </Link>
            <Link
              href="/buyer/explore"
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              شراء
            </Link>
            <Link
              href="/notifications"
              className="text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Bell className="w-5 h-5" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="sm" className="font-body">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
            <Button size="sm" className="font-body font-semibold">
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/seller/dashboard"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                بيع
              </Link>
              <Link
                href="/buyer/explore"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                شراء
              </Link>
              <Link
                href="/notifications"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-body"
                onClick={() => setIsOpen(false)}
              >
                الإشعارات
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start font-body">
                  <User className="w-4 h-4 ml-2" />
                  تسجيل الدخول
                </Button>
                <Button size="sm" className="w-full font-body font-semibold">
                  إنشاء حساب
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
