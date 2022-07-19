<script>
	import { cubicInOut } from 'svelte/easing';
	import fadeScale from '../../../../lib/FadeScale.js';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { player } from '$lib/store/stores';
	import { Agents } from '$lib/utils/api';
	import alertPass from '../../../../assets/assets/registroIngresoMobile/contraseñaMal.png';
	export let modalRegister;
	export let view;
	let showAlert = false;
	let pass = '';
	let data = {
		updates: {
			first_name: { value: '' },
			last_name: { value: '' },
			password: { value: '' },
			organization: { value: '' }
		}
	};
	$: {
		console.log(data);
	}

	const validate = async () => {
		window.click.play();
		if (data?.updates?.password.value !== pass) {
			alert('la contraseña no coincide');
			return;
		}
		const response = await Agents.create(data);
		console.log('response', response);
		if (response.id) player.set(response);
		view = 'saludo';
	};

	let registerFormFade = 'registerForm active';
	let contentFormFade = 'contentForm active';

	const closeModal = () => {
		window.click.play();
		if (browser) {
			var container = document.getElementById('login');
			container.classList.remove('w100');
		}
		modalRegister = false;
	};

	const valPass = (val) => {
		console.log(val, data.updates.password.value);
		if (data.updates.password.value !== val) {
			showAlert = true;
		} else {
			showAlert = false;
			console.log('coinciden');
		}
	};
</script>

<div transition:fade={{ duration: 800 }} class={registerFormFade}>
	<div
		transition:fadeScale={{ delay: 0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}
		class={contentFormFade}
	>
		<div class="contTitle">
			<h1>Registrate</h1>
			<p>Es fácil y rápido</p>
			<button class="btnClose" on:click={() => closeModal()} />
		</div>
		<div>
			<label for="">Nombre</label>
			<input bind:value={data.updates.first_name.value} class="inputLight" type="text" />
		</div>
		<div>
			<label for="">Apellidos</label>
			<input bind:value={data.updates.last_name.value} class="inputLight" type="text" />
		</div>
		<div>
			<label for="">Organización</label>
			<input bind:value={data.updates.organization.value} class="inputDark" type="text" />
		</div>
		<div>
			<label for="">Correo electrónico</label>
			<input bind:value={data['email']} class="inputDark" type="email" required />
		</div>
		<div class={showAlert && 'ampliar'}>
			<label for="">Alias</label>
			<input bind:value={data['tag']} class="inputLight" type="text" />
		</div>
		<div class={showAlert && 'ampliar'}>
			<div>
				<label for="">Contraseña nueva</label>
				<input bind:value={data.updates.password.value} class="inputLight" type="password" />
			</div>
			<div>
				<label for="">Confirmar contraseña</label>
				<input
					bind:value={pass}
					class="inputLight"
					type="password"
					on:input={(e) => valPass(e.target.value)}
				/>
			</div>
			{#if showAlert}
				<span class="valifalse">
					<img src={alertPass} alt="" srcset="" />
					<p class="red">Las contraseñas ingresadas no coinciden</p>
				</span>
			{/if}
		</div>
		<div>
			<p>
				Al hacer click en "Registrarme", aceptas nuestras <a href={void(0)}>condiciones</a>, la
				<a href={void(0)}>Política de datos</a>
				y la <a href={void(0)}>Política de cokies</a>.
			</p>
			<button class="btnRegistrar" on:click={() => validate()}>Registrarme</button>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.registerForm {
		position: absolute;
		width: 100%;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(5px);
		z-index: 1;
		display: block;
		opacity: 0;
		transition: 0.8s ease;
	}
	.registerForm.active {
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
	.contTitle > h1,
	.contTitle > p {
		margin: 0;
		margin-bottom: 5px;
	}
	.contentForm > div:nth-child(2),
	.contentForm > div:nth-child(3),
	.contentForm > div:nth-child(6),
	.contentForm > div:nth-child(7) {
		background: #fff;
	}
	.contentForm > div:nth-child(4),
	.contentForm > div:nth-child(5) {
		background: #ebebeb;
	}
	.contentForm > div:nth-child(2) {
		width: calc(50% - 60px);
		height: 100px;
		flex-direction: column;
		justify-content: center;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div:nth-child(3),
	.contentForm > div:nth-child(5) {
		width: calc(50% - 60px);
		height: 100px;
		flex-direction: column;
		justify-content: center;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div:nth-child(4) {
		width: calc(50% - 60px);
		height: 100px;
		flex-direction: column;
		justify-content: space-evenly;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div:nth-child(6) {
		width: calc(50% - 60px);
		height: 175px;
		flex-direction: column;
		justify-content: center;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div:nth-child(7) {
		height: 175px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly !important;
		position: relative;
		box-shadow: 0 3px 3px 0 #ccc;
		padding: 0 30px;
		border-bottom: 1px solid #ccc;
	}
	.contentForm > div.ampliar:nth-child(6),
	.contentForm > div.ampliar:nth-child(7) {
		height: 240px;
		transition: 0.4s ease;
	}
	.registerForm > .contentForm > div:not(:first-child):not(:last-child) {
		width: calc(50% - 62px);
		flex-direction: column;
		display: inline-flex;
		vertical-align: top;
		justify-content: center;
		transition: 0.4s ease;
	}
	.contentForm > div:last-child {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		position: relative;
		padding: 0 30px;
		width: calc(100% - 60px);
		height: 150px;
	}
	.contentForm > div:last-child > p {
		max-width: 500px;
	}
	.registerForm label {
		font-family: 'Montserrat';
		font-style: italic;
		color: #646f6f;
		font-size: 15px;
		margin-bottom: 5px;
	}
	.contentForm > div:nth-child(7) > div {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.contentForm > div:last-child > button {
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
	.contentForm > div:last-child > button:hover {
		background: url('../../../../assets/assets/botones/btnLoginHover.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	span.valifalse {
		position: relative;
	}
	span.valifalse > p.red {
		position: absolute;
		z-index: 3;
		top: 0;
		font-size: 13px;
		padding-left: 10px;
		padding-top: 20px;
		font-weight: bold;
		margin: 0;
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
			height: 65%;
			transition: 0.8s ease;
		}
	}
	@media only screen and (max-width: 425px) {
		.registerForm {
			width: 100%;
		}
		.contentForm {
			width: calc(100% - 30px) !important;
		}
		.contentForm.active {
			height: 90%;
			transition: 0.8s ease;
		}
		.registerForm > .contentForm > div:not(:first-child):not(:last-child) {
			width: calc(100% - 62px);
			flex-direction: column;
			display: inline-flex;
			vertical-align: top;
			justify-content: center;
		}
		.contentForm > div.ampliar:nth-child(7) {
			height: 240px;
			transition: 0.4s ease;
		}
		.contentForm > div:nth-child(6) {
			height: 100px;
		}
		.contentForm > div.ampliar:nth-child(6) {
			height: 100px;
		}
	}
	@media only screen and (max-width: 375px) {
		.contentForm > div:last-child {
			height: 200px;
		}
		.contentForm > div:last-child > button {
			min-width: 250px;
		}
	}
</style>
