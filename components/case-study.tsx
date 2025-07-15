"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CaseStudy() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-fit px-4 py-1 bg-[#FFD700]/10 rounded-full text-[#FFD700] text-sm mb-6 flex items-center gap-2">
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
            CASE STUDY
          </div>
        </motion.div>
        <motion.h2
          className="text-white text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A CONVERSION REVOLUTION
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Targeted Campaigns, Big Results
                </h3>
                <p className="text-gray-400">
                  Through strategic campaign optimization, we transformed a struggling business, delivering significant increases in conversions and revenue.
                </p>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Strategic Optimization Pays Off
                </h3>
                <p className="text-gray-400">
                  Our proven optimization framework delivered an impressive ROI, proving that strategic paid social can be a game-changer.
                </p>
              </div>
            </div>
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]"
              onClick={() => {
                window.open('https://www.sohamdatta.com', '_blank')
              }}>
              Get Started <span className="ml-2">→</span>
            </Button>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Conversion graph"
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

