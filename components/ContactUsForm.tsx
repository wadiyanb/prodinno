"use client";
import React from 'react';

export default function ContactUsForm() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await fetch("/_forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])).toString(),    });
    // Success and error handling ...
  };

  return (
    <form name="contact" data-netlify="true" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact" />
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
          className="w-full px-4 py-3 rounded-lg bg-black text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-gray-500"
          placeholder="Your Message"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}