"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleExploreClick = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-200 rounded-full animate-ping opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-200 rounded-full animate-ping opacity-35" />
      </div>

      {/* Main content */}
      <div
        className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Avatar/Logo area */}
        <div className="relative">
         
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
        </div>

        {/* Name and title */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Found me!
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-md mx-auto leading-relaxed">
            Glad you stopped by ♡
          </p>
        </div>
       
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-pink-300 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-300 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-indigo-300 rounded-full" />
      </div>
    </div>
  )
}
