import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import Particles from "./StarsGLB";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/stylized_planet.glb");

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
    }
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={4.5}
      position={[0, -1.35, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const HeroExperience = () => {
  return (
    <Canvas className="w-full h-[600px]" camera={{ position: [10, 5, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} />
      <Model />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.4}
      />
      <Particles count = {100}/>
    </Canvas>
  );
};

export default HeroExperience;
