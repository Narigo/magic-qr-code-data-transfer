<script lang="ts">
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';
	import QrcodeChunks from '$lib/QrcodeChunks/QrcodeChunks.svelte';
	import ShowQrcodeToReader from '$lib/ShowQrcodeToReader/ShowQrcodeToReader.svelte';
	import Textarea from '$lib/Textarea/Textarea.svelte';
	import { writable } from 'svelte/store';

	let data: string = '';
	let error: string = null;
	let infoMessage = writable('');

	const checkDrag: svelte.JSX.DragEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		$infoMessage = JSON.stringify(e.detail);
	};

	const onLeave: svelte.JSX.DragEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		$infoMessage = '';
	};

	const onFileDrop = async (e: CustomEvent<DataTransfer>) => {
		if (
			data.trim() !== '' &&
			!confirm('Do you really want to overwrite what you have in your data?')
		) {
			return;
		}
		$infoMessage = '';
		console.log({ e });
		for (const item of e.detail.files) {
			data = await item.text();
		}
	};
</script>

<PageWithNavigation>
	<h1>Create magic QR codes</h1>
	<p>This is where we can create QR codes.</p>

	<ShowQrcodeToReader />

	<p>Put your data in here:</p>
	<Textarea
		bind:value={data}
		on:dragover={checkDrag}
		on:dragleave={onLeave}
		on:fileDrop={onFileDrop}
	/>
	{#if $infoMessage}<p>{$infoMessage}</p>{/if}

	{#if error}
		<section>
			<p>Error!</p>
			<p>{error}</p>
		</section>
	{:else if data && data !== ''}
		<section>
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
		</section>
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
