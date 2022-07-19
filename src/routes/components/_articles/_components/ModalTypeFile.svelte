<script>
	import ModalFile from './ModalFile.svelte';
	import fadeScale from '../../../../lib/FadeScale.js';
	import { cubicInOut } from 'svelte/easing';
/* 	import imgFile from '../../../../assets/assets/article/CreaImg/btnImagenPop.png';
	import imgFileH from '../../../../assets/assets/article/CreaImg/btnImagenHover.png'; */
	import videoFile from '../../../../assets/assets/article/CreaImg/btnVideoPop.png';
	import videoFileH from '../../../../assets/assets/article/CreaImg/btnVideoHover.png';
	import audioFile from '../../../../assets/assets/article/CreaImg/btnAudioPop.png';
	import audioFileH from '../../../../assets/assets/article/CreaImg/btnAudioHover.png';
	import urlFile from '../../../../assets/assets/article/ModalFilesImg/btnLinkPop.png';
	import urlFileH from '../../../../assets/assets/article/CreaImg/btnWebHover.png';
	import textFile from '../../../../assets/assets/article/CreaImg/btnTextoPop.png';
	import textFileH from '../../../../assets/assets/article/CreaImg/btnTextoHover.png';
	import imgFile from '../../../../assets/assets/article/web/Modal/btnImagenPop.png';
	import imgFileH from '../../../../assets/assets/article/web/Modal/btnImagenPopSelec.png'; 
	
	export let showBody, modalFile, showFile, saveIndex;
	console.log(saveIndex);
	const icons = {
		image: {
			enter: imgFileH,
			leave: imgFile
		},
		video: {
			enter: videoFileH,
			leave: videoFile
		},
		audio: {
			enter: audioFileH,
			leave: audioFile
		},
		url: {
			enter: urlFileH,
			leave: urlFile
		},
		texto: {
			enter: textFileH,
			leave: textFile
		}
	};
	$: dynamic = {
		image: imgFile,
		video: videoFile,
		audio: audioFile,
		url: urlFile,
		texto: textFile
	};
	$: dynamicEnter = {
		image: imgFileH,
		video: videoFileH,
		audio: audioFileH,
		url: urlFileH,
		texto: textFileH
	};
	/* const icons = {
		image: {
			enter: '../../../../src/assets/assets/article/CreaImg/btnImagenHover.png',
			leave: '../../../../src/assets/assets/article/CreaImg/btnImagenPop.png'
		},
		video: {
			enter: '../../../../src/assets/assets/article/CreaImg/btnVideoHover.png',
			leave: '../../../../src/assets/assets/article/CreaImg/btnVideoPop.png'
		},
		audio: {
			enter: '../../../../src/assets/assets/article/CreaImg/btnAudioHover.png',
			leave: '../../../../src/assets/assets/article/CreaImg/btnAudioPop.png'
		},
		url: {
			enter: '../../../../src/assets/assets/article/CreaImg/btnWebHover.png',
			leave: '../../../../src/assets/assets/article/ModalFilesImg/btnLinkPop.png'
		},
		texto: {
			enter: '../../../../src/assets/assets/article/CreaImg/btnTextoHover.png',
			leave: '../../../../src/assets/assets/article/CreaImg/btnTextoPop.png'
		}
	}; */
	/* $: dynamic = {
		image: '../../../../src/assets/assets/article/CreaImg/btnImagenPop.png',
		video: '../../../../src/assets/assets/article/CreaImg/btnVideoPop.png',
		audio: '../../../../src/assets/assets/article/CreaImg/btnAudioPop.png',
		url: '../../../../src/assets/assets/article/ModalFilesImg/btnLinkPop.png',
		texto: '../../../../src/assets/assets/article/CreaImg/btnTextoPop.png'
	}; */
	/* $: dynamicEnter = {
		image: '../../../../src/assets/assets/article/CreaImg/btnImagenHover.png',
		video: '../../../../src/assets/assets/article/CreaImg/btnVideoHover.png',
		audio: '../../../../src/assets/assets/article/CreaImg/btnAudioHover.png',
		url: '../../../../src/assets/assets/article/CreaImg/btnWebHover.png',
		texto: '../../../../src/assets/assets/article/CreaImg/btnTextoHover.png'
	}; */
	let receivedIcon = { image: false, video: true, audio: false, url: false, texto: false };
	const getType = () => {
		console.log(showFile);
		let typeActive = { image: false, video: true, audio: false, url: false, texto: false };
		Object.keys(typeActive).map((x) => (typeActive[x] = x === showFile ? true : false));
		receivedIcon = { ...typeActive };
		console.log(receivedIcon);
		return receivedIcon;
	};
	let obj = getType();
	const activeIcon = (type) => {
		let temp = { image: true, video: false, audio: false, url: false, texto: false };
		Object.keys(obj).map((v) => (temp[v] = v === type ? true : false));
		obj = { ...temp };
	};
	const changeIcon = (action, type) => {
		dynamic[type] = icons[type][action]
	};
</script>

<main class="modalFiles">
	<div
		class="container_modal_files"
		transition:fadeScale={{ delay: 0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}>
		<div class="container_top_files">
			{#each Object.keys(dynamic) as type}
				<div class={obj[type] ? 'active' : ''}>
						<button
							class='files_icon'
							style = {obj[type]? `--background-image: url(${dynamicEnter[type]})`: `--background-image: url(${dynamic[type]})`}
							on:mouseenter={()=>changeIcon("enter",type)}
							on:mouseleave={()=>changeIcon("leave",type)}
							on:click={activeIcon(type)}
						/>
				</div>
			{/each}
		</div>
	</div>
	{#if modalFile}
		{#each Object.keys(dynamic) as type}
		
			{#if obj[type]}
				<ModalFile bind:showBody bind:modalFile typeFile={type} />
			{/if}
		{/each}
	{/if}
</main>

<style>
	.modalFiles {
		display: flex;
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.2);
		z-index: 100;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(3px);
	}
	.container_modal_files {
		width: 85vw;
		height: 80vh;
	}
	.container_top_files {
		display: flex;
		width: 304px;
		height: 56px;
		margin: 10px auto;
		justify-content: center;
		align-items: center;
		gap: 8px;
		background-image: url('../../../../assets/assets/article/ModalFilesImg/fondoPopOpciones.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		position: relative;
		z-index: 4;
	}
	.files_icon {
		width: 38px;
		height: 38px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-color: transparent;
		background-image: var(--background-image);
		transition: 0.1s ease;
		border: none;
		border-radius: 10px;
		margin-bottom: 2px;
	}

	.files_icon:hover {
		transform: scale(0.9);
	}
	.active {
		display: block;
	}
	@media only screen and (max-width: 1920px) and (min-width: 1024px) {
		.modalFiles {
			flex-direction: column;
		}
		.container_modal_files {
			width: 694px;
			height: 406px;
		}
		.container_top_files {
			display: flex;
			width: 82px;
			height: 406px;
			margin: 0px auto;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 15px;
			background-image: url('../../../../assets/assets/article/web/Modal/fondoOpcionPopCrea.png');
			left: 410px;
		}
		.files_icon {
			width: 50px;
			height: 50px;
			border-radius: 10px;
			margin-bottom: 0px;
			padding: 0;
			margin: 0;
			background-size: cover;
			background-position: top;
		}
		.files_icon:hover {
			transform: scale(0.9);
		}
		.active {
			background: #b5b5b5 no-repeat;
			box-shadow: 0px 3px 4px #00000040;
			border-radius: 10px;
			width: 100%;
			height: 82px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.active button {
			text-align:center
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.container_modal_files {
			width: 60vw;
			height: 80vh;
		}
		.container_top_files {
			display: flex;
			width: 90%;
			height: 80px;
			margin: 10px auto;
			justify-content: center;
			align-items: center;
			gap: 0px;
		}
		.files_icon {
			width: 44px;
			height: 44px;
			margin: 0 5px
		}
	}
</style>
