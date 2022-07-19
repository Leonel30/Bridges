<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Body from './_components/Body.svelte';
	import Hub from '../_components/Hub.svelte';
	import Ruleta from './_components/Ruleta.svelte';
	import ResultadoMobile from './_components/ResultadoMobile.svelte';
	import LandingMirageMobile from './_components/LandingMirageMobile.svelte';
	import ModalTenere from '../_components/ModalTenere.svelte';


	export let view;
	export let element;
	export let cortinaBridge;
	export let portal;
	export let modalTenere;
	let continueView;
	let ruleta = false;

	let showText = false;

	let gRuleta = false;

	let resultado = false;

	let btnAct = false;

	$: if (window.cortinaMirage.muted === true) {
		window.cortinaMirage.muted = false;
	} else {
		window.bridgesMusic.muted = true;
		window.cortinaMirage.play();
		window.cortinaMirage.loop = true;
	}

	const giroRuleta = () => {
		if (ruleta) {
			window.click.play();
			ruleta = false;
			showText = false;
			gRuleta = false;
			resultado = true;
			btnAct = false;
		} else {
			ruleta = true;
			setTimeout(() => {
				gRuleta = true;
				window.ruletaSound.play();
			}, 1000);
			setTimeout(() => {
				showText = true;
				btnAct = true;
			}, 5000);
		}
	};
	let count
	/* onMount(()=>{
		count = (id, sound) => {
			let cant = 0;
			let contador = document.getElementById(id);
			if (sound === 0) {
				window.impact2.play();
			} else {
				window.energy3.play();
			}
			let time = setInterval(() => {
				contador.innerHTML = cant + 1;
				if (cant === 500) {
					clearInterval(time);
				}
			}, 1);
		};
	}) */
	
</script>

<div in:fade={{ duration: 1000 }} class="mirage">
	{#if modalTenere}
		<ModalTenere bind:modalTenere />
	{/if}
	{#if ruleta}
		<Ruleta {...{ showText, gRuleta, giroRuleta, btnAct }} />
	{/if}
	<Hub
		bind:modalTenere
		bind:view
		bind:cortinaBridge
		{...{ resultado, element, portal }}
	/>
	<!-- {#if !resultado} -->
	<Body bind:resultado {...{ giroRuleta, continueView, count }} />
	{#if resultado}
		{#if !continueView}
			<ResultadoMobile bind:resultado bind:continueView {...{ giroRuleta, count }} />
		{:else}
			<LandingMirageMobile {...{ count }} />
		{/if}
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>

</style>
