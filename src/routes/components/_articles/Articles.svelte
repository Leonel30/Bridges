<script>
	import { fade } from 'svelte/transition';
	import Hub from '../_components/Hub.svelte';
	import Reputation from './_components/Reputation.svelte';
	import BodyArticle from './_components/BodyArticle.svelte';
	import BodyDescubre from './_components/BodyDescubre.svelte';
	import BodyEssence from './_components/BodyEssence.svelte';
	import BodyCreaP from './_components/BodyCreaP.svelte';
	import Title from './_components/Title.svelte';
	import SubArticleText from './_components/SubArticleText.svelte';
	import Publication from './_components/Publication.svelte';
	import ModalTypeFile from './_components/ModalTypeFile.svelte';
	import cortinaMirage from '../../../assets/assets/musica/mirage/musica_mirage_trivia.wav'
	import click from '../../../assets/assets/musica/click1.wav';
	import ModalTenere from '../_components/ModalTenere.svelte';
	export let view, element, portal, cortinaBridge, modalTenere;
	const Click = new Audio(click);
	const cortMirage = new Audio(cortinaMirage);
	let resultado = false;
	let showBody = 'bodyArticle';
	let modalFile = false;
	let showFile ='image'; 
	let publication = 'main';
	let saveIndex;
	console.log(element);
	
</script>

<div in:fade={{ duration: 1000 }} class="mirage back">
	{#if modalTenere}
		<ModalTenere bind:modalTenere />
	{/if}
	{#if modalFile}
		<ModalTypeFile bind:modalFile bind:showFile bind:saveIndex/>
	{/if}
	<Hub bind:modalTenere bind:view bind:cortinaBridge {...{ resultado, element, portal }} />

	{#if publication === 'main'}
		<div class="container container_desktop">
			<div class="desktop_l">
				<Reputation porcentaje={100} />
			</div>
			<div class="desktop_r">
				<Title bind:showBody />
			</div>
		</div>
		{#if showBody == 'bodyArticle'}
			<BodyArticle bind:showBody bind:publication bind:element />
		{:else if showBody === 'bodyDes'}
			<BodyDescubre bind:showBody bind:publication bind:element />
		{:else if showBody === 'bodyEssence'}
			<BodyEssence bind:showBody bind:element />
		{:else if showBody === 'bodyCrea'}
			<BodyCreaP bind:showBody bind:modalFile bind:showFile bind:saveIndex bind:publication/>
		{/if}
	{:else if publication === 'publication'}
		<Publication bind:element />
	{:else if publication === 'showSubText'}
		<SubArticleText />
	{/if}
</div>

<style>
	.back {
		overflow-y: scroll;
		overflow: hidden auto;
	}
	.container {
		width: 100%;
		overflow: hidden auto;
		padding: 0px;
		margin: 0px;
	}
	@media only screen and (max-width: 1280px) and (min-width: 1024px) {
		.container_desktop {
			display: flex;
		}
		.desktop_l {
			width: 50%;
		}
		.desktop_r {
			width: 50%;
		}
	}
</style>
