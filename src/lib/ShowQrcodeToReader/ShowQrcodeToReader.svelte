<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';

	const path = `${base}/read`;
	const readerUrl = `${$page.url.origin}${path}`;
</script>

<figure>
	<Qrcode value={readerUrl} />
	<figcaption>You can use the above QR code to navigate to {readerUrl} on your phone.</figcaption>
</figure>

<style>
	figure {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin: 0;
	}

	figcaption {
		margin: 0;
		text-align: center;
	}
</style>
