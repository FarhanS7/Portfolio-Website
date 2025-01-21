import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

// === 🌍 Earth Component ===
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

// === 🚀 Tech Logos Orbiting ===
const TechLogos = () => {
  const groupRef = useRef();
  const logos = [
    { id: 1, name: "React", src: "react-logo.png" },
    { id: 2, name: "Node.js", src: "nodejs-logo.png" },
    { id: 3, name: "MongoDB", src: "mongodb-logo.png" },
    { id: 4, name: "Express", src: "express-logo.png" },
    { id: 5, name: "JavaScript", src: "js-logo.png" },
  ];

  // Animate orbit rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed
    }
  });

  return (
    <group ref={groupRef}>
      {logos.map((logo, index) => {
        const angle = (index / logos.length) * Math.PI * 2; // Evenly distribute logos
        const radius = 4; // Distance from the Earth
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <Html
            key={logo.id}
            position={[x, 1.5, z]} // Position around the Earth
            transform
            occlude
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                background: `url('/logos/${logo.src}') no-repeat center`,
                backgroundSize: "contain",
                filter: "drop-shadow(0 0 10px cyan)",
              }}
            />
          </Html>
        );
      })}
    </group>
  );
};

// === 🌌 Floating Particles (Optional) ===
const FloatingParticles = () => {
  const points = Array.from({ length: 200 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
  }));

  return (
    <group>
      {points.map((point, index) => (
        <mesh key={index} position={point.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial emissive="cyan" emissiveIntensity={1.5} />
        </mesh>
      ))}
    </group>
  );
};

// === 📸 Canvas Component ===
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
        <TechLogos />
        <FloatingParticles />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
