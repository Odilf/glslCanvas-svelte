<script lang="ts">
	import Select from "$lib/Select.svelte";
import Shader from "$lib/Shader.svelte";

	let shader: string = 'circle'
</script>

<h1> glslCanvas-svelte </h1>
<p> A simple wrapper for <a href="https://github.com/patriciogonzalezvivo/glslCanvas"> glslCanvas </a> </p>


<Select options={['circle', 'test', 'rays']} bind:value={shader}/>
<br>
{`shaders/${shader}.frag`}


<div style="width: 90vh">
	<Shader file={shader ? `shaders/${shader}.frag` : ''} width={750} height={750}/>
</div>
