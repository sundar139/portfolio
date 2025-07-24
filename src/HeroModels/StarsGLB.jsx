import { useRef, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Particles = ({ count = 500 }) => {
  const mesh = useRef();

  // Load the round texture
  const texture = useLoader(TextureLoader, "/images/white_circle.png");

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.15}
        transparent
        alphaTest={0.5}
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default Particles;
