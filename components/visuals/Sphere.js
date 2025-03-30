// components/visuals/Sphere.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} />
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#00FFFF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Canvas>
  );
};

export default AnimatedSphere;
