<script lang="ts">
	export let value: string;
	export let grow: boolean = false;
</script>

<textarea bind:value class:grow />

<style>
	textarea {
		display: block;
		width: 100%;
	}

	.grow {
		flex-grow: 1;
	}
</style>
