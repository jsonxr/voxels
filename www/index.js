import * as voxels from "voxels";

voxels.greet();

  const canvas = document.querySelector('#canvas');
  let renderer = new voxels.WebGLRenderer();
  try {
    const scene = new voxels.Scene();
    const camera = new voxels.Camera();
    renderer.setCanvas(canvas);
    renderer.render(scene, camera);
  } catch (e) {
    console.error(e);
  }
console.log('Moving on...');
