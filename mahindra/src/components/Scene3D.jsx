import { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';
import MallBuilding from './MallBuilding';
import { floorCameraPositions } from '../data/floors';

function CameraRig({ activeFloor, controlsRef, autoOrbit, onReset }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 5, 14));
  const targetLook = useRef(new THREE.Vector3(0, 2, 0));
  const orbitAngle = useRef(0);

  useEffect(() => {
    const cam = activeFloor
      ? floorCameraPositions[activeFloor]
      : floorCameraPositions.default;

    if (cam) {
      targetPos.current.set(...cam.position);
      targetLook.current.set(...cam.target);
    }
  }, [activeFloor]);

  useFrame((state) => {
    if (autoOrbit && !activeFloor) {
      orbitAngle.current += 0.003;
      const radius = 14;
      targetPos.current.set(
        Math.sin(orbitAngle.current) * radius,
        5,
        Math.cos(orbitAngle.current) * radius
      );
      targetLook.current.set(0, 2, 0);
    }

    camera.position.lerp(targetPos.current, 0.04);
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLook.current, 0.04);
      controlsRef.current.update();
    }
  });

  return null;
}

function SceneContent({ activeFloor, controlsRef, autoOrbit }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <color attach="background" args={['#0a0b10']} />
      <fog attach="fog" args={['#0a0b10', 18, 45]} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}
      />
      <pointLight position={[-6, 4, 4]} intensity={0.35} color="#ef6448" />
      <pointLight position={[6, 3, -4]} intensity={0.2} color="#6699ff" />

      <MallBuilding activeFloor={activeFloor} simplified={isMobile} />

      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.4}
        scale={20}
        blur={2.5}
        far={12}
      />

      <Environment preset="city" />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minDistance={6}
        maxDistance={22}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        enableDamping
        dampingFactor={0.05}
      />

      <CameraRig
        activeFloor={activeFloor}
        controlsRef={controlsRef}
        autoOrbit={autoOrbit}
      />
    </>
  );
}

export default function Scene3D({ activeFloor, onLoaded }) {
  const controlsRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      onLoaded?.();
    }, 800);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="scene-3d-root">
      {!loaded && (
        <div className="scene-loader scene-loader-overlay">
          <div className="scene-loader-bar" />
        </div>
      )}
      <Canvas
        shadows={!isMobile}
        camera={{ position: [0, 5, 14], fov: 45 }}
        gl={{ antialias: !isMobile, alpha: false }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
      >
        <SceneContent
          activeFloor={activeFloor}
          controlsRef={controlsRef}
          autoOrbit={!prefersReducedMotion}
        />
      </Canvas>
    </div>
  );
}
