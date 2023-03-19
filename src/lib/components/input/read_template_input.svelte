<script lang="ts">
	export let readtemplate: string;
	const label = 'read';
</script>

<textarea
	class="form-control"
	id={label}
	aria-describedby="basic-addon3"
	data-toggle="tooltip"
	data-placement="bottom"
	bind:value={readtemplate}
	required
/>

<style>
	textarea {
		border-radius: 0.75rem;
		border: 2px solid var(--colorFg);
		width: 100%;
		padding: 0.5%;
		min-height: 50rem;
	}
</style>
