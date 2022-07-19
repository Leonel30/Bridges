<script>
	import { cubicInOut } from 'svelte/easing';
	import fadeScale from '../../../lib/FadeScale.js';
	import { fade } from 'svelte/transition';
	export let modalTenere;
</script>

<div
	transition:fade={{ duration: 800 }}
	class="modalTenere backDrop"
	on:click={() => (modalTenere = false)}
>
	<span
		transition:fadeScale={{ delay: 0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}
		class="contModal"
	/>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.modalTenere.backDrop {
		display: flex;
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		position: absolute;
		background: rgba(0, 0, 0, 0.2);
		z-index: 100;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(3px);
	}
	span.contModal {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 30%;
		height: 80%;
		background: url('../../../../assets/assets/jazz/mobile/fondoPopPostular.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	@media only screen and (max-width: 768px) {
		span.contModal {
			width: 50%;
			height: 50%;
		}
	}
	@media only screen and (max-width: 414px) {
		span.contModal {
			width: 90%;
			height: 515px;
		}
	}
	@media only screen and (max-width: 393px) {
		span.contModal {
			height: 490px;
		}
	}
	@media only screen and (max-width: 375px) {
		span.contModal {
			width: 90%;
			height: 465px;
		}
	}
	@media only screen and (max-width: 360px) {
		span.contModal {
			height: 450px;
		}
	}
	@media only screen and (max-width: 320px) {
		span.contModal {
			height: 440px;
			width: 100%;
		}
	}
</style>
