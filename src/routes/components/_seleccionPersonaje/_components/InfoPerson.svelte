<script>
	import { fly, fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { dataPersonaje, contElem, backElem } from '$lib/models/data';

	import candado from '../../../../assets/assets/elementos graficos/candado.png';

	export let contInfo;

	export let contSlider = 0;

	export let view;

	export let element;

	let move = 'left';

	const goLanding = (val) => {
		window.click.play();
		if (browser) {
			var container = document.getElementById('container');
			container.classList.add('landing');
		}
		element = val;
		view = 'landing';
	};

	const closeModalInfo = () => {
		window.click.play();
		contInfo = false;
		setTimeout(() => {
			if (browser) {
				var container = document.getElementById('selectPersonCont');
				container.classList.remove('w100');
			}
		}, 2000);
	};

	const moveCard = (dir) => {
		move = dir;
		window.click.play();
		if (contSlider === 4) {
			contSlider = move === 'right' ? contSlider - 4 : contSlider + 4;
		} else {
			contSlider = move === 'right' ? contSlider + 1 : contSlider - 1;
		}
		setTimeout(() => {
			window[contElem[contSlider] + 'Sound'].play();
		}, 1400);
	};
</script>

<div in:fade class={`infoPerson ${contElem[contSlider]}Cont`}>
	<div
		in:fly={move === 'left'
			? { x: 200, duration: 1000, delay: 1200 }
			: { x: -200, duration: 1000, delay: 1200 }}
		out:fly={move === 'left'
			? { x: 200, duration: 1000, delay: 1200 }
			: { x: -200, duration: 1000, delay: 1200 }}
		class={`contIntInfo ${backElem[contSlider]} 
		} `}
	>
		<div class={dataPersonaje[contSlider].classPersonaje}>
			<button class="btnClose" on:click={() => closeModalInfo()} />
			<label style={dataPersonaje[contSlider].styleLabel} class={dataPersonaje.classBtn} for=""
				>{dataPersonaje[contSlider].tipoTitle}</label
			>
			<img src={dataPersonaje[contSlider].img} alt="" />
		</div>
		{#if dataPersonaje[contSlider].tipoTitle === 'MAGIA'}
			<div class="contInfoTxtPer">
				<span>Texto</span>
				<p>
					{dataPersonaje[contSlider].fortaleza}
				</p>
			</div>
			<span class="Inactive" style="background-color: {dataPersonaje[contSlider].color}"
				><img src={candado} alt="" /></span
			>
		{:else}
			<div class="contInfoTxtPer">
				<span>Fortalezas</span>
				<p>
					{dataPersonaje[contSlider].fortaleza}
				</p>
				<span>Debilidades</span>
				<p>
					{dataPersonaje[contSlider].debilidades}
				</p>
			</div>
			<button class={dataPersonaje[contSlider].classBtn} on:click={() => goLanding(contSlider)}
				>Seleccionar</button
			>
		{/if}
	</div>
	<div
		class="btnScrollPerson"
		in:fly={move === 'left'
			? { x: 200, duration: 1000, delay: 1200 }
			: { x: -200, duration: 1000, delay: 1200 }}
		out:fly={move === 'left'
			? { x: 200, duration: 1000, delay: 1200 }
			: { x: -200, duration: 1000, delay: 1200 }}
	>
		<button class="btnLP" on:click={() => moveCard('left')} />
		<button class="btnRP" on:click={() => moveCard('right')} />
	</div>
</div>

<style>
	.backAgua,
	.backTierra,
	.backFuego,
	.backAire,
	.backMagia {
		position: relative;
		margin-left: 0;
		margin-right: 0;
		opacity: 1;
		transition: 1s ease;
	}
	.infoPerson {
		position: absolute;
		width: calc(100% - 60px);
		left: 0;
		height: calc(100% - 20px);
		top: 0;
		z-index: 1000;
		padding: 10px 30px;
		background: url('../../../../assets/assets/web/elementos graficos/fondo.png') top center
			no-repeat;
		background-size: cover;
		transition: 1s ease;
	}

	.contIntInfo > button {
		transform: scale(1);
	}
	.contIntInfo > button:hover {
		transform: scale(1.5);
	}
	.infoPerson:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.infoPerson.aguaCont:before {
		background: url('../../../../assets/assets/web/elementos graficos/colorAgua.png');
		transition: 0.5s ease;
	}
	.infoPerson.tierraCont:before {
		background: url('../../../../assets/assets/web/elementos graficos/colorTierra.png');
		transition: 0.5s ease;
	}
	.infoPerson.fuegoCont:before {
		background: url('../../../../assets/assets/web/elementos graficos/colorFuego_.png');
		transition: 0.5s ease;
	}
	.infoPerson.aireCont:before {
		background: url('../../../../assets/assets/web/elementos graficos/colorAire.png');
		transition: 0.5s ease;
	}
	.infoPerson.magiaCont:before {
		background: url('../../../../assets/assets/web/elementos graficos/colorMagia.png');
		transition: 0.5s ease;
	}
	.infoPerson > .contIntInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 675px;
		height: 90%;
		position: absolute;
		border-radius: 20px;
		background: #fff;
		box-shadow: 4px 3px 10px #00000064;
		padding: 20px;
		overflow: scroll;
	}
	.contTopInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.contInfoTxtPer {
		padding: 0 35px;
		width: calc(100% - 70px);
		margin: 70px 0 50px;
	}
	.contInfoTxtPer > span {
		font-size: 20px;
		font-family: 'Montserrat';
		font-weight: bold;
	}
	.contInfoTxtPer > p {
		margin: 10px 0 30px;
		font-size: 20px;
	}
	.infoPerson > .contIntInfo > button {
		margin-top: 20px;
		width: 228px;
		height: 42px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		color: #fff;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
	}
	.infoPerson > .contIntInfo > button.aguaColor {
		background: url('../../../../assets/assets/botones/selecAgua.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.tierraColor {
		background: url('../../../../assets/assets/botones/selecTierra.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.fuegoColor {
		background: url('../../../../assets/assets/botones/selecFuego.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.aireColor {
		background: url('../../../../assets/assets/botones/selecAire.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.aguaColor:hover {
		background: url('../../../../assets/assets/botones/selecAguaHover.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.tierraColor:hover {
		background: url('../../../../assets/assets/botones/selecTierraHover.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.fuegoColor:hover {
		background: url('../../../../assets/assets/botones/selecFuegoHover.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.infoPerson > .contIntInfo > button.aireColor:hover {
		background: url('../../../../assets/assets/botones/selecAireHover.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.backAgua > .contTopInfo {
		background: url('../../../../assets/assets/web/elementos graficos/decoAguaSelec.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.backTierra > .contTopInfo {
		background: url('../../../../assets/assets/web/elementos graficos/decoTierraSelec.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;

		transition: 0.4s ease;
	}
	.backFuego > .contTopInfo {
		background: url('../../../../assets/assets/web/elementos graficos/decoFuegoSelec.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.backAire > .contTopInfo {
		background: url('../../../../assets/assets/web/elementos graficos/decoAireSelec.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.backMagia > .contTopInfo {
		background: url('../../../../assets/assets/web/elementos graficos/decoMagiaSelec.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;

		transition: 0.4s ease;
	}
	.btnScrollPerson {
		position: absolute;
		z-index: 2000;
		width: 700px;
		display: flex;
		justify-content: space-between;
		top: 230px;
		border: none;
		height: 40px;
	}

	.btnScrollPerson > button {
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 100%;
	}
	button.btnLP {
		background: url('../../../../assets/assets/botones/arrowL.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	button.btnRP {
		background: url('../../../../assets/assets/botones/arrowR.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	button.btnLP:hover {
		background: url('../../../../assets/assets/botones/arrowLhover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	button.btnRP:hover {
		background: url('../../../../assets/assets/botones/arrowRhover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	span.Inactive {
		display: flex;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 70px;
		justify-content: center;
		align-items: center;
	}
	/* responsive */
	@media only screen and (max-width: 768px) {
		.infoPerson > .contIntInfo {
			width: calc(100% - 100px);
			height: 60%;
		}
		.btnScrollPerson {
			top: 0;
			bottom: 0;
			margin: auto;
		}
		.infoPerson > .contIntInfo > button {
			margin-top: 50px;
		}
	}
	@media only screen and (max-width: 425px) {
		.infoPerson {
			width: calc(100% - 60px);
			background: url('../../../../assets/assets/web/elementos graficos/fondo.png') top center
				no-repeat;
			background-size: cover;
		}
		.infoPerson > .contIntInfo {
			width: 80%;
			height: 90%;
		}
		.btnScrollPerson {
			position: absolute;
			z-index: 2000;
			width: 95%;
			display: flex;
			justify-content: space-between;
			border: none;
			height: 40px;
			bottom: 40%;
		}
		.contInfoTxtPer {
			padding: 0;
			width: 100%;
			margin: 40px 0 0;
		}
		.contInfoTxtPer > p {
			margin: 10px 0;
		}
		.infoPerson > .contIntInfo > button {
			margin-top: 20px;
		}
	}
	@media only screen and (max-width: 375px) {
		.btnScrollPerson {
			bottom: 30%;
		}
	}
	@media only screen and (max-width: 320px) {
		.btnScrollPerson {
			top: -120px;
		}
		.contInfoTxtPer {
			width: 100%;
			margin-top: 20px;
		}
		.contInfoTxtPer > span {
			font-size: 16px;
		}
		.contInfoTxtPer > p {
			font-size: 14px;
		}
		.btnScrollPerson {
			bottom: 0;
		}
	}
</style>
