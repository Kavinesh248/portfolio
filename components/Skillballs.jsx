// components/SkillsBalls.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

function Ball({ position, texture }) {
  const [ref] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.5],
  }));

  const textureMap = new THREE.TextureLoader().load(texture);

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}

export default function SkillsBalls() {
  const logos = [
    "/icons/react.png",
    "/icons/python.png",
    "/icons/next.png",
    "/icons/js.png",
    "/icons/html.png",
    "/icons/css.png",
  ];

  return (
    <div className="w-full h-[500px]">
      <Canvas shadows camera={{ position: [0, 3, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Environment preset="sunset" />

        <Physics>
          <Ground />
          {logos.map((src, index) => (
            <Ball
              key={index}
              position={[
                Math.random() * 2 - 1,
                3 + index,
                Math.random() * 2 - 1,
              ]}
              texture={src}
            />
          ))}
        </Physics>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
