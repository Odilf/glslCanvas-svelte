#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	float caca = 0.5;

    gl_FragColor = vec4(caca, caca, caca, 1.0);
}