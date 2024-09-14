import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={6} damping={0.30}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
