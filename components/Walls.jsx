import { usePlane } from "@react-three/cannon";

export default function Walls() {
  // Floor
  usePlane(() => ({
    position: [0, -2.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  // Ceiling
  usePlane(() => ({
    position: [0, 10, 0],
    rotation: [Math.PI / 2, 0, 0],
  }));

  // Left wall
  usePlane(() => ({
    position: [-5, 2.5, 0],
    rotation: [0, Math.PI / 2, 0],
  }));

  // Right wall
  usePlane(() => ({
    position: [5, 2.5, 0],
    rotation: [0, -Math.PI / 2, 0],
  }));

  // Back wall
  usePlane(() => ({
    position: [0, 2.5, -5],
    rotation: [0, 0, 0],
  }));

  // Front wall (if needed)
  usePlane(() => ({
    position: [0, 2.5, 5],
    rotation: [0, Math.PI, 0],
  }));

  return null;
}
