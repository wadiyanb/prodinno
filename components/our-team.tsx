'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const departments = [
  { id: 'faculty', name: 'Faculty Coordinators' },
  { id: 'board', name: 'Board' },
  { id: 'product', name: 'Product Development & Manufacturing' },
  { id: 'technical', name: 'Technical' },
  { id: 'design', name: 'Design & Content' },
  { id: 'operations', name: 'Operations & Logistics' },
  { id: 'social', name: 'Social Media & Outreach' },
  { id: 'finance', name: 'Finance' }
]

const teamMembers = [
  // Faculty Coordinators
  {
    name: 'Dr Velmathi G',
    role: 'Faculty Coordinator',
    image: '/placeholder.svg',
    department: 'faculty'
  },
  {
    name: 'Dr David Raj Micheal',
    role: 'Faculty Coordinator',
    image: '/placeholder.svg',
    department: 'faculty'
  },
  // Board members (Leads)
  {
    name: 'Ranvir Deshmukh',
    role: 'General Secretary',
    image: '/placeholder.svg',
    department: 'board'
  },
  {
    name: 'Piyush Arora',
    role: 'Joint Secretary',
    image: '/placeholder.svg',
    department: 'board'
  },
  {
    name: 'Arpita Kumar',
    role: 'Treasurer',
    image: '/placeholder.svg',
    department: 'board'
  },
  {
    name: 'Agrim Gusain',
    role: 'Board Member',
    image: '/placeholder.svg',
    department: 'board'
  },
  {
    name: 'Abhinav Vasudevan',
    role: 'Board Member',
    image: '/placeholder.svg',
    department: 'board'
  },
  // Technical Heads (Leads)
  {
    name: 'Sekkappan Vinaiteerthan',
    role: 'Technical Head',
    image: '/placeholder.svg',
    department: 'technical'
  },
  {
    name: 'Arzaan Wadia',
    role: 'Technical Head',
    image: '/placeholder.svg',
    department: 'technical'
  },
  // Product Manufacturing (Leads)
  {
    name: 'Mohammed Faheem',
    role: 'Product Head',
    image: '/placeholder.svg',
    department: 'product'
  },
  {
    name: 'Srinnath Krishnan',
    role: 'Product Head',
    image: '/placeholder.svg',
    department: 'product'
  },
  // Operations and Logistics (Leads)
  {
    name: 'Advait Pande',
    role: 'Operations Head',
    image: '/placeholder.svg',
    department: 'operations'
  },
  {
    name: 'Suryansh Rai',
    role: 'Operations Head',
    image: '/placeholder.svg',
    department: 'operations'
  },
  // Design & Content (Leads)
  {
    name: 'Adithi Sharathkumar',
    role: 'Design Head',
    image: '/placeholder.svg',
    department: 'design'
  },
  {
    name: 'Jiya Sharma',
    role: 'Design Head',
    image: '/placeholder.svg',
    department: 'design'
  },
  // Social Media and Outreach (Leads)
  {
    name: 'Saksham Rao',
    role: 'Social Media Head',
    image: '/placeholder.svg',
    department: 'social'
  },
  {
    name: 'Siya Srivastava',
    role: 'Social Media Head',
    image: '/placeholder.svg',
    department: 'social'
  },
  {
    name: 'Harshwardhan Rai Malik',
    role: 'Finance Head',
    image: '/placeholder.svg',
    department: 'finance'
  }
];

export default function OurTeam() {
  const [activeDepartment, setActiveDepartment] = useState('faculty')

  // Group members by department
  const grouped = departments
    .map(dept => {
      const members = teamMembers.filter(m => m.department === dept.id)
      return { id: dept.id, dept: dept.name, members }
    })

  return (
    <section id="our-team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white leading-tight">
            Meet the team that<br />makes the <span className="italic text-[#FFD700]">magic</span> happen
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Meet our diverse team of world-class creators, designers, and problem solvers.
          </p>
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-full max-w-4xl overflow-x-auto scrollbar-hide px-2">
            <div className="flex gap-1 md:gap-2 p-1 min-w-max">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={cn(
                    "px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm whitespace-nowrap transition-colors font-medium",
                    activeDepartment === dept.id
                      ? "bg-[#FFD700] text-black"
                      : "text-gray-400 bg-gray-800/50 hover:bg-gray-700/50"
                  )}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {grouped
            .filter(g => activeDepartment === g.id)
            .map(({ dept, members, id }) => (
              <div key={dept} id={id} className="flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-serif text-center">
                  {dept === 'faculty' ? 'Faculty Coordinators' :
                   dept === 'product' ? 'Product Development & Manufacturing' :
                   dept === 'design' ? 'Design & Content' :
                   dept === 'social' ? 'Social Media & Outreach' :
                   dept === 'operations' ? 'Operations & Logistics' : dept} 
                </h2>
                <div className="w-full max-w-2xl space-y-3 md:space-y-4">
                  {members.map((member, idx) => (
                    <div
                      key={member.name + idx}
                      className={cn(
                        "text-center px-4 py-3 rounded-lg",
                        idx < 2 ? "bg-[#FFD700]/10 border border-[#FFD700]/20" : "bg-gray-800/30"
                      )}
                    >
                      <div className={cn(
                        "font-medium",
                        idx < 2 ? "text-[#FFD700]" : "text-white"
                      )}>
                        {member.name}
                      </div>
                      <div className={cn(
                        "text-sm",
                        idx < 2 ? "text-gray-200" : "text-gray-400"
                      )}>
                        {member.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

