<script lang="ts">
	import { TextInput } from '@components';

	let readURL = '';

	function handleSubmitUrl(): void {
		console.info(readURL);
	}
</script>

<section id="body">
	<form on:submit|preventDefault={handleSubmitUrl} action=".">
		<TextInput label="Read URL" bind:value={readURL} />
	</form>
</section>

<style>
	section {
		padding: 5%;
	}
</style>
