<script>
	import { fly } from 'svelte/transition';
	export let cont;
	export let btnComp;
	export let classImg;

	const hola = [
		'¡Hola!',
		'Estás apunto de entrar en un mundo nuevo y peligroso. Para sobrevivir en él deberás tener mente abierta y aprender a adaptarte. Harás conexiones con personas que piensan como tú, pero también deberás escuchar otros puntos de vista…'
	];
	const mision = ['La misión', 'Transformarte para transformar el mundo.'];
	const compromiso = ['Compromiso', 'Selecciona una de las opciones'];
	const compromisos = [
		'Entendido… un compromiso honesto vale más que todo el oro y el poder en el mundo.',
		'Ah, sí… poder. La primera máxima de este mundo es “hay poder en el lenguaje”. El lenguaje abre puertas o rompe puentes. Queremos conectarnos contigo'
	];

	const curioso = () => {
		window.comp1.play()
		if (btnComp === 'curioso') {
			btnComp = 'curiosoAct';
			classImg = 'compromiso movOpacityLeft';
			setTimeout(() => {
				classImg = 'compromisos rightOpacity';
			}, 800);
			setTimeout(() => {
				classImg = 'compromisos';
			}, 1600);
			cont = 4;
		} else {
			btnComp = 'curioso';
		}
	};
	const necesario = () => {
		window.comp1.play()
		if (btnComp === 'necesario') {
			btnComp = 'necesarioAct';
			classImg = 'compromiso movOpacityLeft';
			setTimeout(() => {
				classImg = 'compromisos rightOpacity';
			}, 800);
			setTimeout(() => {
				classImg = 'compromisos';
			}, 1600);
			cont = 4;
		} else {
			btnComp = 'necesario';
		}
	};
	const duda = () => {
		window.comp1.play()
		if (btnComp === 'duda') {
			btnComp = 'dudaAct';
			classImg = 'compromiso movOpacityLeft';
			setTimeout(() => {
				classImg = 'compromisos rightOpacity';
			}, 800);
			setTimeout(() => {
				classImg = 'compromisos';
			}, 1600);
			cont = 4;
		} else {
			btnComp = 'duda';
		}
	};

	export let initCont = 0;

	$: setTimeout(() => {
		initCont = 0;
	}, 2000),
		setTimeout(() => {
			initCont = 1;
		}, 5000);
</script>

<div
	class="TxtSaludo"
	style={btnComp !== '' && cont === 3 ? 'width: calc(100% - 30px); padding: 0 15px' : ''}
>
	{#if cont === 1}
		<h1
			in:fly={initCont === 1 ? { x: 200, duration: 1000, delay: 1000 } : { y: 50, duration: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
		>
			{hola[0]}
		</h1>
		<p
			in:fly={initCont === 1 ? { x: 200, duration: 1000, delay: 1000 } : { y: 50, duration: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
			style={cont !== 1 && cont !== 4 ? 'text-align: center' : ''}
		>
			{hola[1]}
		</p>
	{:else if cont === 2}
		<h1
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
		>
			{mision[0]}
		</h1>
		<p
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
			style={cont !== 1 && cont !== 4 ? 'text-align: center' : ''}
		>
			{mision[1]}
		</p>
	{:else if cont === 3}
		<h1
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
		>
			{compromiso[0]}
		</h1>
		<p
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
			style={cont !== 1 && cont !== 4 ? 'text-align: center' : ''}
		>
			{compromiso[1]}
		</p>
		<div
			in:fly={{ x: 200, duration: 1000, delay: 1000 }}
			out:fly={{ x: -200, y: 0, duration: 1000 }}
			class="btnCompromiso"
		>
			<button
				class={btnComp === 'curioso' ? 'btnCurioso txt' : btnComp !== 'curioso' ? 'btnCurioso' : ''}
				on:click={() => curioso()}
			>
				{#if btnComp === 'curioso' || btnComp === 'curiosoAct'}
					Tengo curiosidad. Me comprometo a intentarlo.
				{/if}
			</button>
			<button
				class={btnComp === 'necesario'
					? 'btnNecesario txt'
					: btnComp !== 'necesario'
					? 'btnNecesario'
					: ''}
				on:click={() => necesario()}
			>
				{#if btnComp === 'necesario' || btnComp === 'necesarioAct'}
					Tengo lo necesario. Me comprometo A lograrlo.
				{/if}
			</button>
			<button
				class={btnComp === 'duda' ? 'btnDuda txt' : btnComp !== 'duda' ? 'btnDuda' : ''}
				on:click={() => duda()}
			>
				{#if btnComp === 'duda' || btnComp === 'dudaAct'}
					Tengo dudas. Me comprometo a respetarlo.
				{/if}
			</button>
		</div>
	{:else if cont === 4}
		<p
			in:fly={{ y: 200, duration: 1000, delay: 1000 }}
			style={cont !== 1 && cont !== 4 ? 'text-align: center' : ''}
		>
			{compromisos[0]}
		</p>
		<p in:fly={{ y: 200, duration: 1000, delay: 1000 }}>
			{compromisos[1]}
		</p>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.btnCompromiso {
		display: flex;
		position: relative;
		width: 50%;
		height: 120px;
		justify-content: space-evenly;
		align-items: center;
	}
	.btnCompromiso > button {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		border-radius: 100%;
		border: none;
		background-position: center;
		background-size: cover;
		cursor: pointer;
		transition: 0.2s ease;
	}
	button.btnCurioso {
		background: url('../../../../assets/assets/botones/curioso.png');
		background-position: center;
		background-size: cover;
	}
	button.btnCurioso:hover {
		background: url('../../../../assets/assets/botones/curiosoHover.png');
		background-position: center;
		background-size: cover;
	}
	button.btnNecesario {
		background: url('../../../../assets/assets/botones/necesario.png');
		background-position: center;
		background-size: cover;
	}
	button.btnNecesario:hover {
		background: url('../../../../assets/assets/botones/necesarioHover.png');
		background-position: center;
		background-size: cover;
	}
	button.btnDuda {
		background: url('../../../../assets/assets/botones/dudas.png');
		background-position: center;
		background-size: cover;
	}
	button.btnDuda:hover {
		background: url('../../../../assets/assets/botones/dudasHover.png');
		background-position: center;
		background-size: cover;
	}
	.btnCompromiso > button.btnCurioso.txt,
	.btnCompromiso > button.btnNecesario.txt,
	.btnCompromiso > button.btnDuda.txt {
		width: 135px;
		height: 80px;
		background: url('../../../../assets/assets/botones/textCompromiso.png');
		background-position: center;
		background-size: cover;
		border-radius: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s ease;
		font-family: 'Work Sans';
		color: #fff;
		font-size: 12px;
		padding: 5px 15px;
		transition: 0.4s ease;
	}
	.btnCompromiso > button.btnCurioso.txt:hover,
	.btnCompromiso > button.btnNecesario.txt:hover,
	.btnCompromiso > button.btnDuda.txt:hover {
		background: url('../../../../assets/assets/botones/textCompromisoAcep.png');
		background-position: center;
		background-size: cover;
		font-size: 0;
		transition: 0.4s ease;
	}
	.btnCompromiso > button.btnCurioso.txt:hover::before,
	.btnCompromiso > button.btnNecesario.txt:hover::before,
	.btnCompromiso > button.btnDuda.txt:hover::before {
		content: 'CONFIRMAR';
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		font-size: 16px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
		color: #dd6e26;
		padding-right: 5px;
		transition: 0.4s ease;
	}
	.TxtSaludo {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 1000px;
		height: 50%;
		padding: 0 30px;
		position: absolute;
		bottom: 0;
	}
	.TxtSaludo > p {
		width: 75%;
	}
	@media only screen and (max-width: 768px) {
		.TxtSaludo {
			width: 100%;
		}
		.btnCompromiso > button.btnCurioso.txt:hover,
		.btnCompromiso > button.btnNecesario.txt:hover,
		.btnCompromiso > button.btnDuda.txt:hover {
			width: 135px;
			height: 80px;
			background: url('../../../../assets/assets/botones/textCompromiso.png');
			background-position: center;
			background-size: cover;
			border-radius: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.2s ease;
			font-family: 'Work Sans';
			color: #fff;
			font-size: 12px;
			padding: 5px 15px;
			transition: 0.4s ease;
		}
		.btnCompromiso > button.btnCurioso.txt:hover::before,
		.btnCompromiso > button.btnNecesario.txt:hover::before,
		.btnCompromiso > button.btnDuda.txt:hover::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			font-size: 16px;
			font-weight: bold;
			justify-content: center;
			align-items: center;
			color: #dd6e26;
			padding-right: 5px;
			transition: 0.4s ease;
		}
	}
	@media only screen and (max-width: 425px) {
		.TxtSaludo {
			width: calc(100% - 30px) !important;
			padding: 0 15px !important;
		}
		.TxtSaludo > p {
			width: 100%;
			margin: 0;
			font-size: 14px;
		}
		.btnCompromiso {
			width: 100%;
		}
	}
</style>
