import { Canvas } from '@react-three/fiber';
import './App.css';
import { Experience } from './components/Experience';

function App() {
  return (
    <Canvas
      camera={{
        fov: 75, // Increase the FOV to zoom out
        position: [3, 2, 15], // Move the camera further away
        near: 0.1, // Adjust as needed
        far: 5000, // Adjust as needed
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
