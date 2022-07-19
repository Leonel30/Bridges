<script>
	import { fade } from 'svelte/transition';
	export let view;
	let nar1 = 'Abres los ojos…';
	let nar2 =
		'Estabas soñando, una voz profunda te decía una y otra vez: “eres el elegido”. ¿Elegido para qué? Hasta ahora has sentido que el mundo hace oídos sordos al cambio y que solo no vas a lograr nada.';
	let nar3 = 'Una luz te llama la atención, un vórtice te anima a entrar.';
	let narT4 = 'Bienvenido a Pont';
	let narP4 =
		'¿Qué es Pont? Mmm, difícil de explicar… no es un mundo o un reino. Es… sí, una dimensión, es como ver el mundo desde infinitos espejos.';
	let nar5 =
		'Pont es un lugar de magia y de balance. Cada individuo en Pont tiene un Mont, un espíritu de conexión que guía sus acciones.';
	let nar6 =
		'En el mundo real ese espíritu no siempre se alinea con sus fortaleza, pero en Pont ese espíritu aprende a brillar…';

	let contNar = 1;

	let btnActive = false;
	let btnEmpezar = false;


	$: window.narrativaMusic.play(), (window.narrativaMusic.loop = true);

	const writing = (txt, showText) => {
		let ArrayFromStr = txt.split('');
		let i = 0;
		let printStr = setInterval(() => {
			document.getElementById(showText).innerHTML += ArrayFromStr[i];
			i++;
			if (i === ArrayFromStr.length) {
				clearInterval(printStr);
			}
		}, 50);
	};

	setTimeout(() => {
		writing(nar1, 'showText');
	}, 0);
	setTimeout(() => {
		document.getElementById('showText').innerHTML = '';
		contNar = 2;
		writing(nar2, 'showText');
	}, 5000); /* 5000 */
	setTimeout(() => {
		document.getElementById('showText').innerHTML = '';
		contNar = 3;
		writing(nar3, 'showText');
	}, 20000); /* 20000 */
	setTimeout(() => {
		btnActive = true;
	}, 24000); /* 240000 */

	const entrar = () => {
		window.click.play();
		document.getElementById('showText').innerHTML = '';
		contNar = 4;
		writing(narT4, 'showText');
		setTimeout(() => {
			document.getElementById('showText2').innerHTML = '';
			writing(narP4, 'showText2');
		}, 3000); /* 3000 */
		setTimeout(() => {
			document.getElementById('showText').innerHTML = '';
			contNar = 5;
			writing(nar5, 'showText');
		}, 13000); /* 13000 */
		setTimeout(() => {
			document.getElementById('showText').innerHTML = '';
			contNar = 6;
			writing(nar6, 'showText');
		}, 22000); /* 22000 */
		setTimeout(() => {
			btnEmpezar = true;
		}, 28000);  /* 28000 */
	};
	const changeView = () => {
		window.narrativaMusic.muted = true;
		window.click.play();
		view = 'selectPerson';
	};
</script>

<div
	transition:fade={{ delay: 1500, duration: 1000 }}
	class={contNar === 1
		? 'narrativa back1'
		: contNar === 2
		? 'narrativa back2'
		: contNar === 3
		? 'narrativa back3'
		: contNar === 4
		? 'narrativa back4'
		: contNar === 5
		? 'narrativa back5'
		: 'narrativa back5'}
>
	<div>
		<div class="btnEntrar">
			{#if contNar === 3}
				<button class={btnActive ? 'btnEnter active' : 'btnEnter'} on:click={() => entrar()}
					>ENTRAR</button
				>
			{/if}
		</div>
		<p id="showText" />
		{#if contNar === 4}
			<p id="showText2" />
		{/if}
		{#if btnEmpezar}
			<button class="btnEmpezar" on:click={() => changeView()}>EMPEZAR</button>
		{/if}
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.narrativa {
		background: url('../../../assets/assets/elementos graficos/imagMundo.png');
		background-position: top;
		background-repeat: no-repeat;
	}
	.narrativa.back1:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: url('../../../assets/assets/web/elementos graficos/decoNarrativaAg.png');
		background-position: top center;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.narrativa.back2:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: url('../../../assets/assets/web/elementos graficos/decoNarrativaAm.png');
		background-position: top center;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.narrativa.back3:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: url('../../../assets/assets/web/elementos graficos/decoNarrativaM.png');
		background-position: top center;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.narrativa.back4:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: url('../../../assets/assets/web/elementos graficos/decoNarrativaR.png');
		background-position: top center;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.narrativa.back5:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: url('../../../assets/assets/web/elementos graficos/decoNarrativaV.png');
		background-position: top center;
		background-repeat: no-repeat;
		transition: 0.4s ease;
	}
	.narrativa:before {
		content: '';
		background: url('../../../assets/assets/web/elementos graficos/mascaraNarrativaIntro.png');
		width: 100%;
		height: 100%;
		position: absolute;
		background-position: top center;
		background-repeat: no-repeat;
		top: -10px;
		z-index: 0;
	}
	p#showText,
	p#showText2 {
		font-size: 20px;
		max-width: 680px;
		width: 100%;
	}
	.narrativa > div {
		width: calc(100% - 60px);
		height: 100%;
		padding: 0 30px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.btnEntrar {
		display: flex;
		position: relative;
		width: 100%;
		height: 390px;
		justify-content: center;
		align-items: flex-end;
	}
	button.btnEnter {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 180px;
		height: 180px;
		border-radius: 100%;
		border: none;
		background: no-repeat;
		font-family: 'Montserrat';
		font-size: 14px;
		font-weight: bold;
		color: #8f1209;
		opacity: 0;
		transition: 0.4s ease;
	}
	button.btnEnter.active {
		opacity: 1;
		transition: 0.4s ease;
	}
	button.btnEnter:hover {
		color: #c13707;
		transition: 0.4s ease;
	}
	button.btnEnter:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/botones/entrar.png');
		background-position: center;
		background-size: contain;
		z-index: -1;
		transform: rotate(0deg);
		transition: 0.4s ease;
	}
	button.btnEnter:hover:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('../../../assets/assets/botones/entrarHover.png');
		background-position: center;
		background-size: contain;
		z-index: -1;
		transform: rotate(-180deg);
		transition: 0.4s ease;
	}
	button.btnEmpezar {
		width: 280px;
		height: 55px;
		border: none;
		border-radius: 20px;
		background: url('../../../assets/assets/botones/btnLogin.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		font-family: 'Montserrat';
		font-weight: bold;
		color: #404040;
		font-size: 16px;
		margin-top: 30px;
	}
	button.btnEmpezar:hover {
		background: url('../../../assets/assets/botones/btnLoginHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		font-size: 14px;
	}

	/* responsive */
	@media only screen and (max-width: 768px) {
		p#showText {
			margin-top: 200px;
		}
	}
	@media only screen and (max-width: 425px) {
		.narrativa.back1:after {
			content: '';
			background: url('../../../assets/assets/elementos graficos/decorNarrativaMobile1.png');
			transition: 0.4s ease;
			background-position: top center;
			background-size: contain;
		}
		.narrativa.back2:after {
			content: '';
			background: url('../../../assets/assets/elementos graficos/decorNarrativaMobile2.png');
			transition: 0.4s ease;
			background-position: top center;
			background-size: contain;
		}
		.narrativa.back3:after {
			content: '';
			background: url('../../../assets/assets/elementos graficos/decorNarrativaMobile3.png');
			transition: 0.4s ease;
			background-position: top center;
			background-size: contain;
		}
		.narrativa.back4:after {
			content: '';
			background: url('../../../assets/assets/elementos graficos/decorNarrativaMobile4.png');
			transition: 0.4s ease;
			background-position: top center;
			background-size: contain;
		}
		.narrativa.back5:after {
			content: '';
			background: url('../../../assets/assets/elementos graficos/decorNarrativaMobile5.png');
			transition: 0.4s ease;
			background-position: top center;
			background-size: contain;
		}
		.btnEntrar {
			align-items: center;
		}
		.narrativa:before {
			content: '';
			background: url('../../../assets/assets/contenedores/textNarrativaMobile.png');
			background-position-y: 250px;
			background-position-x: center;
			background-repeat: no-repeat;
			z-index: 0;
			top: initial;
		}
		p#showText {
			margin-top: 0px;
		}
	}
	@media only screen and (max-width: 320px) {
		.narrativa:before {
			content: '';
			background: url('/static/assets/contenedores/textNarrativaMobile.png');
			background-position-y: 210px;
			background-position-x: center;
			background-repeat: no-repeat;
			z-index: 0;
			top: initial;
		}
		p#showText,
		p#showText2 {
			font-size: inherit;
		}
		.btnEntrar {
			height: 350px;
		}
	}
</style>
