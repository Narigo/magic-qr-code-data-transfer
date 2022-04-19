<script lang="ts">
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import { maxChunkLength } from '$lib/QrcodeChunks/constants';
	import QrcodeChunks from '$lib/QrcodeChunks/QrcodeChunks.svelte';

	let data: string;
	let error: string = null;
</script>

<PageWithNavigation>
	<h1>Create magic QR codes</h1>
	<p>This is where we can create QR codes.</p>

	<p>Put your data in here:</p>
	<textarea bind:value={data} />

	{#if error}
		<p>Error!</p>
		<p>{error}</p>
	{:else}
		<p>The chunks are:</p>
		<QrcodeChunks {data}>
			<div slot="error">
				We don't want to create more than 100 QR codes for this (max byte length = {maxChunkLength *
					100})
			</div>
		</QrcodeChunks>
	{/if}
</PageWithNavigation>
