"use client"

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/splash-screen'
import { Navbar } from '@/components/sections/navbar'

export default function SplashWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Automatically hide splash after 4 seconds
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)
    
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <div>
        <SplashScreen />
      </div>
    )
  }

  return (
    <>
      <Navbar/>
      <div className='max-sm:w-[450px]'>
        {children}
      </div>
    </>
  )
} 