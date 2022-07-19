<script>
	import { fade } from 'svelte/transition';
	import { contElem } from '$lib/models/data';
	import Body from './_components/Body.svelte';
	import Hub from './_components/Hub.svelte';
	import ModalTenere from '../_components/ModalTenere.svelte';

	export let view
	export let element
	export let cortinaBridge
	export let cortMirage
	export let portal
	export let modalTenere
	export let temp
</script>

<div in:fade={{ duration: 1000 }} class="landing">
	{#if modalTenere}
		 <ModalTenere bind:modalTenere />
	{/if}
	<Hub bind:modalTenere {...{element, contElem}} />
	<Body  bind:view bind:cortinaBridge bind:portal bind:temp {...{element, cortMirage, contElem}} />
</div>

<!-- markup (zero or more items) goes here -->
<style>
</style>
