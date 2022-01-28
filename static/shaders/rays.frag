#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float usin(float v) {
	return (sin(v) + 1.0)/2.0;
}

float rays(vec2 st, float t) {
	float factor = 1.0 - pow(mod(t, 3.0), 4.0)/pow(3.0, 4.0);
	float v1 = mod(st.x, st.y * pow(mod(t, 3.0), 4.0)) * factor;
	return v1;
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 st_mouse = u_mouse.xy/u_resolution.xy;

	float v = rays(st, u_time) + rays(st, u_time - 1.5);
    gl_FragColor = vec4(v, v, v, 1.0);
}