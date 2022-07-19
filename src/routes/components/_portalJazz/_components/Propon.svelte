<script>
	import { fly } from 'svelte/transition';
	import conteAgua from '../../../../assets/assets/jazz/mobile/conteAgua.png';
	import conteTierra from '../../../../assets/assets/jazz/mobile/conteTierra.png';
	import conteFuego from '../../../../assets/assets/jazz/mobile/conteFuego.png';
	import conteAire from '../../../../assets/assets/jazz/mobile/conteAire.png';
	import iconTime from '../../../../assets/assets/jazz/mobile/iconTime.png';
	export let item;
	export let tiempo;
	export let tweetDest;
</script>

<button
	in:fly={{ y: 500, duration: 2000 }}
	class="btnPropon"
	key={item.key}
	on:click={() => tweetDest(item.elementSelect)}
>
	<span>{item.title}</span>
	<span>
		<span>{item.estrategiaTitle}</span>
		<span>{item.text}</span>
		<span>
			<span class={item.elementSelect === 0 ? 'agua selected' : 'agua'}>
				<span>{item.elementAgua}</span>
				<img src={conteAgua} alt="" />
			</span>
			<span class={item.elementSelect === 1 ? 'tierra selected' : 'tierra'}>
				<span>{item.elementTierra}</span>
				<img src={conteTierra} alt="" />
			</span>
			<span class={item.elementSelect === 3 ? 'aire selected' : 'aire'}>
				<span>{item.elementFuego}</span>
				<img src={conteAire} alt="" />
			</span>
			<span class={item.elementSelect === 2 ? 'fuego selected' : 'fuego'}>
				<span>{item.elementAire}</span>
				<img src={conteFuego} alt="" />
			</span>
		</span>
	</span>
	<span>
		<span>
			<img src={iconTime} alt="" />
			<span>{tiempo[item.key]} hrs</span>
		</span>
		<span>
			<span
				class={item.elementSelect === 0
					? 'agua barProg'
					: item.elementSelect === 1
					? 'tierra barProg'
					: item.elementSelect === 2
					? 'fuego barProg'
					: 'aire barProg'}
			>
				<span />
			</span>
		</span>
	</span>
</button>

<!-- markup (zero or more items) goes here -->
<style>
	button.btnPropon {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 180px;
		height: 210px;
		background: url('../../../../assets/assets/jazz/web/conteMision.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto;
		box-shadow: 0px 3px 6px 0px #00000040;
		border: none;
		padding: 0;
		border-radius: 15px;
		transition: 0.2 ease;
	}
	button.btnPropon:hover {
		background: url('../../../../assets/assets/jazz/web/conteMisionHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto;
		transform: scale(1.0)
	}
	button.btnPropon > span:first-child {
		color: #fff;
		font-size: 14px;
		width: 100%;
		height: 23%;
		font-weight: 500;
		font-family: 'Montserrat';
		justify-content: center;
		align-items: center;
		display: flex;
	}
	button.btnPropon > span:nth-child(2) {
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
	}
	button.btnPropon > span:nth-child(2) > span:first-child {
		color: #404040;
		font-size: 13px;
		font-weight: 600;
		text-align: center;
		padding: 5px 0;
		font-family: 'Montserrat';
	}
	button.btnPropon > span:nth-child(2) > span:nth-child(2) {
		color: #404040;
		font-size: 13px;
		text-align: center;
		padding: 0px 5px 5px;
		font-family: 'Montserrat';
	}
	button.btnPropon > span:nth-child(2) > span:last-child {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 45px;
		width: calc(100% - 20px);
		padding: 0 10px;
	}
	button.btnPropon > span:nth-child(3) {
		width: calc(100% - 20px);
		height: 23%;
		display: flex;
		flex-direction: column;
		padding: 0 10px;
	}
	button.btnPropon > span:nth-child(3) > span {
		display: flex;
		width: 100%;
		height: 50%;
		justify-content: space-between;
		align-items: center;
	}

	button.btnPropon > span:nth-child(3) > span:first-child > span {
		color: #404040;
		font-size: 13px;
		font-family: 'Montserrat';
		font-weight: 600;
	}
	span.agua.barProg {
		width: calc(100% - 6px);
		height: 12px;
		background: url('../../../../assets/assets/jazz/web/barraAgua.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		padding: 3px;
	}
	span.tierra.barProg {
		width: calc(100% - 6px);
		height: 12px;
		background: url('../../../../assets/assets/jazz/web/barraTierra.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		padding: 3px;
	}
	span.fuego.barProg {
		width: calc(100% - 6px);
		height: 12px;
		background: url('../../../../assets/assets/jazz/web/barraFuego.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		padding: 3px;
	}
	span.aire.barProg {
		width: calc(100% - 6px);
		height: 12px;
		background: url('../../../../assets/assets/jazz/web/barraAire.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		padding: 3px;
	}
	span.barProg > span {
		width: 35%;
		height: 50%;
		background: #fff;
		border-radius: 10px;
	}
	button.btnPropon > span:nth-child(2) > span:last-child > span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: calc(25% - 10px);
		height: 30px;
		position: relative;
		padding: 5px;
	}
	button.btnPropon > span:nth-child(2) > span:last-child > span > span {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Montserrat';
		font-weight: 600;
		color: #fff;
		font-size: 10px;
	}
	span.agua.selected {
		background: url('../../../../assets/assets/jazz/mobile/conteSelecAgua.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	span.tierra.selected {
		background: url('../../../../assets/assets/jazz/mobile/conteSelecTierra.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	span.fuego.selected {
		background: url('../../../../assets/assets/jazz/mobile/conteSelecFuego.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	span.aire.selected {
		background: url('../../../../assets/assets/jazz/mobile/conteSelecAire.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	button.btnPropon > span:nth-child(2) > span:last-child > span > img {
		width: 90%;
	}
	@media only screen and (max-width: 768px) {
		button.btnPropon {
			display: flex;
			position: relative;
			flex-direction: column;
			width: 130px;
			height: 185px;
			background: url('../../../../assets/assets/jazz/mobile/conteMision.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			border: none;
			padding: 0;
		}
		button.btnPropon:hover {
			background: url('../../../../assets/assets/jazz/mobile/conteMisionHover.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		button.btnPropon > span:first-child {
			color: #fff;
			font-size: 11px;
			width: 100%;
			height: 15%;
			font-weight: 500;
			font-family: 'Montserrat';
			justify-content: center;
			align-items: center;
			display: flex;
		}
		button.btnPropon > span:nth-child(2) {
			width: 100%;
			height: 61%;
			display: flex;
			flex-direction: column;
		}
		button.btnPropon > span:nth-child(2) > span:first-child {
			color: #404040;
			font-size: 10px;
			font-weight: 600;
			text-align: center;
			padding: 10px 0;
			font-family: 'Montserrat';
		}
		button.btnPropon > span:nth-child(2) > span:nth-child(2) {
			color: #404040;
			font-size: 10px;
			text-align: center;
			padding: 0px 5px 10px;
			font-family: 'Montserrat';
		}
		button.btnPropon > span:nth-child(2) > span:last-child {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		}
		button.btnPropon > span:nth-child(3) {
			width: calc(100% - 20px);
			height: calc(24% - 5px);
			display: flex;
			flex-direction: column;
			padding: 5px 10px 0;
		}
		button.btnPropon > span:nth-child(3) > span {
			display: flex;
			width: 100%;
			height: 50%;
			justify-content: space-between;
			align-items: center;
		}

		button.btnPropon > span:nth-child(3) > span:first-child > span {
			color: #404040;
			font-size: 10px;
			font-family: 'Montserrat';
			font-weight: 600;
		}
		span.agua.barProg {
			width: calc(100% - 6px);
			height: 12px;
			background: url('../../../../assets/assets/jazz/mobile/barraAgua.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;
			padding: 3px;
		}
		span.tierra.barProg {
			width: calc(100% - 6px);
			height: 12px;
			background: url('../../../../assets/assets/jazz/mobile/barraTierra.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;
			padding: 3px;
		}
		span.fuego.barProg {
			width: calc(100% - 6px);
			height: 12px;
			background: url('../../../../assets/assets/jazz/mobile/barraFuego.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;
			padding: 3px;
		}
		span.aire.barProg {
			width: calc(100% - 6px);
			height: 12px;
			background: url('../../../../assets/assets/jazz/mobile/barraAire.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;
			padding: 3px;
		}
		span.barProg > span {
			width: 35%;
			height: 50%;
			background: #fff;
			border-radius: 10px;
		}
		button.btnPropon > span:nth-child(2) > span:last-child > span {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: calc(25% - 10px);
			height: 20px;
			position: relative;
			padding: 5px;
		}
		button.btnPropon > span:nth-child(2) > span:last-child > span > span {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'Montserrat';
			font-weight: 600;
			color: #fff;
			font-size: 10px;
		}
		span.agua.selected {
			background: url('../../../../assets/assets/jazz/mobile/conteSelecAgua.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.tierra.selected {
			background: url('../../../../assets/assets/jazz/mobile/conteSelecTierra.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.fuego.selected {
			background: url('../../../../assets/assets/jazz/mobile/conteSelecFuego.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		span.aire.selected {
			background: url('../../../../assets/assets/jazz/mobile/conteSelecAire.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		button.btnPropon > span:nth-child(2) > span:last-child > span > img {
			width: 100%;
		}
	}
</style>
