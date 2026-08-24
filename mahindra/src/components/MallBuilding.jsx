import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const BRAND = '#ef6448';
const GLASS = '#c5d4e0';
const CONCRETE = '#d8d4ce';

function WindowGrid({ width, height, floors, depth = 0.05, simplified }) {
  const cols = simplified ? Math.floor(width / 1.8) : Math.floor(width / 1.2);
  const rows = simplified ? floors : floors * 2;

  return (
    <group>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[
              -width / 2 + 0.6 + col * (simplified ? 1.8 : 1.2),
              0.8 + row * (simplified ? 2.2 : 1.1),
              depth,
            ]}
          >
            <planeGeometry args={[0.85, 0.75]} />
            <meshStandardMaterial
              color={GLASS}
              emissive={BRAND}
              emissiveIntensity={
                (row + col) % 3 === 0 ? 0.12 : 0.03
              }
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.85}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

function FloorSlab({ y, width, depth, color = CONCRETE }) {
  return (
    <mesh position={[0, y, 0]}>
      <boxGeometry args={[width + 0.4, 0.25, depth + 0.4]} />
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
    </mesh>
  );
}

function Atrium({ simplified }) {
  if (simplified) return null;
  return (
    <group position={[0, 2.5, 0]}>
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 5, 16, 1, true]} />
        <meshStandardMaterial
          color={GLASS}
          transparent
          opacity={0.25}
          metalness={0.8}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Escalator({ position, rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 1.5, 0]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[0.8, 3.5, 0.15]} />
        <meshStandardMaterial color="#555" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.5, 0.2]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[0.7, 3.3, 0.05]} />
        <meshStandardMaterial
          color={GLASS}
          transparent
          opacity={0.5}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

function EntranceCanopy() {
  return (
    <group position={[0, 0.5, 5.2]}>
      <RoundedBox args={[6, 0.15, 2.5]} radius={0.05} position={[0, 2.8, 0]}>
        <meshStandardMaterial color={CONCRETE} roughness={0.5} />
      </RoundedBox>
      {[-2.5, 2.5].map((x) => (
        <mesh key={x} position={[x, 1.4, 0]}>
          <boxGeometry args={[0.15, 2.8, 0.15]} />
          <meshStandardMaterial color="#444" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Signage({ pulse }) {
  return (
    <group position={[0, 6.2, 3.05]}>
      <RoundedBox args={[4.5, 0.9, 0.15]} radius={0.08}>
        <meshStandardMaterial
          color={BRAND}
          emissive={BRAND}
          emissiveIntensity={0.2 + pulse * 0.25}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.38}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        M5 ECITY
      </Text>
    </group>
  );
}

const FLOOR_Y = {
  f1: 1.2,
  f2: 2.5,
  f3: 3.8,
  f4: 5.1,
};

export default function MallBuilding({ activeFloor, simplified = false }) {
  const groupRef = useRef();
  const signagePulse = useRef(0);

  const floorLevels = useMemo(
    () => [
      { y: 1.2, id: 'f1' },
      { y: 2.5, id: 'f2' },
      { y: 3.8, id: 'f3' },
      { y: 5.1, id: 'f4' },
    ],
    []
  );

  useFrame((state) => {
    signagePulse.current = Math.sin(state.clock.elapsedTime * 1.5) * 0.5 + 0.5;

    if (groupRef.current && !activeFloor) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.06) * 0.02;
    }
  });

  const buildingHeight = simplified ? 5 : 6.5;
  const floorCount = simplified ? 3 : 4;

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 2]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#e8e4de" roughness={0.95} />
      </mesh>

      <mesh position={[0, buildingHeight / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[10, buildingHeight, 6]} />
        <meshStandardMaterial color="#e8eaed" roughness={0.4} metalness={0.05} />
      </mesh>

      <group position={[0, buildingHeight / 2, 3.01]}>
        <WindowGrid width={9.5} height={buildingHeight} floors={floorCount} simplified={simplified} />
      </group>
      <group position={[5.01, buildingHeight / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <WindowGrid width={5.5} height={buildingHeight} floors={floorCount} depth={0.05} simplified={simplified} />
      </group>
      <group position={[-5.01, buildingHeight / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <WindowGrid width={5.5} height={buildingHeight} floors={floorCount} depth={0.05} simplified={simplified} />
      </group>

      {floorLevels.slice(0, floorCount).map((fl) => (
        <FloorSlab
          key={fl.id}
          y={fl.y}
          width={10}
          depth={6}
          color={activeFloor === fl.id ? '#cfc8bf' : CONCRETE}
        />
      ))}

      {activeFloor && FLOOR_Y[activeFloor] && (
        <mesh position={[0, FLOOR_Y[activeFloor], 3.1]}>
          <boxGeometry args={[10.2, 0.08, 0.1]} />
          <meshStandardMaterial
            color={BRAND}
            emissive={BRAND}
            emissiveIntensity={0.8}
          />
        </mesh>
      )}

      <mesh position={[0, buildingHeight + 0.1, 0]}>
        <boxGeometry args={[10.2, 0.2, 6.2]} />
        <meshStandardMaterial
          color={BRAND}
          emissive={BRAND}
          emissiveIntensity={0.15}
        />
      </mesh>

      <Atrium simplified={simplified} />
      {!simplified && (
        <>
          <Escalator position={[-2, 0, 2.5]} />
          <Escalator position={[2, 0, 2.5]} rotation={Math.PI} />
        </>
      )}

      <EntranceCanopy />
      <Signage pulse={signagePulse.current} />
    </group>
  );
}
