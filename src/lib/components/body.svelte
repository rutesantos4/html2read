<script lang="ts">
	import { TextInput, ReadForm, ReadTemplateInput } from '@components';
	import { LL } from '@i18n';
	import { URLQueryImpl, FetchClient, type Read } from '@http';
	import { getTagsFormatted, getKeewordsFormatted, getDateFormatted } from '@http';
	import TurndownService from 'turndown';

	let readURL: string;
	let read: Read;
	let readtemplate: string;

	let showForm = false;
	let showTemplate = false;

	const query = new URLQueryImpl(new FetchClient());
	const turndownService = new TurndownService();

	async function handleSubmitUrl() {
		const result = await query.getHTML(readURL);
		if (typeof result === 'number') {
			return;
		}
		read = result;
		showForm = true;
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
		<TextInput label={$LL.urlLabel()} bind:value={readURL} />
	</form>

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
