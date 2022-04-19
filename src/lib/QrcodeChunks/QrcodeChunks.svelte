<script lang="ts">
	import { maxChunkLength } from './constants';

	export let data: string;

	let error: string = null;
	let chunks: string[];

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
		const wholeLength = data.length;
		const howManyParts = Math.ceil(wholeLength / maxChunkLength);
		if (howManyParts > 100) {
			return {
				error: 'MAX_CHUNK_LENGTH_EXCEEDED'
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

{#if error === 'MAX_CHUNK_LENGTH_EXCEEDED'}
	<slot name="ERROR_MAX_CHUNK_LENGTH_EXCEEDED" {maxChunkLength} />
{:else}
	<slot {chunks} />
{/if}
