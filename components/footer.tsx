import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between py-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ProdInno | Made with ❤️ by <Link href="https://www.sohamdatta.com" className="text-gray-400 hover:text-white transition-colors">Soham Datta</Link>
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/tech-savvy-guy" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </Link>
            <Link href="https://www.instagram.com/soham._.datta" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/tech-savvy-guy" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden py-12 space-y-8">
          <Link href="/" className="flex justify-center">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#FFD700"/>
              <path d="M8 8L24 24M8 24L24 8" stroke="black" strokeWidth="2"/>
            </svg>
          </Link>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/license" className="text-gray-400 hover:text-white transition-colors">
              License
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-[200px] mx-auto">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center">
              <FaGithub size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors flex justify-center">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

