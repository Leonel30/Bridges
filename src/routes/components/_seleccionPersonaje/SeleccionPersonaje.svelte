<script>
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { dataBtnPerson } from '$lib/models/data';
	import backTop from '../../../assets/assets/contenedores/textSelecPersonaje.png';
	import InfoPerson from './_components/InfoPerson.svelte';


	let contInfo = false;
	let contSlider = 0;
	export let view;
	export let element

	$: window.bridgesMusic.muted = false;
	
	const activeInfoPer = (value) => {
		window.click.play();
		if (browser) {
			var container = document.getElementById('selectPersonCont');
			container.classList.add('w100');
		}
		if (value === 0) {
			setTimeout(() => {
				window.aguaSound.play();
			}, 1400);
		}
		if (value === 1) {
			setTimeout(() => {
				window.tierraSound.play();
			}, 1400);
		}
		if (value === 2) {
			setTimeout(() => {
				window.fuegoSound.play();
			}, 1400);
		}
		if (value === 3) {
			setTimeout(() => {
				window.aireSound.play();
			}, 1400);
		}
		if (value === 4) {
			setTimeout(() => {
				window.magiaSound.play();
			}, 1400);
		}
		contInfo = true;
		contSlider = value;
	};
</script>

<div in:fade={{ delay: 1500, duration: 1000 }} id="selectPersonCont" class="selectPerson">
	{#if contInfo}
		<InfoPerson
			bind:contInfo
			bind:contSlider
			bind:view
			bind:element
		/>
	{/if}
	<div class="topTextContent">
		<p>
			Ningún espíritu logra el cambio por sí mismo, por eso tendrás que aprender a conectarte y
			hacer equipo con espíritus diferentes… ¿amigos? No… es difícil discutir con amigos… más bien,
			pares con ánimo transformador. <span>¿Cuál es tu espíritu?</span>
		</p>
		{#if window.innerWidth <= 425}
			<img src={backTop} alt="" />
		{/if}
	</div>
	<div class="btnContentPers">
		{#each dataBtnPerson as item}
			<div class="contBtnPerson">
				<label for="" style={item.styleTxt}>{item.tipo}</label>
				<button class={item.classBtn} on:click={() => activeInfoPer(item.Key)} />
			</div>
		{/each}
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.selectPerson {
		display: block;
		position: absolute;
		width: 1000px;
	}
	.selectPerson.w100 {
		position: absolute;
		width: 100vw;
		left: 0;
	}
	.selectPerson:before {
		content: '';
		z-index: 2;
		width: 1000px;
		height: 100%;
		background: url('../../../assets/assets/web/elementos graficos/decoEspiritu.png');
		background-position: top center;
		background-size: contain;
		background-repeat: no-repeat;
		background-repeat: no-repeat;
		position: absolute;
		display: flex;
	}
	.topTextContent {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 195px;
		width: 100%;
		overflow: hidden;
	}
	.topTextContent > p {
		z-index: 2;
		padding: 30px;
		display: block;
		margin: 0;
		max-width: 780px;
		font-size: 20px;
	}
	.topTextContent > p > span {
		font-size: 30px;
		font-weight: bold;
		display: block;
		width: 100%;
		margin-top: 15px;
	}
	.topTextContent > img {
		display: block;
		position: absolute;
		z-index: 1;
		width: 390px;
		height: 200px;
	}
	.btnContentPers {
		display: flex;
		flex-flow: wrap;
		justify-content: space-around;
		align-items: center;
		position: relative;
		width: calc(85% - 20px);
		height: calc(100% - 300px);
		padding: 10px;
		margin: auto;
	}
	.contBtnPerson {
		display: flex;
		flex-direction: column;
		width: 20%;
		height: 200px;
	}
	.contBtnPerson > label {
		transition: 0.4s ease;
	}
	.contBtnPerson:hover label {
		margin-bottom: 10px;
		transform: scale(1.1);
		transition: 0.4s ease;
	}
	.contBtnPerson:hover button {
		transform: scale(1.1);
		transition: 0.4s ease;
	}
	.aguaBtn {
		width: 100%;
		height: calc(100% - 19px);
		background: url('../../../assets/assets/botones/agua.png');
		border: none;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: 100;
		transition: 0.4s ease;
	}
	.tierraBtn {
		width: 100%;
		height: calc(100% - 19px);
		background: url('../../../assets/assets/botones/tierra.png');
		border: none;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: 100;
		transition: 0.4s ease;
	}
	.fuegoBtn {
		width: 100%;
		height: calc(100% - 19px);
		background: url('../../../assets/assets/botones/fuego.png');
		border: none;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: 100;
		transition: 0.4s ease;
	}
	.aireBtn {
		width: 100%;
		height: calc(100% - 19px);
		background: url('../../../assets/assets/botones/aire.png');
		border: none;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: 100;
		transition: 0.4s ease;
	}
	.magiaBtn {
		width: 100%;
		height: calc(100% - 19px);
		background: url('../../../assets/assets/botones/magia.png');
		border: none;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: 100;
		transition: 0.4s ease;
	}
	.aguaBtn:hover {
		background: url('../../../assets/assets/botones/aguaHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.tierraBtn:hover {
		background: url('../../../assets/assets/botones/tierraHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.fuegoBtn:hover {
		background: url('../../../assets/assets/botones/fuegoHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.aireBtn:hover {
		background: url('../../../assets/assets/botones/aireHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.magiaBtn:hover {
		background: url('../../../assets/assets/botones/magiaHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	/* responsive */
	@media only screen and (max-width: 768px) {
		.topTextContent > p {
			width: calc(100% - 60px);
		}
		.selectPerson {
			margin: 0 auto;
			padding: 0 30px;
			width: calc(100% - 60px);
			position: relative;
		}
		.selectPerson.w100 {
			width: initial;
		}
		.btnContentPers {
			display: flex;
			flex-flow: wrap;
			justify-content: space-around;
			align-items: center;
			position: relative;
			width: 100%;
			height: auto;
			padding: 0;
			margin: 130px auto 0;
		}
		.contBtnPerson {
			display: flex;
			flex-direction: column;
			width: 33%;
			height: 200px;
		}
	}
	@media only screen and (max-width: 425px) {
		.selectPerson {
			width: 100%;
			padding: 0;
		}
		.selectPerson:before {
			background: url('../../../assets/assets/web/elementos graficos/decoEspiritu.png');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			background-repeat: no-repeat;
			width: 100%;
		}
		.btnContentPers {
			margin: 30px auto 0;
		}
		.contBtnPerson {
			height: 150px;
		}
		.topTextContent > img {
			width: calc(100% + 25px);
		}
		.infoPerson,
		.selectPerson:before {
			width: 100%;
		}
		.topTextContent > p {
			z-index: 2;
			font-size: inherit;
		}

		.topTextContent > p > span {
			font-size: inherit;
			font-weight: inherit;
			display: inline-block;
			width: inherit;
			margin-top: 0;
		}
	}
	@media only screen and (max-width: 320px) {
		div#selectPersonCont {
			padding: 0;
		}
		.topTextContent > p {
			font-size: 14px;
			padding: 0;
			width: calc(100% - 30px);
			line-height: 1.3;
		}
		
	}
</style>
