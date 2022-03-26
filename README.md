# gslsCanvas-svelte

A simple Svelte wrapper for [glslCanvas](https://github.com/patriciogonzalezvivo/glslCanvas)

## Installation

I have not yet released it to npm, whoops.

## Usage

Create a `.frac` file in the `static` folder. Then, add the `<Shader/>` component with the file path as the `file` prop.

Example:

```svelte
<script lang="ts">
  import { Shader } from 'gsls-cavnas-svelte'
</script>

<Shader file="shaders/example.frag" width={750} height={750}/>
```
