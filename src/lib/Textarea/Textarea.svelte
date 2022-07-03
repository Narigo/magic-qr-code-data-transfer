<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: string;
	export let grow = false;

	const dispatch = createEventDispatcher<{ fileDrop: DataTransfer }>();

	const calculateHeight = (node) => {
		node.setAttribute('style', `height: 0px;`);
		node.setAttribute('style', `height: ${node.scrollHeight}px;`);
	};

	const inputChangeHandler: svelte.JSX.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		calculateHeight(e.currentTarget);
	};

	const dropHandler: svelte.JSX.DragEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		dispatch('fileDrop', e.dataTransfer);

		const node = e.currentTarget;
		setTimeout(() => calculateHeight(node), 0);
	};
</script>

<textarea
	on:change={inputChangeHandler}
	on:input={inputChangeHandler}
	bind:value
	class:grow
	on:drop={dropHandler}
	on:dragover
	on:dragleave
/>

<style>
	textarea {
		display: block;
		width: 100%;
	}

	.grow {
		flex-grow: 1;
	}
</style>
