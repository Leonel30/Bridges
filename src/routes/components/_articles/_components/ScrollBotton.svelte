<script>
	import pointNoSelec from '../../../../assets/assets/elementos graficos/pointNoSelec.png';
	import pointSelec from '../../../../assets/assets/elementos graficos/pointSelec.png';

	const cant = [1, 2, 3, 4,5];
	export let cont = 1;
	export let view,getEffect;
	$: console.log(cont)
	/* export let classImg; */

	/* const animationSaludo = (contador) => {
		if (contador === 1) {
			classImg = 'hola';
		} else if (contador === 2) {
			classImg = 'mision';
		} 
		else if (contador === 3) {
			classImg = 'compromiso';
		}
		else if (contador === 4) {
			classImg = 'compromisos';
		}
	}; */

	
	const right = () => {
		window.click.play()
		if (cont <= 1 || cont === 6) {
			cont = cont;
		} else {
			cont = cont - 1;
		}
		getEffect = 'right'
/* 		animationSaludo(cont) */
	};
	const left = () => {
		window.click.play()
		if (cont === 5) {
			view = 'pronombres';
		} else if (cont === 5) {
			cont = cont;
		} else {
			cont = cont + 1;
		}
		getEffect = 'left'
		/* animationSaludo(cont) */
	};
	$: console.log(getEffect)
	
</script>

<div class="controlScroll">
	<div class="btnAccion">
		<button class={cont <= 1 || cont === 6 ? 'btnL block' : 'btnL'} on:click={() => right()} />
	</div>
	<div class="indicators">
		{#each cant as i}
			<img src={cont === i ? pointSelec : pointNoSelec} alt="" srcset="" />
		{/each}
	</div>
	<div class="btnAccion">
		<button class={cont === 5 ? 'btnR block' : 'btnR'} on:click={() => left()} />
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.controlScroll {
		display: flex;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 60px;
		justify-content: center;
		align-items: center;
        gap: 50px;
	}
	.indicators {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100%;
		margin: 0;
        gap:20px
	}
	button.btnL,
	button.btnR {
		display: flex;
		position: relative;
		width: 40px;
		padding: 0;
		height: 40px;
		border-radius: 100%;
		border: none;
	}
	button.btnL {
		background: url('../../../../assets/assets/botones/arrowL.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	button.btnL:hover {
		background: url('../../../../assets/assets/botones/arrowLhover.png');
		/* background-repeat: no-repeat;
		background-position: center;
		background-size: cover */;
	}
	button.btnR:hover {
		background: url('../../../../assets/assets/botones/arrowRhover.png');
		/* background-repeat: no-repeat;
		background-position: center;
		background-size: cover; */
	}
	button.btnR {
		background: url('../../../../assets/assets/botones/arrowR.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	button.btnL.block {
		background: url('../../../../assets/assets/botones/arrowLblock.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	button.btnR.block {
		background: url('../../../../assets/assets/botones/arrowRblock.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	@media only screen and (max-width:1023px) and (min-width:768px) {
		.controlScroll{
			gap:0px;
		}
		.controlScroll div:nth-child(2),.controlScroll div:nth-child(3) {
			margin-left:50px;
		}
		.indicators {
			gap: 0px;
		}
		.indicators img:nth-child(2),.indicators img:nth-child(3),.indicators img:nth-child(4),.indicators img:nth-child(5) {
			margin-left: 20px;
		}
	}
</style>
