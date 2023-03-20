<script lang="ts">
	import { TextInput, ReadForm, ReadTemplateInput, Error } from '@components';
	import { LL } from '@i18n';
	import { URLQueryImpl, FetchClient, type Read } from '@http';
	import { getTagsFormatted, getKeewordsFormatted, getDateFormatted } from '@http';
	import TurndownService from 'turndown';

	let readURL: string;
	let read: Read;
	let readtemplate: string;

	let isEditingReadURL = true;
	let showForm = false;
	let submitUrlError = false;
	let showTemplate = false;

	const query = new URLQueryImpl(new FetchClient());
	const turndownService = new TurndownService();

	async function handleEditingUrl(event: CustomEvent) {
		isEditingReadURL = event.detail.isEditing;
	}

	async function handleSubmitUrl() {
		const result = await query.getHTML(readURL);
		isEditingReadURL = false;
		if (typeof result === 'number') {
			showForm = false;
			submitUrlError = true;
			return;
		}
		read = result;
		showForm = true;
		submitUrlError = false;
	}

	function addPrefix(str: string, prefix: string): string {
		return str
			.split('\n')
			.map((s) => `${prefix} ${s}`)
			.join('\n');
	}

	async function handleSubmitRead() {
		read.tags = read.categories + ', ' + read.keewords;
		read.date = new Date();

		showTemplate = true;
		isEditingReadURL = false;
		const contentMarkdown = addPrefix(turndownService.turndown(read.content), '>');

		readtemplate = `---
title: "${read.title}"
description: '${read.description}'
summary: "${read.summary}"
keywords: [${getKeewordsFormatted(read)}]
date: ${getDateFormatted(read)}
draft: ${read.draft}
categories: ['${read.categories}']
tags: [${getTagsFormatted(read)}]
---

${read.introduction}

${read.url}

---

${contentMarkdown}`;
	}
</script>

<section id="body">
	<form on:submit|preventDefault={handleSubmitUrl} action=".">
		<TextInput label={$LL.urlLabel()} bind:value={readURL} on:onInput={handleEditingUrl} />
	</form>
	{#if submitUrlError && !isEditingReadURL}
		<Error message={`Error. Not possible to call '${readURL}'`} />
	{/if}

	{#if read != undefined && showForm}
		<div class="card">
			<div class="card-body">
				<form on:submit|preventDefault={handleSubmitRead} action=".">
					<section id="form">
						<ReadForm bind:read />
					</section>
				</form>
			</div>
		</div>
	{/if}

	{#if showTemplate}
		<div class="card mt-2">
			<div class="card-body">
				<section id="read-template-input">
					<ReadTemplateInput bind:readtemplate />
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
	#read-template-input,
	#form {
		padding: 2%;
	}
</style>
