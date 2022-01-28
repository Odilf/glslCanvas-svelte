<script lang="ts">
	import Shader from "$lib/Shader.svelte";
</script>

<h1> glslCanvas-svelte </h1>
<p> A simple wrapper for <a href="https://github.com/patriciogonzalezvivo/glslCanvas"> glslCanvas </a> </p>

<Shader file={'shaders/test2.frag'} width={5000}/>