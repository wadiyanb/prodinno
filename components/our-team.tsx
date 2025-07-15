'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const departments = [
  { id: 'all', name: 'View all' },
  { id: 'management', name: 'Management' },
  { id: 'technical', name: 'Technical' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' },
  { id: 'operations', name: 'Operations' }
]

const teamMembers = [
  {
    name: 'Soham Datta',
    role: 'Co-Founder and CEO',
    image: '/placeholder.svg',
    department: 'management'
  },
  {
    name: 'Soham Datta',
    role: 'Co-Founder and CTO',
    image: '/placeholder.svg',
    department: 'management'
  },
  {
    name: 'Soham Datta',
    role: 'Lead Developer',
    image: '/placeholder.svg',
    department: 'technical'
  },
  {
    name: 'Soham Datta',
    role: 'Backend Engineer',
    image: '/placeholder.svg',
    department: 'technical'
  },
  {
    name: 'Soham Datta',
    role: 'UI/UX Designer',
    image: '/placeholder.svg',
    department: 'design'
  },
  {
    name: 'Soham Datta',
    role: 'Product Designer',
    image: '/placeholder.svg',
    department: 'design'
  },
  {
    name: 'Soham Datta',
    role: 'Marketing Director',
    image: '/placeholder.svg',
    department: 'marketing'
  },
  {
    name: 'Soham Datta',
    role: 'Content Strategist',
    image: '/placeholder.svg',
    department: 'marketing'
  },
  {
    name: 'Soham Datta',
    role: 'Sales Director',
    image: '/placeholder.svg',
    department: 'sales'
  },
  {
    name: 'Soham Datta',
    role: 'Account Executive',
    image: '/placeholder.svg',
    department: 'sales'
  },
  {
    name: 'Soham Datta',
    role: 'Operations Manager',
    image: '/placeholder.svg',
    department: 'operations'
  },
  {
    name: 'Soham Datta',
    role: 'HR Manager',
    image: '/placeholder.svg',
    department: 'operations'
  }
]

export default function OurTeam() {
  const [activeDepartment, setActiveDepartment] = useState('all')

  const filteredMembers = teamMembers.filter(
    member => activeDepartment === 'all' || member.department === activeDepartment
  )

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">
            Meet the team that makes<br />the <span className="italic">magic</span> happen
          </h1>
          <p className="text-gray-400 text-lg">
            Meet our diverse team of world-class creators, designers, and problem solvers.
          </p>
        </div>

        <div className="flex justify-start md:justify-center mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 p-1 min-w-max">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors",
                  activeDepartment === dept.id
                    ? "bg-[#FFD700] text-black"
                    : "text-gray-400 hover:bg-gray-800"
                )}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          layout
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                layout: { duration: 0.3 }
              }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gray-900/90 backdrop-blur-sm">
                <h3 className="font-medium text-white text-sm sm:text-base">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

