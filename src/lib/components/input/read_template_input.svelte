<script lang="ts">
	import { TextInput } from '@components';

	export let readtemplate: string;
</script>

<TextInput label="read" bind:value={readtemplate} multiline />
