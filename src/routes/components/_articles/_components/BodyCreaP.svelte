<script>
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import CardIcon from './CardIcon.svelte';
	import imgFile from '../../../../assets/assets/article/CreaImg/btnImagen.png';
	import imgFileH from '../../../../assets/assets/article/CreaImg/btnImagenHover.png';
	import videoFile from '../../../../assets/assets/article/CreaImg/btnVideo.png';
	import videoFileH from '../../../../assets/assets/article/CreaImg/btnVideoHover.png';
	import audioFile from '../../../../assets/assets/article/CreaImg/btnAudio.png';
	import audioFileH from '../../../../assets/assets/article/CreaImg/btnAudioHover.png';
	import urlFile from '../../../../assets/assets/article/CreaImg/btnWeb.png';
	import urlFileH from '../../../../assets/assets/article/CreaImg/btnWebHover.png';
	import textFile from '../../../../assets/assets/article/CreaImg/btnTexto.png';
	import textFileH from '../../../../assets/assets/article/CreaImg/btnTextoHover.png';
	import ScrollBotton from './ScrollBotton.svelte';
	export let modalFile, publication, showBody, showFile, saveIndex;
	let showBod = showBody;
	console.log(showFile);
	let points = [1, 2, 3, 4, 5];
	let cardIconElement = ['agua', 'tierra', 'aire', 'fuego'];
	$: dynamic = {
		image: imgFile,
		video: videoFile,
		audio: audioFile,
		url: urlFile,
		texto: textFile
	};
	const changeIcon = (action, type) => {
		dynamic[type] = icons[type][action];
	};
	let hrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
	let tips = [
		'Ayuda a los fuegos fatuos a reducir su impulsividad y a usarla para activar simpatizante.',
		'2-Ayuda a los fuegos fatuos a reducir su impulsividad y a usarla para activar simpatizante.',
		'3-Ayuda a los fuegos fatuos a reducir su impulsividad y a usarla para activar simpatizante.',
		'4-Ayuda a los fuegos fatuos a reducir su impulsividad y a usarla para activar simpatizante.',
		'5-Ayuda a los fuegos fatuos a reducir su impulsividad y a usarla para activar simpatizante.'
	];
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
	let cont;
	let modalOpen = (type, i) => {
		modalFile = true;
		showFile = type;
		saveIndex = i;
		console.log(showFile);
	};
	let getEffect;
	$: console.log(getEffect);
</script>
<div class="container">
	<div class="container_main">
		<div class="card_top" in:fade={{ delay: 800 }}>
			<div class="card_top_text">
				{#if cont === 1}
                    <div in:fly={ getEffect === 'left'? {x: 100, y: -20, duration: 300, delay: 50} : {x: -100, y: -20, duration: 300, delay: 50} }>
                        <span>Tips de audiencia:</span>
					    <p>{tips[0]}</p>
                    </div>
				{:else if cont === 2}
                    <div 
                    in:fly={ getEffect === 'left'? {x: 100, y: -20, duration: 300, delay: 50} : {x: -100, y: -20, duration: 300, delay: 50} }>
                        <span>Tips de audiencia:</span>
                        <p>{tips[1]}</p>
                    </div>
				{:else if cont === 3}
                    <div in:fly={ getEffect === 'left'? {x: 100, y: -20, duration: 300, delay: 50} : {x: -100, y: -20, duration: 300, delay: 50} }>
                        <span>Tips de audiencia:</span>
					    <p>{tips[2]}</p>
                    </div>
				{:else if cont === 4}
                    <div in:fly={ getEffect === 'left'? {x: 100, y: -20, duration: 300, delay: 50} : {x: -100, y: -20, duration: 300, delay: 50} }>
                        <span>Tips de audiencia:</span>
                        <p>{tips[3]}</p>
                    </div>
				{:else if cont === 5}
                    <div in:fly={ getEffect === 'left'? {x: 100, y: -20, duration: 300, delay: 50} : {x: -100, y: -20, duration: 300, delay: 50} }>
                        <span>Tips de audiencia:</span>
                        <p>{tips[4]}</p>
                    </div>
				{/if}
            </div>
				<!-- <p class={getEffect == "right"? "right":"left"}>{tips[cont - 1]}</p>
                out:fly={{ x: -100, y:-20, duration: 200, delay: 100 }} -->
			<!-- </div> -->
			<div class="card_top_icons">
				<ScrollBotton bind:cont bind:getEffect />
			</div>
		</div>
		<div class="card_middle" in:fade={{ delay: 800 }}>
			<div class="card_middle_l">
				<div class="card_middle_title">
					<span>Título/</span>
				</div>
				<div class="card_middle_dir">
					<span>Dirigido a:</span>
					<div class="card_middle_icon">
						{#each cardIconElement as item}
							<CardIcon elemento={item} />
						{/each}
					</div>
				</div>
				<div class="card_middle_files">
					{#each Object.keys(dynamic) as type, i}
						<button
							class="files_icon"
							style="background-image: url({dynamic[type]})"
							on:mouseenter={() => changeIcon('enter', type)}
							on:mouseleave={() => changeIcon('leave', type)}
							on:click={() => {
								modalOpen(type, i);
							}}
						/>
					{/each}
				</div>
				<div class="card_middle_dl">
					<div class="dl_text">
						<div class="dl_text_t">Tiempo de vida:</div>
						<div class="dl_text_time">
							{#each hrs as hr}
								<span>{hr} hrs</span><br />
							{/each}
						</div>
					</div>
				</div>
			</div>
			<div class="card_middle_r" in:fade={{ delay: 800 }}>
				<div class="card_middle_dir_web">
					<span>Digido a:</span>
					<div class="card_middle_icon">
						{#each cardIconElement as item}
							<CardIcon elemento={item} />
						{/each}
					</div>
				</div>
				<div class="card_bottom_web">
					<button on:click={() => (publication = 'publication')}><span>Publicar</span></button>
				</div>
			</div>
		</div>
		<div class="card_bottom" in:fade={{ delay: 800 }}>
			<button on:click={() => (publication = 'publication')}><span>Publicar</span></button>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		max-width: 1000px;
		height: calc(100% - 240px);
		overflow: hidden auto;
		padding: 0px;
		margin: 0px;
		font-family: 'Montserrat';
	}
	.card_top {
		width: 360px;
		height: 125px;
		margin: 190px auto 10px auto;
		padding: 2% 0;
		background-image: url('../../../../assets/assets/article/CreaImg/fondoTips.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.card_top_text {
		width: 90%;
		padding: 3px 20px;
	}
	.card_top_text span {
		color: #404040;
		font-family: 'Montserrat';
		font-size: 12px;
		font-weight: 700;
	}
	.card_top_text p {
		display: inline-block;
		margin: 0 auto;
		padding-right: 10%;
		color: #404040;
		font-size: 12px;
		font-weight: 300;
	}
	.card_top_icons {
		width: 100%;
		margin: 15px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		top: 50px;
	}
	.card_middle {
		width: 340px;
		height: 290px;
		margin: 10px auto 10px auto;
		padding: 2% 0;
		background-image: url('../../../../assets/assets/article/CreaImg/fondoCrear.png');
		background-repeat: no-repeat;
		box-shadow: 4px 4px 4px 4px #00000040;
		background-size: cover;
		border-radius: 20px;
	}
	.card_middle_title {
		width: 300px;
		height: 34px;
		margin: 0px auto 10px auto;
		background-image: url('../../../../assets/assets/article/CreaImg/titulo.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-color: transparent;
		border-radius: 20px;
	}
	.card_middle_title span {
		display: inline-block;
		color: #646f6f;
		font-style: italic;
		font-weight: bold;
		font-size: 15pt;
		padding-top: 5px;
		padding-left: 20px;
	}
	.card_middle_dir {
		width: 325px;
		height: 90px;
		margin: 0px auto 10px auto;
		background-image: url('../../../../assets/assets/article/CreaImg/fondoDirigido.png');
		background-repeat: no-repeat;
		background-size: cover;
		padding-bottom: 7px;
	}
	.card_middle_files {
		width: 330px;
		height: 60px;
		margin: 0 auto;
		background-image: url('../../../../assets/assets/article/CreaImg/fondoDocumentos.png');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top: 5px;
	}
	.files_icon {
		width: 50px;
		height: 50px;
		background-image: url('../../../../assets/assets/article/CreaImg/btnImagen.png');
		background-repeat: no-repeat;
		background-position: center;
		background-color: transparent;
		background-size: cover;
		transition: 0.1s ease;
		border: none;
	}
	.files_icon:first-child {
		margin-left: 20px;
	}
	.files_icon:hover {
		transform: scale(0.8);
	}
	.card_middle_dl {
		width: 290px;
		height: 56px;
		margin: 10px auto;
		background-image: url('../../../../assets/assets/article/CreaImg/tiempoVida.png');
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dl_text {
		width: 290px;
		height: 15px;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		color: #646f6f;
		overflow: hidden;
	}
	.dl_text_t {
		width: 50%;
		padding-left: 25%;
	}
	.dl_text_time {
		width: 45px;
		height: 15px;
		overflow-y: scroll !important;
		overflow-y: hidden;
		position: relative;
		right: 20px;
	}
	.dl_text_time span {
		font-size: 14px;
	}
	.card_middle_dir span {
		display: inline-block;
		color: #646f6f;
		font-weight: 700;
		font-size: 12px;
		padding-left: 30px;
		margin: 10px 0 5px;
	}
	.card_middle_icon {
		width: 100%;
		display: flex;
		margin: 0 auto;
		justify-content: center;
	}
	.card_bottom button {
		width: 194px;
		height: 62px;
		background-image: url('../../../../assets/assets/article/CreaImg/btnPublicar.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-color: transparent;
		border: none;
		border-radius: 20px;
		margin: 0 auto 20px auto;
		transition: 0.5s ease;
		display: flex;
		font-family: 'Montserrat';
		justify-content: center;
		align-items: center;
	}
	.card_bottom button:hover {
		background-image: url('../../../../assets/assets/article/CreaImg/btnPublicarHover.png');
		transform: scale(1.1);
	}
	.card_bottom button span {
		display: inline-block;
		width: 100%;
		color: #5c3c0f;
		font-weight: 700;
		font-size: 12px;
	}
	.card_bottom button:hover span {
		color: #e3d5c3;
	}
	.card_bottom_web {
		display: none;
	}
	.card_middle_dir_web {
		display: none;
	}
	@media only screen and (max-width: 1920px) and (min-width: 1024px) {
		.container {
			overflow: hidden;
		}
		.container_main {
			width: 971px;
			margin: 135px auto;
			height: 207px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 27px;
			background-image: url('../../../../assets/assets/article/web/Crea/fondoCreaO.png');
			background-repeat: no-repeat;
			background-size: cover;
		}
		.card_top {
			width: 345px;
			height: 184px;
			margin: 0%;
			padding: 0;
			margin-top: -10px;
			background-image: url('../../../../assets/assets/article/web/Crea/conteTips.png');
			background-repeat: no-repeat;
			background-size: cover;
		}
		.card_top_text {
			width: 90%;
			padding: 3px 20px;
		}
		.card_top_text span {
			display: inline-block;
			margin: 7% 0 1% 5%;
			font-size: 14px;
		}
		.card_top_text p {
			display: inline-block;
			margin: 0 0 1% 5%;
			padding-right: 0;
			font-size: 14px;
			font-weight: 300;
		}
		.card_top_icons {
			width: 70%;
			margin: 32px auto;
		}
		.card_middle {
			width: 576px;
			height: 189px;
			margin: 0;
			padding: 0;
			background-image: url('../../../../assets/assets/article/web/Crea/fondoCreaC.png');
			background-repeat: no-repeat;
			box-shadow: 0px 3px 4px #00000040;
			background-size: cover;
			display: flex;
			border-radius: 20px;
		}
		.card_middle_title {
			width: 271px;
			height: 34px;
			margin: 12px auto 0 17px;
			background-image: url('../../../../assets/assets/article/web/Crea/tituloCrea.png');
		}
		.card_middle_title span {
			font-size: 16px;
			padding-top: 8px;
			padding-left: 15px;
		}
		.card_middle_files {
			width: 288px;
			height: 48px;
			margin: 16px auto 0 -5px;
			padding: 0;
			background-image: url('../../../../assets/assets/article/web/Crea/fondoArchivosCrea.png');
			background-position: center;
			background-repeat: no-repeat;
			display: flex;
			justify-content: flex-start;
			gap: 10px;
		}
		.files_icon {
			width: 38px;
			height: 38px;
		}
		.card_middle_dl {
			width: 288px;
			height: 56px;
			margin: 15px auto 0 17px;
			background-image: url('../../../../assets/assets/article/CreaImg/tiempoVida.png');
			background-repeat: no-repeat;
			background-size: cover;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-bottom: 0px;
		}
		.card_middle_dir_web {
			display: block;
			width: 258px;
			height: 102px;
			margin: 12px auto;
			background-image: url('../../../../assets/assets/article/web/Modal/dirigidoCrea.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.card_middle_dir_web span {
			display: inline-block;
			color: #646f6f;
			font-family: 'Montserrat';
			font-weight: 700;
			font-size: 12px;
			padding-left: 30px;
			margin: 10px 0 5px;
		}
		.card_middle_dir_web span {
			font-size: 16px;
			padding-left: 10px;
			margin: 10px 0 5px;
		}
		.card_middle_dir {
			display: none;
		}
		.card_middle_l {
			width: 50%;
		}
		.card_middle_r {
			width: 50%;
		}
		.card_middle_icon {
			width: 70%;
			display: flex;
			margin: 0px -2px;
			justify-content: flex-start;
		}
		.card_bottom_web button {
			width: 202px;
			height: 44px;
			margin: 15px auto 0;
			background-image: url('../../../../assets/assets/article/web/Crea/btnPublic.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			background-color: transparent;
			border: none;
			border-radius: 20px;
			transition: 0.5s ease;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.card_bottom_web button:hover {
			background-image: url('../../../../assets/assets/article/CreaImg/btnPublicarHover.png');
			transform: scale(1.1);
		}
		.card_bottom_web button span {
			display: inline-block;
			width: 100%;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 700;
			font-size: 16px;
		}
		.card_bottom_web button:hover > span {
			color: #e3d5c3;
		}
		.card_bottom {
			display: none;
		}
		.card_bottom_web {
			display: block;
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.card_top {
			width: 60%;
			height: 130px;
			margin: 210px auto 10px auto;
			padding: 2% 0;
		}
		.card_top_text {
			width: 70%;
			padding: 5px 40px 20px;
		}
		.card_middle {
			width: 55%;
			height: 330px;
		}
		.card_middle_title {
			width: 80%;
			height: 42px;
			display: flex;
			align-items: center;
		}
		.card_middle_title span {
			padding-top: 0px;
		}
		.card_middle_dir {
			width: 90%;
			height: 100px;
			margin: 0px auto 10px auto;
			background-image: url('../../../../assets/assets/article/CreaImg/fondoDirigido.png');
			background-repeat: no-repeat;
			background-size: cover;
			padding-bottom: 7px;
		}

		.card_middle_dl {
			width: 90%;
			height: 68px;
			margin: 10px auto;
		}
		.dl_text {
			width: 290px;
			height: 15px;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			color: #646f6f;
			overflow: hidden;
		}
		.dl_text_t {
			width: 50%;
			padding-left: 28%;
		}
		.card_bottom button {
			width: 35%;
			height: 75px;
			margin-left: 32.5%;
			margin-bottom: 20px;
			transition: 0.5s ease;
		}
		.card_bottom button span {
			font-size: 14px;
			font-family: 'Montserrat';
		}
	}
	@media only screen and (max-width: 393px) and (min-width: 376px) {
		.card_middle_dir {
			height: 92px;
		}
		.card_middle_dl {
			width: 290px;
			height: 56px;
		}
		.card_middle_dl span {
			padding-top: 0px;
		}
		.card_middle_dl span:first-child {
			padding-left: 60px;
		}
	}
</style>
