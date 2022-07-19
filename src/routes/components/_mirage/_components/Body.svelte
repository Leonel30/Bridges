<script>
	import iconEnunciado from '../../../../assets/assets/mirage/web/iconEnunciado.png';
	import { answer } from '$lib/models/data';
	import LandingMirage from './LandingMirage.svelte';
	import Resultado from './Resultado.svelte';

	export let giroRuleta;
	export let resultado;
	export let continueView;
	export let Click;
	export let count;

	setTimeout(() => {
		count('impactBody', 0);
	}, 2000);
	setTimeout(() => {
		count('energyBody', 1);
	}, 5000);
</script>

<div class={resultado ? 'contBotton mobile' : 'contBotton'}>
	<div class={resultado ? 'container resultado' : 'container'}>
		<div>
			<span>
				<span class="miImpacto">
					<span>
						<span>Mi impacto</span><span><span id="impactBody">00</span></span>
					</span>
				</span>
				<span class="miEnergia">
					<span>
						<span>Mi energia</span><span><span id="energyBody">00</span></span>
					</span>
				</span>
			</span>
			<span>
				<img src={iconEnunciado} alt="" />
				<span>Mensaje de red social diseñado para enfurecer a la gente.</span>
				{#if !continueView}
					<span class="btnRta" />
				{/if}
			</span>
		</div>
		{#if !resultado}
			<div>
				{#each answer as item}
					<button class="answer" on:click={() => (window.clickEscogeRespuesta.play(), giroRuleta())}
						>{item.texto}</button
					>
				{/each}
			</div>
		{:else if resultado && !continueView}
			<Resultado bind:continueView bind:resultado {...{ giroRuleta, Click, count }} />
		{:else}
			<LandingMirage {...{ Click, count }} />
		{/if}
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.contBotton > .container {
		width: 1000px;
		max-width: 1000px;
		height: 497px;
		background: url('../../../../assets/assets/mirage/web/contePreguntas.png');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: auto;
		position: relative;
	}
	.contBotton > .container.resultado {
		width: 1000px;
		max-width: 1000px;
		/* height: 100%; */
		background: url('../../../../assets/assets/mirage/web/conteResultadoRuleta.png');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: contain;
		position: relative;
	}
	.contBotton > .container > div:last-child {
		display: flex;
		position: absolute;
		width: calc(100% - 60px);
		height: 170px;
		justify-content: space-evenly;
		align-items: center;
		/* bottom: 0; */
		margin-top:7%;
		padding: 40px 30px 30px;
	}
	.contBotton > .container > div:last-child > button.answer {
		display: inline-flex;
		position: relative;
		width: calc(25% - 10px);
		height: 100%;
		border: none;
		border-radius: 20px;
		background: url('../../../../assets/assets/mirage/web/conteRta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto;
		justify-content: center;
		align-items: center;
		padding: 20px;
		font-family: 'Montserrat';
		font-size: 14px;
		font-weight: 400;
		color: #5c3c0f;
		text-align: left;
	}
	.contBotton > .container > div:last-child > button.answer:hover {
		background: url('../../../../assets/assets/mirage/web/conteRtaHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contBotton > .container > div:first-child {
		display: flex;
		position: relative;
		width: calc(100% - 30px);
		/* height: calc(100% - 255px); */
		padding: 15px 15px 0;
	}
	.contBotton > .container > div:first-child > span:first-child {
		display: inline-flex;
		position: relative;
		/* width: calc(45% - 20px);
		height: calc(100% - 45px); */
		width: 445px;
		height:90px;
		background: url('../../../../assets/assets/mirage/web/conteMiEnergyImpacto.png');
		background-position: top;
		background-repeat: no-repeat;
		background-size: auto;
		justify-content: space-evenly;
		align-items: center;
		box-shadow:  0px 2px 3px 1px #00000029;
		border-radius: 15px;
		/* padding: 20px 10px 25px; */
	}
	span.miImpacto {
		display: flex;
		position: relative;
		width: 183px;
		height: 54px;
		background: url('../../../../assets/assets/mirage/web/miImpacto.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		align-items: center;
		justify-content: flex-end;
	
	}
	span.miEnergia {
		display: flex;
		position: relative;
		width: 183px;
		height: 54px;
		background: url('../../../../assets/assets/mirage/web/miEnergy.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		align-items: center;
		justify-content: flex-end;
		
	}
	span.miImpacto > span,
	span.miEnergia > span {
		width: 55%;
		height: 65%;
		margin-right: 15px;
		margin-bottom: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color:#404040;
		font-family: 'Montserrat';
		font-weight: 500;
		font-size: 14px;
	}
	span.miImpacto > span > span:last-child,
	span.miEnergia > span > span:last-child {
		display: flex;
		position: relative;
		width: 45px;
		height: 25px;
		background: url('../../../../assets/assets/mirage/web/energyTotalGris.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-family: 'Montserrat';
		font-weight: 500;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		color: #fff;
	}
	.contBotton > .container > div:first-child > span:last-child {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		margin-top: 10px;
		width: calc(55% - 40px);
		padding: 0 20px;
	}
	.contBotton > .container > div:first-child > span:last-child > span {
		display: flex;
		position: relative;
		width: calc(100% - 130px);
		/* height: calc(100% - 35px); */
		margin-right: 25px;
	/* 	padding: 35px 15px 20px 30px; */
		justify-content: center;
		align-items: center;
		font-size: 16px;
		font-family: 'Montserrat';
		font-weight: normal;
	}
	.contBotton > .container > div:first-child > span:last-child > span.btnRta {
		display: none;
		position: absolute;
		width: 52.5px;
		height: 52.5px;
		border: none;
		background: url('../../../../assets/assets/mirage/web/iconRta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: -30px;
		right: 30px;
		padding: 0;
	}
	.contBotton > .container > div:first-child > span:last-child > img {
			margin-left: 5px;
			
		}
	/* @media only screen and (max-width: 1920px) {
		.contBotton > .container {
			background: url('/src/assets/assets/mirage/web/contePreguntas.png');
			background-repeat: no-repeat;
			background-position: top center;
			background-size: contain;
		}
		.contBotton > .container > div:first-child {
			height: 13%;
			padding: 15px 15px 0;
		}
		.contBotton > .container > div:first-child > span:first-child {
			padding: 15px 10px 25px;
			width: 45%;
		}
		.contBotton > .container > div:first-child > span:last-child > img {
			margin-left: 12px;
			margin-top:40px
		}
		.contBotton > .container > div:first-child > span:last-child {
			width: calc(55% - 20px);
			padding: 0 10px;
		}
		.contBotton > .container > div:last-child {
			position: relative;
			height: 300px;
		}
	} */
	/* @media only screen and (max-width: 1440px) {
		.contBotton > .container > div:first-child {
			height: 17%;
		}
		.contBotton > .container > div:first-child > span:first-child {
			width: calc(47% - 20px);
		}
		.contBotton > .container > div:first-child > span:last-child {
			width: calc(53% - 30px);
			padding: 0 15px;
		}
		.contBotton > .container > div:last-child {
			height: 340px;
			padding: 10px 30px;
			bottom: 10px;
		}
		.contBotton > .container > div:last-child > button.answer {
			height: calc(100% - 40px);
			background-size: contain;
		}
		.contBotton > .container > div:first-child > span:last-child > img {
			margin-left: 0px;
		}
	} */
	/* @media only screen and (max-width: 1366px) {
		.contBotton > .container > div:first-child > span:first-child {
			padding: 10px 10px 15px;
		}
		.contBotton > .container > div:first-child {
			height: 23%;
		}
	} */
	/* @media only screen and (max-width: 1280px) {
		.contBotton > .container > div:first-child {
			width: 90%;
			display: flex;
			margin: 0 auto;
		}
		.contBotton > .container > div:first-child > span:last-child {
			padding-left: 10px;
		}
		.contBotton > .container > div:first-child > span:last-child > img {
			margin-bottom: 10px;
		}
		.contBotton > .container > div:last-child {
			width: 88%;
			margin: 0 auto;
		}
		.contBotton > .container > div:last-child > button.answer {
			font-size: 12px;
		}
	} */
	@media only screen and (max-width: 768px) and (max-height: 1024px) {
		.contBotton {
			background: url('../../../../assets/assets/web/elementos graficos/fondo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.contBotton > .container {
			width: 100%;
			background: none;
		}
		.contBotton > .container > div:first-child {
			width: 100%;
			height: auto;
			padding: 15px 0px 0;
			flex-direction: column;
		}
		.contBotton > .container > div:first-child > span:first-child {
			width: calc(100% - 40px);
			height: 80px;
			background: #89908f;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			padding: 0px 20px;
			justify-content: space-evenly;
		}

		.contBotton > .container > div:first-child > span:last-child {
			width: 505px;
			height: 105px;
			background: url('../../../../assets/assets/mirage/tablet/conteCaso.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			padding: 0;
			margin: 30px auto;
		}
		.contBotton > .container > div:first-child > span:last-child > img {
			margin-left: 16px;
			width: 65px;
			height: 65px;
			margin-bottom: 0;
		}
		.contBotton > .container > div:first-child > span:last-child > span.btnRta {
			display: none;
		}
		.contBotton > .container > div:first-child > span:last-child > span {
			margin-right: 0;
		}
		.contBotton > .container > div:last-child {
			position: relative;
			width: calc(100% - 20px);
			padding: 0px 10px 10px;
			flex-direction: column;
			height: calc(100% - 60px);
			overflow: hidden auto;
			justify-content: flex-start;
		}
		.contBotton > .container > div:first-child > span:last-child > span {
			width: calc(100% - 100px);
			padding-left: 25px;
		}
		.contBotton > .container > div:last-child > button.answer {
			width: 375px;
			background: url('../../../../assets/assets/mirage/tablet/rtaCaso.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding: 20px 25px;
			margin-bottom: 30px;
		}
		.contBotton > .container > div:last-child > button.answer:hover {
			background: url('../../../../assets/assets/mirage/mobile/conteRtaHover.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.contBotton > .container.resultado {
			width: 100%;
			background: none;
		}
		span.miImpacto {
			background: url('../../../../assets/assets/mirage/tablet/miImpacto.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 224px;
			height: 55px;
		}
		span.miImpacto > span > span ,span.miEnergia >span > span {
			font-size: 16px;
		}
		span.miEnergia {
			background: url(../../../../assets/assets/mirage/tablet/miEnergy.png);
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 224px;
			height: 55px;
		}
		/* resultado */
		.contBotton.mobile {
			display: none;
		}
		.contBotton > .container > div:last-child {
			margin-top:0%;
		}
	}
	@media only screen and (max-width: 414px) {
		.contBotton > .container > div:first-child > span:last-child {
			width: 335px;
			height: 72px;
			background: url('../../../../assets/assets/mirage/tablet/conteCaso.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			padding: 0;
			margin: 20px auto;
		}
		.contBotton > .container > div:first-child > span:last-child > img {
			margin-left: 4px;
			width: 55px;
			height: 55px;
			margin-bottom: 0;
		}
		.contBotton > .container > div:first-child > span:last-child > span {
			width: calc(100% - 100px);
			font-size: 12px;
			padding: 15px 15px 20px 0;
		}
		.contBotton > .container > div:first-child > span:first-child {
			background: url('../../../../assets/assets/mirage/mobile/barraFondoEnergiaImpacto.png');
			background-position: top left;
			background-repeat: no-repeat;
			background-size: cover;
			justify-content: space-between;
			/* gap: 10px; */
		}
		span.miImpacto {
			background: url('../../../../assets/assets/mirage/mobile/miImpacto.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.miEnergia {
			background: url('../../../../assets/assets/mirage/mobile/miEnergia.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.miImpacto > span,
		span.miEnergia > span {
			width: 55%;
		}
		span.miImpacto > span,
		span.miEnergia > span {
			margin-right: 15px;
		}
		span.miImpacto > span > span,
		span.miEnergia > span > span {
			font-size: 12px;
		}
		.contBotton > .container > div:last-child {
			position: relative;
			width: 320px;
			padding: 0px 10px 10px;
			flex-direction: column;
			height: calc(100% - 235px);
			overflow: hidden auto;
			justify-content: flex-start;
			margin: 0 auto;
		}
		.contBotton > .container > div:last-child > button.answer {
			width: 100%;
			height: 88px;
			/* background: url('/static/assets/mirage/mobile/conteRta.png'); */
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding: 20px 25px;
			margin-bottom: 5px;
			font-size: 12px;
		}
		span.miImpacto,
		span.miEnergia {
			width: 162px;
			height: 55px;
		}
	}
	@media only screen and (max-width: 360px) {
	.contBotton > .container > div:first-child > span:first-child {
			gap: 10px;
		}
	}
</style>
