<script>
	import ruletaCompleta from '../../../../assets/assets/mirage/web/ruletaCompleta.png';
	import punteroRuleta from '../../../../assets/assets/mirage/web/punteroRuleta.png';

	// export let giroRuleta;
	export let continueView;
	export let resultado;
	export let count;

	setTimeout(() => {
		count('impact', 0);
	}, 0);
	setTimeout(() => {
		count('energy', 1);
	}, 3000);
</script>

<div class="resultadoRuleta">
	<div class="contenRes">
		<div class="quePaso">
			<span class="ruletaResult">
				<img src={punteroRuleta} alt="" />
				<span><img src={ruletaCompleta} alt="" /></span>
			</span>
			<span class="textResult">
				<label for="">¿Qué fue lo que paso?</label>
				<p>
					ciertos mensajes ganan visibilidad si respondes o interactúas con ellos. No generan
					conversación sino publicidad.
				</p>
			</span>
		</div>
		<div>
			<span class="impact">Impacto: <span id="impact">0</span></span>
			<span class="energy">Energia: <span id="energy">0</span></span>
		</div>
	</div>
	<div class="contenSecundario">
		<div class="contBtnSec">
			<button class="retry" on:click={() => ((resultado = false), window.click.play())}
				>Reintentar (0/1)</button
			>
			<button class="continue" on:click={() => ((continueView = true), window.click.play())}
				>Continuar</button
			>
		</div>
		<span class="retSec">
			<p>
				Ciertos mensajes ganan visibilidad si respondes o interactúas con ellos. No generan
				conversación sino publicidad. No generan conversación sino publicidad.
			</p>
		</span>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.resultadoRuleta {
		display: flex;
		position: relative;
		width: calc(100% - 30px);
		height: 350px;
		justify-content: space-evenly;
		align-items: center;
		bottom: 0;
		padding: 20px 15px 10px;
	}
	.contenRes {
		margin: 50px auto 0;
		display: flex;
		position: relative;
		flex-direction: column;
		width: calc(50% - 20px);
		height: 100%;
	}
	.contenRes > div.quePaso {
		display: flex;
		position: relative;
		width: 100%;
		height: 125px;
		background: url('../../../../assets/assets/mirage/web/fondoResultadoRuleta.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		margin-left: -7px;
		margin-top: 0;
	}
	.contenRes > div.quePaso > span.ruletaResult {
		display: flex;
		flex-direction: column;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;
		padding: 0%;
	}
	.contenRes > div.quePaso > span.ruletaResult > img {
		position: absolute;
		top: 3px;
		width: 34px;
		height: auto;
		z-index: 10;
	}
	.contenRes > div.quePaso > span.ruletaResult > span {
		display: flex;
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: auto;
		margin: 0;
		margin-top: 10px;
		background: url('../../../../assets/assets/mirage/web/fondoRuleta.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.contenRes > div.quePaso > span.ruletaResult > span > img {
		width: 90%;
	}
	.contenRes > div.quePaso > span.textResult {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: flex-start;
		width: 55%;
		height: 100%;
		font-size: 14px;
		padding: 0;
		margin-left: -80px;
	}
	.contenRes > div.quePaso > span.textResult p {
		margin: 0;
		font-size: 14px;
	}
	.contenRes > div {
		display: flex;
		width: 100%;
		height: 43px;
		position: relative;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
	}
	.contenRes > div > span {
		justify-content: center;
		align-items: center;
		display: flex;
		font-weight: bold;
		font-family: 'Montserrat';
		font-size: 16px;
		width: calc(50% - 20px);
		height: 100%;
		padding-left: 40px;
	}
	.contenRes > div > span.impact {
		background: url('../../../../assets/assets/mirage/web/resultadoImpacto.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contenRes > div > span.energy {
		background: url(../../../../assets/assets/mirage/web/resultadoEnergy.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contenRes > div > span > span {
		margin-left: 5px;
	}
	.contenSecundario {
		display: flex;
		position: relative;
		width: calc(55% - 80px);
		height: calc(100% - 25px);
		padding: 20px 30px 20px 20px;
	}
	.contenSecundario > div,
	.contenSecundario > span {
		display: flex;
		flex-direction: column;
		width: 50%;
		justify-content: center;
		align-items: center;
	}
	/* .contenSecundario > div.contBtnSec {
		justify-content: space-evenly;
	} */
	.contenSecundario > div.contBtnSec > button {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		border: none;
		width: 100%;
		height: 70px;
		font-family: 'Montserrat';
		font-size: 16px;
		font-weight: bold;
		color: #5c3c0f;
	}
	.contenSecundario > div.contBtnSec > button.retry {
		background: url('../../../../assets/assets/mirage/web/btnRetry.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding-left: 50px;
	}
	.contenSecundario > div.contBtnSec > button.retry:hover {
		background: url('../../../../assets/assets/mirage/web/btnRetryHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		color: #fff;
	}
	.contenSecundario > div.contBtnSec > button.continue {
		background: url('../../../../assets/assets/mirage/web/btnContinuar.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding-right: 50px;
	}
	.contenSecundario > div.contBtnSec > button.continue:hover {
		background: url('../../../../assets/assets/mirage/web/btnContinuarHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		color: #fff;
	}
	.contenSecundario > span.retSec {
		margin-left: 20px;
		padding: 20px;
		width: calc(50% - 40px);
		height: calc(100% - 40px);
		background: url('../../../../assets/assets/mirage/web/conteRtaHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contenSecundario > span.retSec > p {
		font-size: 14px;
		font-weight: 500;
	}
	@media only screen and (max-width: 1440px) {
		.resultadoRuleta {
			height: 330px;
			bottom: 10px;
			padding: 20px 15px 10px;
		}
		.contenRes {
			width: calc(47% - 20px);
		}
	}
	@media only screen and (max-width: 1280px) {
		.resultadoRuleta {
			width: 94%;
			margin: 0 auto;
			/* padding: 20px 10px; */
			padding:20px 0 ;
		}
		.contenRes > div.quePaso > span.textResult {
			width: 70%;
			margin: 0;
		}
		.contenSecundario {
			width: calc(53% - 26px);
			padding: 0 0 0 25px;
		}
	}
	@media only screen and (max-width: 768px) {
		.resultadoRuleta {
			height: 240px;
			bottom: initial;
		}
		.contenRes {
			width: calc(47% - 20px);
		}
		.contenRes > div.quePaso {
			height: 90px;
			justify-content: space-around;
			align-items: center;
			background: url('../../../../assets/assets/mirage/web/fondoResultadoRuleta.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.contenRes > div.quePaso > span.ruletaResult {
			width: 20%;
			margin-left: 3%;
		}
		.contenRes > div.quePaso > span.textResult {
			width: 75%;
			margin-left: 0;
		}
		.contenRes > div.quePaso > span.textResult p {
			font-size: 12px;
		}
		.contenRes > div:last-child {
			flex-direction: column;
			height: auto;
		}
		.contenRes > div:last-child > span {
			width: 100%;
			padding: 0;
			height: 55px;
			margin-bottom: 10px;
		}
		.contenSecundario {
			padding: 20px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.contenSecundario > div.contBtnSec {
			width: 100%;
			flex-direction: row;
			height: 50%;
			align-items: center;
		}
		.contenSecundario > span.retSec {
			margin-left: 0px;
			padding: 20px;
			width: calc(100% - 40px);
			height: calc(70% - 40px);
			background: url('../../../../assets/assets/mirage/web/conteRtaHover.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.contenSecundario > div.contBtnSec > button.retry {
			padding-left: 40px;
		}
		.contenSecundario > div.contBtnSec > button.continue {
			padding-right: 40px;
		}
		.contenSecundario > div.contBtnSec > button {
			width: calc(50% - 10px);
			font-size: 12px;
		}
	}
	@media only screen and (max-width: 375px) {
		.resultadoRuleta {
			display: none;
		}
	}
</style>
