<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import CopyToClipboard from './CopyToClipboard.svelte';
</script>

<Meta title="Components/CopyToClipboard" component={CopyToClipboard} />

<Template let:args>
	<CopyToClipboard {...args} />
</Template>

<Story
	name="Regular"
	args={{
		textToCopy: 'hello world'
	}}
/>
