import React from 'react';

const technorFont = typeof window !== 'undefined' ? (document.body.style.getPropertyValue('--font-technor') || '') : '';

const ContactUsNetlify: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black/80">
      <div className="max-w-2xl mx-auto px-4 py-8 rounded-xl bg-black/60 shadow-2xl backdrop-blur-md">
        <header className="text-center mb-8 pb-6 border-b border-white/10">
          <h1 className={`text-3xl md:text-4xl font-bold text-[#FFD700] mb-2 drop-shadow font-sans ${technorFont}`}>Contact Us</h1>
          <p className="text-gray-300 text-base md:text-lg drop-shadow">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you soon.</p>
        </header>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          {/* Netlify bot field */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-300 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-300 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="you@email.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-300 font-semibold">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] resize-y"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-md bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold text-lg shadow transition-colors border border-white/10"
          >
            Send Message
          </button>
        </form>
        {/* Netlify form success message placeholder */}
        <div className="hidden" data-netlify-success>
          <p className="text-green-400 text-center mt-6">Thank you for contacting us! We&apos;ll be in touch soon.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsNetlify; 