<script>
	import { fade } from 'svelte/transition';
	import ruletaCompleta from '../../../../assets/assets/mirage/web/ruletaCompleta.png';
	import punteroRuleta from '../../../../assets/assets/mirage/web/punteroRuleta.png';

	export let showText;
	export let gRuleta;
	export let giroRuleta;
	export let btnAct
</script>

<div class="ruleta" in:fade={{ duration: 500 }}>
	<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
		<img class="punteroRuleta" src={punteroRuleta} alt="" />
		<span class="contRuleta">
			<img
				class={gRuleta ? 'giroRuleta ruletaCompleta' : 'ruletaCompleta'}
				src={ruletaCompleta}
				alt=""
			/>
		</span>
		{#if showText}
			<span in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}> No paso nada… </span>
		{/if}
		<button class={btnAct ? "continuarRuleta" : "continuarRuleta block"} disabled={!btnAct && true } on:click={() => giroRuleta()}>Continuar</button>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.ruleta {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0, 0, 0, 0.2);
		z-index: 100;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(3px);
	}
	.ruleta > div {
		display: flex;
		position: relative;
		width: 550px;
		height: 510px;
		background: url('../../../../assets/assets/mirage/web/conteRuleta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.ruleta > div > span.contRuleta {
		position: absolute;
		display: flex;
		width: 186px;
		height: 186px;
		justify-content: center;
		align-items: center;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: 100px;
		border-radius: 100%;
		background: url('../../../../assets/assets/mirage/web/fondoRuleta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding-right: 0.5%;
	}
	img.punteroRuleta {
		display: flex;
		position: absolute;
		top: 45px;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 10;
		width: 75px;
	}
	.ruletaCompleta {
		transform: rotate(0deg);
		transition: 1s ease;
	}
	.ruletaCompleta.giroRuleta {
		transform: rotate(1440deg);
		transition: 5s cubic-bezier(0.15, 0.15, 0.15, 1);
	}
	.ruleta > div > span:nth-child(3) {
		display: flex;
		position: absolute;
		width: 370px;
		height: 60px;
		bottom: 110px;
		left: 0;
		right: 0;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		font-family: 'Montserrat';
		font-weight: 600;
		font-size: 20px;
	}
	button.continuarRuleta {
		display: flex;
		position: absolute;
		width: 206px;
		height: 54px;
		bottom: 40px;
		margin: 0 auto;
		left: 0;
		right: 0;
		border: none;
		background: url('../../../../assets/assets/mirage/web/btnRuleta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		font-family: 'Montserrat';
		font-size: 20px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
		color: #5c3c00;
		transition: .2s ease;
	}
	button.continuarRuleta.block {
		background: url('../../../../assets/assets/mirage/web/btnRuletaBlock.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		font-family: 'Montserrat';
		color: #7A7A7A;
	}
	button.continuarRuleta.block:hover {
		background: url('../../../../assets/assets/mirage/web/btnRuletaBlock.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transform: scale(1);
		cursor: initial;
	}
	button.continuarRuleta:hover {
		background: url('../../../../assets/assets/mirage/web/btnRuletaHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	@media only screen and (max-width: 425px) {
		.ruleta > div {
			width: 100%;
			height: 570px;
			background: url('../../../../assets/assets/mirage/mobile/conteRuleta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.ruleta > div > span:nth-child(3) {
			bottom: 120px;
		}
		button.continuarRuleta {
			bottom: 55px;
		}
		.ruleta > div > span.contRuleta {
			width: 216px;
			height: 216px;
			top: 120px;
		}
		img.punteroRuleta {
			top: 65px;
		}
		.ruletaCompleta {
			width: 90%;
		}
	}
</style>
