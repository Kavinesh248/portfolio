"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

import { Room } from "../HeroModels/Room";
import HeroLights from "../HeroModels/HeroLights";

export default function Room3d() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full h-full -z-1 min-h-[40vh] absolute top-74 pb-10 left-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{ powerPreference: "high-performance" }}
      >
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={!isMobile}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />
        <Preload all />

        <Suspense fallback={null}>
          <group
            scale={isMobile ? 0.8 : 1}
            position={[0, 0.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

// function Cube() {
//   const meshRef = useRef(null);

//   useFrame((state, delta) => {
//     meshRef.current.rotation.x += delta * 0.25;
//     meshRef.current.rotation.y += delta * 0.25;
//     meshRef.current.rotation.z += delta * 0.25;
//   });

//   const texture1 = useLoader(TextureLoader, "/images/React.png");
//   const texture2 = useLoader(TextureLoader, "/images/Three.js.png");
//   const texture3 = useLoader(TextureLoader, "/images/Next.js.png");
//   const texture4 = useLoader(TextureLoader, "/images/TypeScript.png");
//   const texture5 = useLoader(TextureLoader, "/images/Tailwind.png");
//   const texture6 = useLoader(TextureLoader, "/images/Javascript.png");

//   const materials = [
//     new THREE.MeshStandardMaterial({ map: texture1, color: "white" }),
//     new THREE.MeshStandardMaterial({ map: texture2, color: "white" }),
//     new THREE.MeshStandardMaterial({ map: texture3, color: "white" }),
//     new THREE.MeshStandardMaterial({ map: texture4, color: "white" }),
//     new THREE.MeshStandardMaterial({ map: texture5, color: "white" }),
//     new THREE.MeshStandardMaterial({ map: texture6, color: "white" }),
//   ];

//   return (
//     <mesh ref={meshRef} material={materials}>
//       <boxGeometry args={[3, 3, 3]} />
//     </mesh>
//   );
// }
