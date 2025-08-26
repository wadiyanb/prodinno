'use client'


import Spline from '@splinetool/react-spline'
import LogoHeader from './Logo'
import localFont from 'next/font/local'

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
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Spline as background with responsive positioning */}
      <div className="absolute inset-0 w-full h-full z-0 lg:flex lg:justify-end">
        <div className="w-full lg:w-[110%] h-full lg:translate-x-[20vw]">
          <Spline scene="https://prod.spline.design/nQVTiBYyKdaa7z6j/scene.splinecode" />
        </div>
      </div>
      
      {/* Foreground content with responsive sizing */}
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-start h-full -mt-28 md:-mt-32 lg:-mt-16 px-0">
        <div className="relative w-[200vw] flex items-center justify-center transform scale-[0.7] sm:scale-[0.55] md:scale-[0.65] lg:scale-[1] lg:justify-start lg:ml-[-1050px] mx-auto -translate-x-28">
          <LogoHeader />
        </div>
        <div className="mt-2 md:mt-4 w-full flex justify-center lg:justify-start">
          <h2
            className={`text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#FFD700] text-center lg:text-left mt-32 px-4 lg:px-10 max-w-2xl lg:max-w-none lg:-mt-40 ${technor.className}`}
          >
            The Product Innovation Club of VIT Chennai
          </h2>
        </div>
      </div>
      
      {/* Mobile overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden z-5" />
    </section>
  )
}