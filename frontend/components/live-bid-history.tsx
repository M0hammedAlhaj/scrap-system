"use client"

import { User, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Bid {
  bidder: string
  amount: number
  time: string
  isNew?: boolean
}

interface LiveBidHistoryProps {
  bidHistory: Bid[]
  bidCount: number
}

export function LiveBidHistory({ bidHistory, bidCount }: LiveBidHistoryProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Bid History</h3>
        <Badge variant="secondary" className="text-xs">
          <TrendingUp className="w-3 h-3 mr-1" />
          {bidCount} bids
        </Badge>
      </div>
      <div className="max-h-64 overflow-y-auto space-y-2">
        {bidHistory.map((bid, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 px-3 rounded-md transition-all duration-500 ${
              bid.isNew
                ? "bg-primary/10 border border-primary/20 animate-in slide-in-from-right-2"
                : "hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className={`font-medium text-sm ${bid.bidder === "You" ? "text-primary" : ""}`}>
                  {bid.bidder}
                  {bid.isNew && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      NEW
                    </Badge>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{bid.time}</p>
              </div>
            </div>
            <span className={`font-bold ${bid.isNew ? "text-primary text-lg" : "text-primary"}`}>${bid.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
