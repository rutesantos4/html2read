<script lang="ts">
	import { TextInput, CheckboxInput } from '@components';
	import { LL } from '@i18n';
	import type { Read } from '@http';

	export let read: Read;
</script>

<TextInput label={$LL.titleLabel()} bind:value={read.title} />
<TextInput label={$LL.descriptionLabel()} bind:value={read.description} multiline />
<TextInput label={$LL.summaryLabel()} bind:value={read.summary} multiline />
<TextInput label={$LL.introductionLabel()} bind:value={read.introduction} multiline />
<TextInput
	label={$LL.keywordsLabel()}
	title={$LL.keywordsTootipTitle()}
	bind:value={read.keywords}
/>
<CheckboxInput label={$LL.draftLabel()} bind:checked={read.draft} />
<div class="flex flex-col justify-center mt-8">
	<button class="button btn btn-secondary" on:click>{$LL.generateButton()}</button>
</div>
