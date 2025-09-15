'use client'
import { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import LogoHeader from './Logo'
import localFont from 'next/font/local'
import TextType from './type-text'
// Import Spline dynamically without SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
})

const technor = localFont({
  src: [
    {
      path: '../app/fonts/Technor.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-technor',
  display: 'swap',
  preload: true
})

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Load Spline after initial render on mobile
    if (isMobile) {
      const timer = setTimeout(() => {
        setShouldLoadSpline(true)
      }, 2000) // Delay of 2 seconds
      return () => clearTimeout(timer)
    } else {
      setShouldLoadSpline(true)
    }
  }, [isMobile])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Spline background with dynamic loading */}
      {shouldLoadSpline && (
        <div className="absolute inset-0 w-full h-full z-0 lg:flex lg:justify-end">
          <div className="w-full lg:w-[110%] h-full lg:translate-x-[20vw]">
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
              <Spline 
                scene="https://prod.spline.design/nQVTiBYyKdaa7z6j/scene.splinecode"
                style={{ 
                  width: '100%',
                  height: '100%',
                  transform: `scale(${isMobile ? 1 : 1})` 
                }}
              />
            </Suspense>
          </div>
        </div>
      )}
      
      {/* Black background while loading */}
      {!shouldLoadSpline && (
        <div className="absolute inset-0 bg-black z-0" />
      )}
      
      {/* Rest of the content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-start min-h-screen pb-20 sm:pb-16 -mt-28 md:-mt-32 lg:-mt-16 px-0">
        <div className="relative w-[200vw] flex items-center justify-center transform scale-[0.7] sm:scale-[0.55] md:scale-[0.65] lg:scale-[1] lg:justify-start lg:ml-[-1050px] mx-auto -translate-x-28">
          <LogoHeader />
        </div>
        <div className="-mt-3 md:mt-4 w-full flex flex-col items-center lg:items-start">
          <h2
            className={`text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#FFD700] text-center lg:text-left mt-24 sm:mt-32 px-4 lg:px-10 max-w-2xl lg:max-w-none lg:-mt-40 ${technor.className}`}
          >
            The Product Innovation Club of VIT Chennai
          </h2>
          <div className="-mt-1 sm:mt-6 md:mt-8 flex flex-col items-center lg:items-start space-y-4 px-4 lg:px-10">
            <div className="relative w-full lg:w-auto">
              <TextType
                text={["We are Recruiting Now", "We are Recruiting Now"]}
                className={`text-lg md:text-xl lg:text-2xl text-[#FFD700] text-center lg:text-left italic font-italic ${technor.className}`}
                typingSpeed={50}
                pauseDuration={2000}
                deletingSpeed={30}
                showCursor={true}
                cursorClassName="text-[#FFD700]"
                initialDelay={1000}
              />
            </div>
            <a 
              href="/registration"
              className={`inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] 
                text-black text-base md:text-lg font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-xl 
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/25 
                focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-black 
                relative z-20 mt-8 ${technor.className}`}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden z-5" />
    </section>
  )
}