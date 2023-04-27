<script lang="ts">
	import { TextInput, ReadForm, ReadTemplate, Error } from '@components';
	import { LL } from '@i18n';
	import { setReadTemplate } from '@http';
	import TurndownService from 'turndown';
	import { ReadStore } from '@stores';

	let readURL: string;

	let isEditingReadURL = true;

	const turndownService = new TurndownService();

	async function handleEditingUrl(event: CustomEvent) {
		isEditingReadURL = event.detail.isEditing;
	}

	async function handleSubmitUrl() {
		ReadStore.reset();
		ReadStore.submittedURL(readURL);
		isEditingReadURL = false;
	}

	async function handleSubmitRead() {
		let read = $ReadStore.value;
		const contentMarkdown = turndownService.turndown(read.content);

		setReadTemplate(read, contentMarkdown);
		ReadStore.submittedForm(read);

		isEditingReadURL = false;
	}
</script>

<section id="body">
	<form on:submit|preventDefault={handleSubmitUrl} action=".">
		<TextInput label={$LL.urlLabel()} bind:value={readURL} on:onInput={handleEditingUrl} />
	</form>
	{#if $ReadStore.showingURLError && !isEditingReadURL}
		<Error message={`Error. Not possible to call '${readURL}'`} />
	{/if}

	{#if $ReadStore.showingForm || $ReadStore.showingTemplate}
		<div class="card">
			<div class="card-body">
				<form on:submit|preventDefault={handleSubmitRead} action=".">
					<section id="form">
						<ReadForm read={$ReadStore.value} />
					</section>
				</form>
			</div>
		</div>
	{/if}

	{#if $ReadStore.showingTemplate}
		<div class="card mt-2">
			<div class="card-body">
				<section id="read-template">
					<ReadTemplate readtemplate={$ReadStore.value.template} />
				</section>
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		padding: 5%;
	}
	.card {
		max-width: none;
		padding: 0 !important;
	}
	#read-template,
	#form {
		padding: 2%;
	}
</style>
