import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer( { canvas: world, antialias: true } );
renderer.setClearColor(0x004400);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio * 1 );
renderer.setSize( window.innerWidth / 1, window.innerHeight / 1 );

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100 );
camera.position.y = 0.3;
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshLambertMaterial({color: 0x00ff00});
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const lightD = new THREE.DirectionalLight(0xffffff, 1);
lightD.position.set(10, 30, 20);
scene.add(lightD);

const controls = new OrbitControls(camera, renderer.domElement);

// animation

let m = 0;
function animation() {

    requestAnimationFrame(animation);

    m = 0.01;
    mesh.rotateY(m);

    renderer.render( scene, camera );

}

animation();