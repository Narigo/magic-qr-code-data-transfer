<script lang="ts">
	export let value: string;
	export let grow = false;

	const inputChangeHandler: svelte.JSX.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		e.currentTarget.setAttribute('style', `height: 0px;`);
		e.currentTarget.setAttribute('style', `height: ${e.currentTarget.scrollHeight}px;`);
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
