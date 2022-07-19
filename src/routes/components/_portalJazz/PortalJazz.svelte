<script>
	import { fade } from 'svelte/transition';
	import Body from './_components/Body.svelte';
	import Hub from '../_components/Hub.svelte';
	import ModalMission from './_components/ModalMission.svelte';
	import ModalTenere from '../_components/ModalTenere.svelte';

	export let portal;
	export let element;
	export let tabsJazz;
	export let modalTenere;
	
	export let view;
	export let cortinaBridge;
	let modalMision = false;
	let displayTypeD;
	let modalTitle;
	console.log(element)

	const calcWidtScreen = () => {
		if (screen.width > 769) {
			displayTypeD = true;
		} else if (screen.width < 769) {
			displayTypeD = false;
		}
	};
	window.onresize = calcWidtScreen;
	$: calcWidtScreen;
	console.log(displayTypeD);
</script>

<div in:fade={{ duration: 1000 }} class="portalJazz">
	{#if modalTenere}
		<ModalTenere bind:modalTenere />
	{/if}
	{#if modalMision}
		<ModalMission bind:modalMision bind:modalTitle bind:tabsJazz />
	{/if}
	<Hub bind:modalTenere bind:view bind:cortinaBridge bind:tabsJazz {...{ portal, element }} />
	<Body bind:modalMision bind:portal {...{ displayTypeD, portal,element }} />
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
