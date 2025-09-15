"use client";
import Particles from '@/components/particles';
import CursorEffect from '@/components/cursor-effect';
import RecruitmentForm from '@/components/RecruitmentForm';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-black" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Particles as background */}
      <div
        className={`transition-opacity duration-700 opacity-100`}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
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
      <div className={`transition-opacity duration-700 opacity-100`}>
        <CursorEffect />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <section className="py-16 md:py-20 px-4 relative z-10">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 animate-fade-in-up">
                  Join Our Team
                </h2>
                <p className="text-gray-300 text-base md:text-lg lg:text-xl animate-fade-in-up">
                  Ready to be part of something innovative? Apply to join ProdInno today!
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <RecruitmentForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
