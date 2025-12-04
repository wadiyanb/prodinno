'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <nav className="flex items-center h-16">
          <Link href="/" className="flex items-center shrink-0">
            {/* Responsive logo sizing */}
            <div className="w-20 h-16 md:w-32 md:h-20 relative">
              <Image
                src="/Prodinno_white_logo.png"
                alt="ProdInno Logo"
                fill
                style={{
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-8">
            <a href="#home" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base">
              Home
            </a>
            <a href="#our-team" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base">
              Our Team
            </a>
            <a href="#faq" className="text-white hover:text-[#FFD700] transition-colors text-sm lg:text-base">
              FAQ
            </a>
          </div>

          <div className="ml-auto flex items-center md:hidden">
            <button
              className="text-white p-2 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-[#FFD700]" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full px-6 space-y-6">
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} className="text-[#FFD700]" />
            </button>
            
            <a
              href="#home"
              className="text-white hover:text-[#FFD700] transition-colors text-xl font-medium py-3"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#our-team"
              className="text-white hover:text-[#FFD700] transition-colors text-xl font-medium py-3"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </a>
            <a
              href="#faq"
              className="text-white hover:text-[#FFD700] transition-colors text-xl font-medium py-3"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            {/* Contact removed */}
            <Link
              href="/registration"
              className="text-white hover:text-[#FFD700] transition-colors text-xl font-medium py-3"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
            
            {/* Social links in mobile menu */}
            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/tech-savvy-guy" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/soham._.datta" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/tech-savvy-guy" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}