<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import iconMirage from '../../../assets/assets/mirage/web/iconMirage.png';
	import iconPortalJazz from '../../../assets/assets/jazz/mobile/iconPortalJazz@2x.png';
	import iconLagoNimue from '../../../assets/assets/lagoNimue/web/mundoAgua.png';
	import iconArbolSagrado from '../../../assets/assets/lagoNimue/web/mundoTierra.png';
	import iconMillauPont from '../../../assets/assets/lagoNimue/web/mundoFuego.png';
	import iconLvsaHora from '../../../assets/assets/lagoNimue/web/mundoAire.png';
	import iconArticulo from '../../../assets/assets/article/iconArticulo.png';
	import imagAgua from '../../../assets/assets/mirage/web/imagAgua.png';
	import imagTierra from '../../../assets/assets/mirage/web/imagTierra.png';
	import imagFuego from '../../../assets/assets/mirage/web/imagFuego.png';
	import imagAire from '../../../assets/assets/mirage/web/imagAire.png';
	import hudCentroAgua from '../../../assets/assets/mirage/web/hudCentroAgua.png';
	import hudCentroTierra from '../../../assets/assets/mirage/web/hudCentroTierra.png';
	import hudCentroFuego from '../../../assets/assets/mirage/web/hudCentroFuego.png';
	import hudCentroAire from '../../../assets/assets/mirage/web/hudCentroAire.png';
	import hudCentroAguaMob from '../../../assets/assets/mirage/mobile/hudCentroAgua.png';
	import hudCentroTierraMob from '../../../assets/assets/mirage/mobile/hudCentroTierra.png';
	import hudCentroFuegoMob from '../../../assets/assets/mirage/mobile/hudCentroFuego.png';
	import hudCentroAireMob from '../../../assets/assets/mirage/mobile/hudCentroAire.png';
	import hudDecoAgua from '../../../assets/assets/mirage/web/hudDecoAgua.png';
	import hudDecoTierra from '../../../assets/assets/mirage/web/hudDecoTierra.png';
	import hudDecoFuego from '../../../assets/assets/mirage/web/hudDecoFuego.png';
	import hudDecoAire from '../../../assets/assets/mirage/web/hudDecoAire.png';
	import hudDecoAguaMob from '../../../assets/assets/mirage/mobile/hudDecoAgua.png';
	import hudDecoTierraMob from '../../../assets/assets/mirage/mobile/hudDecoTierra.png';
	import hudDecoFuegoMob from '../../../assets/assets/mirage/mobile/hudDecoFuego.png';
	import hudDecoAireMob from '../../../assets/assets/mirage/mobile/hudDecoAire.png';
	import notificacionIcon from '../../../assets/assets/web/landing/notificacionIcon.png';
	import notificacionIcon2 from '../../../assets/assets/web/landing/notificacionIcon2.png';
	import imgWaterLevel from '../../../assets/assets/mirage/web/nivelAgua.png';
	import imgAirLevel from '../../../assets/assets/mirage/web/nivelAire.png';
	import imgEartLevel from '../../../assets/assets/mirage/web/nivelTierra.png';
	import imgFireLevel from '../../../assets/assets/mirage/web/nivelFuego.png';
 
	export let view;
	export let resultado;
	export let modalTenere;
	export let portal;
	export let element;
	export let tabsJazz;
	export let temp
	console.log(portal)
	console.log(temp)
	const backToLanding = () => {
		window.click.play();
		if (tabsJazz === 'proponDorada' || tabsJazz === 'actuaDorada' || tabsJazz === 'tweetDest') {
			tabsJazz = 'propon';
		}
		if (tabsJazz === 'propon' || tabsJazz === 'actua') {
			view = 'landing';
			console.log('landing');
		} else {
			view = 'landing';
		}
		// cortMirage.muted = true;
		window.bridgesMusic.muted = false;
	};
	const getColor=() =>{
		let getColors =""
		getColors= element === 0 
		? '#5570bf'
		: element === 1
		? '#522e0a'
		: element === 2
		? '#8f1209'
		: element === 3
		? '#186c5f'
		:""
		return getColors
	}
	const getImgBg=() =>{
		let getImgs =""
		getImgs= element === 0 
		? imgWaterLevel
		: element === 1
		? imgEartLevel
		: element === 2
		? imgFireLevel
		: element === 3
		? imgAirLevel
		:""
		return getImgs
	}

	let srcBack = getImgBg();
	let colorElement = getColor();
	$: vars= `--color : ${colorElement}`;
	$: varsbg= `--background : ${colorElement}`;
	$: varsImg =`--background : url(${srcBack})`;

	/* if( portal==='myWorld' && element === 0){
		portal ='lagoNimue'
	}else if(portal==='myWorld' && element === 1){
		portal ='arbolSagrado'
	}
	else if(portal==='myWorld' && element === 2){
		portal ='millauPont'
	}else if (portal==='myWorld' && element === 3){
		portal ='lvsaHora'
	} */
	if((portal==='myOtherWorld' && temp === 'agua') || (portal==='myWorld' && element === 0)){
		portal ='lagoNimue'
	}else if((portal==='myOtherWorld' && temp === 'tierra') || (portal==='myWorld' && element === 1)){
		portal ='arbolSagrado'
	}
	else if((portal==='myOtherWorld' && temp === 'fuego') || (portal==='myWorld' && element === 2)){
		portal ='millauPont'
	}else if ((portal==='myOtherWorld' && temp === 'aire') || (portal==='myWorld' && element === 3)){
		portal ='lvsaHora'
	}
</script>

<div
	class={element === 0
		? 'mirage contTop agua'
		: element === 1
		? 'mirage contTop tierra'
		: element === 2
		? 'mirage contTop fuego'
		: 'mirage contTop aire'}
>
	<div class="contTotalHubInt">
		<div class="contTopIcons">
			<span>
				<span>
					<button title="Tenere" on:click={() => (modalTenere = true)} />
					<img src={notificacionIcon} alt="" />
				</span>
			</span>
			<span>
				<button title="Mensaje" />
				<img src={notificacionIcon2} alt="" />
			</span>
		</div>
		<div class="contDataPlayer">
			<span>
				<img
					src={element === 0
						? imagAgua
						: element === 1
						? imagTierra
						: element === 2
						? imagFuego
						: imagAire}
					alt=""
				/>
			</span>
			<span>
				{#if element === 0}
					<span style="{vars}">@agua-456</span>
				{:else if element === 1}
					<span style="{vars}">@tierra-456</span>
				{:else if element === 2}
					<span style="{vars}">@fuego-456</span>
				{:else}
					<span style="{vars}">@aire-456</span>
				{/if}
				<span>
					<span style="{vars}">Misiones:</span>
					<span class="progBar" style="{varsbg}">
						<span />
					</span>
				</span>
				<span class="level" style="{vars}">
					<span style="{varsImg}">Nv 1</span>
				</span>
			</span>
		</div>
		<div class="barTitle">
			<div class="container">
				{#if !resultado}
					<button
						in:fade={{ duration: 1000 }}
						class="btnAtras"
						title="Volver atras"
						on:click={() => backToLanding()}
					/>
				{:else}
					<button class="btnAtras Home" title="Volver atras" on:click={() => backToLanding()} />
				{/if}
				<img
					in:fly={{ x: -500, duration: 2000 }}
					src={portal === 'mirage'
						? iconMirage
						: portal === 'jazz' || portal === 'MuroIdeas'
						? iconPortalJazz
						: portal === 'article'
						? iconArticulo
						: portal === 'lagoNimue'
						? iconLagoNimue
						: portal === 'arbolSagrado'
						? iconArbolSagrado
						: portal === 'millauPont'
						? iconMillauPont
						: portal === 'lvsaHora'
						? iconLvsaHora 
						: ''}
					alt=""
					srcset=""
				/>
				<span in:fade={{ duration: 1000 }}>
					{portal === 'mirage'
						? 'MIRAGE'
						: portal === 'jazz'
						? 'PORTAL JAZZ'
						: portal === 'MuroIdeas'
						? 'MURO DE IDEAS'
						: portal === 'article'
						? 'ARTICULOS'
						: portal === 'lagoNimue'
						? 'LAGO NIMUE'
						: portal === 'arbolSagrado'
						? 'ARBOL SAGRADO'
						: portal === 'millauPont'
						? 'MILLAU PONT'
						: portal === 'lvsaHora'
						? 'LVSA HORA' 
						: ''}
				</span>
				<img
					in:fly={{ x: 500, duration: 2000 }}
					src={portal === 'mirage'
						? iconMirage
						: portal === 'jazz' || portal === 'MuroIdeas'
						? iconPortalJazz
						: portal === 'article'
						? iconArticulo
						: portal === 'lagoNimue'
						? iconLagoNimue
						: portal === 'arbolSagrado'
						? iconArbolSagrado
						: portal === 'millauPont'
						? iconMillauPont
						: portal === 'lvsaHora'
						? iconLvsaHora 
						: ''}
					alt=""
					srcset=""
				/>
			</div>
		</div>
		<img
			class="decoElmHub web"
			in:fade={{ duration: 1500 }}
			src={element === 0
				? hudDecoAgua
				: element === 1
				? hudDecoTierra
				: element === 2
				? hudDecoFuego
				: hudDecoAire}
			alt=""
		/>
		<img
			class="decoElmHub mobile"
			in:fade={{ duration: 1500 }}
			src={element === 0
				? hudDecoAguaMob
				: element === 1
				? hudDecoTierraMob
				: element === 2
				? hudDecoFuegoMob
				: hudDecoAireMob}
			alt=""
		/>
	</div>
	<img
		class="elementHub web"
		in:scale={{ duration: 2000, start: 1.5, easing: quintOut }}
		src={element === 0
			? hudCentroAgua
			: element === 1
			? hudCentroTierra
			: element === 2
			? hudCentroFuego
			: hudCentroAire}
		alt=""
	/>
	<img
		class="elementHub mobile"
		in:scale={{ duration: 2000, start: 1.5, easing: quintOut }}
		src={element === 0
			? hudCentroAguaMob
			: element === 1
			? hudCentroTierraMob
			: element === 2
			? hudCentroFuegoMob
			: hudCentroAireMob}
		alt=""
	/>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	img.elementHub {
		position: absolute;
		top: 0px;
		display: block;
	}
	img.decoElmHub {
		position: absolute;
		top: 35%;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		display: block;
	}
	img.decoElmHub.mobile,
	img.elementHub.mobile {
		display: none;
	}
	.mirage.contTop.agua {
		background: url('../../../assets/assets/mirage/web/hudBackAgua.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.mirage.contTop.agua:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/mirage/web/hudFrontAgua.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 40px;
		z-index: 1;
	}
	.mirage.agua .contTotalHubInt {
		background: url('../../../assets/assets/mirage/web/hudPepasAgua.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	/* Tierra */
	.mirage.contTop.tierra {
		background: url('../../../assets/assets/mirage/web/hudBackTierra.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.mirage.contTop.tierra:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/mirage/web/hudFrontTierra.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 40px;
		z-index: 1;
	}
	.mirage.tierra .contTotalHubInt {
		background: url('../../../assets/assets/mirage/web/hudPepasTierra.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	/* Fuego */
	.mirage.contTop.fuego {
		background: url('../../../assets/assets/mirage/web/hudBackFuego.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.mirage.contTop.fuego:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/mirage/web/hudFrontFuego.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 40px;
		z-index: 1;
	}
	.mirage.fuego .contTotalHubInt {
		background: url('../../../assets/assets/mirage/web/hudPepasFuego.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	/* Aire */
	.mirage.contTop.aire {
		background: url('../../../assets/assets/mirage/web/hudBackAire.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.mirage.contTop.aire:before {
		content: '';
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/mirage/web/hudFrontAire.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 40px;
		z-index: 1;
	}
	.mirage.aire .contTotalHubInt {
		background: url('../../../assets/assets/mirage/web/hudPepasAire.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.barTitle {
		width: 100%;
		height: 45px;
		display: flex;
		position: absolute;
		bottom: 0;
		background: url('../../../assets/assets/mirage/web/barraTitulo.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: auto;
		z-index: 12;
	}
	.barTitle > .container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 1000px;
		margin: 0 auto;
		position: relative;
	}
	.barTitle > .container > button.btnAtras {
		position: absolute;
		left: 0;
		width: 62.25px;
		height: 62.25px;
		border-radius: 100%;
		border: none;
		background: url('../../../assets/assets/mirage/web/btnBack.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.barTitle > .container > button.btnAtras:hover {
		background: url('../../../assets/assets/mirage/web/btnBackHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.barTitle > .container > button.btnAtras.Home {
		position: absolute;
		right: 0;
		left: inherit;
		width: 62.25px;
		height: 62.25px;
		border-radius: 100%;
		border: none;
		background: url('../../../assets/assets/mirage/web/btnHome.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.barTitle > .container > button.btnAtras.Home:hover {
		background: url('../../../assets/assets/mirage/web/btnHomeHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.barTitle > .container > span {
		font-size: 25px;
		font-family: 'Montserrat';
		font-weight: bold;
		color: #404040;
		margin-top: 5px;
	}
	.barTitle > .container > img {
		width: 72px;
	}
	.contTopIcons {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 1000px;
		height: 75px;
		margin: 0 auto;
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
		background: url('../../../assets/assets/web/landing/btnTenere.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:first-child > span:first-child > button:hover {
		background: url('../../../assets/assets/web/landing/btnTenereHover.png');
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
		background: url('../../../assets/assets/web/landing/btnMensaje.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.contTopIcons > span:last-child > button:hover {
		background: url('../../../assets/assets/web/landing/btnMensajeHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
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
	.contDataPlayer {
		display: flex;
		position: absolute;
		height: calc(100% - 45px);
		width: 450px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 10;
	}
	.contDataPlayer > span {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 40%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.contDataPlayer > span:last-child {
		width: 60%;
		align-items: flex-start;
	}
	.contDataPlayer > span:last-child > span:not(:last-child) {
		display: flex;
		position: relative;
		width: calc(100% - 40px);
		height: 42px;
		background: url('../../../assets/assets/mirage/web/hudFondoNombreMision.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		margin-bottom: 5px;
		border-radius: 20px;
		justify-content: center;
		padding: 0 10px;
		/* color: #2c3b6e; */
		color:var(--color);
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 20px;
		flex-direction: column;
	}
	.contDataPlayer > span:last-child > span.level {
		width: 90px;
		height: 55px;
		background: url('../../../assets/assets/mirage/web/hudFondoNivel.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		margin-bottom: 5px;
		border-radius: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color:var(--color);
	}
	.contDataPlayer > span:last-child > span.level > span {
		width: 55px;
		height: 55px;
		margin-top: 2px;
		border-radius: 100%;
		background: url('../../../assets/assets/mirage/web/nivelAgua.png');
		background: var(--background);
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		font-weight: bold;
		font-family: 'Montserrat';
	}
	span.progBar {
		width: 100%;
		height: 11px;
		/* background: #2c3b6e; */
		background: var(--background);
		border-radius: 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	span.progBar > span {
		height: 70%;
		width: 30%;
		background: #fff;
		opacity: 0.7;
		margin-left: 2px;
		border-radius: 20px;
	}
	.contDataPlayer > span:nth-child(2) > span:nth-child(2) > span {
		font-size: 16px;
		font-weight: normal;
		color:var(--color);
	}
	@media only screen and (width: 768px) and (height: 1024px) {
		.contTopIcons {
			width: 100%;
		}
		.mirage.agua .contTotalHubInt:after {
			content: '';
			display: flex;
			position: absolute;
			width: 100%;
			height: 100px;
			background: url('../../../assets/assets/mirage/mobile/hudDecoAgua.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 2;
			top: 30px;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
		.mirage.tierra .contTotalHubInt:after {
			content: '';
			display: flex;
			position: absolute;
			width: 100%;
			height: 100px;
			background: url('../../../assets/assets/mirage/mobile/hudDecoTierra.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 2;
			top: 30px;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
		.mirage.fuego .contTotalHubInt:after {
			content: '';
			display: flex;
			position: absolute;
			width: 100%;
			height: 100px;
			background: url('../../../assets/assets/mirage/mobile/hudDecoFuego.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 2;
			top: 30px;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
		.mirage.aire .contTotalHubInt:after {
			content: '';
			display: flex;
			position: absolute;
			width: 100%;
			height: 100px;
			background: url('../../../assets/assets/mirage/mobile/hudDecoAire.png');
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 2;
			top: 30px;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}

		.contTopIcons {
			width: calc(100% - 20px);
			padding: 0px 10px 0;
		}
		.contTopIcons > span:first-child > span:first-child > button {
			width: 62px;
			height: 62px;
		}
		.contTopIcons > span > span > img {
			right: -5px;
			width: 17px;
		}
		.contTopIcons > span:last-child > button {
			width: 53px;
			height: 53px;
		}
		.contTopIcons > span:last-child > img {
			width: 11px;
			right: 10px;
		}
		.contDataPlayer {
			justify-content: center;
			height: 204px;
		}
		.barTitle {
			height: 48px;
		}
		.barTitle > .container {
			width: 70%;
			justify-content: space-between;
		}
		.barTitle > .container > button.btnAtras {
			width: 43px;
			height: 43px;
			left: -105px;
			top: 7.5px;
		}
		.barTitle > .container > button.btnAtras.Home {
			width: 43px;
			height: 43px;
			left: -105px;
			top: 7.5px;
		}
		.barTitle img {
			width: 75px;
			margin-top: 10px;
		}
		.barTitle > .container > span {
			font-size: 25px;
		}
		.contDataPlayer > span {
			width: 35%;
			height: auto;
		}
		.contDataPlayer > span > img {
			width: 100%;
		}
		.contDataPlayer > span:last-child {
			width: 45%;
		}
		.contDataPlayer > span:nth-child(2) > span:nth-child(2) > span {
			font-size: 13px;
			font-family: 'Work Sans';
		}
		span.progBar {
			height: 7px;
		}

		/* Agua */
		.mirage.contTop.agua {
			background: url('../../../assets/assets/mirage/mobile/hudBackAgua.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 298px;
		}
		.mirage.contTop.agua:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 141px;
			background: url('../../../assets/assets/mirage/mobile/hudFrontAgua.png');
			background-position: inherit;
			background-repeat: no-repeat;
			background-size: cover;
			bottom: 2px;
		}

		/* Tierra */
		.mirage.contTop.tierra {
			background: url('../../../assets/assets/mirage/mobile/hudBackTierra.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 298px;
		}
		.mirage.contTop.tierra:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 141px;
			background: url('../../../assets/assets/mirage/mobile/hudFrontTierra.png');
			background-position: inherit;
			background-repeat: no-repeat;
			background-size: cover;
			bottom: 2px;
		}

		/* Fuego */
		.mirage.contTop.fuego {
			background: url('../../../assets/assets/mirage/mobile/hudBackFuego.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 298px;
		}
		.mirage.contTop.fuego:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 141px;
			background: url('../../../assets/assets/mirage/mobile/hudFrontFuego.png');
			background-position: inherit;
			background-repeat: no-repeat;
			background-size: cover;
			bottom: 2px;
		}

		/* Aire */
		.mirage.contTop.aire {
			background: url('../../../assets/assets/mirage/mobile/hudBackAire.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 298px;
		}
		.mirage.contTop.aire:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 141px;
			background: url('../../../assets/assets/mirage/mobile/hudFrontAire.png');
			background-position: inherit;
			background-repeat: no-repeat;
			background-size: cover;
			bottom: 2px;
		}
	}
	
	@media only screen and (max-width: 425px) {
		img.decoElmHub.web,
		img.elementHub.web {
			display: none;
		}
		img.decoElmHub.mobile,
		img.elementHub.mobile {
			display: block;
		}
		img.decoElmHub {
			width: 75%;
			top: 30%;
		}
		.contTopIcons {
			width: calc(100% - 20px);
			padding: 0px 10px 0;
		}
		.contTopIcons > span:first-child > span:first-child > button {
			width: 46px;
			height: 46px;
		}
		.contTopIcons > span > span > img {
			right: -5px;
			width: 17px;
		}
		.contTopIcons > span:last-child > button {
			width: 39px;
			height: 39px;
		}
		.contTopIcons > span:last-child > img {
			width: 11px;
			right: 10px;
		}
		.contDataPlayer {
			justify-content: center;
		}
		.contDataPlayer span {
			margin-left: 2px;
		}
		.barTitle {
			height: 40px;
			bottom: -7px;
		}
		.barTitle > .container {
			width: 70%;
			justify-content: space-between;
		}
		.barTitle > .container > button.btnAtras {
			width: 33px;
			height: 33px;
			left: -45px;
			top: 7.5px;
		}
		.barTitle > .container > button.btnAtras.Home {
			width: 33px;
			height: 33px;
			right: -55px;
			top: 7.5px;
		}
		.barTitle img {
			width: 45px;
			margin-top: 5px;
		}
		.barTitle > .container > span {
			font-size: 15px;
		}
		.contDataPlayer > span {
			width: 81px;
			height: auto;
		}
		.contDataPlayer > span > img {
			width: 100%;
		}
		.contDataPlayer > span:last-child {
			width: 130px;
		}
		.contDataPlayer > span:last-child > span:not(:last-child) {
			width:100px;
			height: 24px;
			font-size: 15px;
			margin-bottom: 2px;
		}
		.contDataPlayer > span:last-child > span:nth-child(2) {
			height: 28px;
		}
		.contDataPlayer > span:nth-child(2) > span:nth-child(2) > span {
			font-size: 13px;
			font-family: 'Work Sans';
		}
		span.progBar {
			height: 7px;
		}
		.contDataPlayer > span:last-child > span.level {
			width: 42px;
			height: 31px;
		}
		.contDataPlayer > span:last-child > span.level > span {
			width: 27px;
			height: 27px;
			font-size: 7px;
		}
		/* Agua */
		.mirage.contTop.agua {
			background: url('../../../assets/assets/mirage/mobile/hudBackAgua.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.mirage.contTop.agua:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: url('../../../assets/assets/mirage/mobile/hudFrontAgua.png');
			background-position: bottom center;
			background-repeat: no-repeat;
			background-size: 106%;
			bottom: 2px;
		}
		/* Tierra */
		.mirage.contTop.tierra {
			background: url('../../../assets/assets/mirage/mobile/hudBackTierra.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.mirage.contTop.tierra:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: url('../../../assets/assets/mirage/mobile/hudFrontTierra.png');
			background-position: bottom center;
			background-repeat: no-repeat;
			background-size: 106%;
			bottom: 2px;
		}
		/* Fuego */
		.mirage.contTop.fuego {
			background: url('../../../assets/assets/mirage/mobile/hudBackFuego.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.mirage.contTop.fuego:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: url('../../../assets/assets/mirage/mobile/hudFrontFuego.png');
			background-position: bottom center;
			background-repeat: no-repeat;
			background-size: 106%;
			bottom: 2px;
		}
		/* Aire */
		.mirage.contTop.aire {
			background: url('../../../assets/assets/mirage/mobile/hudBackAire.png');
			background-position: top center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.mirage.contTop.aire:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: url('../../../assets/assets/mirage/mobile/hudFrontAire.png');
			background-position: bottom center;
			background-repeat: no-repeat;
			background-size: 106%;
			bottom: 2px;
		}
		.barTitle > .container > img {
			width: 52px;
		}
	}
	@media only screen and (max-width: 768px) {
		.mirage.contTop.agua:before {
			bottom: 25px;
		}
		.mirage.contTop.tierra:before {
			bottom: 25px;
		}
		.mirage.contTop.aire:before {
			bottom: 25px;
		}
		.mirage.contTop.fuego:before {
			bottom:25px;
		}
	}
	@media only screen and (max-width: 425px) {
		.mirage.contTop.agua:before {
			bottom: 6px;
		}
		.mirage.contTop.tierra:before {
			bottom: 6px;
		}
		.mirage.contTop.aire:before {
			bottom: 6px;
		}
		.mirage.contTop.fuego:before {
			bottom: 6px;
		}
	}
	@media only screen and (max-width: 360px) {
		.contDataPlayer > span:last-child > span:not(:last-child) {
			padding: 0 5px;
		}
	}

</style>
