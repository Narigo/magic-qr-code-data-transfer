<script lang="ts">
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';

	export let textToCopy: string;
	export let errorMessage = 'Could not copy to clipboard';

	const TIME_TO_READ_NOTICE_IN_MS = 4_000;
	const state = writable<
		{ type: 'idle' } | { type: 'copied' } | { type: 'error'; message: string }
	>({ type: 'idle' });

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(textToCopy);
			$state = { type: 'copied' };
			setTimeout(() => {
				$state = { type: 'idle' };
			}, TIME_TO_READ_NOTICE_IN_MS);
		} catch (error) {
			const message = errorMessage;
			$state = { type: 'error', message };
			setTimeout(() => {
				$state = { type: 'idle' };
			}, TIME_TO_READ_NOTICE_IN_MS);
		}
	}
</script>

<button on:click={copyToClipboard}>Copy to clipboard</button>
{#if $state.type === 'copied'}
	<div in:fade out:fade>Copied!</div>
{:else if $state.type === 'error'}
	<div in:fade out:fade>{$state.message}</div>
{/if}
