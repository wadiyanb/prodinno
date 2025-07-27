'use client';
import Header from '@/components/header'
import Hero from '@/components/hero'
import FAQ from '@/components/faq'
import CursorEffect from '@/components/cursor-effect'
import Particles from '@/components/particles';
import LoadingScreen from '@/components/LoadingScreen';
import { useState } from 'react';
import OurTeam from '@/components/our-team';
import ContactUsForm from '@/components/ContactUsForm';
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Particles as background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <Particles
          particleColors={['#ffcc00', '#ffffff']}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Foreground content */}
      <CursorEffect />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <OurTeam />
        <FAQ />
      </main>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg md:text-xl animate-fade-in-up">
              Ready to innovate? Let&apos;s discuss your next project.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactUsForm />
          </div>
        </div>
      </section>
      
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} />
      )}
    </div>
  )
}

