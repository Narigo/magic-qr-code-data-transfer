<script lang="ts" context="module">
	let id = 0;

	function getNextId(prefix: string): string {
		return `${prefix}${++id}`;
	}
</script>

<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import Headline from '$lib/Headline/Headline.svelte';
	import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
	import Qrcode from '$lib/Qrcode/Qrcode.svelte';
	import SuccessView from '$lib/SuccessView/SuccessView.svelte';
	import Textarea from '$lib/Textarea/Textarea.svelte';
	import { Html5Qrcode } from 'html5-qrcode';
	import type { Html5QrcodeCameraScanConfig } from 'html5-qrcode/esm/html5-qrcode';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let state: 'ERROR' | 'INIT' | 'RESULT' | 'SCANNING' | 'STOPPED' = 'INIT';

	let error: string = null;
	let restoredData = '';
	let qrcodesData = writable<{ [prefix: string]: string }>({});

	let html5QrcodeScanner: Html5Qrcode;
	let scannedQrcodes = 0;
	let totalQrcodesToScan = 0;

	const readerId = getNextId('reader_');

	onMount(() => {
		html5QrcodeScanner = new Html5Qrcode(readerId);
	});

	async function onStartClick() {
		const qrCodeSuccessCallback = async (decodedText: string) => {
			const prefixLength = `MQR00.00.`.length;
			const prefix = decodedText.substring(0, prefixLength - 1);
			const data = decodedText.substring(prefixLength);
			const lastIndexOfQrcodes = prefix.slice(-2);
			const parsedTotalQrcodesToScan = parseInt(lastIndexOfQrcodes, 10) + 1;

			// Reset existing data if length of QR codes has changed. This may
			// happen if a user changes the data after reading started.
			if (totalQrcodesToScan !== parsedTotalQrcodesToScan) {
				$qrcodesData = {};
				totalQrcodesToScan = parsedTotalQrcodesToScan;
			}

			// Save the found data
			$qrcodesData[prefix] = data;
			scannedQrcodes = Object.keys($qrcodesData).length;

			// When user scanned all QR codes according to prefix
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
				restoredData = results.reduce((acc, [, data]) => acc + data, '');
			}
		};
		const qrCodeErrorCallback = () => {
			/* ignore errors */
		};
		const config: Html5QrcodeCameraScanConfig = {
			fps: 250
		};

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
		await stopScanning();
		$qrcodesData = {};
		restoredData = '';
		scannedQrcodes = 0;
		totalQrcodesToScan = 0;
		await onStartClick();
	}

	function nf(n: number): string {
		return `${n}`.padStart(2, '0');
	}
</script>

<PageWithNavigation>
	<div id={readerId} class="reader" />

	{#if state === 'ERROR'}
		<Headline>Error scanning!</Headline>
		<p>{error}</p>
	{:else if state === 'SCANNING'}
		{#if totalQrcodesToScan > 0}
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
		{/if}
		<Button on:click={onStopClick}>Stop scanning!</Button>
	{:else if state === 'RESULT'}
		<SuccessView>
			<Headline>Here is the restored data:</Headline>
			<Textarea bind:value={restoredData} grow />
			<Button on:click={onResetClick}>Reset scanning</Button>
		</SuccessView>
	{:else if state === 'STOPPED'}
		<Button on:click={onStartClick}>Continue scanning</Button>
		<Button on:click={onResetClick}>Reset scanning</Button>
	{:else}
		<Button on:click={onStartClick}>Start scanning!</Button>
	{/if}
</PageWithNavigation>

<style>
	.reader {
		max-height: 500px;
		max-width: 500px;
	}
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
