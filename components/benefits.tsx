'use client'

import { Sparkles, BarChart3, Layout } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const benefits = [
  {
    icon: Sparkles,
    title: "Elevate Your Brand",
    description: "Amplify your brand with increased visibility, enhanced credibility, and a strategic edge for lasting success."
  },
  {
    icon: BarChart3,
    title: "Maximize ROI",
    description: "Experience unmatched return on investment—strategic marketing for sustained growth and profitability."
  },
  {
    icon: Layout,
    title: "Tailored Solutions for Success",
    description: "Personalized strategies, uniquely crafted for your business, ensuring certainty in every marketing endeavor."
  }
]

export default function Benefits() {
  return (
    <section className="py-24 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] opacity-[0.02] rotate-12" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-[#FFD700]" />
        </svg>
        <svg className="absolute -bottom-[30%] -left-[30%] w-[60%] h-[60%] opacity-[0.02]" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" className="text-[#FFD700]" />
        </svg>
        <svg className="absolute top-[20%] left-[10%] w-[20%] h-[20%] opacity-[0.015]" viewBox="0 0 100 100">
          <polygon points="50,15 100,100 0,100" fill="currentColor" className="text-[#FFD700]" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence>
          <motion.div
            key="benefits-header"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
          <div className="w-fit mx-auto px-4 py-1 bg-[#FFD700]/10 rounded-full text-[#FFD700] text-sm mb-6 flex items-center gap-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FFD700]"
            >
              <path d="M100 45.3609H61.1987L88.6343 17.9254L82.0746 11.3657L54.6391 38.8013V0H45.3609V38.8013L17.9254 11.3657L11.3657 17.9254L38.8013 45.3609H0V54.6391H38.8013L11.3657 82.0746L17.9254 88.6343L45.3609 61.1987V100H54.6391V61.1987L82.0746 88.6343L88.6343 82.0746L61.1987 54.6391H100V45.3609Z" fill="currentColor" />
            </svg>
              BENEFITS
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              UNLOCK YOUR SUCCESS
            </h2>
          </motion.div>

          <motion.div 
            key="benefits-grid"
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="mb-6 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <benefit.icon className="w-12 h-12 text-[#FFD700]" />
                </motion.div>
                <h3 className="text-white text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

