"use client";

import { useSphere } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

export default function Ball({ position, icon }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [1.2], // Bigger size
    material: { restitution: 0.8, friction: 0.3 },
  }));

  const handleClick = (event) => {
    event.stopPropagation();

    // Add upward impulse for bounce
    api.applyImpulse(
      [
        (Math.random() - 0.5) * 5, // Random horizontal force
        15, // Strong upward force
        (Math.random() - 0.5) * 5, // Random horizontal force
      ],
      [0, 0, 0]
    );

    // Add some random rotation
    api.applyImpulse([
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ]);
  };

  return (
    <group ref={ref} onClick={handleClick} style={{ cursor: "pointer" }}>
      {/* Dark sphere background */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.1} />
      </mesh>

      {/* White icon overlay */}
      <mesh position={[0, 0, 1.15]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(icon)}
          transparent={true}
          color="#ffffff"
          roughness={0}
          metalness={0}
        />
      </mesh>

      {/* Icon on the back */}
      <mesh position={[0, 0, -1.15]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(icon)}
          transparent={true}
          color="#ffffff"
          roughness={0}
          metalness={0}
        />
      </mesh>

      {/* Icon on the sides */}
      <mesh position={[1.15, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(icon)}
          transparent={true}
          color="#ffffff"
          roughness={0}
          metalness={0}
        />
      </mesh>

      <mesh position={[-1.15, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(icon)}
          transparent={true}
          color="#ffffff"
          roughness={0}
          metalness={0}
        />
      </mesh>
    </group>
  );
}
