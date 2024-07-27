<script lang="ts">
	import type { Template } from './templates';

	export let template: Template | undefined = undefined;
	export let parameters: { [key: string]: string } = {}; // Add type annotation for parameters
	export let populatedTemplate = '';

	$: if (template && parameters) {
		populatedTemplate = template.content.replace(
			/\{(\w+)\}/g,
			(_, key) => parameters[key] || `{${key}}`
		);
	}
</script>

<div class="terminal-window">
	<div class="terminal-header">Final Output</div>
	{#if template}
		<pre>{populatedTemplate}</pre>
	{:else}
		<p>No template selected</p>
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

	pre {
		white-space: pre-wrap;
		word-wrap: break-word;
		margin: 0;
		padding: 10px;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
