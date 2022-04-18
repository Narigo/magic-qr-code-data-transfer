<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';
import PageWithNavigation from '$lib/PageWithNavigation/PageWithNavigation.svelte';
</script>

<PageWithNavigation>
	<Headline>Magic QR Code data transfer</Headline>
	<p>It works without a server!</p>

	<h2>How will it work?</h2>
	<p>To send data:</p>
	<ol>
		<li>You enter your data in a big text area</li>
		<li>
			It splits the text into multiple chunks that can be put into individual QR codes (QR codes can
			only be of length X-bytes)
		</li>
		<li>
			It creates individual QR codes based of the chunks, having something like <code
				>MQR&lt;index&gt;.&lt;length&gt;.&lt;data-of-chunk&gt;</code
			>
		</li>
	</ol>
	<p>On the receiver:</p>
	<ol>
		<li>
			There is a reader to use the webcam and shows you which QR codes were scanned until you have
			all of them scanned completely
		</li>
		<li>It shows the whole data in a big text area at the receiver</li>
	</ol>
</PageWithNavigation>
