<script lang="ts">
	export let value: string;
	export let grow = false;
</script>

<textarea bind:value class:grow on:drop on:dragover on:dragleave />

<style>
	textarea {
		display: block;
		width: 100%;
	}

	.grow {
		flex-grow: 1;
	}
</style>
