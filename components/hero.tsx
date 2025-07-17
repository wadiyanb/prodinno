'use client'


import Spline from '@splinetool/react-spline'
import LogoHeader from './Logo'
import localFont from 'next/font/local'

const technor = localFont({
  src: '../app/fonts/Technor.woff',
  variable: '--font-technor',
  weight: '100 900'
});

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Spline as full background */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
        <div style={{ width: '110%', height: '100%', transform: 'translateX(20vw)' }}>
          <Spline scene="https://prod.spline.design/nQVTiBYyKdaa7z6j/scene.splinecode" />
        </div>
      </div>
      {/* Foreground content: Logo and ScrollFloat */}
      <div className="relative z-0 flex flex-col items-left justify-center h-full">
        <div style={{ scale: 0.8, height: 100, width: 1200, maxWidth: '200vw', marginLeft: '-120px' }} className="flex items-center justify-center">
          <LogoHeader />
        </div>
        <div className="mt-8 w-full flex justify-start">
          <h2
             className={`text-lg md:text-xl lg:text-2xl font-normal mb-4 text-[#FFD700] text-left mx-10 ${technor.className}`}
          >
            The Product Innovation Club of VIT Chennai
          </h2>
        </div>
      </div>
    </section>
  )
}
