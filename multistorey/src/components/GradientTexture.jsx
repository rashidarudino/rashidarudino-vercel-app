import * as THREE from 'three';

export const createGradientTexture = (color1, color2) => {
  const size = 512; // Size of the texture
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');

  // Create a linear gradient
  const gradient = context.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  // Fill the canvas with the gradient
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  // Create a texture from the canvas
  return new THREE.CanvasTexture(canvas);
};

// Predefined gradients
export const orangeGradient = createGradientTexture('#2cff79', '#fbd886');
export const blueGradient = createGradientTexture('#0fa1f9', '#ffffff');

// '#ce9178'
// '#3b82f6'
