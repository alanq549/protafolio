import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, MeshDistortMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Mesh, Group, Vector3 } from "three";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Rotaciones
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.35;

    // Efecto de escala suave
    const targetScale = hovered ? 1.3 : 1;
    const currentScale = meshRef.current.scale;
    const lerpVec = new Vector3(targetScale, targetScale, targetScale);
    currentScale.lerp(lerpVec, 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Torus Knot */}
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />

      <MeshDistortMaterial
        color={hovered ? "#00F0FF" : "#2b2b2b"}
        emissive={hovered ? "#00F0FF" : "#7B2CBF"}
        emissiveIntensity={hovered ? 0.8 : 0.5}
        wireframe={true}
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef<Group>(null!);

  const particles = useMemo(
    () => random.inSphere(new Float32Array(2000 * 3), { radius: 6 }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ antialias: true }}
      >
        <directionalLight position={[2, 5, 2]} intensity={1} color="#00F0FF" />
        <ambientLight intensity={0.2} />

        <FloatingShape />
        <ParticleField />
      </Canvas>
    </div>
  );
}
