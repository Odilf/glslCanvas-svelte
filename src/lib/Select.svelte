<script lang="ts">
	export let options: string[]
	export let value: string
</script>

{#each options as option}
<button on:click={() => value = option}>
	{option}
</button>
	<!-- <div>
		
		<input type='radio' on:click={() => value = option}>
		<label for='radio'> {option} </label>
	</div> -->
{/each}