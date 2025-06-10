"use client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ball from "./Ball";
import Walls from "./Walls";

export default function SkillBalls() {
  const skills = [
    { icon: "/images/react.svg", isDark: true, position: [-6, 8, 0] },
    { icon: "/images/javascript.svg", isDark: false, position: [-3, 8, 0] },
    { icon: "/images/typescript.svg", isDark: true, position: [0, 8, 0] },
    { icon: "/images/tailwind.svg", isDark: false, position: [3, 8, 0] },
    { icon: "/images/next.svg", isDark: true, position: [6, 8, 0] },
    { icon: "/images/html.svg", isDark: false, position: [-4, 10, 0] },
    { icon: "/images/css.svg", isDark: true, position: [-1, 10, 0] },
    // { icon: "/images/mongodb.svg", isDark: false, position: [2, 10, 0] },
    // { icon: "/images/git.svg", isDark: true, position: [5, 10, 0] },
    // { icon: "/images/figma.svg", isDark: false, position: [0, 12, 0] },
  ];

  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <Physics gravity={[0, -9.8, 0]}>
          <Walls />
          {skills.map((skill, index) => (
            <Ball
              key={index}
              position={skill.position}
              icon={skill.icon}
              isDark={skill.isDark}
            />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
}
