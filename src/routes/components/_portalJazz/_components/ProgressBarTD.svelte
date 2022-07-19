<script>
	import iconTimeBig from '../../../../assets/assets/jazz/mobile/iconTimeBig.png';
	import PostulaMision from './PostulaMision.svelte';
	export let elementSelect;
	export let modalMision;
	export let tabsJazz;
	export let element
	console.log(elementSelect)
	console.log(element)
</script>

<div>
	<div class="pBarTDest">
		<img src={iconTimeBig} alt="" />
		<span>Cierra en 12hr</span>
		<div>
			<span>Cierra en 12hr</span>
			<div
				class={element === 0
					? 'agua pBar'
					: element === 1
					? 'tierra pBar'
					: element === 2
					? 'fuego pBar'
					: 'aire pBar'}
			>
				<span />
			</div>
			<img src={iconTimeBig} alt="" />
		</div>
		<span>Cierra en 12hr</span>
	</div>
	<span><PostulaMision bind:modalMision {...{ tabsJazz }} /></span>
</div>

<style>
	.pBarTDest {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Montserrat';
		font-size: 12px;
		color: #646f6f;
		width: 35%;
		margin: 0 auto;
		margin-bottom: 8px;
		position: relative;
	}
	.pBarTDest > img {
		width: 35px;
		margin-right: 10px;
	}
	.pBarTDest > span {
		width: 20%;
		height: auto;
	}
	.pBarTDest > div {
		width: 75%;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}
	.pBar {
		display: flex;
		position: relative;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 14px;
		overflow: hidden;
		border-radius: 10px;
	}
	.agua.pBar {
		background: url('../../../../assets/assets/jazz/web/barraIdeaAgua.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.tierra.pBar {
		background: url('../../../../assets/assets/jazz/web/barraIDeaTierra.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.fuego.pBar {
		background: url('../../../../assets/assets/jazz/web/barraIdeafuego.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.aire.pBar {
		background: url('../../../../assets/assets/jazz/web/barraIdeaAire.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.pBar > span {
		width: 30%;
		height: 65%;
		background: #fff;
		margin-left: 4px;
		border-radius: 10px;
		animation: 3s 1 normal bar-animation;
		animation-delay: 0s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}
	@keyframes bar-animation {
		0% {
			width:0%;	
		}
		100% {
			width:30%;	
		}
	}

	.pBarTDest > div > img {
		margin-left: 5px;
	}
	.pBarTDest > span,
	.pBarTDest > div > img {
		display: none;
	}
	
	@media only screen and (max-width: 	1023px) {
		.pBarTDest {
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'Montserrat';
			font-size: 12px;
			color: #646f6f;
			width: 95%;
			margin: 0 auto;
			position: relative;
		}
		.pBarTDest > span {
			width: 30%;
			height: auto;
		}
		.pBarTDest > div {
			width: 70%;
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			flex-direction: row;
		}
		.pBar {
			display: flex;
			position: relative;
			justify-content: flex-start;
			align-items: center;
			width: calc(100% - 33px);
			height: 14px;
			overflow: hidden;
			border-radius: 10px;
		}
		.agua.pBar {
			background: url('../../../../assets/assets/jazz/mobile/barraAguaL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
		}
		.tierra.pBar {
			background: url('../../../../assets/assets/jazz/mobile/barraTierraL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
		}
		.fuego.pBar {
			background: url('../../../../assets/assets/jazz/mobile/barraFuegoL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
		}
		.aire.pBar {
			background: url('../../../../assets/assets/jazz/mobile/barraAireL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
		}
		.pBar > span {
			width: 30%;
			height: 65%;
			background: #fff;
			margin-left: 4px;
			border-radius: 10px;
		}
		.pBarTDest > div > img {
			margin-left: 5px;
		}
		.pBarTDest > img:first-child {
			display: none;
		}
		.pBarTDest > span:nth-child(2), .pBarTDest>div>img {
			display: flex;
		}
		.pBarTDest > div:nth-child(3) > span {
			display: none;
		}
	}
</style>
