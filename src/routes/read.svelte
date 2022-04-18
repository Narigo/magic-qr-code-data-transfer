<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let state: 'ERROR' | 'SCANNING' | 'STOPPED' | 'RESULT' = 'STOPPED';

	let error: string = null;
	let restoredData: string = '';
	let qrcodesData = writable<{ [prefix: string]: string }>({});

	let html5QrcodeScanner: Html5Qrcode;
	let scannedQrcodes = 0;
	let totalQrcodesToScan = 1;

	onMount(() => {
		html5QrcodeScanner = new Html5Qrcode('reader');
	});

	async function onStartClick(e) {
		const qrCodeSuccessCallback = async (decodedText: string, decodedResult) => {
			const prefixLength = `MQR00.00.`.length;
			const prefix = decodedText.substring(0, prefixLength - 1);
			const data = decodedText.substring(prefixLength);
			$qrcodesData[prefix] = data;
			const lastIndexOfQrcodes = prefix.slice(-2);
			totalQrcodesToScan = parseInt(lastIndexOfQrcodes, 10) + 1;
			scannedQrcodes = Object.keys($qrcodesData).length;
			if (scannedQrcodes === totalQrcodesToScan) {
				await stopScanning();
				state = 'RESULT';
				const results = Object.entries($qrcodesData);
				results.sort(([a], [b]) => {
					if (a < b) {
						return -1;
					}
					return 1;
				});
				restoredData = results.reduce((acc, [prefix, data]) => acc + data, '');
			}
		};
		const config = { fps: 500, qrbox: { width: 250, height: 250 } };

		try {
			await html5QrcodeScanner.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback);
			state = 'SCANNING';
		} catch (err) {
			console.error(err);
			error = err.message;
		}
	}

	async function onStopClick() {
		await stopScanning();
		state = 'STOPPED';
	}

	async function stopScanning() {
		try {
			await html5QrcodeScanner.stop();
		} catch (err) {
			console.error(err);
			error = err.message;
		}
	}
</script>

<PageWithNavigation>
	<div id="reader" />

	{#if state === 'ERROR'}
		<Headline>Error scanning!</Headline>
		<p>{error}</p>
	{:else if state === 'SCANNING'}
		<div>Scanned QR data:</div>

		<ul>
			{#each Object.entries($qrcodesData) as [key, value]}
				<li>{key}: {value}</li>
			{/each}
		</ul>
		<button on:click={onStopClick}>Stop scanning!</button>
	{:else if state === 'RESULT'}
		<Headline>Successfully scanned all QR codes!</Headline>
		<textarea bind:value={restoredData} />
	{:else}
		<button on:click={onStartClick}>Start scanning!</button>
	{/if}
</PageWithNavigation>
