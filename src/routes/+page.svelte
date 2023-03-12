<script>
	import { CardNoImage, CardWithImage, Heading, RedBall, Body } from '@components';
	import { LL } from '@i18n';
</script>

<Heading value="html2read" />
<Body />
<div class="flex flex-row justify-evenly">
	<CardNoImage />
	<CardWithImage />
</div>
<div class="flex flex-col justify-center">
	<RedBall />
	<p class="text-center">{$LL.greetings()}</p>
</div>
