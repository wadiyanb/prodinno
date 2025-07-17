'use client';
import Header from '@/components/header'
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
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
        <Testimonials />
        <FAQ />
      </main>
      <ContactUsForm />
      
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} />
      )}
           <form name="contact" data-netlify="true" hidden>
       <input type="text" name="name" />
       <input type="email" name="email" />
       <textarea name="message"></textarea>
     </form>
    </div>
  )
}

