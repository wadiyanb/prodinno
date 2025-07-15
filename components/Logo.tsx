'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function StaticLogo() {
  const { scene } = useGLTF('/3d model(1).glb');
  const groupRef = useRef<THREE.Group>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isOver, setIsOver] = useState(false);

  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsOver(true);
    const handleMouseLeave = () => setIsOver(false);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gl]);

  useFrame(() => {
    if (!groupRef.current) return;
    if (isOver) {
      groupRef.current.rotation.y += (mousePos.y * Math.PI / 8 - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.x += (mousePos.x * Math.PI / 8 - groupRef.current.rotation.x) * 0.1;
    } else {
      groupRef.current.rotation.y += (0 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={30} />
      </Center>
    </group>
  );
}

// --- Main Exported Component ---
export default function LogoHeader() {
  const [loading, setLoading] = useState(true);

  return (
    (
        <div
          className="w-full h-[800px]"
          style={{
            background: 'transparent',
            transition: 'opacity 0.6s',
          }}
        >
          <Canvas camera={{ position: [0, 5, 0], fov: 60, rotation: [Math.PI / 2, Math.PI, Math.PI / 2] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 4, 2]} intensity={1} />
            <directionalLight position={[0, 4, -2]} intensity={1} />
            <StaticLogo />
          </Canvas>
        </div>
      )
    
  );
}