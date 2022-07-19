<script>
	import { browser } from '$app/env';
	import puenteLogo from '../../../assets/assets/web/landing/logoInspiraWeb.png';
	import f2pLogo from '../../../assets/assets/elementos graficos/logoF2p.png';
	
	
	export let view;


	let active = false;
	let fadeOut = true;
	let splashFade = 'splash'

	setTimeout(() => {
		fadeOut = false;
	}, 500);
	setTimeout(() => {
		active = true;
	}, 5000);
	setTimeout(() => {
		fadeOut = true;
		splashFade = 'splash fadeOut'
	}, 9500);
	setTimeout(() => {
		view = 'login';
		if (browser) {
			var container = document.getElementById('container');
			container.classList.remove('intro');
		}
	}, 10000);
</script>

<div class={splashFade}>
	<div class="puenteLogo">
		<img
			class={fadeOut ? 'fadeOut imageSplash' : 'imageSplash'}
			src={puenteLogo}
			alt=""
			srcset=""
		/>
	</div>
	<div class={active ? 'f2pLogo active' : 'f2pLogo'}>
		<span class="titleIntro">Developed by</span>
		<img class="imageSplash" src={f2pLogo} alt="" srcset="" />
	</div>
</div>

<style>
	.splash {
		background: #36373b;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		width: calc(100% - 60px);
		height: calc(100% - 60px);
		padding: 30px;
		flex-direction: column;
		opacity: 1;
		transition: .5s ease;
	}
	.splash.fadeOut{
		opacity: 0;
		transition: .5s ease;
	}
	.puenteLogo {
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;
		z-index: 0;
		justify-content: center;
		align-items: center;
		background: #36373b;
	}
	.f2pLogo {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: -100%;
		transition: 0.5s ease;
		background: #36373b;
	}
	.f2pLogo.active {
		right: 0;
		transition: 0.5s ease;
	}
	.splash span.titleIntro {
		font-family: 'Montserrat';
		color: #ededed;
		font-size: 40px;
		margin-bottom: 86px;
		opacity: 1;
		transition: 0.5s ease;
	}
	.splash img {
		width: 430px;
		height: auto;
	}
	.imageSplash {
		opacity: 1;
		transition: 0.5s ease;
	}
	.imageSplash.fadeOut {
		opacity: 0;
		transition: 0.5s ease;
	}
	@media only screen and (max-width: 425px) {
		.splash img {
			width: 254px;
			height: auto;
		}
	}
</style>
