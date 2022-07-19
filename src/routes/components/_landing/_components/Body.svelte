<script>
	import { fly } from 'svelte/transition';
	export let view;
	export let element;
	export let portal;
	export let contElem;
	export let temp;
	console.log(temp)
	const worldsSelectGo = (mundo ,item) => {
		if (mundo === 'mirage') {
			window.bridgesMusic.muted = true;
			window.breakingGlass.play();
		} else if (mundo === 'jazz') {
			window.bridgesMusic.muted = true;
		} else if (mundo === 'article') {
			window.bridgesMusic.muted = true;
		}else if (mundo === 'myWorld') {
			window.bridgesMusic.muted = true;
		}else if (mundo === 'myOtherWorld') {
			window.bridgesMusic.muted = true;
		}
		view = mundo;
		portal = mundo;
		temp=item
		console.log(view,portal,temp)
	};
</script>

<div class={`${contElem[element]} contBotton`}>
	<div class="contBody">
		<div in:fly={{ x: -200, duration: 1500, delay: 1500 }} class="btnBody">
			<div>
				<span>
					<button title="Portal Jazz" on:click={() => worldsSelectGo('jazz')} />
				</span>
				<span> 
					<button title="Mirage" on:click={() => worldsSelectGo('mirage')} />
				</span>
				<span>
					<button class={contElem[element]} on:click={() => worldsSelectGo('myWorld')} />
					<!-- <button class={contElem[element]} on:click={() => myWorld(element)} /> -->
				</span>
			</div>
			<div>
				{#each contElem as item}
					{#if item !== 'magia' && item !== contElem[element]}
						<span><button on:click={()=> worldsSelectGo('myOtherWorld',item)} class={`blocked ${item}`} /> </span>
					{/if}
				{/each}				
			</div>
		</div>
		<div in:fly={{ x: 200, duration: 1500, delay: 1500 }} class="btnDescubre">
			<button class="arrowR" title="Article" on:click={() => worldsSelectGo('article')} />
			<p><span>Descubre…</span> Vínculo a artículo de descubrimiento…</p>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.contBody {
		display: flex;
		position: relative;
		width: 75%;
		max-width: 850px;
		height: auto;
		align-items: center;
	}
	.contBody > .btnBody {
		display: inline-flex;
		flex-direction: column;
		width: calc(100% - 200px);
		height: auto;
		align-items: center;
	}
	.contBody > .btnDescubre {
		display: inline-flex;
		flex-direction: column;
		width: 200px;
		height: 160px;
		justify-content: center;
		align-items: center;
		background: url('../../../../assets/assets/web/landing/conteNoticia.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		position: relative;
	}
	.arrowR {
		background: url('../../../../assets/assets/web/botones/arrowR.png');
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		position: absolute;
		top: 15px;
		right: 20px;
	}
	.arrowR:hover {
		background: url('../../../../assets/assets/web/botones/arrowRHover.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.btnDescubre > p {
		padding: 0 25px;
		font-size: 14px;
		margin-top: 60px;
	}
	.btnDescubre > p > span {
		display: block;
		font-weight: bold;
	}
	.contBody > .btnBody > div {
		display: flex;
		position: relative;
		width: 100%;
		height: auto;
		justify-content: space-evenly;
		align-items: center;
	}
	.contBody > .btnBody > div > span {
		display: inline-flex;
		position: relative;
		height: auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.contBody > .btnBody > div > span > button {
		display: flex;
		position: relative;
		width: 140px;
		height: 140px;
		border: none;
		border-radius: 100%;
	}
	.contBody > .btnBody > div:last-child {
		justify-content: space-evenly;
		width: 90%;
	}
	.contBody > .btnBody > div:last-child > span > button {
		display: flex;
		position: relative;
		width: 100px;
		height: 100px;
		border: none;
		border-radius: 100%;
	}
	.contBody > .btnBody > div:first-child > span:first-child > button {
		background: url('../../../../assets/assets/landing/btnPortal.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:first-child > button:hover {
		background: url('../../../../assets/assets/landing/btnPortalHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:nth-child(2) > button {
		background: url('../../../../assets/assets/landing/btnMirage.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		margin-top: -75px;
	}
	.contBody > .btnBody > div:first-child > span:nth-child(2) > button:hover {
		background: url('../../../../assets/assets/landing/btnMirageHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.agua {
		background: url('../../../../assets/assets/landing/btnAgua.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.agua:hover {
		background: url('../../../../assets/assets/landing/btnAguaHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.contBody > .btnBody > div:first-child > span:last-child > button.tierra {
		background: url('../../../../assets/assets/landing/btnTierra.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.tierra:hover {
		background: url('../../../../assets/assets/landing/btnTierraHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.fuego {
		background: url('../../../../assets/assets/landing/btnFuego.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.fuego:hover {
		background: url('../../../../assets/assets/landing/btnFuegoHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.aire {
		background: url('../../../../assets/assets/landing/btnAire.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:first-child > span:last-child > button.aire:hover {
		background: url('../../../../assets/assets/landing/btnAireHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.contBody > .btnBody > div:last-child > span > button.blocked.agua {
		background: url('../../../../assets/assets/landing/btnAguaBlock.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.blocked.agua:hover {
		background: url('../../../../assets/assets/landing/btnAguaBlockHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.blocked.tierra {
		background: url('../../../../assets/assets/landing/btnTierraBlock.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.blocked.tierra:hover {
		background: url('../../../../assets/assets/landing/btnTierraBlockHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.blocked.fuego {
		background: url('../../../../assets/assets/landing/btnFuegoBlock.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		margin-bottom: -75px;
	}
	.contBody > .btnBody > div:last-child > span > button.blocked.fuego:hover {
		background: url('../../../../assets/assets/landing/btnFuegoBlockHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.aire.blocked {
		background: url('../../../../assets/assets/landing/btnAireBlock.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.contBody > .btnBody > div:last-child > span > button.aire.blocked:hover {
		background: url('../../../../assets/assets/landing/btnAireBlockHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	@media only screen and (max-width: 768px) {
		.contBody {
			width: 100%;
		}
	}
	@media only screen and (max-width: 425px) {
		.contBotton > .contBody {
			width: 100%;
			flex-direction: column;
			height: 100%;
		}
		.contBotton > .contBody > .btnBody {
			width: 90%;
			z-index: 1;
			height: calc(100% - 65px);
			justify-content: center;
			align-items: center;
		}
		.contBotton:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background: url('../../../../assets/assets/landing/hudInferior.png');
			background-repeat: no-repeat;
			background-position: bottom;
			background-size: contain;
			z-index: 0;
			bottom: 0;
		}
		.contBody > .btnDescubre {
			height: 65px;
			width: 90%;
			background: url('../../../../assets/assets/landing/contaNoticia.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 1;
		}
		.arrowR {
			top: 11px;
			right: 11px;
		}
		.btnDescubre > p {
			padding: 0;
			width: 68%;
			font-size: 12px;
			margin-top: 10px;
			margin-left: 10px;
		}
		.contBody > .btnBody > div:first-child > span:nth-child(2) > button {
			margin-top: -100px;
			margin-bottom: initial;
		}
		.contBody > .btnBody > div:last-child {
			width: 90%;
		}
		.contBody > .btnBody > div:last-child > span:nth-child(2) > button.blocked {
			margin-top: initial;
			margin-bottom: -50px;
		}
		.contBody > .btnBody > div > span > button {
			width: 110px;
			height: 110px;
		}
		.contBody > .btnBody > div:last-child > span > button {
			width: 90px;
			height: 90px;
		}
		.btnDescubre > p {
			width: 60%;
			font-size: 10px;
			margin-top: 5px;
		}
	}
	@media only screen and (max-width: 320px) {
		.contBody > .btnBody > div > span > button {
			width: 80px;
			height: 80px;
		}
		.contBody > .btnBody > div:last-child > span > button {
			width: 70px;
			height: 70px;
		}
		.btnDescubre > p {
			width: 69%;
			font-size: 10px;
			margin-top: 5px;
		}
	}
</style>
