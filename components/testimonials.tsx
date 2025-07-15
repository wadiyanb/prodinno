"use client"

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "10x transformed our brand and took our business to new heights. Their strategic approach strengthened our identity.",
    author: "Marketing Director",
    company: "Tech Corp"
  },
  {
    quote: "Working with them was a game-changer. Their expertise and dedication transformed our online presence.",
    author: "CEO",
    company: "StartUp Inc"
  },
  {
    quote: "10x elevated our brand. Their innovative approach and attention to detail exceeded our expectations.",
    author: "Founder",
    company: "Design Co"
  },
  {
    quote: "Working with 10x was a revelation—their strategic insights and execution transformed our digital presence.",
    author: "Marketing Lead",
    company: "Agency X"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            TESTIMONIALS
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            WHAT PEOPLE SAY<br />ABOUT US
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                &apos;{testimonial.quote}&apos;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800" />
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

