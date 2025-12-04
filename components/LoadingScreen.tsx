'use client';

import { useRef, useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleEnded = () => {
      // Start fade out animation
      setIsFadingOut(true);
      
      // Wait for fade out animation to complete before calling onFinish
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // 500ms fade out duration
    };
    
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleEnded);
    }
    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="loading.mp4"
        className="w-96 h-96"
        autoPlay
        playsInline
        muted
        draggable={false}
      />
    </div>
  );
}