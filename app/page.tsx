'use client';
import Header from '@/components/header'
import Hero from '@/components/hero'
import FAQ from '@/components/faq'
import CursorEffect from '@/components/cursor-effect'
import Particles from '@/components/particles';
import LoadingScreen from '@/components/LoadingScreen';
import { useState } from 'react';
import OurTeam from '@/components/our-team';
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingFinish = () => {
    setLoading(false);
    // Add a small delay before showing content to ensure smooth transition
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Particles as background */}
      <div
        className={`transition-opacity duration-700 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
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
      
      {/* Foreground content with fade-in animation */}
      <div
        className={`transition-opacity duration-700 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'transparent', position: 'relative', zIndex: 1 }}
      >
        <CursorEffect />
        <Header />
        <main>
          <Hero />
          <OurTeam />
          <FAQ />
        </main>
        {/* ...existing code... */}
      </div>
      
      {loading && (
        <LoadingScreen onFinish={handleLoadingFinish} />
      )}
    </div>
  )
}

