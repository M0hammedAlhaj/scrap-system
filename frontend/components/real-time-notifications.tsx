"use client"

import { useEffect } from "react"
import { X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RealTimeNotificationsProps {
  notifications: string[]
  onClear: (index: number) => void
}

export function RealTimeNotifications({ notifications, onClear }: RealTimeNotificationsProps) {
  // Auto-clear notifications after 8 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        onClear(notifications.length - 1)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [notifications, onClear])

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg animate-in slide-in-from-right-full duration-300 flex items-start gap-3"
        >
          <Bell className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="text-sm flex-1">{notification}</p>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => onClear(index)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      ))}
    </div>
  )
}
