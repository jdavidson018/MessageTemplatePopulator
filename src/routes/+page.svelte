<script lang="ts">
	import { onMount } from 'svelte';
	import TemplateList from '$lib/TemplateList.svelte';
	import ParameterForm from '$lib/ParameterForm.svelte';
	import TemplatePreview from '$lib/TemplatePreview.svelte';
	import OutputPreview from '$lib/OutputPreview.svelte';
	import type { Template } from '$lib/templates';

	let selectedTemplate: Template | undefined = undefined;
	let parameters = {};
	let populatedTemplate = '';

	function handleTemplateSelect(event: CustomEvent) {
		selectedTemplate = event.detail;
		parameters = {};
	}

	function handleParameterChange(event: CustomEvent) {
		parameters = event.detail;
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(populatedTemplate);
	}

	onMount(() => {
		document.body.classList.add('terminal-theme');
	});
</script>

<main>
	<div class="left-panel">
		<div class="template-list">
			<TemplateList on:select={handleTemplateSelect} />
		</div>
		<div class="parameter-form">
			<ParameterForm template={selectedTemplate} on:change={handleParameterChange} />
		</div>
	</div>
	<div class="right-panel">
		<div class="template-preview">
			<TemplatePreview template={selectedTemplate} />
		</div>
		<div class="output-preview">
			<OutputPreview template={selectedTemplate} {parameters} bind:populatedTemplate />
			<button on:click={copyToClipboard}>Copy to Clipboard</button>
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Courier New', monospace;
		background-color: #000;
		color: #0ff;
	}

	:global(.terminal-theme) {
		--border-color: #0ff;
		--background-color: #000;
		--text-color: #0ff;
	}

	main {
		display: flex;
		height: 100vh;
		box-sizing: border-box;
		padding: 20px;
		gap: 20px;
	}

	.left-panel,
	.right-panel {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.left-panel {
		width: 33%;
	}

	.right-panel {
		width: 67%;
	}

	.template-list,
	.parameter-form,
	.template-preview,
	.output-preview {
		border: 1px solid var(--border-color);
		background-color: var(--background-color);
		padding: 10px;
		overflow-y: auto;
	}

	.template-list,
	.parameter-form {
		height: calc(50% - 10px);
	}

	.template-preview,
	.output-preview {
		height: calc(50% - 10px);
	}

	button {
		background-color: var(--background-color);
		color: var(--text-color);
		border: 1px solid var(--border-color);
		padding: 5px 10px;
		cursor: pointer;
		margin-top: 10px;
	}

	button:hover {
		background-color: var(--text-color);
		color: var(--background-color);
	}
</style>
