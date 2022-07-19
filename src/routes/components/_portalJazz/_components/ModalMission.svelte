<script>
	import { cubicInOut } from 'svelte/easing';
	import fadeScale from '../../../../lib/FadeScale.js';
	import { fade } from 'svelte/transition';
	import cantidadOff from '../../../../assets/assets/jazz/mobile/cantidadOff.png';
	import cantidadOn from '../../../../assets/assets/jazz/mobile/cantidadOn.png';
	export let modalMision,modalTitle;
	console.log(modalTitle)
	const getTitle= () => {
		let title;
		title = modalTitle ? 'POSTULAR IDEA':'POSTULAR MISIÓN';
		return title
	}
	let header = getTitle()
</script>

<div transition:fade={{ duration: 800 }} class="modalMision backDrop">
	<span
		transition:fadeScale={{ delay: 0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}
		class="contModal"
	>
		<span class="headerModal">
			<span>
				<button class="btnAtras" title="Volver atras" on:click={() => (modalMision = false)} />
			</span>
			<span>{header}</span>
			<span>
				<span><img src={cantidadOff} alt="" /></span>
				<span>0/1</span>
			</span>
		</span>
		<span class="contentModal">
			<span>
				<label for="inputTitle">Título de la idea</label>
				<input id="inputTitle" type="text" placeholder="Texto XYZ" />
			</span>
			<span>
				<textarea name="" id="" cols="30" rows="10" placeholder="Texto breve" />
				<span>0/100</span>
			</span>
			<span>
				<span>Tiempo para cierre:</span>
				<span>24 hrs</span>
			</span>
		</span>
		<span class="footerModal">
			<button>Postular</button>
		</span>
	</span>
</div>

<style>
	.modalMision.backDrop {
		display: flex;
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		position: absolute;
		background: rgba(0, 0, 0, 0.2);
		z-index: 100;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(3px);
	}
	span.contModal {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 712px;
		height: 535px;
		background: url('../../../../assets/assets/jazz/web/contePopPostular.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	span.headerModal {
		display: flex;
		position: relative;
		width: 95%;
		height: 15%;
		margin: 5px auto ;
		align-items: center;
	}
	span.contentModal {
		display: flex;
		flex-direction: column;
		position: relative;
		width: calc(95% - 60px);
		height: calc(70% - 30px);
		margin:34px auto 0;
		/* padding: 15px 30px 10px; */
	}
	span.footerModal {
		display: flex;
		position: relative;
		width: 95%;
		height: 16%;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
	}
	button.btnAtras {
		left: 0;
		border-radius: 100%;
		border: none;
		background: url('../../../../assets/assets/mirage/web/btnBack.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	span.headerModal > span:first-child {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 65px;
		height: 100%;
		padding-top: 5px;
		top:5px;
	}
	span.headerModal > span:first-child > button.btnAtras {
		width: 65px;
		height: 65px;
	}
	span.headerModal > span:nth-child(2) {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: calc(100% - 115px);
		padding-top: 4px;
		color:#404040;
		font-family: 'Montserrat';
		font-size: 25px;
		font-weight: 600;
	}
	span.headerModal > span:last-child {
		display: flex;
		flex-direction: column;
		width: 81px;
		height: 68px;
		position: relative;
		right: 0;
		top:5px;
		background: url('../../../../assets/assets/jazz/web/numeroPostulados.png'); 
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		justify-content: center;
		font-family: 'Montserrat';
		align-items: center;
	}
	span.headerModal > span:last-child > span {
		height: 50%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #404040;
		font-weight: 600;
		font-size: 25px;
	}
	span.headerModal > span:last-child > span:first-child {
		align-items: flex-end;
		padding-bottom: 5px;
		height: calc(50% - 5px);
	}
	span.contentModal > span:first-child {
		display: flex;
		flex-direction: column;
		width: 492px;
		height: 90px;
		margin:0 auto;
		background: #fff8e5;
		border-radius: 10px;
		box-shadow: 0 3px 10px 0 #00000029;
		justify-content: center;
		align-items: center;
		color: #404040;
		font-size: 12px;
		font-family: 'Montserrat';
	}
	span.contentModal > span:first-child > label {
		margin-bottom: 10px;
		font-size: 16px;
		color:#646F6F;
	}
	input#inputTitle {
		/* width: calc(85% - 20px); */
		width: 422px;
		height: 34px;
		background: #e3d5c3;
		border: none;
		border-radius: 20px;
		box-shadow: inset 3px 3px 6px 0 #00000040;
		color: #646f6f;
		font-size: 16px;
		font-weight: 600;
		font-style: italic;
		display: flex;
		align-items: center;
		padding: 0 10px;
	}
	span.contentModal > span:nth-child(2) {
		position: relative;
		display:flex
	}
	span.contentModal > span:nth-child(2) > textarea {
		/* width: calc(100% - 30px); */
		width:509px;
		height: 115px;
		padding: 15px;
		/* padding:0; */
		background: #d9d9d9;
		border: navajowhite;
		border-radius: 14px;
		box-shadow: inset 3px 3px 6px 0 #00000040;
		margin: 18px auto;
		font-size: 12px;
		font-weight: 500;
		font-family: 'Montserrat';
	}
	span.contentModal > span:nth-child(2) > span {
		display: flex;
		position: absolute;
		z-index: 2;
		width: 90px;
		height: 23px;
		bottom: 19px;
		right:23px;
		align-items: center;
		background: url('../../../../assets/assets/jazz/mobile/conteCaracteres.png');
		background-position: top;
		background-repeat: no-repeat;
		background-size: auto;
		color: #ffffff;
		font-family: 'Montserrat';
		font-size: 14px;
		padding-left: 30px;
		/*padding-bottom: 5px; */
		font-weight: 300;
	}
	span.contentModal > span:last-child {
		/* margin-top: 10px; */
		/* width: 76%;
		height: calc(50px - 8%); */
		/* background: url('../../../../assets/assets/jazz/mobile/conteTiempo.png'); */
		width:288px;
		height:56px;
		margin:0 auto;
		background: url('../../../../assets/assets/jazz/web/tiempoVidaPop.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		/* padding: 5% 5% 5% 19%; */
	}
	span.contentModal > span:last-child > span {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 12px;
		font-weight: 600;
		color: #5a5a5a;
		font-family: 'Montserrat';
		
	}
	span.contentModal > span:last-child > span:first-child {
		width: 45%;
		margin-left: 70px;
	}
	span.contentModal > span:last-child > span:last-child {
		width: 25%;
	}
	span.footerModal > button {
		color: #5c3c0f;
		font-size: 16px;
		font-family: 'Montserrat';
		font-weight: 800;
		border: none;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180px;
		height: 55px;
		background: url('../../../../assets/assets/jazz/mobile/btnPopPostular.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		margin-bottom: 10px;
	}
	span.footerModal > button:hover {
		background: url('../../../../assets/assets/jazz/web/btnPostularHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	@media only screen and (max-width: 768px) {
		span.contModal {
			width: 318px;
			height: 451px;
			background: url('../../../../assets/assets/jazz/mobile/fondoPopPostular.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: auto;
			}
		span.headerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 15%;
			margin: 0 auto;
			align-items: center;
		}
		span.contentModal {
			display: flex;
			flex-direction: column;
			position: relative;
			/* width: calc(95% - 60px); */
			/* width: 100%; */
			width: calc(100% - 52px);
			/* height: calc(70% - 30px); */
			height:auto;
			margin: 18px auto 0;
			/* padding: 15px 30px 10px; */
		}
		span.footerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 16%;
			margin: 0 auto;
			justify-content: center;
			align-items: center;
		}
		button.btnAtras {
			left: 0;
			border-radius: 100%;
			border: none;
			background: url('../../../../assets/assets/mirage/web/btnBack.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.headerModal > span:first-child {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 100%;
			padding-top: 5px;
			top:0px;
		}
		span.headerModal > span:first-child > button.btnAtras {
			width: 35px;
			height: 35px;
		}
		span.headerModal > span:nth-child(2) {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: calc(100% - 115px);
			padding-top: 4px;
			font-size: 15px;
			font-weight: 600;
		}
		span.headerModal > span:last-child {
			display: flex;
			flex-direction: column;
			width: 65px;
			height: 90%;
			position: relative;
			right: 0;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			justify-content: center;
			font-family: 'Montserrat';
			align-items: center;
			top:0px;
		}
		span.headerModal > span:last-child > span {
			height: 50%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-weight: 600;
			font-size: 15px;
		}
		span.headerModal > span:last-child > span:first-child {
			align-items: flex-end;
			padding-bottom: 5px;
			height: calc(50% - 5px);
		}
		span.contentModal > span:first-child {
			display: flex;
			flex-direction: column;
			width: 266px;
			height: 71px;
			margin:0 auto;
			background: #fff8e5;
			border-radius: 10px;
			box-shadow: 0 3px 10px 0 #00000029;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-size: 12px;
			font-family: 'Montserrat';
		}
		span.contentModal > span:first-child > label {
			margin-bottom: 5px;
			font-size: 12px;
		}
		input#inputTitle {
			/* width: calc(85% - 20px); */
			width:230px;
			height: 24px;
			background: #e3d5c3;
			border: none;
			border-radius: 20px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			color: #646f6f;
			font-size: 12px;
			font-weight: 600;
			font-style: italic;
			display: flex;
			align-items: center;
			padding: 0 10px;
		}
		span.contentModal > span:nth-child(2) {
			position: relative;
		}
		span.contentModal > span:nth-child(2) > textarea {
			width: calc(100% - 30px);
			height: 120px;
			padding: 15px;
			background: #d9d9d9;
			border: navajowhite;
			border-radius: 14px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 12px;
			font-weight: 500;
			font-family: 'Montserrat';
		}
		span.contentModal > span:nth-child(2) > span {
			display: flex;
			position: absolute;
			z-index: 2;
			width: 60px;
			height: 23px;
			bottom: 5px;
			right: 0;
			align-items: center;
			background: url('../../../../assets/assets/jazz/mobile/conteCaracteres.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #ffffff;
			font-family: 'Montserrat';
			font-size: 12px;
			padding-left: 30px;
			padding-bottom: 5px;
			font-weight: 300;
		}
		span.contentModal > span:last-child {
			width:266px;
			height:56px;
			margin:0 auto;
			background: url('../../../../assets/assets/jazz/mobile/conteTiempo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
		}
		span.contentModal > span:last-child > span {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 12px;
			font-weight: 600;
			color: #5a5a5a;
			font-family: 'Montserrat';
		}
		span.contentModal > span:last-child > span:first-child {
			width: 65%;
			margin-left: 50px;
		}
		span.contentModal > span:last-child > span:last-child {
			width: 35%;
		}
		span.footerModal > button {
			color: #5c3c0f;
			font-size: 13px;
			font-family: 'Montserrat';
			font-weight: 800;
			border: none;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180px;
			height: 55px;
			background: url('../../../../assets/assets/jazz/mobile/btnPopPostular.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin: 10px auto;
		}
	}
	/* @media only screen and (max-width: 414px) {
		span.contModal {
			width: 90%;
			height: 515px;
		}
		span.headerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 15%;
			margin: 0 auto;
			align-items: center;
		}
		span.contentModal {
			display: flex;
			flex-direction: column;
			position: relative;
			width: calc(95% - 60px);
			height: calc(70% - 30px);
			margin: 0 auto;
			padding: 15px 30px 10px;
		}
		span.footerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 16%;
			margin: 0 auto;
			justify-content: center;
			align-items: center;
		}
		button.btnAtras {
			left: 0;
			border-radius: 100%;
			border: none;
			background: url('../../../../assets/assets/mirage/web/btnBack.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.headerModal > span:first-child {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 100%;
			padding-top: 5px;
		}
		span.headerModal > span:first-child > button.btnAtras {
			width: 35px;
			height: 35px;
		}
		span.headerModal > span:nth-child(2) {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: calc(100% - 115px);
			padding-top: 4px;
			font-family: 'Montserrat';
			font-size: 15px;
			font-weight: 600;
		}
		span.headerModal > span:last-child {
			display: flex;
			flex-direction: column;
			width: 65px;
			height: 90%;
			position: relative;
			right: 0;
			background: url('/static/assets/jazz/mobile/conteCantidadPop.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			justify-content: center;
			font-family: 'Montserrat';
			align-items: center;
		}
		span.headerModal > span:last-child > span {
			height: 50%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-weight: 600;
			font-size: 15px;
		}
		span.headerModal > span:last-child > span:first-child {
			align-items: flex-end;
			padding-bottom: 5px;
			height: calc(50% - 5px);
		}
		span.contentModal > span:first-child {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 70px;
			background: #fff8e5;
			border-radius: 10px;
			box-shadow: 0 3px 10px 0 #00000029;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-size: 12px;
			font-family: 'Montserrat';
		}
		span.contentModal > span:first-child > label {
			margin-bottom: 10px;
		}
		input#inputTitle {
			width: calc(85% - 20px);
			height: 24px;
			background: #e3d5c3;
			border: none;
			border-radius: 20px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			color: #646f6f;
			font-size: 12px;
			font-weight: 600;
			font-style: italic;
			display: flex;
			align-items: center;
			padding: 0 10px;
		}
		span.contentModal > span:nth-child(2) {
			position: relative;
		}
		span.contentModal > span:nth-child(2) > textarea {
			width: calc(100% - 30px);
			height: 120px;
			padding: 15px;
			background: #d9d9d9;
			border: navajowhite;
			border-radius: 14px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			margin-top: 10px;
			font-size: 12px;
			font-weight: 500;
			font-family: 'Montserrat';
		}
		span.contentModal > span:nth-child(2) > span {
			display: flex;
			position: absolute;
			z-index: 2;
			width: 60px;
			height: 23px;
			bottom: 0;
			right: 0;
			align-items: center;
			background: url('../../../../assets/assets/jazz/mobile/conteCaracteres.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #ffffff;
			font-family: 'Montserrat';
			font-size: 12px;
			padding-left: 30px;
			padding-bottom: 5px;
			font-weight: 300;
		}
		span.contentModal > span:last-child {
			margin-top: 10px;
			width: 76%;
			height: calc(50px - 8%);
			background: url('../../../../assets/assets/jazz/mobile/conteTiempo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			padding: 5% 5% 5% 19%;
		}
		span.contentModal > span:last-child > span {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 12px;
			font-weight: 600;
			color: #5a5a5a;
			font-family: 'Montserrat';
		}
		span.contentModal > span:last-child > span:first-child {
			width: 65%;
		}
		span.contentModal > span:last-child > span:last-child {
			width: 35%;
		}
		span.footerModal > button {
			color: #5c3c0f;
			font-size: 13px;
			font-family: 'Montserrat';
			font-weight: 800;
			border: none;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180px;
			height: 55px;
			background: url('../../../../assets/assets/jazz/mobile/btnPopPostular.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
	} */
	/* @media only screen and (max-width: 393px) {
		span.contModal {
			height: 490px;
		}
	} */
	/* @media only screen and (max-width: 375px) {
		span.contModal {
			width: 90%;
			height: 465px;
		}
		span.headerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 15%;
			margin: 0 auto;
			align-items: center;
		}
		span.contentModal {
			display: flex;
			flex-direction: column;
			position: relative;
			width: calc(95% - 60px);
			height: calc(70% - 30px);
			margin: 0 auto;
			padding: 15px 30px 10px;
		}
		span.footerModal {
			display: flex;
			position: relative;
			width: 95%;
			height: 16%;
			margin: 0 auto;
			justify-content: center;
			align-items: center;
		}
		button.btnAtras {
			left: 0;
			border-radius: 100%;
			border: none;
			background: url('../../../../assets/assets/mirage/web/btnBack.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.headerModal > span:first-child {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 100%;
			padding-top: 5px;
		}
		span.headerModal > span:first-child > button.btnAtras {
			width: 35px;
			height: 35px;
		}
		span.headerModal > span:nth-child(2) {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: calc(100% - 115px);
			padding-top: 4px;
			font-family: 'Montserrat';
			font-size: 15px;
			font-weight: 600;
		}
		span.headerModal > span:last-child {
			display: flex;
			flex-direction: column;
			width: 65px;
			height: 90%;
			position: relative;
			right: 0;
			background: url('/static/assets/jazz/mobile/conteCantidadPop.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			justify-content: center;
			font-family: 'Montserrat';
			align-items: center;
		}
		span.headerModal > span:last-child > span {
			height: 50%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-weight: 600;
			font-size: 15px;
		}
		span.headerModal > span:last-child > span:first-child {
			align-items: flex-end;
			padding-bottom: 5px;
			height: calc(50% - 5px);
		}
		span.contentModal > span:first-child {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 70px;
			background: #fff8e5;
			border-radius: 10px;
			box-shadow: 0 3px 10px 0 #00000029;
			justify-content: center;
			align-items: center;
			color: #404040;
			font-size: 12px;
			font-family: 'Montserrat';
		}
		span.contentModal > span:first-child > label {
			margin-bottom: 10px;
		}
		input#inputTitle {
			width: calc(85% - 20px);
			height: 24px;
			background: #e3d5c3;
			border: none;
			border-radius: 20px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			color: #646f6f;
			font-size: 12px;
			font-weight: 600;
			font-style: italic;
			display: flex;
			align-items: center;
			padding: 0 10px;
		}
		span.contentModal > span:nth-child(2) {
			position: relative;
		}
		span.contentModal > span:nth-child(2) > textarea {
			width: calc(100% - 30px);
			height: 120px;
			padding: 15px;
			background: #d9d9d9;
			border: navajowhite;
			border-radius: 14px;
			box-shadow: inset 3px 3px 6px 0 #00000040;
			margin-top: 10px;
			font-size: 12px;
			font-weight: 500;
			font-family: 'Montserrat';
		}
		span.contentModal > span:nth-child(2) > span {
			display: flex;
			position: absolute;
			z-index: 2;
			width: 60px;
			height: 23px;
			bottom: 0;
			right: 0;
			align-items: center;
			background: url('../../../../assets/assets/jazz/mobile/conteCaracteres.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			color: #ffffff;
			font-family: 'Montserrat';
			font-size: 12px;
			padding-left: 30px;
			padding-bottom: 5px;
			font-weight: 300;
		}
		span.contentModal > span:last-child {
			margin-top: 10px;
			width: 76%;
			height: calc(50px - 8%);
			background: url('../../../../assets/assets/jazz/mobile/conteTiempo.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			padding: 5% 5% 5% 19%;
		}
		span.contentModal > span:last-child > span {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 12px;
			font-weight: 600;
			color: #5a5a5a;
			font-family: 'Montserrat';
		}
		span.contentModal > span:last-child > span:first-child {
			width: 65%;
		}
		span.contentModal > span:last-child > span:last-child {
			width: 35%;
		}
		span.footerModal > button {
			color: #5c3c0f;
			font-size: 13px;
			font-family: 'Montserrat';
			font-weight: 800;
			border: none;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180px;
			height: 55px;
			background: url('../../../../assets/assets/jazz/mobile/btnPopPostular.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 10px;
		}
	} */
	/* @media only screen and (max-width: 360px) {
		span.contModal {
			height: 450px;
		}
	} */
	/* @media only screen and (max-width: 320px) {
		span.contModal {
			height: 440px;
			width: 100%;
		}
	} */
</style>
