<script lang="ts">
	import { ReadTemplateInput } from '@components';
	import { CopyIllustration, DownloadIllustration } from './illustration';
	import { LL } from '@i18n';

	export let readtemplate: string;
	export let fileName: string;

	const copy = () => {
		navigator.clipboard.writeText(readtemplate);
	};

	const downloadFile = async () => {
		const link: HTMLAnchorElement = document.createElement('a');
		const file: Blob = new Blob([readtemplate], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(link.href);
	};
</script>

<div id="buttons" class="flex flex-row justify-evenly">
	<div id="button">
		<button class="button btn btn-secondary inline-flex items-center" on:click={copy}>
			<CopyIllustration />
			<span>{$LL.copyToClipboard()}</span>
		</button>
	</div>
	<div id="button">
		<button class="button btn btn-secondary inline-flex items-center" on:click={downloadFile}>
			<DownloadIllustration />
			<span>{$LL.exportToFile()}</span>
		</button>
	</div>
</div>

<div id="read-template-input">
	<ReadTemplateInput {readtemplate} />
</div>

<style>
	#buttons {
		padding-bottom: 1%;
	}
	#button {
		width: 45%;
	}
	.button {
		width: 100%;
	}
</style>
