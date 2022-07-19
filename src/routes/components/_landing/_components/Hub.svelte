<script>
	import { fly } from 'svelte/transition';
	import iconAgua from '../../../../assets/assets/web/landing/imagAgua1.png';
	import iconTierra from '../../../../assets/assets/web/landing/imagTierra1.png';
	import iconFuego from '../../../../assets/assets/web/landing/imagFuego1.png';
	import iconAire from '../../../../assets/assets/web/landing/imagAire1.png';
	import infoAgua from '../../../../assets/assets/web/landing/infoAgua.png';
	import infoTierra from '../../../../assets/assets/web/landing/infoTierra.png';
	import infoFuego from '../../../../assets/assets/web/landing/infoFuego.png';
	import infoAire from '../../../../assets/assets/web/landing/infoAire.png';
	import notificacionIcon from '../../../../assets/assets/web/landing/notificacionIcon.png';
	import notificacionIcon2 from '../../../../assets/assets/web/landing/notificacionIcon2.png';

	let iconCharge = false;
	export let modalTenere
	export let element;
	export let contElem

	$: setTimeout(() => {
		iconCharge = true;
	}, 1500);
</script>
<div class={`contTop ${contElem[element]}`}>
	<div in:fly={{ y: 200, duration: 1500, delay: 1500 }} class="contTopIcons">
		<span>
			<span>
				<button class="modalTenereBtn" on:click={() => modalTenere = true}/>
				<img src={notificacionIcon} alt="" />
			</span>

			<span>
				<button />
				<img src={notificacionIcon} alt="" />
			</span>
		</span>
		<span>
			<button />
			<img src={notificacionIcon2} alt="" />
		</span>
	</div>
	<div class={iconCharge ? 'contPersonTop' : 'contPersonTop inicial'}>
		<img
			src={element === 0
				? iconAgua
				: element === 1
				? iconTierra
				: element === 2
				? iconFuego
				: iconAire}
			alt=""
		/>
	</div>
	<div class="contEstadosJugador">
		<span class="nivelPersonaje">Nv 1</span>
		<span class="nomPersonaje"
			>
			{`@${contElem[element]}-456`}
			</span
		>
		<span class="misiones">Misiones</span>
		<span class="progressBar">
			<span />
		</span>
		<img
			src={element === 0
				? infoAgua
				: element === 1
				? infoTierra
				: element === 2
				? infoFuego
				: infoAire}
			alt=""
		/>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.contTopIcons {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		top: 0;
		width: 60%;
		height: 75px;
		z-index: 3;
	}
	.contTopIcons > span {
		display: flex;
		width: 50%;
		justify-content: flex-start;
		align-items: flex-start;
		height: calc(100% - 15px);
		padding: 15px 0 0;
	}
	.contTopIcons > span:first-child > span:first-child > button {
		width: 70px;
		height: 70px;
		background: url('../../../../assets/assets/web/landing/btnTenere.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:first-child > span:last-child > button {
		width: 60px;
		height: 60px;
		background: url('../../../../assets/assets/web/landing/btnGefyra.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:first-child > span:first-child > button:hover {
		background: url('../../../../assets/assets/web/landing/btnTenereHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:first-child > span:last-child > button:hover {
		background: url('../../../../assets/assets/web/landing/btnGefyraHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:last-child {
		justify-content: flex-end;
	}
	.contTopIcons > span:last-child > button {
		width: 60px;
		height: 60px;
		background: url('../../../../assets/assets/web/landing/btnMensaje.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:last-child > button:hover {
		background: url('../../../../assets/assets/web/landing/btnMensajeHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	/* Agua */
	.contTop.agua {
		background: url('../../../../assets/assets/web/landing/hudBackAgua.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.contTop.agua:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 159px;
		background: url('../../../../assets/assets/web/landing/hudFrontAgua.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		z-index: 1;
	}
	.contTop.agua:after {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../../assets/assets/web/landing/hudDecoAgua.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 2;
	}
	.agua .contPersonTop {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 320px;
		height: 210px;
		top: 0;
		background: url('../../../../assets/assets/web/landing/conteAgua.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
		transition: 1s ease;
	}
	.agua .contPersonTop.inicial {
		width: 400px;
		transition: 1s ease;
	}
	.agua span.nivelPersonaje {
		width: 75px;
		height: 75px;
		display: flex;
		position: relative;
		background: url('../../../../assets/assets/web/landing/nivelAgua.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 16px;
		font-weight: bold;
		font-family: 'Montserrat';
		color: #ffffff;
		justify-content: center;
		align-items: center;
		line-height: 1;
	}
	.agua span.nomPersonaje {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 20px;
		color: #5570bf;
		position: absolute;
		left: 21.5%;
		bottom: 30%;
	}
	.agua span.misiones {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		color: #2c3b6e;
		position: absolute;
		left: 40%;
		bottom: 30%;
	}
	.agua span.progressBar {
		display: flex;
		position: absolute;
		background: url('../../../../assets/assets/web/landing/progresoAgua.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		width: 35%;
		height: 35%;
		right: 13.5%;
		bottom: 35%;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
	}
	.agua .progressBar > span {
		background: #2c3b6e;
		width: 20%;
		height: calc(100% - 6px);
		border-radius: 12px;
		margin-left: 3px;
	}

	/* Tierra */
	.contTop.tierra {
		background: url('../../../../assets/assets/web/landing/hudBackTierra.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.contTop.tierra:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 159px;
		background: url('../../../../assets/assets/web/landing/hudFrontTierra.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		z-index: 1;
	}
	.contTop.tierra:after {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../../assets/assets/web/landing/hudDecoTierra.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 2;
	}
	.tierra .contPersonTop {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 380px;
		height: 230px;
		top: 0;
		background: url('../../../../assets/assets/web/landing/conteTierra.png');
		background-position: top center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
		transition: 1s ease;
	}
	.tierra .contPersonTop.inicial {
		width: 400px;
		transition: 1s ease;
	}
	.tierra span.nivelPersonaje {
		width: 75px;
		height: 75px;
		display: flex;
		position: relative;
		background: url('../../../../assets/assets/web/landing/nivelTierra.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 16px;
		font-weight: bold;
		font-family: 'Montserrat';
		color: #ffffff;
		justify-content: center;
		align-items: center;
		line-height: 1;
	}
	.tierra span.nomPersonaje {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 20px;
		color: #522e0a;
		position: absolute;
		left: 21.5%;
		bottom: 30%;
	}
	.tierra span.misiones {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		color: #522e0a;
		position: absolute;
		left: 40%;
		bottom: 30%;
	}
	.tierra span.progressBar {
		display: flex;
		position: absolute;
		background: url('../../../../assets/assets/web/landing/progresoTierra.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		width: 35%;
		height: 35%;
		right: 13.5%;
		bottom: 35%;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
	}
	.tierra .progressBar > span {
		background: #522e0a;
		width: 20%;
		height: calc(100% - 6px);
		border-radius: 12px;
		margin-left: 3px;
	}

	/* Fuego */
	.contTop.fuego {
		background: url('../../../../assets/assets/web/landing/hudBackFuego.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.contTop.fuego:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 159px;
		background: url('../../../../assets/assets/web/landing/hudFrontFuego.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		z-index: 1;
	}
	.contTop.fuego:after {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../../assets/assets/web/landing/hudDecoFuego.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 2;
	}
	.fuego .contPersonTop {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 320px;
		height: 210px;
		top: 0;
		background: url('../../../../assets/assets/web/landing/conteFuego.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
		transition: 1s ease;
	}
	.fuego .contPersonTop.inicial {
		width: 400px;
		transition: 1s ease;
	}
	.fuego span.nivelPersonaje {
		width: 75px;
		height: 75px;
		display: flex;
		position: relative;
		background: url('../../../../assets/assets/web/landing/nivelFuego.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 16px;
		font-weight: bold;
		font-family: 'Montserrat';
		color: #ffffff;
		justify-content: center;
		align-items: center;
		line-height: 1;
	}
	.fuego span.nomPersonaje {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 20px;
		color: #8f1209;
		position: absolute;
		left: 21.5%;
		bottom: 30%;
	}
	.fuego span.misiones {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		color: #8f1209;
		position: absolute;
		left: 40%;
		bottom: 30%;
	}
	.fuego span.progressBar {
		display: flex;
		position: absolute;
		background: url('../../../../assets/assets/web/landing/progresoFuego.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		width: 35%;
		height: 35%;
		right: 13.5%;
		bottom: 35%;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
	}
	.fuego .progressBar > span {
		background: #8f1209;
		width: 20%;
		height: calc(100% - 6px);
		border-radius: 12px;
		margin-left: 3px;
	}

	/* Aire */
	.contTop.aire {
		background: url('../../../../assets/assets/web/landing/hudBackAire.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.contTop.aire:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 159px;
		background: url('../../../../assets/assets/web/landing/hudFrontAire.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		z-index: 1;
	}
	.contTop.aire:after {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../../assets/assets/web/landing/hudDecoAire.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 2;
	}
	.aire .contPersonTop {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 325px;
		height: 213px;
		top: 0;
		background: url('../../../../assets/assets/web/landing/conteAire.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 2;
		transition: 1s ease;
	}
	.aire .contPersonTop.inicial {
		width: 400px;
		transition: 1s ease;
	}
	.aire span.nivelPersonaje {
		width: 75px;
		height: 75px;
		display: flex;
		position: relative;
		background: url('../../../../assets/assets/web/landing/nivelAire.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 16px;
		font-weight: bold;
		font-family: 'Montserrat';
		color: #ffffff;
		justify-content: center;
		align-items: center;
		line-height: 1;
	}
	.aire span.nomPersonaje {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 20px;
		color: #186c5f;
		position: absolute;
		left: 21.5%;
		bottom: 30%;
	}
	.aire span.misiones {
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		color: #186c5f;
		position: absolute;
		left: 40%;
		bottom: 30%;
	}
	.aire span.progressBar {
		display: flex;
		position: absolute;
		background: url('../../../../assets/assets/web/landing/progresoAire.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 12px;
		width: 35%;
		height: 35%;
		right: 13.5%;
		bottom: 35%;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
	}
	.aire .progressBar > span {
		background: #186c5f;
		width: 20%;
		height: calc(100% - 6px);
		border-radius: 12px;
		margin-left: 3px;
	}

	.contEstadosJugador {
		width: 60%;
		height: 45px;
		display: flex;
		position: absolute;
		bottom: 10px;
		justify-content: center;
		align-items: center;
		z-index: 4;
	}
	.contEstadosJugador > img {
		width: auto;
		height: 100%;
	}
	.contTopIcons > span > span {
		margin-right: 35px;
		position: relative;
	}
	.contTopIcons > span > span > img {
		position: absolute;
		display: flex;
		top: 0;
		right: -15px;
		width: 26px;
	}
	.contTopIcons > span:last-child > img {
		position: absolute;
		right: -10px;
	}
	@media only screen and (width: 1920px) {
		.contEstadosJugador {
			width: 45%;
		}
	}
	@media only screen and (max-width: 1280px) {
		.contEstadosJugador {
			width: 65%;
		}
	}
	@media only screen and (max-width: 768px) {
		.contTopIcons {
			width: 90%;
		}
		.contEstadosJugador {
			width: 100%;
		}
		span.nomPersonaje {
			left: 19.5%;
		}
		span.misiones {
			left: 39.5%;
			bottom: 33%;
		}
	}
	@media only screen and (max-width: 425px) {
		.contTopIcons {
			width: calc(100% - 20px);
			height: 136px;
			padding: 10px;
			z-index: 3;
		}
		.contTopIcons > span {
			flex-direction: column;
			padding: 0;
			height: 100%;
		}
		.contTopIcons > span > span {
			margin-bottom: 10px;
			margin-right: 0;
			position: relative;
		}
		.contTopIcons > span:first-child > span:first-child > button {
			width: 46px;
			height: 46px;
		}
		.contTopIcons > span:first-child > span:last-child > button,
		.contTopIcons > span:last-child > button {
			width: 40px;
			height: 40px;
		}
		.contTopIcons > span > span > img {
			right: -10px;
			width: 17px;
		}
		.contTopIcons > span:last-child {
			flex-direction: row;
		}
		.contTopIcons > span:last-child > img {
			width: 13px;
			height: 13px;
			right: 5px;
		}
		/* agua */
		.agua .contEstadosJugador {
			height: 100%;
			bottom: 0;
			background: url('../../../../assets/assets/landing/hudAgua.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: 1;
		}
		.agua .contPersonTop {
			top: 0;
			background: none;
			z-index: 2;
		}
		.agua span.nivelPersonaje {
			position: absolute;
			width: 50px;
			height: 50px;
			font-size: 12px;
			bottom: 35px;
		}
		.agua span.progressBar {
			right: initial;
			width: 90%;
			height: 25px;
			background: url('../../../../assets/assets/web/landing/progresoAgua.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			bottom: 6%;
		}
		.agua .progressBar > span {
			height: calc(100% - 14.5px);
			margin-left: 5px;
		}
		.agua span.misiones {
			bottom: 40px;
			left: 20px;
			font-size: 14px;
		}
		.agua span.misiones:after {
			content: ':';
		}
		/* tierra */
		.tierra .contEstadosJugador {
			height: 100%;
			bottom: 0;
			background: url('../../../../assets/assets/landing/hudTierra.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: 1;
		}
		.tierra .contPersonTop {
			top: 0;
			background: none;
			z-index: 2;
		}
		.tierra span.nivelPersonaje {
			position: absolute;
			width: 50px;
			height: 50px;
			font-size: 12px;
			bottom: 35px;
		}
		.tierra span.progressBar {
			right: initial;
			width: 90%;
			height: 25px;
			background: url('../../../../assets/assets/web/landing/progresoTierra.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			bottom: 6%;
		}
		.tierra .progressBar > span {
			height: calc(100% - 14.5px);
			margin-left: 5px;
		}
		.tierra span.misiones {
			bottom: 40px;
			left: 20px;
			font-size: 14px;
		}
		.tierra span.misiones:after {
			content: ':';
		}
		/* fuego */
		.fuego .contEstadosJugador {
			height: 100%;
			bottom: 0;
			background: url('../../../../assets/assets/landing/hudFuego.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: 1;
		}
		.fuego .contPersonTop {
			top: 0;
			background: none;
			z-index: 2;
		}
		.fuego span.nivelPersonaje {
			position: absolute;
			width: 50px;
			height: 50px;
			font-size: 12px;
			bottom: 35px;
		}
		.fuego span.progressBar {
			right: initial;
			width: 90%;
			height: 25px;
			background: url('../../../../assets/assets/web/landing/progresoFuego.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			bottom: 6%;
		}
		.fuego .progressBar > span {
			height: calc(100% - 14.5px);
			margin-left: 5px;
		}
		.fuego span.misiones {
			bottom: 40px;
			left: 20px;
			font-size: 14px;
		}
		.fuego span.misiones:after {
			content: ':';
		}
		/* aire */
		.aire .contEstadosJugador {
			height: 100%;
			bottom: 0;
			background: url('../../../../assets/assets/landing/hudAire.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: 1;
		}
		.aire .contPersonTop {
			top: 0;
			background: none;
			z-index: 2;
		}
		.aire span.nivelPersonaje {
			position: absolute;
			width: 50px;
			height: 50px;
			font-size: 12px;
			bottom: 35px;
		}
		.aire span.progressBar {
			right: initial;
			width: 90%;
			height: 25px;
			background: url('../../../../assets/assets/web/landing/progresoAire.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			bottom: 6%;
		}
		.aire .progressBar > span {
			height: calc(100% - 14.5px);
			margin-left: 5px;
		}
		.aire span.misiones {
			bottom: 40px;
			left: 20px;
			font-size: 14px;
		}
		.aire span.misiones:after {
			content: ':';
		}

		.agua span.nomPersonaje,
		.tierra span.nomPersonaje,
		.fuego span.nomPersonaje,
		.aire span.nomPersonaje {
			left: initial;
		}

		.contTop.agua:before,
		.contTop.agua:after,
		.contTop.tierra:before,
		.contTop.tierra:after,
		.contTop.fuego:before,
		.contTop.fuego:after,
		.contTop.aire:before,
		.contTop.aire:after {
			content: '';
			background: none;
		}
		span.nomPersonaje {
			position: absolute;
			top: 6px;
			font-size: 15px;
			left: initial;
			bottom: initial;
			color: #fff;
		}
		.contEstadosJugador > img {
			display: none;
		}
	}
</style>
