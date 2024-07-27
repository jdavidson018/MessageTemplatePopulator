<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { templates } from './templates.js';
	import type { Template } from './templates.js';

	const dispatch = createEventDispatcher();

	function selectTemplate(template: Template) {
		dispatch('select', template);
	}
</script>

<div class="terminal-window">
	<div class="terminal-header">Available Templates</div>
	<ul>
		{#each templates as template}
			<li>
				<button on:click={() => selectTemplate(template)}>
					{template.name}
				</button>
			</li>
		{/each}
	</ul>
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

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		flex-grow: 1;
		overflow-y: auto;
	}

	li {
		margin-bottom: 5px;
	}

	button {
		background-color: transparent;
		color: var(--text-color);
		border: none;
		cursor: pointer;
		width: 100%;
		text-align: left;
		padding: 5px;
	}

	button:hover {
		background-color: var(--text-color);
		color: var(--background-color);
	}
</style>
