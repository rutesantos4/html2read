<script lang="ts">
	import { TextInput, ReadForm, ReadTemplateInput } from '@components';
	import { LL } from '@i18n';
	import { URLQueryImpl, FetchClient, type Read } from '@http';
	import { getTagsFormatted, getKeewordsFormatted, getDateFormatted } from '@http';

	let readURL: string = '';
	let read: Read;
	let readtemplate: string;

	let showForm = false;
	let showTemplate = false;
	const query = new URLQueryImpl(new FetchClient());

	async function handleSubmitUrl() {
		console.info(readURL);
		const result = await query.getHTML(readURL);
		if (typeof result === 'number') {
			return;
		}
		read = result;
		console.log(read);
		showForm = true;
	}
	async function handleSubmitRead() {
		read.tags = read.categories + ', ' + read.keewords;
		read.date = new Date();
		console.log(read);
		console.log(read.date);
		showTemplate = true;
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

> ${read.content}`;
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
		<div class="card">
			<div class="card-body">
				<ReadTemplateInput bind:readtemplate />
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
	}
</style>
