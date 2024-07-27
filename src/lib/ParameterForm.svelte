<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Template } from './templates';

	export let template: Template | undefined = undefined;

	const dispatch = createEventDispatcher();
	let parameters: { [key: string]: string } = {}; // Add type annotation for parameters

	$: if (template) {
		const paramNames = template.content.match(/\{(\w+)\}/g) || [];
		parameters = {
			...parameters,
			...Object.fromEntries(
				paramNames.map((param) => [param.slice(1, -1), parameters[param.slice(1, -1)] || ''])
			)
		};
	}

	function handleInput() {
		dispatch('change', parameters);
	}
</script>

<div class="terminal-window">
	<div class="terminal-header">Fill in Parameters</div>
	{#if template}
		<form on:input={handleInput}>
			{#each Object.entries(parameters) as [name, value]}
				<label>
					{name}:
					<input type="text" bind:value={parameters[name]} />
				</label>
			{/each}
		</form>
	{:else}
		<p>Please select a template</p>
	{/if}
</div>

<style>
	.terminal-window {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.terminal-header {
		background-color: var(--text-color);
		color: var(--background-color);
		padding: 5px;
		font-weight: bold;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		flex-grow: 1;
		overflow-y: auto;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	input {
		background-color: var(--background-color);
		color: var(--text-color);
		border: 1px solid var(--border-color);
		padding: 5px;
	}
</style>
