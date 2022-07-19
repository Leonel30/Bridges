<script>
	import pointNoSelec from '../../../../assets/assets/elementos graficos/pointNoSelec.png';
	import pointSelec from '../../../../assets/assets/elementos graficos/pointSelec.png';

	const cant = [1, 2, 3, 4];
	export let cont;
	export let view;
	export let classImg;

	const animationSaludo = (contador) => {
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
	};
	const right = () => {
		window.click.play()
		if (cont <= 1 || cont === 4) {
			cont = cont;
		} else {
			cont = cont - 1;
		}		
		animationSaludo(cont)
	};
	const left = () => {
		window.click.play()
		if (cont === 4) {
			view = 'pronombres';
		} else if (cont === 3) {
			cont = cont;
		} else {
			cont = cont + 1;
		}
		animationSaludo(cont)
	};
	
</script>

<div class="controlScroll">
	<div class="btnAccion">
		<button class={cont <= 1 || cont === 4 ? 'btnL block' : 'btnL'} on:click={() => right()} />
	</div>
	<div class="indicators">
		{#each cant as i}
			<img src={cont === i ? pointSelec : pointNoSelec} alt="" srcset="" />
		{/each}
	</div>
	<div class="btnAccion">
		<button class={cont === 3 ? 'btnR block' : 'btnR'} on:click={() => left()} />
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.controlScroll {
		display: flex;
		position: absolute;
		bottom: 0;
		width: 375px;
		height: 60px;
		justify-content: center;
		align-items: center;
	}
	.indicators {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		width: 100px;
		height: 100%;
		margin: 0 10px;
	}
	button.btnL,
	button.btnR {
		display: flex;
		position: relative;
		width: 35px;
		padding: 0;
		height: 35px;
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
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	button.btnR:hover {
		background: url('../../../../assets/assets/botones/arrowRhover.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
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
</style>
