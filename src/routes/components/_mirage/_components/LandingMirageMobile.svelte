<script>
	import { answerOld } from '$lib/models/data';
	import lineaHistorial from '../../../../assets/assets/mirage/web/lineaHistorial.png';
	import iconEnunciado from '../../../../assets/assets/mirage/web/iconEnunciado.png';

	
	export let count;

	setTimeout(() => {
		count('impactTMob', 0);
	}, 0);
	setTimeout(() => {
		count('energyTMob', 1);
	}, 3000);
	
	let cont = 0;
	let date = new Date();
	let fecha = date.toLocaleDateString();
	const ayerHoy = () => {
		if (cont === 0) {
			cont = 1;
			date.setDate(date.getDate() - 1);
			fecha = date.toLocaleDateString();
		} else {
			cont = 0;
			date.setDate(date.getDate() + 1);
			fecha = date.toLocaleDateString();
		}
	};
</script>

<div class="lMMobile">
	<div class="rMobileTop">
		<span class="miImpacto">
			<span>
				<span>Mi impacto</span><span id="impactTMob">00</span>
			</span>
		</span>
		<span class="miEnergia">
			<span>
				<span>Mi energia</span><span id="energyTMob">00</span>
			</span>
		</span>
	</div>
	<div class="sMobileSTop">
		<span class="totalImpac">
			<span class="txtITotal">Impacto total</span>
			<span class="marcadorITotal">420</span>
		</span>
		<span class="totalEnergy">
			<span class="txtETotal">Energía total</span>
			<span class="marcadorETotal">00</span>
		</span>
	</div>
	<div class="bodyMobLandMirage">
		<div class="enunciado">
			<span class="ver" on:click={() => ayerHoy()}>{cont === 0 ? 'Ayer' : 'Hoy'}</span>
			<img src={iconEnunciado} alt="" />
			<span>Mensaje de red social diseñado para enfurecer a la gente.</span>
		</div>
		<div class="conteHistorialRta">
			<span class="conteHoy">{cont === 1 ? 'Ayer' : 'Hoy'}<span>{fecha}</span></span>
			<div class="msjMob">
				<img src={iconEnunciado} alt="" />
				<span>Mensaje de red social diseñado para enfurecer a la gente.</span>
			</div>
			<div class="answerMob">
				<span class="rtaYo">
					<span>
						<span class="nomUser">@Yo3406</span>
						<span class="dm yo"
							><b>Respuesta directa:</b> ciertos mensajes ganan visibilidad si respondes o interactua</span
						>
					</span>
				</span>
				<img src={lineaHistorial} alt="" />
				{#each answerOld as item}
					<span class="rtaOtros">
						<span>
							<span class="nomUser">{item.usuario}</span>
							<span class="dm"><b>Respuesta directa:</b> {item.dm}</span>
						</span>
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.lMMobile {
		display: none;
	}
	@media only screen and (width: 768px) and (height: 1024px) {
		.lMMobile {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: calc(100% - 298px);
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
		.rMobileTop > span {
			display: flex;
			position: relative;
			width: calc(40% - 50px);
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
		span.miImpacto > span > span:last-child {
			background: url('../../../../assets/assets/mirage/mobile/numeroGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.miEnergia > span > span:last-child {
			background: url('../../../../assets/assets/mirage/mobile/numeroRojo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.sMobileSTop {
			display: flex;
			position: relative;
			margin-top: 15px;
			width: calc(100% - 200px);
			height: 60px;
			background: #fff;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			box-shadow: 0 0 10px 0px rgb(0 0 0 / 25%);
			justify-content: space-evenly;
			align-items: center;
			padding: 0 100px;
		}
		span.totalImpac {
			background: url('../../../../assets/assets/mirage/tablet/ImpactoTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.totalEnergy {
			background: url('../../../../assets/assets/mirage/tablet/energyTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.sMobileSTop > span.totalImpac,
		.sMobileSTop > span.totalEnergy {
			display: flex;
			position: relative;
			width: 200px;
			height: 43px;
			align-items: center;
			margin-bottom: 0;
			justify-content: flex-end;
		}
		.sMobileSTop > span.totalImpac > span.txtITotal,
		.sMobileSTop > span.totalEnergy > span.txtETotal {
			font-family: 'Montserrat';
			font-size: 14px;
			line-height: 1;
			color: #404040;
			font-weight: 600;
			width: calc(100% - 115px);
		}
		span.marcadorITotal {
			background: url('../../../../assets/assets/mirage/web/miEnergyVerde.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
			font-family: 'Montserrat';
			width: 37px;
			height: 23px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 15px;
		}
		span.marcadorETotal {
			background: url('../../../../assets/assets/mirage/web/miEnergyGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
			font-family: 'Montserrat';
			width: 37px;
			height: 23px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 15px;
		}
		.bodyMobLandMirage {
			display: block;
			position: relative;
			width: calc(100% - 30px);
			height: calc(100% - 200px);
			padding: 15px;
			overflow: hidden auto;
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
			width: 85px;
			margin-left: 20px;
			margin-right: 20px;
		}
		.enunciado > span:last-child {
			font-family: 'Montserrat';
			font-size: 16px;
			padding: 0 25px;
		}
		.conteHistorialRta {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 505px;
			height: calc(100vh - 30px);
			background: url('../../../../assets/assets/mirage/mobile/conteHistorialRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin: 0 auto;
			margin-top: 30px;
		}
		.msjMob {
			display: flex;
			align-items: center;
			padding: 30px 5px 10px;
			width: calc(100% - 10px);
			height: calc(16% - 25px);
		}
		.msjMob > img {
			width: 85px;
			margin: 0 30px 0 15px;
		}
		.msjMob > span {
			font-family: 'Montserrat';
			font-size: 16px;
			padding: 0 10px;
			width: calc(100% - 130px);
		}
		.answerMob {
			display: block;
			flex-direction: column;
			padding: 20px;
			width: calc(100% - 40px);
			height: calc(97% - 140px);
			overflow: hidden auto;
		}
		span.rtaYo {
			display: flex;
			position: relative;
			width: 415px;
			height: 150px;
			background: url('../../../../assets/assets/mirage/mobile/ConteMiRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin: 0 auto;
			margin-bottom: 10px;
		}
		span.rtaOtros {
			display: flex;
			position: relative;
			width: 415px;
			height: 150px;
			background: url('../../../../assets/assets/mirage/mobile/ConteOtrosRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin: 0 auto;
			margin-bottom: 10px;
		}
		.answerMob > img {
			margin-bottom: 10px;
		}
		span.rtaYo > span,
		span.rtaOtros > span {
			display: flex;
			flex-direction: column;
			width: calc(100% - 90px);
			height: calc(100% - 20px);
			padding: 10px 10px 10px 100px;
		}
		span.rtaYo > span > span.nomUser,
		span.rtaOtros > span > span.nomUser {
			display: flex;
			width: calc(100% - 10px);
			height: 20px;
			justify-items: flex-start;
			align-items: center;
			padding: 10px 5px;
			font-family: 'Montserrat';
			font-size: 14px;
			color: #646f6f;
			font-weight: 700;
		}
		span.rtaYo > span > span.dm,
		span.rtaOtros > span > span.dm {
			display: block;
			position: relative;
			width: calc(100% - 10px);
			height: calc(100% - 80px);
			padding: 15px 5px;
			font-size: 16px;
			font-family: 'Montserrat';
		}
		span.dm {
			color: #ffffff;
		}
		span.dm.yo {
			color: #404040;
		}
		span.conteHoy {
			display: flex;
			position: absolute;
			top: -10px;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 147px;
			height: 30px;
			align-items: center;
			background: url('../../../../assets/assets/mirage/web/conteAyer.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
			padding-right: 10px;
		}
		span.conteHoy > span {
			margin-left: 5px;
		}
		span.ver {
			display: flex;
			position: absolute;
			background: url('../../../../assets/assets/mirage/mobile/btnVerHover.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			border: none;
			width: 85px;
			height: 30px;
			bottom: -10px;
			right: 0px;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
			padding-right: 20px;
			cursor: pointer;
			align-items: center;
		}
		span.ver:hover {
			background: url('../../../../assets/assets/mirage/web/btnVerHover.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
	}
	@media only screen and (max-width: 414px) {
		.lMMobile {
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
			color: #fff;
			font-family: 'Montserrat';
			font-size: 12px;
		}
		span.miImpacto > span > span:last-child {
			background: url('../../../../assets/assets/mirage/mobile/numeroGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.miEnergia > span > span:last-child {
			background: url('../../../../assets/assets/mirage/mobile/numeroRojo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.sMobileSTop {
			display: flex;
			position: relative;
			margin-top: 15px;
			width: calc(100% - 40px);
			height: 60px;
			background: url('../../../../assets/assets/mirage/mobile/barraFondoEnergyImpactoTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			box-shadow: 0 0 10px 0px rgb(0 0 0 / 25%);
			justify-content: space-evenly;
			align-items: center;
			padding: 0 20px;
		}
		span.totalImpac {
			background: url('../../../../assets/assets/mirage/web/ImpactoTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.totalEnergy {
			background: url('../../../../assets/assets/mirage/web/energyTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.sMobileSTop > span.totalImpac,
		.sMobileSTop > span.totalEnergy {
			display: flex;
			position: relative;
			width: calc(50% - 35px);
			height: calc(100% - 10px);
			padding: 5px 0px 5px 35px;
			align-items: center;
			margin-bottom: 0;
			justify-content: space-around;
		}
		.sMobileSTop > span.totalImpac > span.txtITotal,
		.sMobileSTop > span.totalEnergy > span.txtETotal {
			font-family: 'Montserrat';
			font-size: 14px;
			line-height: 1;
			color: #404040;
			font-weight: 600;
			width: calc(100% - 65px);
		}
		span.marcadorITotal {
			background: url('../../../../assets/assets/mirage/web/miEnergyVerde.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
			font-family: 'Montserrat';
			width: 37px;
			height: 23px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 5px;
		}
		span.marcadorETotal {
			background: url('../../../../assets/assets/mirage/web/miEnergyGris.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
			font-family: 'Montserrat';
			width: 37px;
			height: 23px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 5px;
		}
		.bodyMobLandMirage {
			display: block;
			position: relative;
			width: calc(100% - 30px);
			height: calc(100% - 200px);
			padding: 15px;
			overflow: hidden auto;
		}
		.enunciado {
			display: flex;
			position: relative;
			width: 100%;
			height: 75px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/conteEnunciado.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.enunciado > img {
			width: 55px;
			margin-left: 9px;
			margin-right: 20px;
		}
		.enunciado > span {
			font-family: 'Montserrat';
			font-size: 13px;
		}
		.conteHistorialRta {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 100%;
			height: calc(100vh - 148px);
			background: url('../../../../assets/assets/mirage/mobile/conteHistorialRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-top: 20px;
		}
		.msjMob {
			display: flex;
			align-items: center;
			padding: 20px 5px 10px;
			width: calc(100% - 10px);
			height: calc(16% - 25px);
		}
		.msjMob > img {
			width: 20%;
			margin: 0 10px 0 3px;
		}
		.msjMob > span {
			font-family: 'Montserrat';
			font-size: 13px;
			padding: 0 10px;
		}
		.answerMob {
			display: block;
			flex-direction: column;
			padding: 20px;
			width: calc(100% - 40px);
			height: calc(97% - 140px);
			overflow: hidden auto;
		}
		span.rtaYo {
			display: flex;
			position: relative;
			width: 100%;
			height: 130px;
			background: url('../../../../assets/assets/mirage/mobile/ConteMiRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
		span.rtaOtros {
			display: flex;
			position: relative;
			width: 100%;
			height: 130px;
			background: url('../../../../assets/assets/mirage/mobile/ConteOtrosRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
		.answerMob > img {
			margin-bottom: 10px;
		}
		span.rtaYo > span,
		span.rtaOtros > span {
			display: flex;
			flex-direction: column;
			width: calc(100% - 90px);
			height: calc(100% - 20px);
			padding: 10px 10px 10px 80px;
		}
		span.rtaYo > span > span.nomUser,
		span.rtaOtros > span > span.nomUser {
			display: flex;
			width: calc(100% - 10px);
			height: 20px;
			justify-items: flex-start;
			align-items: center;
			padding: 10px 5px;
			font-family: 'Montserrat';
			font-size: 14px;
			color: #646f6f;
			font-weight: 700;
		}
		span.rtaYo > span > span.dm,
		span.rtaOtros > span > span.dm {
			display: block;
			position: relative;
			width: calc(100% - 10px);
			height: calc(100% - 50px);
			padding: 6px 5px;
			font-size: 12px;
			font-family: 'Montserrat';
		}
		span.dm {
			color: #ffffff;
		}
		span.dm.yo {
			color: #404040;
		}
		span.conteHoy {
			display: flex;
			position: absolute;
			top: -10px;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 135px;
			height: 30px;
			align-items: center;
			background: url('../../../../assets/assets/mirage/web/conteAyer.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
			padding-right: 10px;
		}
		span.conteHoy > span {
			margin-left: 5px;
		}
		span.ver {
			display: flex;
			position: absolute;
			background: url('/static/assets/mirage/web/btnVer.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			border: none;
			width: 85px;
			height: 30px;
			bottom: -10px;
			right: 0px;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
			padding-right: 20px;
			cursor: pointer;
			align-items: center;
		}
		span.ver:hover {
			background: url('../../../../assets/assets/mirage/web/btnVerHover.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
	}
	@media only screen and (max-width: 411px) {
		.conteHistorialRta {
			height: 100vh;
		}
	}
	@media only screen and (max-width: 411px) and (max-height: 823px) {
		.conteHistorialRta {
			height: calc(100vh - 80px);
		}
	}
	@media only screen and (max-width: 393px) {
		.conteHistorialRta {
			height: calc(100vh - 70px);
		}
	}
	@media only screen and (max-width: 393px) and (max-height: 851px) {
		.conteHistorialRta {
			height: calc(100% + 220px);
		}
	}
	@media only screen and (max-width: 375px) {
		.enunciado {
			display: flex;
			position: relative;
			width: 100%;
			height: 60px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/mirage/mobile/conteEnunciado.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.enunciado > img {
			width: 55px;
			margin-left: 9px;
			margin-right: 20px;
		}
		.enunciado > span {
			font-family: 'Montserrat';
			font-size: 13px;
		}
		.conteHistorialRta {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 100%;
			height: 100vh;
			background: url('../../../../assets/assets/mirage/mobile/conteHistorialRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-top: 20px;
		}
		.msjMob {
			display: flex;
			align-items: center;
			padding: 20px 5px 10px;
			width: calc(100% - 10px);
			height: calc(16% - 25px);
		}
		.msjMob > img {
			width: 20%;
			margin: 0 10px 0 0;
		}
		.msjMob > span {
			font-family: 'Montserrat';
			font-size: 13px;
			padding: 0 10px;
		}
		.answerMob {
			display: flex;
			flex-direction: column;
			padding: 20px;
			width: calc(100% - 40px);
			height: calc(97% - 140px);
			overflow: hidden auto;
		}
		span.rtaYo {
			display: flex;
			position: relative;
			width: 100%;
			height: 100px;
			background: url('../../../../assets/assets/mirage/mobile/ConteMiRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
		span.rtaOtros {
			display: flex;
			position: relative;
			width: 100%;
			height: 100px;
			background: url('../../../../assets/assets/mirage/mobile/ConteOtrosRta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
		.answerMob > img {
			margin-bottom: 10px;
		}
		span.rtaYo > span,
		span.rtaOtros > span {
			display: flex;
			flex-direction: column;
			width: calc(100% - 90px);
			height: calc(100% - 20px);
			padding: 10px 10px 10px 80px;
		}
		span.rtaYo > span > span.nomUser,
		span.rtaOtros > span > span.nomUser {
			display: flex;
			width: calc(100% - 10px);
			height: 20px;
			justify-items: flex-start;
			align-items: center;
			padding: 3px 5px;
			font-family: 'Montserrat';
			font-size: 14px;
			color: #646f6f;
			font-weight: 700;
		}
		span.rtaYo > span > span.dm,
		span.rtaOtros > span > span.dm {
			display: block;
			position: relative;
			width: calc(100% - 10px);
			height: calc(100% - 50px);
			padding: 6px 5px;
			font-size: 12px;
			font-family: 'Montserrat';
		}
		span.dm {
			color: #ffffff;
		}
		span.dm.yo {
			color: #404040;
		}
		span.conteHoy {
			display: flex;
			position: absolute;
			top: -10px;
			left: 0;
			right: 0;
			margin: 0 auto;
			height: 30px;
			align-items: center;
			background: url('../../../../assets/assets/mirage/web/conteAyer.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
		}
		span.ver {
			display: flex;
			position: absolute;
			background: url('../../../../assets/assets/mirage/mobile/btnVerHover.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			border: none;
			width: 85px;
			height: 30px;
			bottom: -10px;
			right: 0px;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 600;
			justify-content: flex-end;
			font-size: 14px;
			padding-right: 20px;
			cursor: pointer;
			align-items: center;
		}
		span.ver:hover {
			background: url('../../../../assets/assets/mirage/mobile/btnVerHover.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
	}
</style>
