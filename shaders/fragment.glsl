precision mediump float;

uniform float speed;
uniform vec2 scale;
uniform vec2 resolution;
uniform vec3 color;
uniform float time;
varying vec2 vUv;
varying vec3 N;

void main() {
    vec2 uv = vUv;
    uv += scale;
	gl_FragColor = vec4(sin(uv+time* speed)*.5+.5, 1.0, 1.0);	
    // gl_FragColor = vec4(color, 1.0);
}