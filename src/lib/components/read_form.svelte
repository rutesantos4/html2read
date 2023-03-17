<script lang="ts">
	import { TextInput } from '@components';
	import type { Read } from '@http';

	export let read: Read;

	async function handleSubmitRead() {
		console.log(read);
	}
</script>

<div class="card">
	<div class="card-body">
		<form on:submit|preventDefault={handleSubmitRead} action=".">
			<TextInput label="Title" bind:value={read.title} required />
			<TextInput label="Description" bind:value={read.description} multiline required />
			<TextInput label="Introduction" bind:value={read.introduction} multiline required />
			<TextInput label="Summary" bind:value={read.summary} multiline required />
			<TextInput label="Keewords" bind:value={read.keewords} required />
			<div class="flex flex-col justify-center mt-8">
				<button class="button btn btn-secondary" on:click> Generate Read </button>
			</div>
		</form>
	</div>
</div>

<style>
	.card {
		max-width: none;
	}
</style>
