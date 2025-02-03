//import { scene, renderer } from "https://code4fukui.github.io/vanta/vanta-birds-vr.js";
//import { THREE, scene, renderer, camera } from "https://code4fukui.github.io/egxr.js/egxr.js";
//import { THREE, scene, renderer, camera } from "./egvr2.js";
//import { AsyncGLTFLoader } from "https://code4fukui.github.io/ar-mmd/AsyncGLTFLoader.js";
import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";

export const makeThreeScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.01, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(devicePixelRatio);

  // add lights
  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);

  return { THREE, scene, renderer, camera };
};
