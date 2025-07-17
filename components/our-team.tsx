'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const departments = [
  { id: 'board', name: 'Board' },
  { id: 'product', name: 'Product Development and Manufacturing' },
  { id: 'technical', name: 'Technical' },
  { id: 'design', name: 'Design & Content' },
  { id: 'operations', name: 'Operations & Logistics' },
  { id: 'social', name: 'Social Media and Outreach' }
]

const teamMembers = [
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
    role: 'Product Manufacturing Head',
    image: '/placeholder.svg',
    department: 'product'
  },
  {
    name: 'Srinnath Krishnan',
    role: 'Product Manufacturing Head',
    image: '/placeholder.svg',
    department: 'product'
  },
  // Operations and Logistics (Leads)
  {
    name: 'Advait Pande',
    role: 'Operations & Logistics Head',
    image: '/placeholder.svg',
    department: 'operations'
  },
  {
    name: 'Suryansh Rai',
    role: 'Operations & Logistics Head',
    image: '/placeholder.svg',
    department: 'operations'
  },
  // Design & Content (Leads)
  {
    name: 'Adithi Sharathkumar',
    role: 'Design & Content Head',
    image: '/placeholder.svg',
    department: 'design'
  },
  {
    name: 'Jiya Sharma',
    role: 'Design & Content Head',
    image: '/placeholder.svg',
    department: 'design'
  },
  // Social Media and Outreach (Leads)
  {
    name: 'Saksham Rao',
    role: 'Social Media & Outreach Head',
    image: '/placeholder.svg',
    department: 'social'
  },
  {
    name: 'Siya Srivastava',
    role: 'Social Media & Outreach Head',
    image: '/placeholder.svg',
    department: 'social'
  },
];

export default function OurTeam() {
  const [activeDepartment, setActiveDepartment] = useState('board')

 

  // Group members by department
  const grouped = departments
    .map(dept => {
      const members = teamMembers.filter(m => m.department === dept.id)
      return { id: dept.id, dept: dept.name, members }
    })

  return (
    <section id="our-team" className="py-24 ">
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

        <div className="space-y-12">
          {grouped
            .filter(g => activeDepartment === g.id)
            .map(({ dept, members, id }) => (
              <div key={dept} id={id} className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white mb-4 font-serif">{dept}</h2>
                <div className="flex flex-col gap-2 w-full max-w-xl items-center">
                  {dept === 'Board' ? (
                    members.map((member, idx) => (
                      <div key={member.name + idx} className="font-bold text-lg text-[#FFD700] font-serif text-center w-full">
                        {member.name} <span className="text-white font-normal">- {member.role}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      {/* Highlight leads */}
                      {members.slice(0, 2).map((member, idx) => (
                        <div key={member.name + idx} className="font-bold text-lg text-[#FFD700] font-serif text-center w-full">
                          {member.name} <span className="text-white font-normal">- {member.role}</span>
                        </div>
                      ))}
                      {/* List other members */}
                      {members.slice(2).map((member, idx) => (
                        <div key={member.name + idx} className="text-white text-base font-serif text-center w-full">
                          {member.name} <span className="text-gray-400">- {member.role}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

