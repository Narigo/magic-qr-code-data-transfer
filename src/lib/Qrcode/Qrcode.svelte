<script lang="ts">
	import QRCode from 'qrcode';

	export let value: string;

	let canvas: HTMLCanvasElement;

	$: {
		if (canvas) {
			QRCode.toCanvas(canvas, value);
		}
	}
</script>

<div>
	<canvas bind:this={canvas} />
	<div>{value}</div>
</div>
