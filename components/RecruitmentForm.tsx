"use client";
import React, { useState } from 'react';

export default function RecruitmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSecondPreference, setSelectedSecondPreference] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const formObject = {
        name: formData.get('name') as string,
        vitMailId: formData.get('vitMailId') as string,
        registrationNumber: formData.get('registrationNumber') as string,
        mobileNumber: formData.get('mobileNumber') as string,
        whyJoin: formData.get('whyJoin') as string,
        department: formData.get('department') as string,
        whyDepartment: formData.get('whyDepartment') as string,
        secondPreference: formData.get('secondPreference') as string,
        otherClubs: formData.get('otherClubs') as string,
        otherInfo: formData.get('otherInfo') as string,
        // Technical department specific fields
        arduinoExperience: formData.get('arduinoExperience') as string,
        aiExperience: formData.get('aiExperience') as string,
        // Design department specific fields
        portfolioLink: formData.get('portfolioLink') as string,
        designExperience: formData.get('designExperience') as string,
      };

      const response = await fetch("/api/recruitment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
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
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-2">
          ProdInno Recruitment Form
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Are you passionate about product development and eager to turn your ideas into profits? 
          Look no further! ProdInno is the perfect platform for like-minded individuals like you to 
          explore the exciting world of entrepreneurship and start-up management.
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
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

        {/* VIT Mail ID Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="vitMailId">
            VIT Mail Id *
          </label>
          <input 
            type="email" 
            name="vitMailId" 
            id="vitMailId" 
            required 
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
            placeholder="your.name@vitstudent.ac.in"
          />
        </div>

        {/* Registration Number Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="registrationNumber">
            Registration Number *
          </label>
          <input 
            type="text" 
            name="registrationNumber" 
            id="registrationNumber" 
            required 
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
            placeholder="Enter your VIT registration number"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="mobileNumber">
            Mobile Number *
          </label>
          <input 
            type="tel" 
            name="mobileNumber" 
            id="mobileNumber" 
            required 
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Why Join ProdInno Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="whyJoin">
            Why do you want to join Prodinno Club? *
          </label>
          <textarea
            name="whyJoin"
            id="whyJoin"
            required
            rows={4}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[100px]"
            placeholder="Tell us why you want to join ProdInno Club..."
          />
        </div>

        {/* Department Selection Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="department">
            Department you want to join? (1st Preference) *
          </label>
          <select
            name="department"
            id="department"
            required
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 hover:border-[#FFD700]/50"
          >
            <option value="" className="bg-black text-white">Select a department</option>
            <option value="Technical" className="bg-black text-white">Technical</option>
            <option value="Social Media & Outreach" className="bg-black text-white">Social Media & Outreach</option>
            <option value="Operations & Logistics" className="bg-black text-white">Operations & Logistics</option>
            <option value="Design" className="bg-black text-white">Design</option>
            <option value="Product Design & Manufacturing" className="bg-black text-white">Product Design & Manufacturing</option>
            <option value="Content" className="bg-black text-white">Content</option>
          </select>
        </div>

        {/* Why This Department Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="whyDepartment">
            Why do you want to join the above mentioned department? *
          </label>
          <textarea
            name="whyDepartment"
            id="whyDepartment"
            required
            rows={4}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[100px]"
            placeholder="Explain why you're interested in this specific department..."
          />
        </div>

        {/* Second Department Preference */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="secondPreference">
            Department you want to join? (2nd Preference) *
          </label>
          <p className="text-gray-400 text-xs mb-2">
            NOTE: You will be interviewed based on your first department preference. If not selected, your second preference will be considered.
          </p>
          <select
            name="secondPreference"
            id="secondPreference"
            required
            value={selectedSecondPreference}
            onChange={(e) => setSelectedSecondPreference(e.target.value)}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all duration-300 hover:border-[#FFD700]/50"
          >
            <option value="" className="bg-black text-white">Select a department</option>
            <option value="Technical" className="bg-black text-white">Technical</option>
            <option value="Social Media & Outreach" className="bg-black text-white">Social Media & Outreach</option>
            <option value="Operations & Logistics" className="bg-black text-white">Operations & Logistics</option>
            <option value="Design" className="bg-black text-white">Design</option>
            <option value="Product Design & Manufacturing" className="bg-black text-white">Product Design & Manufacturing</option>
            <option value="Content" className="bg-black text-white">Content</option>
          </select>
        </div>

        {/* Other Clubs Field */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="otherClubs">
            Are you in any other clubs? If yes, mention below. *
          </label>
          <textarea
            name="otherClubs"
            id="otherClubs"
            required
            rows={3}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
            placeholder="List any other clubs or organizations you're part of..."
          />
        </div>

        {/* Other Relevant Information */}
        <div className="space-y-2">
          <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="otherInfo">
            Any other relevant information about yourself.
          </label>
          <textarea
            name="otherInfo"
            id="otherInfo"
            rows={3}
            className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
            placeholder="Share any additional information about yourself..."
          />
        </div>

        {/* Technical Department Specific Questions */}
        {(selectedDepartment === 'Technical') && (
          <div className="space-y-4 p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl">
            <h3 className="text-[#FFD700] font-semibold text-lg">Technical Department Questions</h3>
            
            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="arduinoExperience">
                Are you familiar with Arduino, Raspberry Pi, ESP8266 or any other component? *
              </label>
              <textarea
                name="arduinoExperience"
                id="arduinoExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your experience with hardware components..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="aiExperience">
                Are you familiar with Artificial Intelligence (AI), Machine Learning (ML), or any other related technologies? *
              </label>
              <textarea
                name="aiExperience"
                id="aiExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your experience with AI/ML technologies..."
              />
            </div>
          </div>
        )}
        {(selectedSecondPreference === 'Technical') && (
          <div className="space-y-4 p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl">
            <h3 className="text-[#FFD700] font-semibold text-lg">Technical Department Questions</h3>
            
            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="arduinoExperience">
                Are you familiar with Arduino, Raspberry Pi, ESP8266 or any other component? *
              </label>
              <textarea
                name="arduinoExperience"
                id="arduinoExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your experience with hardware components..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="aiExperience">
                Are you familiar with Artificial Intelligence (AI), Machine Learning (ML), or any other related technologies? *
              </label>
              <textarea
                name="aiExperience"
                id="aiExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your experience with AI/ML technologies..."
              />
            </div>
          </div>
        )}

        {/* Design Department Specific Questions */}
        {(selectedDepartment === 'Design') && (
          <div className="space-y-4 p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl">
            <h3 className="text-[#FFD700] font-semibold text-lg">Design Department Questions</h3>
            
            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="portfolioLink">
                Upload your previous work (upload the work in Google Drive and share the link) *
              </label>
              <input
                type="url"
                name="portfolioLink"
                id="portfolioLink"
                required
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
                placeholder="https://drive.google.com/..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="designExperience">
                Any prior experience in this department? *
              </label>
              <textarea
                name="designExperience"
                id="designExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your design experience and skills..."
              />
            </div>
          </div>
        )}
        {(selectedSecondPreference === 'Design') && (
          <div className="space-y-4 p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl">
            <h3 className="text-[#FFD700] font-semibold text-lg">Design Department Questions</h3>
            
            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="portfolioLink">
                Upload your previous work (upload the work in Google Drive and share the link) *
              </label>
              <input
                type="url"
                name="portfolioLink"
                id="portfolioLink"
                required
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50"
                placeholder="https://drive.google.com/..."
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#FFD700] font-semibold text-sm uppercase tracking-wide" htmlFor="designExperience">
                Any prior experience in this department? *
              </label>
              <textarea
                name="designExperience"
                id="designExperience"
                required
                rows={3}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-black/70 text-white border border-[#FFD700]/30 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-[#FFD700]/50 resize-vertical min-h-[80px]"
                placeholder="Describe your design experience and skills..."
              />
            </div>
          </div>
        )}
        

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
                Submitting Application...
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 md:p-4 bg-green-900/50 border border-green-500/50 rounded-xl text-green-300 text-center animate-fade-in-up">
            <p className="font-semibold">Application submitted successfully!</p>
            <p className="text-sm mt-1">Thank you for your interest in joining ProdInno. We&apos;ll review your application and get back to you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-3 md:p-4 bg-red-900/50 border border-red-500/50 rounded-xl text-red-300 text-center animate-fade-in-up">
            <p className="font-semibold">Failed to submit application.</p>
            <p className="text-sm mt-1">Please try again or contact us directly.</p>
          </div>
        )}
      </form>
    </div>
  );
}