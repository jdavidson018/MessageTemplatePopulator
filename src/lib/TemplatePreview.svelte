<script lang="ts">
	import type { Template } from './templates';

	export let template: Template | undefined = undefined;
</script>

<div class="terminal-window">
	<div class="terminal-header">Original Template</div>
	{#if template}
		<pre>{template.content}</pre>
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
