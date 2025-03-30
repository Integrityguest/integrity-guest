import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#4FD1C5"
            attach="material"
            distort={0.3}
            speed={1.5}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}
