import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Scene } from './Scene';
import { Overlay } from './Overlay';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={.25} />
      <directionalLight
        color={0xefefff}
        intensity={1}
        position={[2, 2, 2]}
        castShadow
      />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={7} damping={0.3}>
        <Overlay />
        <Scene />
      </ScrollControls>
    </>
  );
};
