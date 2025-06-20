"use client";

import { Canvas } from "@react-three/fiber";

export default function IndexCube() {
  return (
    <div>
      <Canvas>
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  return (
    <mesh>
      <boxGeometry />
    </mesh>
  );
}
