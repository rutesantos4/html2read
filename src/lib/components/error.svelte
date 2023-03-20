<script lang="ts">
	export let message = '';
</script>

<div class="alert alert-danger" role="alert">
    {message}
</div>

<style>
    .alert-danger{
        --tw-bg-opacity: 0.5;
        background-color: rgb(var(--secondary)/var(--tw-bg-opacity));
    }
</style>