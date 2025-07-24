'use client';

import { useGLTF, Center} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

function StaticLogo() {
  const { scene } = useGLTF('/3d model(1).glb');
  const groupRef = useRef<THREE.Group>(null);

  // Remove mouse and animation logic

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
            <directionalLight position={[0, 4, 1]} intensity={1} />
            <directionalLight position={[0, 4, -1]} intensity={1} />
            <StaticLogo />
          </Canvas>
        </div>
      )
    
  );
}