<script>
	import iconEnunciado from '../../../../assets/assets/mirage/web/iconEnunciado.png';
	import ruletaCompleta from '../../../../assets/assets/mirage/web/ruletaCompleta.png';
	import punteroRuleta from '../../../../assets/assets/mirage/web/punteroRuleta.png';
	export let resultado;
	export let continueView;
	export let count

	setTimeout(() => {
		count('impactMob', 0);
	}, 0);
	setTimeout(() => {
		count('energyMob', 1);
	}, 3000);
</script>

<div class="resultadoMobile">
	<div class="rMobileTop">
		<span class="miImpacto">
			<span>
				<span>Mi impacto</span><span id="impactMob">00</span>
			</span>
		</span>
		<span class="miEnergia">
			<span>
				<span>Mi energia</span><span id="energyMob">00</span>
			</span>
		</span>
	</div>
	<div class="bodyScrollMobile">
		<div class="enunciado">
			<img src={iconEnunciado} alt="" />
			<span>Mensaje de red social diseñado para enfurecer a la gente.</span>
		</div>
		<div class="contMsj">
			<span class="msj">
				Ciertos mensajes ganan visibilidad si respondes o interactúas con ellos. No generan
				conversación sino publicidad.
			</span>
		</div>
		<div class="estadisticas">
			<div class="topEstadisticas">
				<span>
					<img src={punteroRuleta} alt="" />
					<img src={ruletaCompleta} alt="" />
				</span>
				<span>
					<span class="title">¿Que fue lo que pasó?</span>
					<span class="text"
						>Ciertos mensajes ganan visibilidad si respondes o interactúas con ellos. No generan
						conversación sino publicidad.</span
					>
				</span>
			</div>
			<button class="reintentar" on:click={() => (resultado = false, window.click.play())}>Reintentar (0/1)</button>
			<div class="enerImpac">
				<span>
					<span>Impacto</span>
					<span>0</span>
				</span>
				<span>
					<span>Energía</span>
					<span>0</span>
				</span>
			</div>
			<button class="continuar" on:click={() => (continueView = true, window.click.play())}>Continuar</button>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.resultadoMobile {
		display: none;
	}
	@media only screen and (width: 768px) and (height: 1024px) {
		.resultadoMobile {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: calc(100% - 258px);
		}
		.rMobileTop {
			width: calc(100% - 40px);
			height: 80px;
			background: #89908f;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			padding: 0px 20px;
			justify-content: space-evenly;
			display: flex;
			align-items: center;
		}
		.bodyScrollMobile {
			display: block;
			position: relative;
			overflow: hidden auto;
			width: calc(100% - 30px);
			height: calc(100% - 125px);
			padding: 15px;
		}
		.rMobileTop > span {
			display: flex;
			position: relative;
			height: 54px;
			align-items: center;
		}
		span.miImpacto > span,
		span.miEnergia > span {
			width: 55%;
			height: 65%;
			margin-bottom: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: 'Montserrat';
			font-weight: 500;
			font-size: 14px;
			margin-right: 10px;
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
		span.miImpacto > span > span,span.miEnergia > span > span {
			font-size: 16px;
			color:#404040;
		}
		
		span.miImpacto,
		span.miEnergia {
			display: flex;
			justify-content: flex-end;
			width: 224px;
			height: 54px;
		}
		span.miImpacto {
			background: url('../../../../assets/assets/mirage/tablet/miImpacto.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		span.miEnergia {
			background: url('../../../../assets/assets/mirage/tablet/miEnergy.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.enunciado {
			display: flex;
			position: relative;
			width: 505px;
			height: 105px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/conteEnunciado.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin: 0 auto;
		}
		.enunciado > img {
			width: 65px;
			margin: 0 20px;
		}
		.enunciado > span {
			font-family: 'Montserrat';
			font-size: 16px;
			padding: 0 10px;
		}
		.contMsj {
			display: flex;
			position: relative;
			width: 380px;
			height: 115px;
			justify-content: flex-end;
			align-items: center;
			margin: 0 auto;
			margin-right: 115px;
			margin-top: 25px;
		}
		.contMsj > span.msj {
			display: flex;
			position: relative;
			width: 90%;
			height: 100%;
			background: url('../../../../assets/assets/mirage/mobile/conteRtaHover.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			font-size: 14px;
			font-family: 'Montserrat';
			justify-content: flex-start;
			align-items: center;
			padding: 0px 20px;
			color: #5c3c0f;
			font-weight: 600;
		}
		.estadisticas {
			display: flex;
			flex-direction: column;
			width: 505px;
			height: calc(100% - 170px);
			background: url('../../../../assets/assets/mirage/tablet/conteEstadistica.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			align-items: center;
			margin: 0 auto;
			margin-top: 25px;
		}
		.topEstadisticas {
			display: flex;
			position: relative;
			width: calc(100% - 30px);
			height: calc(33% - 40px);
			padding: 25px 25px 10px;
		}
		.topEstadisticas > span:first-child {
			display: flex;
			position: relative;
			width: 30%;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
		.topEstadisticas > span:first-child > img:first-child {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			width: 30%;
			margin: 0 auto;
			z-index: 1;
		}
		.topEstadisticas > span:first-child > img:last-child {
			display: block;
			position: relative;
			width: 55%;
			margin-top: 25px;
		}
		.topEstadisticas > span:last-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			width: 70%;
			height: 100%;
		}
		.topEstadisticas > span:last-child > span {
			font-family: 'Montserrat';
			font-size: 12px;
			display: block;
		}
		.topEstadisticas > span:last-child > span:first-child {
			font-weight: 600;
			margin-bottom: 10px;
		}
		.estadisticas > button {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 45px;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 700;
			color: #5c3c0f;
			padding-left: 40px;
		}
		button.reintentar {
			background: url('../../../../assets/assets/mirage/mobile/btnRetry.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		button.continuar {
			background: url('../../../../assets/assets/mirage/mobile/btnContinuar.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding-left: 0;
			padding-right: 40px;
		}
		.enerImpac {
			display: flex;
			flex-direction: column;
			width: 80%;
			justify-content: center;
			align-items: center;
			margin: 40px 0 40px;
		}
		.enerImpac > span {
			width: 55%;
			padding: 0 20px 0 60px;
			justify-content: space-between;
			align-items: center;
			height: 38px;
			display: flex;
			font-family: 'Montserrat';
			font-weight: 600;
			font-size: 14px;
		}
		span.miImpacto > span,
		span.miEnergia > span {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 5px;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 600;
			
		}
		span.miImpacto > span > span:last-child,
		span.miEnergia > span > span:last-child {
			display: flex;
			position: relative;
			width: 37px;
			height: 23px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/numeroGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-family: 'Montserrat';
			font-size: 12px;
			margin-left: 10px;
		}
		@media only screen and (max-width: 375px) {
			.estadisticas {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				background: url('../../../../assets/assets/mirage/mobile/conteEstadistica.png');
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				align-items: center;
			}
			.topEstadisticas {
				display: flex;
				position: relative;
				width: calc(100% - 30px);
				height: calc(40% - 40px);
				padding: 25px 25px 10px;
			}
			.topEstadisticas > span:first-child {
				display: flex;
				position: relative;
				width: 29%;
				height: 100%;
				justify-content: center;
				align-items: center;
			}
			.topEstadisticas > span:first-child > img:first-child {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				width: 40%;
				margin: 0 auto;
				z-index: 1;
			}
			.topEstadisticas > span:first-child > img:last-child {
				display: block;
				position: relative;
				width: 85%;
				margin-top: 25px;
			}
			.topEstadisticas > span:last-child {
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
				width: 71%;
				height: 100%;
			}
			.topEstadisticas > span:last-child > span {
				font-family: 'Montserrat';
				font-size: 12px;
				display: block;
			}
			.topEstadisticas > span:last-child > span:first-child {
				font-weight: 600;
				margin-bottom: 10px;
			}
			.estadisticas > button {
				display: flex;
				position: relative;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 45px;
				font-family: 'Montserrat';
				font-size: 12px;
				font-weight: 700;
				color: #5c3c0f;
				padding-left: 40px;
			}
			button.reintentar {
				background: url('../../../../assets/assets/mirage/mobile/btnRetry.png');
				border: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			button.continuar {
				background: url('../../../../assets/assets/mirage/mobile/btnContinuar.png');
				border: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				padding-left: 0;
				padding-right: 40px;
			}
		}
	}
	@media only screen and (max-width: 414px) {
		.resultadoMobile {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: calc(100% - 160px);
		}
		.rMobileTop {
			display: flex;
			position: relative;
			width: 100%;
			height: 64px;
			background: url('../../../../assets/assets/mirage/mobile/barraFondoEnergyImpacto.png');
			background-position: bottom center;
			background-repeat: no-repeat;
			background-size: contain;
			box-shadow: 0 5px 10px 0 rgb(0 0 0 / 25%);
			padding-top: 30px;
			justify-content: space-around;
			align-items: center;
		}
		.bodyScrollMobile {
			display: block;
			position: relative;
			overflow: hidden auto;
			width: calc(100% - 30px);
			height: calc(100% - 125px);
			padding: 15px;
		}
		.rMobileTop > span {
			display: flex;
			position: relative;
			width: calc(40% - 50px);
			height: 54px;
			padding-left: 50px;
			align-items: center;
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
		.enunciado {
			display: flex;
			position: relative;
			width: 100%;
			height: 70px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/conteEnunciado.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.enunciado > img {
			width: 55px;
			margin-left: 15px;
			margin-right: 30px;
		}
		.enunciado > span {
			font-family: 'Montserrat';
			font-size: 13px;
		}
		.contMsj {
			display: flex;
			position: relative;
			width: 100%;
			height: 110px;
			justify-content: flex-end;
			align-items: center;
			margin: 10px 0 0;
		}
		.contMsj > span.msj {
			display: flex;
			position: relative;
			width: 90%;
			height: 100%;
			background: url('../../../../assets/assets/mirage/mobile/conteRtaHover.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			font-size: 13px;
			font-family: 'Montserrat';
			justify-content: flex-start;
			align-items: center;
			padding: 0px 20px;
		}
		.estadisticas {
			display: flex;
			flex-direction: column;
			width: 100%;
			/* height: calc(100% - 200px); */
			height:382px;
			background: url('../../../../assets/assets/mirage/mobile/conteEstadistica.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			align-items: center;
		}
		.topEstadisticas {
			display: flex;
			position: relative;
			width: calc(100% - 30px);
			height: calc(40% - 40px);
			padding: 25px 25px 10px;
		}
		.topEstadisticas > span:first-child {
			display: flex;
			position: relative;
			width: 29%;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
		.topEstadisticas > span:first-child > img:first-child {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			width: 40%;
			margin: 0 auto;
			z-index: 1;
		}
		.topEstadisticas > span:first-child > img:last-child {
			display: block;
			position: relative;
			width: 85%;
			margin-top: 25px;
		}
		.topEstadisticas > span:last-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			width: 71%;
			height: 100%;
		}
		.topEstadisticas > span:last-child > span {
			font-family: 'Montserrat';
			font-size: 12px;
			display: block;
		}
		.topEstadisticas > span:last-child > span:first-child {
			font-weight: 600;
			margin-bottom: 10px;
		}
		.estadisticas > button {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 45px;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 700;
			color: #5c3c0f;
			padding-left: 40px;
		}
		button.reintentar {
			background: url('../../../../assets/assets/mirage/mobile/btnRetry.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		button.continuar {
			background: url('../../../../assets/assets/mirage/mobile/btnContinuar.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding-left: 0;
			padding-right: 40px;
		}
		.enerImpac {
			display: flex;
			flex-direction: column;
			width: 80%;
			justify-content: center;
			align-items: center;
			margin: 25px 0 40px;
		}
		.enerImpac > span {
			width: calc(100% - 80px);
			padding: 0 20px 0 60px;
			justify-content: space-between;
			align-items: center;
			height: 32px;
			display: flex;
			font-family: 'Montserrat';
			font-weight: 600;
			font-size: 14px;
		}
		span.miImpacto > span,
		span.miEnergia > span {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 5px;
			font-family: 'Montserrat';
			font-size: 12px;
			color:#404040;
			font-weight: 600;
		}
		span.miImpacto > span > span:last-child,
		span.miEnergia > span > span:last-child {
			display: flex;
			position: relative;
			width: 37px;
			height: 23px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/numeroGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-family: 'Montserrat';
			font-size: 12px;
		}
		@media only screen and (max-width: 375px) {
			.estadisticas {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				background: url('../../../../assets/assets/mirage/mobile/conteEstadistica.png');
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				align-items: center;
			}
			.topEstadisticas {
				display: flex;
				position: relative;
				width: calc(100% - 30px);
				height: calc(40% - 40px);
				padding: 25px 25px 10px;
			}
			.topEstadisticas > span:first-child {
				display: flex;
				position: relative;
				width: 29%;
				height: 100%;
				justify-content: center;
				align-items: center;
			}
			.topEstadisticas > span:first-child > img:first-child {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				width: 40%;
				margin: 0 auto;
				z-index: 1;
			}
			.topEstadisticas > span:first-child > img:last-child {
				display: block;
				position: relative;
				width: 85%;
				margin-top: 25px;
			}
			.topEstadisticas > span:last-child {
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
				width: 71%;
				height: 100%;
			}
			.topEstadisticas > span:last-child > span {
				font-family: 'Montserrat';
				font-size: 12px;
				display: block;
			}
			.topEstadisticas > span:last-child > span:first-child {
				font-weight: 600;
				margin-bottom: 10px;
			}
			.estadisticas > button {
				display: flex;
				position: relative;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 45px;
				font-family: 'Montserrat';
				font-size: 12px;
				font-weight: 700;
				color: #5c3c0f;
				padding-left: 40px;
			}
			button.reintentar {
				background: url('../../../../assets/assets/mirage/mobile/btnRetry.png');
				border: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
			button.continuar {
				background: url('../../../../assets/assets/mirage/mobile/btnContinuar.png');
				border: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				padding-left: 0;
				padding-right: 40px;
			}
		}
	}
	@media only screen and (max-width: 375px) {
		.enerImpac {
			margin: 25px 0 25px;
		}
	}
</style>
