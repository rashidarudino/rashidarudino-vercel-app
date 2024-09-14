import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { blueGradient, orangeGradient } from './GradientTexture';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Scene(props) {
  const { nodes, materials } = useGLTF('./models/house.glb');
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

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

    // Scene Rotation
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

    // Scene movement
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
      <group {...props} dispose={null}>
        <group scale={0.305}>
          <mesh
            geometry={nodes.Aluminium002.geometry}
            material={materials['Aluminium.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_1.geometry}
            material={materials['Default material.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_2.geometry}
            material={materials['White Plaster.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_3.geometry}
            material={materials['Concrete Masonry Units.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_4.geometry}
            material={materials['Timber - White.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_5.geometry}
            material={materials['White Tile.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_6.geometry}
            material={materials['Structure, Steel Bar Joist Layer.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_7.geometry}
            material={materials['Kovácsoltvas.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_8.geometry}
            material={materials['Kovácsoltvas-White Porcelain.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_9.geometry}
            material={materials['Fence Patterned Cream Brick.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_10.geometry}
            material={materials['Rigid insulation.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_11.geometry}
            material={materials['Roof - Green Tiles.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_12.geometry}
            material={materials['Marble.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_13.geometry}
            material={materials['White Porcelain.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_14.geometry}
            material={materials['Diamond Mesh.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_15.geometry}
            material={materials['Finish.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_16.geometry}
            material={materials['Timber - Grey.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_17.geometry}
            material={materials['Default.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_18.geometry}
            material={materials['Concrete.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_19.geometry}
            material={materials['Glass (2).002']}
          />
          <mesh
            geometry={nodes.Aluminium002_20.geometry}
            material={materials['Roofing, Slate.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_21.geometry}
            material={materials['SANINDUSA Vitreous China.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_22.geometry}
            material={materials['Grass.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_23.geometry}
            material={materials['Plaster, Ivory, Matte.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_24.geometry}
            material={materials['Masonry - Brick - Cream.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_25.geometry}
            material={materials['Masonry - Brick - Green.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_26.geometry}
            material={materials['Masonry - Brick - Terracotta.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_27.geometry}
            material={materials['Timber.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_28.geometry}
            material={materials['Glass.002']}
          />
          <mesh
            geometry={nodes.Aluminium002_29.geometry}
            material={materials['Ceiling.002']}
          />
        </group>
      </group>
      <group position={[0, 16, -2.23]}>
        <group ref={libraryRef}>
          <mesh position={[-3, 1, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={blueGradient} />
          </mesh>
        </group>
      </group>
      <group position={[-1.97, 15, -2.2]}>
        <group ref={atticRef}>
          <mesh position={[3, 1, 0]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial map={orangeGradient} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/house.glb');
