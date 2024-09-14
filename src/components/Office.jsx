import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { blueGradient, orangeGradient } from './GradientTexture';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb');
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  const torusRefs = useRef([]);
  const coneRefs = useRef([]);

  // Define static positions for shapes
  const torusPositions = [
    [-5, 1, 5],
    [-3, 1, -4],
    [2, 1, -3],
    [4, 1, 2],
    [-1, 1, -2],
    [3, 1, 4],
  ];

  const conePositions = [
    [-4, 1, 3],
    [3, 1, 1],
    [-2, 1, 2],
    [1, 1, -4],
    [-3, 1, -1],
  ];

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1.5
    );
  }, []);

  useFrame((state, delta) => {
    libraryRef.current.rotation.x += delta;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={orangeGradient} />
      </mesh>
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh position={[-3, 1, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={blueGradient} />
          </mesh>
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh position={[3, 1, 0]}>
            <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshStandardMaterial map={orangeGradient} />
          </mesh>
        </group>
      </group>
      {/* Static Toruses */}
      {torusPositions.map((pos, i) => (
        <group
          key={`torus-${i}`}
          ref={(el) => (torusRefs.current[i] = el)}
          position={pos}
        >
          <mesh>
            <torusGeometry args={[0.5, 0.2, 16, 100]} />
            <meshStandardMaterial map={blueGradient} />
          </mesh>
        </group>
      ))}
      {/* Static Cones */}
      {conePositions.map((pos, i) => (
        <group
          key={`cone-${i}`}
          ref={(el) => (coneRefs.current[i] = el)}
          position={pos}
        >
          <mesh>
            <coneGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial map={orangeGradient} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

useGLTF.preload('./models/WawaOffice.glb');
