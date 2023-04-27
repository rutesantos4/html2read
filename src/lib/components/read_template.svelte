<script lang="ts">
	import { ReadTemplateInput } from '@components';
	import { CopyIllustration } from './illustration';
	import { LL } from '@i18n';

	export let readtemplate: string;
	const copy = () => {
		navigator.clipboard.writeText(readtemplate);
	};
</script>

<div id="buttons" class="flex flex-col justify-center mt-8">
	<button
		class="button btn btn-secondary py-2 px-4 rounded inline-flex items-center"
		on:click={copy}
	>
		<CopyIllustration />
		<span>{$LL.copyToClipboard()}</span>
	</button>
</div>

<div id="read-template-input">
	<ReadTemplateInput {readtemplate} />
</div>

<style>
	#buttons {
		padding-bottom: 1%;
	}
</style>
