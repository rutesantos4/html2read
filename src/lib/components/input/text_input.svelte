<script lang="ts">
	export let label = '';
	export let value = '';
	export let title = '';
	export let multiline = false;
</script>

<div class="w-full text-center flex-row input-group mb-2">
	<div class="input-group-prepend">
		<span class="input-group-text">{label}</span>
	</div>
	{#if multiline}
		<textarea
			class="form-control"
			id={label}
			aria-describedby="basic-addon3"
			data-toggle="tooltip"
			data-placement="bottom"
			{title}
			bind:value
			required
		/>
	{:else}
		<input
			type="text"
			class="form-control"
			id={label}
			aria-describedby="basic-addon3"
			data-toggle="tooltip"
			data-placement="bottom"
			{title}
			bind:value
			required
		/>
	{/if}
</div>

<style>
	input,
	textarea {
		border-radius: 0.75rem;
		border: 2px solid var(--colorFg);
		width: 100%;
		padding: 0.5%;
	}
	textarea {
		min-height: 8rem;
	}
</style>
