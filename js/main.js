import { Scene, PerspectiveCamera, WebGLRenderer, Color, PlaneGeometry, Vector3, Vector2, BufferGeometry, BufferAttribute } from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createMeshWithUniforms, makeShaderMaterial } from './shaderCreationHelpers.js'
import gradientFragment from '../shaders/fragment.glsl'
import vertexShader from '../shaders/vertex.glsl'
import { params } from './state.js';
import { initUI } from './ui.js'

initUI();

let scene = new Scene();
let camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = new WebGLRenderer({ antialias: true, transparent: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor( new Color(1, 1, 1), 0 );
document.body.appendChild( renderer.domElement );

let size = 10; 

let geometry = new BufferGeometry();
const vertices = new Float32Array( [
	-size, -size,  0,
	 size, 0.0,  0,
	 0, size, 0
] );

geometry.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );
geometry.computeVertexNormals();

let material = makeShaderMaterial(vertexShader, gradientFragment, params);

let mesh = createMeshWithUniforms(geometry, material, () => {
    // this function runs every frame.
    // make sure to return a pointer to the uniform object so we can update it externally.
    return params;
})

scene.add(mesh);

// use for orbit controls
// let controls = new OrbitControls( camera, renderer.domElement, {
//     enableDamping : true,
//     dampingFactor : 0.25,
//     zoomSpeed : 0.5,
//     rotateSpeed : 0.5
// } );

camera.position.z = 1;

let onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    params.resolution.set(window.innerWidth , window.innerHeight );
    renderer.setSize( window.innerWidth, window.innerHeight );
}
  
window.addEventListener( 'resize', onWindowResize );

let render = () => {
    requestAnimationFrame( render );
    params.time += 0.01;
    // controls.update();
    renderer.render( scene, camera );
};

render();