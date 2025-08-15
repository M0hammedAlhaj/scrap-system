"use client"

import { Clock, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface LiveCountdownTimerProps {
  timeLeft: string
  timeLeftSeconds: number
  isActive: boolean
  endTime: string
}

export function LiveCountdownTimer({ timeLeft, timeLeftSeconds, isActive, endTime }: LiveCountdownTimerProps) {
  const isEndingSoon = timeLeftSeconds < 3600 // Less than 1 hour
  const isCritical = timeLeftSeconds < 300 // Less than 5 minutes

  if (!isActive) {
    return (
      <div className="text-center p-4">
        <Badge variant="destructive" className="text-lg px-4 py-2">
          Auction Ended
        </Badge>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Auction ends in</span>
        {isEndingSoon && (
          <Badge variant={isCritical ? "destructive" : "secondary"} className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            {isCritical ? "ENDING SOON!" : "Ending Soon"}
          </Badge>
        )}
      </div>
      <div className={`text-2xl font-bold ${isCritical ? "text-destructive animate-pulse" : "text-primary"}`}>
        {timeLeft}
      </div>
      <p className="text-sm text-muted-foreground">{endTime}</p>
    </div>
  )
}
