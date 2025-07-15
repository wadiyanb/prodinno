"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const services = [
  {
    title: "PAID TRAFFIC",
    subtitle: "Targeted Campaigns",
    description: "Craft precise paid traffic campaigns for optimal results—reach, convert, and maximize your marketing budget strategically.",
    subDescription: "ROI-Driven Ads",
    subText: "Boost your brand with results-focused paid traffic campaigns. Ensure your message resonates, reaching the right audience and driving conversions effectively.",
    image: "/placeholder.svg"
  },
  {
    title: "GRAPHIC DESIGN & BRANDING",
    subtitle: "Visual Excellence",
    description: "Experience visual brilliance with our graphic design. From logo creation to complete branding, stand out from the crowd.",
    subDescription: "Brand Impact",
    subText: "Transform your brand with our graphic design. Our experts create visually stunning assets that elevate your identity.",
    image: "/placeholder.svg"
  },
  {
    title: "CONTENT MARKETING STRATEGY",
    subtitle: "Strategic Storytelling",
    description: "Navigate the digital landscape with purposeful content strategy—creating engaging and sustainable brand narratives.",
    subDescription: "Impactful Content",
    subText: "Develop a comprehensive content marketing strategy. Create meaningful connections using a leading framework and tracking.",
    image: "/placeholder.svg"
  }
]

export default function Services() {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4">
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
            SERVICES
          </div>


        </motion.div>
        <motion.h2
          className="text-white text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          SERVICES DESIGNED TO<br />GROW YOUR BUSINESS
        </motion.h2>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900/50 rounded-xl overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-white text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">{service.subtitle}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{service.subDescription}</h4>
                      <p className="text-gray-400">{service.subText}</p>
                    </div>
                  </div>
                  <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700] mt-8 w-fit"
                    onClick={() => {
                      window.open('https://www.sohamdatta.com', '_blank')
                    }}>
                    Get Started <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

