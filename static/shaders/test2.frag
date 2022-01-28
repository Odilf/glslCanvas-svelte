#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 st_mouse = u_mouse.xy/u_resolution.xy;
	// float caca = 0.5; 

	float v = (st.x + st.y)/2.0;
    gl_FragColor = vec4(v, v, v, 1.0);
}