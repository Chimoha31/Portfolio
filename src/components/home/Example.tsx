import { useEffect } from "react";
import "./Example.css";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Example = () => {
  let model: THREE.Group;

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      100,
      sizes.width / sizes.height,
      10,
      2000
    );
    camera.position.set(0, 19, 25);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    //GLTGLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    console.log(dracoLoader);

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    let mixer: THREE.AnimationMixer;
    gltfLoader.load("./models/animation.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(5.14, 5.14, 5.14);
      model.rotation.y = -Math.PI / 3;
      // model.rotation.x = Math.PI / 6;
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      clips.forEach(function (clip) {
        const action = mixer.clipAction(clip);
        action.play();
      });
    });

    //アニメーション
    let previousTime: number = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const elpasedTime = clock.getElapsedTime();
      const deltaTime = elpasedTime - previousTime;
      previousTime = elpasedTime;
      if (model) {
        // model.rotation.set(elpasedTime * 0, -elpasedTime * 0.2, 0);
      }

      if (mixer) {
        mixer.update(deltaTime * 0.8);
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    // ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(-10, 8, 7);
    scene.add(pointLight);
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
    scene.add(pointLightHelper);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    scene.add(directionalLight);


    // ブラウザのリサイズ処理
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      THREE.Cache.clear(); //不明
    });
  }, []);

  return (
    <>
      <canvas id="canvas" className="canvas"></canvas>
    </>
  );
};

export default Example;
