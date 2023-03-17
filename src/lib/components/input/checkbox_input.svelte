<script>
	export let label = '';
	export let checked = false;
</script>

<div class="w-full text-center flex-row input-group mb-2">
	<input type="checkbox" class="form-check-input" id="Check" bind:checked />
	<label class="form-check-label" for="Check">{label}</label>
</div>
