import React from 'react';

export default function ContactUsForm() {
  return (
    <section id="contact" className="flex justify-center py-16 px-4 bg-black">
      <div className="w-full max-w-2xl flex rounded-2xl shadow-2xl overflow-hidden bg-[#181818] border border-[#FFD700]">
        {/* Yellow accent bar */}
        <div className="hidden md:block w-3 bg-[#FFD700]" />
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          className="flex-1 p-8 md:p-12 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-extrabold text-[#FFD700] mb-2 text-left tracking-tight">Contact Us</h1>
          <p className="text-gray-300 mb-8 text-lg">We would love to hear from you! Fill out the form and our team will get back to you soon.</p>
          <div className="mb-6">
            <label className="block text-[#FFD700] font-semibold mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full px-4 py-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#FFD700] font-semibold mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="w-full px-4 py-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-500"
              placeholder="you@email.com"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#FFD700] font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-500 resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#FFD700] text-black font-bold text-lg py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 