<script lang="ts">
	import { TextInput, ReadForm } from '@components';
	import { URLQueryImpl, FetchClient, type Read } from '@http';

	let readURL = '';
	let read: Read;

	const query = new URLQueryImpl(new FetchClient());

	async function handleSubmitUrl() {
		console.info(readURL);
		const result = await query.getHTML(readURL);
		if (typeof result === 'number') {
			return;
		}
		read = result;
		console.log(read);
	}
</script>

<section id="body">
	<form on:submit|preventDefault={handleSubmitUrl} action=".">
		<TextInput label="Read URL" bind:value={readURL} />
	</form>

	{#if read != undefined}
		<section id="form">
			<ReadForm bind:read />
		</section>
	{/if}
</section>

<style>
	section {
		padding: 5%;
	}
</style>
