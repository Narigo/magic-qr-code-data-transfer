<script lang="ts">
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';

	let data: string;
	let chunks: string[];
	let error: string = null;

	// const QR_CODE_MAX_BYTE_LENGTH = 2953;
	const QR_CODE_MAX_BYTE_LENGTH = 15;

	type Result<T> = { error: string } | { value: T };

	// 9 chars
	// MQR01.99.first part; MQR02.12.second part; ... MQR12.12.last part;

	$: {
		const result = createChunks(data);
		if ('error' in result) {
			chunks = [];
			error = result.error;
		} else {
			error = null;
			chunks = result.value;
		}
	}

	function createChunks(data: string = ''): Result<string[]> {
		const maxChunkLength = QR_CODE_MAX_BYTE_LENGTH - 'MQR00.99.'.length;
		const wholeLength = data.length;
		const howManyParts = Math.ceil(wholeLength / maxChunkLength);
		if (howManyParts > 100) {
			return {
				error: `We don't want to create more than 100 QR codes for this (max byte length = ${
					maxChunkLength * 100
				})`
			};
		}
		const chunks = [];
		const lastIndex = howManyParts - 1;
		for (let i = 0; i < howManyParts; i++) {
			const partOfData = data.substring(i * maxChunkLength, (i + 1) * maxChunkLength);
			const prefix = `MQR${paddedNumber(i)}.${paddedNumber(lastIndex)}.`;
			chunks.push(prefix + partOfData);
		}
		return { value: chunks };

		function paddedNumber(n: number): string {
			return `${n}`.padStart(2, '0');
		}
	}
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
		<div>
			{#each chunks as chunk}
				<Qrcode value={chunk} />
			{/each}
		</div>
	{/if}
</PageWithNavigation>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: space-between;
	}
</style>
