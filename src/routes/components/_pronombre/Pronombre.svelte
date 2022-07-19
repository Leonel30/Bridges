<script>
	import { fade } from 'svelte/transition';
	export let view;
	const changeNarrativa = () => {
		view = 'narrativa';
		window.comp1.play();
		window.bridgesMusic.muted = true;
	};
</script>

<div in:fade={{ delay: 1500, duration: 1000 }} out:fade class="pronombre">
	<h3>¿Con qué pronombre te identificas?</h3>
	<div class="btnPronombres">
		<button on:click={() => changeNarrativa()}>ELLA</button>
		<button on:click={() => changeNarrativa()}>EL</button>
		<button on:click={() => changeNarrativa()}>ELLE</button>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.pronombre {
		background: url('../../../assets/assets/web/elementos graficos/decoPronombres.png');
		background-repeat: no-repeat;
		background-position: top center;
		position: absolute;
		width: 1000px;
	}
	.pronombre > h3 {
		font-size: 30px;
		margin-bottom: 40px;
	}
	.btnPronombres {
		display: flex;
		position: relative;
		width: 560px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.btnPronombres > button {
		display: flex;
		position: relative;
		width: 120px;
		height: 120px;
		border-radius: 100%;
		justify-content: center;
		align-items: center;
		font-family: 'Montserrat';
		font-size: 20px;
		font-weight: bold;
		color: #23a38f;
		border: none;
		text-shadow: 1px 1px 2px #00000040;
		background: url('../../../assets/assets/botones/pronombre.png');
		background-position: center;
		background-size: cover;
	}
	.btnPronombres > button:hover {
		background: url('../../../assets/assets/botones/pronombreHover.png');
		background-position: center;
		background-size: cover;
	}
	@media only screen and (max-width: 768px) {
		.pronombre {
			width: 100%;
		}
	}
	@media only screen and (max-width: 425px) {
		.pronombre {
			background: url('../../../assets/assets/elementos\ graficos/pronombreDecorMobile.png');
			background-repeat: no-repeat;
			background-position: top center;
			background-size: contain;
			width: calc(100% - 30px);
			padding: 0 15px;
		}
		.btnPronombres {
			flex-direction: column;
			height: 65%;
		}
	}
</style>
