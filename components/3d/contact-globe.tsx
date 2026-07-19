"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function useThemeColors() {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState({
    primary: "#14b8a6",
    secondary: "#022c22",
    accent: "#10b981"
  });

  useEffect(() => {
    const elPrimary = document.createElement("div");
    elPrimary.className = "text-primary absolute opacity-0 pointer-events-none";
    document.body.appendChild(elPrimary);
    
    const elSecondary = document.createElement("div");
    // We use the background color of the body or a muted color for the core
    elSecondary.className = "text-muted absolute opacity-0 pointer-events-none"; 
    document.body.appendChild(elSecondary);

    const primaryColorCss = getComputedStyle(elPrimary).color;
    const secondaryColorCss = getComputedStyle(elSecondary).color;

    // Convert CSS colors to standard RGB for Three.js (handles oklch, etc)
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    
    let primaryRgb = primaryColorCss;
    let secondaryRgb = secondaryColorCss;
    
    if (ctx) {
      ctx.fillStyle = primaryColorCss;
      ctx.fillRect(0, 0, 1, 1);
      const pData = ctx.getImageData(0, 0, 1, 1).data;
      primaryRgb = `rgb(${pData[0]}, ${pData[1]}, ${pData[2]})`;
      
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = secondaryColorCss;
      ctx.fillRect(0, 0, 1, 1);
      const sData = ctx.getImageData(0, 0, 1, 1).data;
      secondaryRgb = `rgb(${sData[0]}, ${sData[1]}, ${sData[2]})`;
    }

    document.body.removeChild(elPrimary);
    document.body.removeChild(elSecondary);

    setColors({
      primary: primaryRgb,
      secondary: secondaryRgb,
      accent: primaryRgb
    });
  }, [resolvedTheme]);

  return colors;
}

function Globe() {
  const colors = useThemeColors();
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
  });

  // Calculate position for Sri Lanka (approx lat 7.8, lon 80.7)
  const lat = 7.8;
  const lon = 80.7;
  const radius = 2;
  
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[radius, 48, 48]} />
        <meshStandardMaterial 
          color={colors.primary} 
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 32, 32]} />
        <meshBasicMaterial color={colors.secondary} transparent opacity={0.6} />
      </mesh>
      
      {/* Marker for Sri Lanka */}
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color={colors.primary} />
        
        {/* Glow halo around marker */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={colors.primary} transparent opacity={0.4} />
        </mesh>
      </mesh>
    </group>
  );
}

export function ContactGlobe() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <Globe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
