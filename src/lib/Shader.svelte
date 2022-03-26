<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	
	export let file: string = ""
	export let width: number = null
	export let height: number = null

	export let fragment_url: string = null
	export let fragment: string = null 

	let canvas: HTMLCanvasElement
	let sandbox

	let data: string

	async function getFile(filename: string) {
		if (!browser) return

		const fileReader = new FileReader()
		const response = await fetch(filename)
		fileReader.onload = e => {
			data = e.target.result as string
		}
		fileReader.readAsText(await response.blob());
	}

	$: file && getFile(file)

	onMount(async() => {
		const GlslCanvas = await import('glslCanvas')
		sandbox = browser && new GlslCanvas.default(canvas)
	})

	$: if (data) {
		sandbox?.load(data)
	}

	$: if (canvas) {
		canvas.width = width
		canvas.height = height 
	}
</script>

<canvas bind:this={canvas} name="glslCanvas" data-fragment-url={fragment_url} data-fragment={fragment}></canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>