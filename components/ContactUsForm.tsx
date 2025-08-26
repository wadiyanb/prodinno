"use client";
import React, { useState } from 'react';

export default function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const response = await fetch("/_forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-[#FFD700]/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl animate-fade-in-up">
      <form name="contact" data-netlify="true" onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Name Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="name">
            Name *
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="email">
            Email *
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="message">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={6}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[100px] md:min-h-[120px]"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FFD700]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-black"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending Message...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 md:p-4 bg-green-900/50 border border-green-500/50 rounded-xl text-green-300 text-center animate-fade-in-up">
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm mt-1">We&apos;ll get back to you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-3 md:p-4 bg-red-900/50 border border-red-500/50 rounded-xl text-red-300 text-center animate-fade-in-up">
            <p className="font-semibold">Failed to send message.</p>
            <p className="text-sm mt-1">Please try again or contact us directly.</p>
          </div>
        )}
      </form>
    </div>
  );
}