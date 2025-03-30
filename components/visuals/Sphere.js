import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

function SphereWithGuest() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      {/* Base esfera */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#4f46e5" metalness={0.3} roughness={0.1} />

      {/* Muñeco encima de la esfera */}
      {/* Cuerpo */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Cabeza */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#fef3c7" />
      </mesh>
    </mesh>
  );
}

export default function Sphere() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SphereWithGuest />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
