<script lang="ts">
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';
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
		<QrcodeChunks {data} let:chunks>
			<div slot="ERROR_MAX_CHUNK_LENGTH_EXCEEDED" let:maxChunkLength>
				We don't want to create more than 100 QR codes for this (max byte length = {maxChunkLength *
					100})
			</div>

			<ul class="qrcodes">
				{#each chunks as chunk, index}
					<li class="qrcode">
						<Qrcode value={chunk} />
						<div>{index + 1}</div>
					</li>
				{/each}
			</ul>
		</QrcodeChunks>
	{/if}
</PageWithNavigation>

<style>
	.qrcodes {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: space-between;
	}

	.qrcode {
		align-items: center;
		box-shadow: 0 0 15px -10px #333;
		display: flex;
		flex-direction: column;
		padding-bottom: 1em;
	}
</style>
