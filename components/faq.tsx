'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How can I join ProdInno?",
    answer: "Joining ProdInno is easy! We welcome all students interested in product design and innovation. Simply attend our next general meeting or sign up through our registration form. We have meetings every Thursday at 6 PM in the Innovation Hub."
  },
  {
    question: "What activities does ProdInno organize?",
    answer: "We organize a variety of activities including weekly workshops, design sprints, hackathons, industry speaker sessions, and collaborative projects with real clients. Members also get exclusive access to networking events and career development opportunities."
  },
  {
    question: "Do I need prior experience to join?",
    answer: "Not at all! We welcome members of all skill levels. Whether you&apos;re just starting out or have years of experience, ProdInno provides learning opportunities for everyone. Our community is built on collaboration and mutual growth."
  },
  {
    question: "What are the membership benefits?",
    answer: "Members get access to exclusive workshops, networking events, mentorship programs, project opportunities, and our resource library. You&apos;ll also receive certificates for completed workshops and projects, plus opportunities to work on real-world client projects."
  }
]

export default function FAQ() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
      <div className="container mx-auto px-4 relative z-20">
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
            GOT QUESTIONS?
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about joining ProdInno and becoming part of our innovative community
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm bg-black/40"
                >
                  <AccordionTrigger className="text-white hover:text-[hsl(47.9,95.8%,53.1%)] px-6 py-4 text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 px-6 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4 text-sm">Still have questions? We&apos;re here to help!</p>
            <Button className="bg-[hsl(47.9,95.8%,53.1%)] text-black hover:bg-[hsl(47.9,95.8%,48%)] font-medium px-6 py-2 h-auto text-sm"
              onClick={() => {
                window.open('https://www.sohamdatta.com', '_blank')
              }}>
              Contact Us <span className="ml-2">→</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

