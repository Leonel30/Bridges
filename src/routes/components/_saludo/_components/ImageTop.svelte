<script>
	import { fly, fade } from 'svelte/transition';
	import imagMision from '../../../../assets/assets/videos/misionFf.gif';
	import imagCompromiso from '../../../../assets/assets/videos/compromisoFf.gif';
	import imagHola from '../../../../assets/assets/videos/holaFf.gif';
	import imagCuriosidad from '../../../../assets/assets/elementos graficos/imagCuriosidad.png';
	import imagDudas from '../../../../assets/assets/elementos graficos/imagDudas.png';
	import imagNecesario from '../../../../assets/assets/elementos graficos/imagNecesario.png';
	export let cont;
	export let btnComp;
	export let classImg;
	export let initCont = 0;

	$: setTimeout(() => {
		initCont = 0;
	}, 2000),
		setTimeout(() => {
			initCont = 1;
		}, 5000);
</script>

<div
	class={cont === 1
		? 'imgTop hola'
		: cont === 2
		? 'imgTop mision'
		: cont === 3
		? 'imgTop compromiso'
		: cont === 4
		? 'imgTop compromisos'
		: ''}
>
	{#if classImg === 'hola'}
		<img
			in:fly={initCont === 1 ? { x: 200, duration: 1000, delay: 1000 } : { y: 50, duration: 1000 }}
			out:fly={{ x: -200, duration: 1000 }}
			src={imagHola}
			alt=""
			class={classImg}
		/>
	{:else if classImg === 'mision'}
		<img
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, duration: 1000 }}
			src={imagMision}
			alt=""
			class={classImg}
		/>
	{:else if classImg === 'compromiso'}
		<img
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, duration: 1000 }}
			src={imagCompromiso}
			alt=""
			class={classImg}
		/>
	{:else if classImg === 'compromisos' && btnComp === 'curiosoAct'}
		<img in:fade={{ duration: 1000 }} src={imagCuriosidad} alt="" class={classImg} />
		<h2 in:fade={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
			Tengo curiosidad. <br />Me comprometo a intentarlo.
		</h2>
	{:else if classImg === 'compromisos' && btnComp === 'necesarioAct'}
		<img in:fade={{ duration: 1000 }} src={imagNecesario} alt="" class={classImg} />
		<h2 in:fade={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
			Tengo lo necesario. <br />Me comprometo A lograrlo.
		</h2>
	{:else if classImg === 'compromisos' && btnComp === 'dudaAct'}
		<img in:fly={{ y: 50, duration: 1000 }} src={imagDudas} alt="" class={classImg} />
		<h2 in:fly={{ y: 50, duration: 1000 }} out:fade={{ duration: 1000 }}>
			Tengo dudas. <br />Me comprometo a respetarlo.
		</h2>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.imgTop > img {
		height: 100%;
		width: auto;
	}
	.hola,
	.mision,
	.compromiso,
	.compromisos {
		position: absolute;
		margin-left: 0;
		margin-right: 0;
		top: 0;
	}
	.imgTop.hola {
		background: url('../../../../assets/assets/web/elementos graficos/decoHola.png');
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.imgTop.mision {
		background: url('../../../../assets/assets/web/elementos graficos/decoMision.png');
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.imgTop.compromiso {
		background: url('../../../../assets/assets/web/elementos graficos/decoCompromiso.png');
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.imgTop.compromisos {
		background: url('../../../../assets/assets/web/elementos graficos/decoCompromisos.png');
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
		transition: 0.4s ease;
		height: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		flex-direction: column;
	}
	.imgTop.compromisos > img {
		width: 138px;
		height: auto;
		position: relative;
		margin-top: 30px;
	}
	/* responsive */
	@media only screen and (max-width: 768px) {
		.imgTop.hola, .imgTop.mision, .imgTop.compromiso {
			width: calc(100% - 60px);
			height: calc(40% - 30px);
			padding-top: 30px;
		}
		.imgTop > img {
			height: calc(100% - 30px);
			bottom: 0;
			top: initial;
		}
	}
	@media only screen and (max-width: 425px) {
		.imgTop > img {
			width: 100%;
			height: auto;
			position: relative;
		}
		.imgTop.hola, .imgTop.mision, .imgTop.compromiso {
			background: none;
			width: 90%;
		}
		.imgTop.compromisos {
			background: url('../../../../assets/assets/elementos graficos/copromisosDecor.png');
			background-position: center center;
			background-size: contain;
			background-repeat: no-repeat;
			transition: 0.4s ease;
			height: 50%;
			flex-direction: column;
			width: 90%;
		}
	}
</style>
