varying vec3 N;
varying vec2 vUv;

void main() {
  N = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  vUv = uv;
}