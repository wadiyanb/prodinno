'use client';

import { useRef, useEffect } from 'react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEnded = () => {
      if (onFinish) onFinish();
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
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
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