<script>
	import '../assets/css/texts.css'
	import '../assets/css/main.css';
	import Splash from './components/_splash/Splash.svelte';
	import Login from './components/_login/Login.svelte';
	import Saludo from './components/_saludo/Saludo.svelte';
	import Pronombre from './components/_pronombre/Pronombre.svelte';
	import Narrativa from './components/_narrativa/Narrativa.svelte';
	import SeleccionPersonaje from './components/_seleccionPersonaje/SeleccionPersonaje.svelte';
	import { player } from '$lib/store/stores';
	import { sounds } from '$lib/models/sounds';
	import Landing from './components/_landing/Landing.svelte';
	import { onMount } from 'svelte';
	import { Agents } from '$lib/utils/api';
	import Mirage from './components/_mirage/Mirage.svelte';
	import Articles from './components/_articles/Articles.svelte';
	import PortalJazz from './components/_portalJazz/PortalJazz.svelte';
	import MyWorld from './components/_myWorld/MyWorld.svelte';
	import MyOtherWorld from './components/_myOtherWorld/MyOtherWorld.svelte'

	let cortMirage;

	let view = 'splash';
	let modalLogin = false;
	let modalRegister = false;
	let element;
	let tabsJazz = 'propon';
	onMount(async () => {
		const response = await Agents.getAgents({ agent_type: 'Item', setup: 'texts' });
		console.log('response', response);
		sounds();
	});
	let modalForgotPass = false;
	let cortinaBridge;

	let portal = '';
	let modalTenere = false;
	let temp = '';
	
</script>

<div class="principalContainer">
	{#if view === 'splash'}
		<Splash bind:view />
	{:else if view === 'login'}
		<Login bind:view bind:modalLogin bind:modalRegister bind:modalForgotPass bind:cortinaBridge />
	{:else if view === 'saludo'}
		<Saludo bind:view />
	{:else if view === 'pronombres'}
		<Pronombre bind:view {...{ cortinaBridge }} />
	{:else if view === 'narrativa'}
		<Narrativa bind:view />
	{:else if view === 'selectPerson'}
		<SeleccionPersonaje bind:view bind:cortinaBridge bind:element />
	{:else if view === 'landing'}
		<Landing
			bind:modalTenere
			bind:view
			bind:cortinaBridge
			bind:cortMirage
			bind:portal
			bind:temp
			{...{ element }}
		/>
	{:else if view === 'mirage'}
		<Mirage
			bind:modalTenere
			bind:view
			bind:cortinaBridge
			bind:cortMirage
			{...{ element, portal }}
		/>
	{:else if view === 'article'}
		<Articles bind:modalTenere bind:view {...{ element, portal }} />
	{:else if view === 'jazz'}
		<PortalJazz
			bind:modalTenere
			bind:view
			bind:cortinaBridge
			bind:portal
			bind:tabsJazz
			{...{ element }}
		/>
	{:else if view === 'myWorld'}
		<MyWorld
			bind:modalTenere
			bind:view
			bind:cortinaBridge
			bind:portal
			{...{ element }}
		/>
	{:else if view === 'myOtherWorld'}
		<MyOtherWorld
			bind:modalTenere
			bind:view
			bind:cortinaBridge
			bind:portal
			{...{element,temp }}
		/>
	{/if}
</div>

<style>
	.principalContainer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
