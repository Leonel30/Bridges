<script>
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import gifPontis from '../../../assets/assets/videos/pontisFf.gif';
	import LoginForm from './_components/LoginForm.svelte';
	import RegisterForm from './_components/RegisterForm.svelte';
	import ForgotPassword from './_components/ForgotPassword.svelte';
	export let view;
	export let modalLogin;
	export let modalRegister;
	export let modalForgotPass;

	
	const playSound = () => {
		window.bridgesMusic.play();
		window.bridgesMusic.loop = true;
	};

	const openModalLogin = () => {
		if (browser) {
			var container = document.getElementById('login');
			container.classList.add('w100');
		}
		modalLogin = true;
		window.click.play();
	};
	const openModalRegister = () => {
		if (browser) {
			var container = document.getElementById('login');
			container.classList.add('w100');
		}
		modalRegister = true;
		window.click.play();
	};
	const openModalForgotLogin = () => {
		modalLogin = false;
		modalForgotPass = true;
		window.click.play();
	};
</script>

<div transition:fade class="login" id="login">
	{#if modalLogin}
		<LoginForm
			bind:view
			bind:modalLogin
			bind:modalRegister
			{...{ openModalRegister, openModalForgotLogin, playSound }}
		/>
	{/if}
	{#if modalRegister}
		<RegisterForm bind:view bind:modalLogin bind:modalRegister />
	{/if}
	{#if modalForgotPass}
		<ForgotPassword bind:modalLogin bind:view bind:modalForgotPass {openModalLogin} />
	{/if}

	<div class="imgTop">
		<img src={gifPontis} alt="" srcset="" />
	</div>
	<div class="btnIntro">
		<button on:click={() => openModalLogin()}>Ingresar</button>
		<button on:click={() => openModalRegister()}>Registrarme</button>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.login {
		background: url('../../../assets/assets/web/elementos graficos/decoPontis.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		width: 60%;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		transition: 0.4s ease;
	}

	.imgTop {
		display: flex;
		position: relative;
		width: 100%;
		height: calc(100% - 240px);
		justify-content: center;
		align-items: center;
		transition: 0.4s ease;
	}
	.imgTop > img {
		height: 100%;
		padding-right: 2.5%;
	}
	.btnIntro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 30%;
	}
	.btnIntro > button {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 300px;
		height: 55px;
		margin-bottom: 30px;
		border: none;
		background: url('../../../assets/assets/botones/btnLogin.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size: 16px;
		color: #404040;
		line-height: 1;
	}
	.btnIntro > button:hover {
		background: url('../../../assets/assets/botones/btnLoginHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		font-size: 15px;
		line-height: 1.5;
		transform: scale(1.2);
	}
	@media only screen and (max-width: 768px) {
		.login {
			justify-content: space-evenly;
		}
		.imgTop {
			height: 40%;
		}
		.btnIntro {
			height: 30%;
		}
	}
	@media only screen and (max-width: 425px) {
		.login {
			width: 100%;
		}
		.imgTop {
			transition: 0.4s ease;
			padding: 0 15px;
			width: calc(100% - 30px);
			height: 50%;
		}
		.imgTop > img {
			height: auto;
			width: 100%;
		}
		.btnIntro {
			height: 50%;
		}
	}
	/* @media only screen and (max-width: 375px) {
		.login {
			width: 100%;
		}
	} */
</style>
