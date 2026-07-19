"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useTheme } from "next-themes";

function useThemeColors() {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState({
    primary: "#10b981",
    secondary: "#0f766e",
    accent: "#3b82f6"
  });

  useEffect(() => {
    // Read computed colors from DOM to sync with Tailwind/CSS variables
    const elPrimary = document.createElement("div");
    elPrimary.className = "text-primary absolute opacity-0 pointer-events-none";
    document.body.appendChild(elPrimary);
    
    const elSecondary = document.createElement("div");
    // We'll use border color as secondary to get a nice subtle tone
    elSecondary.className = "text-border absolute opacity-0 pointer-events-none"; 
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

function AbstractShapes() {
  const colors = useThemeColors();

  const materialProps = {
    roughness: 0.1,
    transmission: 0.95,
    thickness: 1.5,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    color: colors.primary,
  };

  const secondaryMaterialProps = {
    ...materialProps,
    color: colors.secondary,
  };

  return (
    <>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.2} position={[-1.4, 0.8, -0.5]}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[0.35, 0.12, 100, 16]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8} position={[1.5, -0.5, 0.2]}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[0.45, 0]} />
          <meshPhysicalMaterial {...secondaryMaterialProps} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.2} floatIntensity={2.5} position={[1.1, 1.4, -1]}>
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[0.25, 0]} />
          <meshPhysicalMaterial color={colors.accent} roughness={0.2} transmission={0.9} thickness={1} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[-1.3, -1.2, 0.5]}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.25, 0.1, 16, 32]} />
          <meshPhysicalMaterial color={colors.primary} roughness={0.15} transmission={0.8} thickness={0.5} />
        </mesh>
      </Float>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute -inset-32 md:-inset-48 z-0 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          
          <PresentationControls
            global
            snap={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <AbstractShapes />
          </PresentationControls>
          
          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.3}
            scale={15}
            blur={2.5}
            far={4}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
