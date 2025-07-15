'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import LogoHeader from './Logo'
import ScrollFloat from './ScrollFloat'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Spline as full background */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
        <div style={{ width: '110%', height: '100%', transform: 'translateX(20vw)' }}>
          <Spline scene="https://prod.spline.design/nQVTiBYyKdaa7z6j/scene.splinecode" />
        </div>
      </div>
      {/* Foreground content: Logo and ScrollFloat */}
      <div className="relative z-0 flex flex-col items-left justify-center h-full">
        <div style={{ scale: 0.8, height: 100, width: 1200, maxWidth: '200vw', marginLeft: '-80px' }} className="flex items-center justify-center">
          <LogoHeader />
        </div>
        <div className="mt-8 w-full flex justify-center">
          <ScrollFloat>
            Empowering Innovation, Driving Results
          </ScrollFloat>
        </div>
      </div>
    </section>
  )
}
