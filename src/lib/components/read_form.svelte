<script lang="ts">
	import { TextInput, CheckboxInput } from '@components';
	import { LL } from '@i18n';
	import type { Read } from '@http';

	export let read: Read;

	async function handleSubmitRead() {
		read.tags = read.categories + ', ' + read.keewords;
		read.date = new Date();
		console.log(read);
		console.log(read.date);
	}
</script>

<div class="card">
	<div class="card-body">
		<form on:submit|preventDefault={handleSubmitRead} action=".">
			<TextInput label={$LL.titleLabel()} bind:value={read.title} />
			<TextInput label={$LL.descriptionLabel()} bind:value={read.description} multiline />
			<TextInput label={$LL.introductionLabel()} bind:value={read.introduction} multiline />
			<TextInput label={$LL.summaryLabel()} bind:value={read.summary} multiline />
			<TextInput label={$LL.keewordsLabel()} title={$LL.keewordsTootipTitle()} bind:value={read.keewords} />
			<CheckboxInput label={$LL.draftLabel()} bind:checked={read.draft} />
			<div class="flex flex-col justify-center mt-8">
				<button class="button btn btn-secondary" on:click>{$LL.generateButton()}</button>
			</div>
		</form>
	</div>
</div>

<style>
	.card {
		max-width: none;
	}
</style>
