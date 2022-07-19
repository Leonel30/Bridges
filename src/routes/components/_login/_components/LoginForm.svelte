<script>
	import { cubicInOut } from 'svelte/easing';
	import fadeScale from '../../../../lib/FadeScale.js';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { Agents } from '$lib/utils/api';
	import { player } from '$lib/store/stores';
	import linea from '../../../../assets/assets/registroIngresoMobile/line.png';
	export let view;
	export let modalLogin;
	export let openModalRegister;
	export let openModalForgotLogin;
	export let playSound;
	let id = '';
	let password = '';
	$: {
		console.log(id, password);
	}
	const enter = () => {
		// view = 'mirage';
		view = 'saludo';
		/* view = 'selectPerson';  */
		window.click.play();
		playSound();
	};
	const validate = async () => {
		console.log('id', id, password);
		let data = {};
		if (id.includes('@') && id.includes('.')) {
			data['email'] = id;
		} else data['tag'] = id;
		const agent = await Agents.getAgent(data);
		console.log('agent', agent);
		if (!agent.id) {
			alert('usuario no existe');
			return;
		} else {
			const pass = agent?.properties.find((e) => e.value === password);
			console.log('pass', pass);
			if (!pass) {
				alert('contraseña incorrecta');
				return;
			}
			player.set(agent);
		}
		view = 'saludo';
		window.click.play();
		playSound();
	};

	let loginFormFade = 'loginForm active';
	let contentFormFade = 'contentForm active';

	const closeModal = () => {
		window.click.play();
		if (browser) {
			var container = document.getElementById('login');
			container.classList.remove('w100');
		}
		modalLogin = false;
	};
</script>

<div transition:fade={{ duration: 800 }} class={loginFormFade}>
	<div
		transition:fadeScale={{ delay: 0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}
		class={contentFormFade}
	>
		<div class="contTitle">
			<h1>Iniciar sesión</h1>
			<button class="btnClose" on:click={() => closeModal()} />
		</div>
		<div>
			<div>
				<label for="">Usuario/Correo electrónico</label>
				<input bind:value={id} class="inputLight" type="text" autocomplete="false" />
			</div>
			<div>
				<label for="">Contraseña</label>
				<input bind:value={password} class="inputLight" type="password" autocomplete="false" />
			</div>
		</div>
		<div>
			<!-- <button class="btnIniciar" on:click={() => validate()}>Iniciar</button> -->
			<button class="btnIniciar" on:click={() => enter()}>Iniciar</button>
			<label for="" class="bottomContent" on:click={() => openModalForgotLogin()}
				>¿Olvidaste tu contraseña?</label
			>
		</div>
		<div>
			<img class="lineLogin" src={linea} alt="" />
			<button class="btnRegistrar" on:click={() => (openModalRegister(), (modalLogin = false))}
				>Registrarme</button
			>
		</div>
	</div>
</div>

<style>
	.lineLogin {
		display: none;
	}
	.loginForm {
		position: absolute;
		width: 100%;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(5px);
		z-index: 1;
		display: block;
		opacity: 0;
		transition: 0.8s ease;
	}
	.loginForm.active {
		opacity: 1;
		transition: 0.8s ease;
	}

	.contentForm {
		position: absolute;
		background: #fff;
		width: 0;
		max-height: calc(100% - 80px);
		height: 0;
		border-radius: 20px;
		display: block;
		margin: auto;
		overflow-x: hidden;
		top: 50%;
		left: 50%;
		right: 50%;
		transition: 0.8s ease;
	}
	.contentForm.active {
		width: 685px;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 0.8s ease;
	}
	.contTitle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100px;
		background: #fff2d8;
		box-shadow: 0 3px 3px 0 #ccc;
		border-radius: 20px 20px 0 0;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 10;
		padding: 0 30px;
	}
	.contentForm > div:nth-child(2) {
		height: calc(100% - 357px);
		width: calc(50% - 65px);
		display: inline-flex;
		flex-direction: column;
		justify-content: space-evenly;
		background: #fff;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 60px 30px;
		border-bottom: 1px solid #ccc;
		vertical-align: top;
	}
	.contentForm > div:nth-child(2) > div {
		display: flex;
		flex-direction: column;
	}
	.contentForm > div:nth-child(3) {
		height: calc(100% - 237px);
		width: calc(50% - 60px);
		display: inline-flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: #fff;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div:last-child {
		height: 137px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		background: #ebebeb;
		position: relative;
		padding: 0 30px;
	}
	.loginForm label {
		font-family: 'Montserrat';
		font-style: italic;
		color: #646f6f;
		font-size: 15px;
		margin-bottom: 5px;
	}
	.contentForm > div {
		width: calc(100% - 60px);
	}

	.btnRegistrar,
	.btnIniciar {
		display: flex;
		position: relative;
		width: 200px;
		height: 50px;
		justify-content: center;
		align-items: center;
		color: #5c3c00;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		border: none;
		background: url('../../../../assets/assets/botones/btnLogin.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.btnRegistrar:hover,
	.btnIniciar:hover {
		background: url('../../../../assets/assets/botones/btnLoginHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		transform: scale(1.2);
	}
	.loginForm .contentForm > div:nth-child(3) > label {
		color: #035050;
		font-size: 15px;
		font-style: initial;
		font-weight: 500;
		cursor: pointer;
		margin-top: 20px;
	}
	/* responsive */
	@media only screen and (max-width: 1920px) and (max-height: 1280px) {
		.contentForm.active {
			width: 50%;
			height: 50%;
		}
	}
	@media only screen and (max-width: 1440px) and (max-height: 900px) {
		.contentForm.active {
			width: 685px;
			height: 100%;
		}
	}
	@media only screen and (max-width: 768px) {
		.contentForm.active {
			height: 50%;
			transition: 0.8s ease;
		}
	}
	@media only screen and (max-width: 425px) {
		.loginForm {
			width: 100%;
		}
		.loginForm .contentForm {
			width: calc(100% - 30px);
			max-height: calc(100% - 20px);
			height: 540px;
			margin: auto;
			transition: 0.4s ease;
		}
		.loginForm .contentForm > div:nth-child(2) {
			width: 100%;
			height: 200px;
			display: flex;
			padding: 0;
		}
		.loginForm .contentForm > div:nth-child(2) > div {
			width: calc(100% - 60px);
			height: 100px;
			display: flex;
			justify-content: center;
			padding: 0 30px;
		}
		.loginForm .contentForm > div:nth-child(2) > div:first-child {
			background: #ebebeb;
		}
		.loginForm .contentForm > div:nth-child(3) {
			width: calc(100% - 60px);
			height: 130px;
			border: none;
			display: flex;
		}
		.loginForm .contentForm > div:last-child {
			height: 100px;
			background: #fff;
			justify-content: center;
		}
		.lineLogin {
			display: block;
			margin-bottom: 20px;
		}
		.loginForm .contentForm > div:nth-child(3) > label {
			margin-top: 20px;
			margin-bottom: 0;
		}
	}
</style>
