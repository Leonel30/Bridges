<script>
	import { fade } from 'svelte/transition';
	import ControlScroll from './_components/ControlScroll.svelte';
	import ImageTop from './_components/ImageTop.svelte';
	import TextoCenter from './_components/TextoCenter.svelte';
	export let view;
	let cont = 1;
	let btnComp = '';
	let classImg = 'hola';
	let initCont
</script>

<div transition:fade={{duration: 1000}} class="saludo">
	<ImageTop {...{cont,btnComp,classImg,initCont}} />
	<TextoCenter bind:cont bind:btnComp bind:classImg {...{initCont}} />
	<ControlScroll bind:cont bind:view bind:classImg {...{btnComp}} />
</div>

<!-- markup (zero or more items) goes here -->
<style>
</style>
