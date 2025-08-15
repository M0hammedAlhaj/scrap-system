"use client"

import { useState, useEffect, useCallback } from "react"

interface Bid {
  bidder: string
  amount: number
  time: string
  isNew?: boolean
}

interface AuctionData {
  currentBid: number
  bidCount: number
  timeLeft: string
  timeLeftSeconds: number
  bidHistory: Bid[]
  isActive: boolean
  hasNewBid: boolean
}

export function useRealTimeAuction(itemId: string, initialData: AuctionData) {
  const [auctionData, setAuctionData] = useState<AuctionData>(initialData)
  const [notifications, setNotifications] = useState<string[]>([])

  // Simulate real-time bid updates
  const simulateNewBid = useCallback(() => {
    const bidders = ["Sarah K.", "Omar T.", "Layla H.", "Khaled R.", "Nour A.", "Ahmad S.", "Fatima M.", "Hassan B."]
    const randomBidder = bidders[Math.floor(Math.random() * bidders.length)]
    const bidIncrement = Math.floor(Math.random() * 50) + 10 // $10-60 increment

    setAuctionData((prev) => {
      const newAmount = prev.currentBid + bidIncrement
      const newBid: Bid = {
        bidder: randomBidder,
        amount: newAmount,
        time: "Just now",
        isNew: true,
      }

      // Add notification
      setNotifications((prevNotifications) => [
        `New bid: $${newAmount} by ${randomBidder}`,
        ...prevNotifications.slice(0, 4), // Keep only last 5 notifications
      ])

      return {
        ...prev,
        currentBid: newAmount,
        bidCount: prev.bidCount + 1,
        bidHistory: [newBid, ...prev.bidHistory.map((bid) => ({ ...bid, isNew: false }))],
        hasNewBid: true,
      }
    })

    // Clear new bid indicator after 3 seconds
    setTimeout(() => {
      setAuctionData((prev) => ({ ...prev, hasNewBid: false }))
    }, 3000)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setAuctionData((prev) => {
        if (prev.timeLeftSeconds <= 0) {
          return { ...prev, isActive: false, timeLeft: "Auction ended" }
        }

        const newSeconds = prev.timeLeftSeconds - 1
        const days = Math.floor(newSeconds / (24 * 3600))
        const hours = Math.floor((newSeconds % (24 * 3600)) / 3600)
        const minutes = Math.floor((newSeconds % 3600) / 60)
        const seconds = newSeconds % 60

        let timeString = ""
        if (days > 0) timeString += `${days}d `
        if (hours > 0) timeString += `${hours}h `
        if (minutes > 0) timeString += `${minutes}m `
        timeString += `${seconds}s`

        return {
          ...prev,
          timeLeftSeconds: newSeconds,
          timeLeft: timeString.trim(),
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate random bids
  useEffect(() => {
    if (!auctionData.isActive) return

    const bidInterval = setInterval(() => {
      // Random chance of new bid (20% every 10 seconds)
      if (Math.random() < 0.2) {
        simulateNewBid()
      }
    }, 10000)

    return () => clearInterval(bidInterval)
  }, [auctionData.isActive, simulateNewBid])

  const clearNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index))
  }

  const placeBid = (amount: number) => {
    const newBid: Bid = {
      bidder: "You",
      amount,
      time: "Just now",
      isNew: true,
    }

    setAuctionData((prev) => ({
      ...prev,
      currentBid: amount,
      bidCount: prev.bidCount + 1,
      bidHistory: [newBid, ...prev.bidHistory.map((bid) => ({ ...bid, isNew: false }))],
      hasNewBid: true,
    }))

    setNotifications((prev) => [`Your bid of $${amount} has been placed!`, ...prev.slice(0, 4)])

    setTimeout(() => {
      setAuctionData((prev) => ({ ...prev, hasNewBid: false }))
    }, 3000)
  }

  return {
    auctionData,
    notifications,
    clearNotification,
    placeBid,
  }
}
