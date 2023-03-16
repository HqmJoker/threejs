import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10); // 设置相机位置
scene.add(camera); // 添加相机到场景中

// 添加物体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
//初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染的尺寸，大小
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera); // 使用渲染器，通过相机将场景渲染出来

// 添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 渲染函数
const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();