<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { element } from 'svelte/internal';
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
				restoredData = results.reduce((acc, [_prefix, data]) => acc + data, '');
			}
		};
		const qrCodeErrorCallback = (error) => {
			console.error(error);
		};
		const config = { fps: 500, qrbox: { width: 250, height: 250 } };

		try {
			await html5QrcodeScanner.start(
				{ facingMode: 'environment' },
				config,
				qrCodeSuccessCallback,
				qrCodeErrorCallback
			);
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

	async function onResetClick() {
		$qrcodesData = {};
	}

	function nf(n: number): string {
		return `${n}`.padStart(2, '0');
	}
</script>

<PageWithNavigation>
	<div id="reader" />

	{#if state === 'ERROR'}
		<Headline>Error scanning!</Headline>
		<p>{error}</p>
	{:else if state === 'SCANNING'}
		<div class="progressBar">
			<div class="progress" style={`width: ${(100 * scannedQrcodes) / totalQrcodesToScan}%;`} />
		</div>
		<div class="progressText">
			{scannedQrcodes} of {totalQrcodesToScan} QR codes scanned.
		</div>

		<ul class="qrcodes">
			{#each new Array(totalQrcodesToScan).fill(1).map((_, index) => {
				return { index, chunk: $qrcodesData[`MQR${nf(index)}.${nf(totalQrcodesToScan - 1)}`] };
			}) as element}
				<li class="qrcode" class:scanned={!!element.chunk}>
					{#if element.chunk}
						<Qrcode value={element.chunk} />
					{:else}
						<Qrcode value="..." />
					{/if}
					<div>{element.index + 1}</div>
				</li>
			{/each}
		</ul>
		<button on:click={onStopClick}>Stop scanning!</button>
	{:else if state === 'RESULT'}
		<Headline>Successfully scanned all QR codes!</Headline>
		<textarea bind:value={restoredData} />
	{:else}
		<button on:click={onStartClick}>Start scanning!</button>
		<button on:click={onResetClick}>Reset scanning</button>
	{/if}
</PageWithNavigation>

<style>
	.progressBar {
		background-color: rgba(50, 200, 50, 0.1);
		height: 10px;
	}

	.progress {
		background-color: rgba(50, 200, 50, 1);
		height: 100%;
	}

	.progressText {
		text-align: right;
	}

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

	.scanned {
		background-color: lime;
	}
</style>
