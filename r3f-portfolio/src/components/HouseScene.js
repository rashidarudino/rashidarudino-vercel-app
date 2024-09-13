import React from 'react';

import { OrbitControls, ScrollControls } from '@react-three/drei'; // Optional, for easier 3D shapes
import { House } from './House';

export const HouseScene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <pointLight position={[10, 10, 10]} />
      <ScrollControls pages={6} damping={0.25}>

        <House/>
      </ScrollControls>
    </>
  );
};
