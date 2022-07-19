<script>
	import { onMount } from 'svelte';
	import { answerOld } from '$lib/models/data';
	import lineaHistorial from '../../../../assets/assets/mirage/web/lineaHistorial.png';
	import iconEnunciado from '../../../../assets/assets/mirage/web/iconEnunciado.png';
	export let count;

	let cont = 0;
	let date = new Date();
	let fecha = date.toLocaleDateString();
	const ayerHoy = () => {
		window.click.play();
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
	let move;
	let contador = 0;
	const scrollUpBtn = () => {
		window.click.play();
		let content = document.getElementById('contAnswer');
		let altoCard = document.getElementById('rtaYo').clientHeight;
		if (move !== 0) {
			move = altoCard * contador;
			contador--;
		} else {
			move = 0;
		}
		content.scrollTo(0, move);
	};

	const scrollDownBtn = () => {
		window.click.play();
		let content = document.getElementById('contAnswer');
		let altoCard = document.getElementById('rtaYo').clientHeight;
		if (move !== altoCard * answerOld.length) {
			move = altoCard * contador;
			contador++;
		} else {
			move = altoCard * answerOld.length;
		}
		content.scrollTo(0, move);
	};

	setTimeout(() => {
		count('impactTotal', 0);
	}, 0);
	setTimeout(() => {
		count('energyTotal', 1);
	}, 3000);
</script>

<div class="landingMirage">
	<div class="cont1">
		<div class="contEnerImpc">
			<span class="totalImpac">
				<span class="contInfo">
					<span class="txtITotal">Impacto total</span>
					<span class="marcadorITotal" id="impactTotal">00</span>
				</span>
			</span>
			<span class="totalEnergy">
				<span class="contInfo">
					<span class="txtETotal">Energía total</span>
					<span class="marcadorETotal" id="energyTotal">00</span>
				</span>
			</span>
		</div>
		<div class="msjRedInt">
			<img src={iconEnunciado} alt="" />
			<span class="enunciado">Mensaje de red social diseñado para enfurecer a la gente.</span>
			<span class="ver" on:click={() => ayerHoy()}>{cont === 0 ? 'Ayer' : 'Hoy'}</span>
		</div>
	</div>
	<div class="cont2">
		<span class="conteHoy">{cont === 1 ? 'Ayer' : 'Hoy'}<span>{fecha}</span></span>
		<div class="contBtnScroll">
			<button id="btnUp" class="btnUp" on:click={() => scrollUpBtn()} />
			<button id="btnDown" class="btnDown" on:click={() => scrollDownBtn()} />
		</div>
		<div id="contAnswer" class="contAnswer">
			<span id="rtaYo" class="rtaYo">
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

<!-- markup (zero or more items) goes here -->
<style>
	.landingMirage {
		display: flex;
		position: relative;
		width: calc(100% - 30px);
		height: 330px;
		justify-content: space-evenly;
		align-items: center;
		bottom: 0;
		padding: 25px 15px 0px;
	}
	.cont1 {
		display: flex;
		position: relative;
		flex-direction: column;
		width: calc(50% - 35px);
		height: 100%;
		padding: 45px 15px 20px 5px;
	}
	.cont1 > div {
		display: flex;
		position: relative;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 70px;
	}
	.cont1 > .contEnerImpc {
		max-width: 90%;
		margin: 0 auto;
	}
	.contEnerImpc {
		background: url('../../../../assets/assets/mirage/web/fondoEnergyImpactoTotal.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.cont1 span {
		display: flex;
		position: relative;
		justify-content: space-evenly;
		align-items: center;
		width: 45%;
		height: 70%;
	}
	span.totalImpac {
		background: url('../../../../assets/assets/mirage/web/ImpactoTotal.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	span.totalEnergy {
		background: url('../../../../assets/assets/mirage/web/energyTotal.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.cont1 > .msjRedInt {
		background: url('../../../../assets/assets/mirage/web/conteEnunciado.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 75px;
		margin-top: 40px;
	}
	.cont2 {
		display: flex;
		position: relative;
		width: calc(55% - 40px);
		height: 100%;
		padding: 10px 14px 0px 0px;
		border-bottom-left-radius: 25px;
	}
	.contBtnScroll {
		display: flex;
		flex-direction: column;
		width: 50px;
		height: calc(100% - 40px);
		position: absolute;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		right: 15px;
	}
	.contBtnScroll > button {
		display: flex;
		position: relative;
		border: none;
		width: 30px;
		height: 30px;
	}
	button.btnUp {
		background: url('../../../../assets/assets/mirage/web/ArrowUp.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	button.btnDown {
		background: url('../../../../assets/assets/mirage/web/ArrowDown.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contAnswer {
		display: block;
		width: calc(100% - 70px);
		height: calc(100% - 10px);
		padding: 10px 0 0 20px;
		overflow: hidden auto;
	}
	span.rtaYo {
		display: flex;
		position: relative;
		width: 100%;
		height: 100px;
		background: url('../../../../assets/assets/mirage/web/rtaYo.png');
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
		background: url('../../../../assets/assets/mirage/web/rtaOtros.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		margin-bottom: 10px;
	}
	.contAnswer > img {
		margin-bottom: 10px;
	}
	span.rtaYo > span,
	span.rtaOtros > span {
		display: flex;
		flex-direction: column;
		width: calc(100% - 115px);
		height: calc(100% - 20px);
		padding: 10px 10px 10px 105px;
	}
	span.rtaYo > span > span.nomUser,
	span.rtaOtros > span > span.nomUser {
		display: flex;
		width: calc(100% - 10px);
		height: 20px;
		justify-items: flex-start;
		align-items: center;
		padding: 5px;
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
		padding: 10px 5px;
		font-size: 12px;
		font-family: 'Montserrat';
	}
	span.dm {
		color: #ffffff;
	}
	span.dm.yo {
		color: #404040;
	}
	.cont1 > .contEnerImpc > span.totalImpac > span.contInfo,
	.cont1 > .contEnerImpc > span.totalEnergy > span.contInfo {
		display: flex;
		position: relative;
		width: 100%;
		height: calc(100% - 10px);
		padding: 5px 0px 5px 50px;
		align-items: center;
		margin-bottom: 0;
		justify-content: space-around;
	}
	.cont1 > .contEnerImpc > span.totalImpac > span.contInfo > span.txtITotal,
	.cont1 > .contEnerImpc > span.totalEnergy > span.contInfo > span.txtETotal {
		font-family: 'Montserrat';
		font-size: 14px;
		line-height: 1;
		color: #404040;
		font-weight: 600;
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
	}
	span.conteHoy {
		display: flex;
		position: absolute;
		top: -20px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 130px;
		height: 40px;
		align-items: center;
		background: url('../../../../assets/assets/mirage/web/conteAyer.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		color: #5c3c0f;
		font-family: 'Montserrat';
		font-weight: 600;
		justify-content: flex-end;
		font-size: 13px;
		padding-right: 10px;
	}
	span.conteHoy > span {
		margin-left: 5px;
	}
	.msjRedInt > img {
		position: absolute;
		left: 30px;
		width: auto;
		height: 80%;
		top: 5px;
	}
	.landingMirage > .cont1 > .msjRedInt > .enunciado {
		width: 68%;
		position: absolute;
		right: 30px;
		padding: 5px;
		font-family: 'Montserrat';
		font-size: 14px;
		color: #404040;
		font-weight: 500;
	}
	span.ver {
		display: flex;
		position: absolute;
		background: url('../../../../assets/assets/mirage/web/btnVer.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		border: none;
		width: 85px;
		height: 30px;
		bottom: -10px;
		right: 15px;
		color: #5c3c0f;
		font-family: 'Montserrat';
		font-weight: 600;
		justify-content: flex-end;
		font-size: 14px;
		padding-right: 20px;
		cursor: pointer;
	}
	span.ver:hover {
		background: url('../../../../assets/assets/mirage/web/btnVerHover.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	/* @media only screen and (max-width: 1440px) {
		.landingMirage {
			height: 345px;
			bottom: 25px;
			padding-top: 28px;
		}
		.cont2 {
			height: calc(100% - 14px);
		}
		.cont1 {
			display: flex;
			position: relative;
			flex-direction: column;
			width: calc(50% - 35px);
			height: 100%;
			padding: 45px 15px 20px 5px;
		}
	} */
	/* @media only screen and (max-width: 1366px) {
		.landingMirage {
			height: 343px;
		}
		.cont2 {
			height: calc(100% - 15px);
			padding: 0px 15px 0px 0px;
		}
		span.conteHoy {
			top: -40px;
		}
	} */
	/* @media only screen and (max-width: 1280px) {
		.landingMirage {
			height: 320px;
			width: 90%;
			margin: 0 auto;
		}
		.msjRedInt > img {
			left: 15px;
		}
	} */
	@media only screen and (max-width: 768px) {
		.landingMirage {
			width: calc(100% - 30px);
			height: 245px;
			justify-content: space-between;
			bottom: initial;
			padding: 20px 15px 0px;
		}
		.cont1 {
			width: calc(50% - 45px);
			padding: 45px 20px 20px 9px;
		}
		.cont1 > div {
			height: 100px;
		}
		.contEnerImpc {
			background: url('../../../../assets/assets/mirage/web/fondoEnergyImpactoTotal.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.cont1 > .msjRedInt {
			margin-top: 0;
		}
		.cont1 span {
			height: initial;
		}
		.landingMirage > .cont1 > .msjRedInt > .enunciado {
			width: 70%;
			right: 15px;
		}
		.msjRedInt > img {
			left: 1vw;
			height: 60%;
			top: 1.3vh;
		}
		.cont1 span.ver {
			height: 25px;
			right: -10px;
			font-size: 12px;
			padding-right: 30px;
		}
		.contAnswer {
			padding: 10px 0 0 10px;
		}
		span.rtaYo > span,
		span.rtaOtros > span {
			width: calc(100% - 90px);
			height: calc(100% - 30px);
			padding: 15px 10px 15px 80px;
		}
		span.rtaYo > span > span.dm,
		span.rtaOtros > span > span.dm {
			height: calc(100% - 10px);
			padding: 5px;
			font-size: 9px;
		}
	}
	@media only screen and (max-width: 414px) {
		.landingMirage {
			display: none;
		}
	}
</style>
