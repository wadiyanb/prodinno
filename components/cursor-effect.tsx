'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      {isDesktop && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#FFD700] mix-blend-difference pointer-events-none z-50"
            animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          />
          <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0) 30%)`,
            }}
          />
        </>
      )}
    </>
  )
}

