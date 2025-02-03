import { loadGLB } from "./loadGLB.js";
import { makeThreeScene } from "./makeThreeScene.js";

export class GLTFViewer extends HTMLElement {
  constructor() {
    super();
    const { THREE, scene, renderer, camera } = makeThreeScene();
    this.appendChild(renderer.domElement);

    //renderer.outputEncoding = THREE.SRGBColorSpace;
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // 色と強度
    scene.add(ambientLight);

    const fn = this.getAttribute("src");
    const x = this.getAttribute("x");
    const y = this.getAttribute("y");
    const z = this.getAttribute("z");
    
    loadGLB(fn).then(robo => {
      //robo.position.y = 1.3;
      robo.position.x = x;
      robo.position.y = y;
      robo.position.z = z;
      scene.add(robo);

      //scene.background = new THREE.Color(0x000000); // black
      //scene.background = new THREE.Color(0xcccccc); // black

      renderer.setAnimationLoop(() => {
        robo.rotation.y += 0.001;

        const w = this.clientWidth;
        const h = this.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        
        renderer.render(scene, camera);
      });
    });
  }
}

customElements.define("gltf-viewer", GLTFViewer);

/*
document.body.onkeydown = (e) => {
  const key = e.key;
  const D = 0.5;
  if (key == "ArrowDown") {
    camera.position.z += D;
  } else if (key == "ArrowUp") {
    camera.position.z -= D;
  } else if (key == "ArrowLeft") {
    camera.position.x -= D;
  } else if (key == "ArrowRight") {
    camera.position.x += D;
  }
};
*/
