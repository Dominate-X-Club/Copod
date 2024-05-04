// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// function Threescene() {
//   const canvasRef = useRef<HTMLDivElement | null>(null);
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.BoxGeometry(1, 1, 1);
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   camera.position.z = 5;

//   function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
//   }
//   useEffect(() => {
//     animate();

//     return () => {
//       scene.remove(cube);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;

//   animate();
// }

// export default Threescene;
