<script lang="ts">
	import * as QRCode from 'qrcode';

	export let value: string;

	let canvas: HTMLCanvasElement;

	$: {
		if (canvas) {
			QRCode.toCanvas(canvas, value);
		}
	}
</script>

<canvas bind:this={canvas} />
