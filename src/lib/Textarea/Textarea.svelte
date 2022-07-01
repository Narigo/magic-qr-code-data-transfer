<script lang="ts">
	export let value: string;
	export let grow = false;

	const calculateHeight = (node) => {
		node.setAttribute('style', `height: 0px;`);
		node.setAttribute('style', `height: ${node.scrollHeight}px;`);
	};

	const inputChangeHandler: svelte.JSX.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		calculateHeight(e.currentTarget);
	};
</script>

<textarea on:input={inputChangeHandler} bind:value class:grow on:drop on:dragover on:dragleave />

<style>
	textarea {
		display: block;
		width: 100%;
	}

	.grow {
		flex-grow: 1;
	}
</style>
