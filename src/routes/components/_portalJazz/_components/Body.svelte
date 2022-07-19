<script>
	import { propon, actua, proponDorada } from '../../../../lib/models/data.js';
	import Propon from './Propon.svelte';
	import Actua from './Actua.svelte';
	import MisionDoradaBtn from './MisionDoradaBtn.svelte';
	import ProponDorada from './ProponDorada.svelte';
	import TweetDestacado from './TweetDestacado.svelte';
	import ProgressBarTD from './ProgressBarTD.svelte';
	import PostulaMision from './PostulaMision.svelte';
	import PaginationBtn from './PaginationBtn.svelte';
	import ProgressBarTd from './ProgressBarTD.svelte';

	let h;
	let m;
	let s;
	let tiempo = [];


	export let modalMision;
	export let portal;
	export let displayTypeD;
	export let tabsJazz;
	export let modalTitle;
	export let element;
	let elementSelect = element
	const cuentaAtras = (hrs, min, sec, i) => {
		h = hrs;
		m = min;
		s = sec;
		if (h === 0 && m === 0 && s === 0) {
			h = 0;
			m = 0;
			s = 0;
		} else if (m === 0 && s === 0) {
			h = h - 1;
			m = 59;
			s = 59;
		} else if (s === 0) {
			h = h;
			m = m - 1;
			s = 59;
		} else {
			h = h;
			m = m;
			s = s - 1;
		}

		tiempo[i] =
			hrs.toString().padStart(2, '0') +
			':' +
			min.toString().padStart(2, '0') +
			':' +
			sec.toString().padStart(2, '0');
	};
	const timer = () => {
		propon.forEach((item, i) => {
			h = item.hrs;
			m = item.min;
			s = item.seg;
			const intervalo = setInterval(() => {
				cuentaAtras(h, m, s, i);
			}, 1000);
			return () => {
				clearInterval(intervalo);
			};
		});
	};
	const tweetDest = (element) => {
		tabsJazz = 'tweetDest';
		portal = 'MuroIdeas';
		elementSelect = element;
		console.log(tabsJazz, element);
	};

	$: timer(), (tabsJazz = 'propon');
	let changeTitle = true;

	$: console.log(tabsJazz)
	const sendTitle = ()=> {
		modalTitle = true;
		console.log(modalTitle)
	}
</script>

<div
	class={tabsJazz === 'proponDorada'
		? 'bodyPJazz dorada propon'
		: tabsJazz === 'actuaDorada'
		? 'bodyPJazz dorada'
		: tabsJazz === 'propon'
		? 'bodyPJazz propon'
		: tabsJazz === 'actua'
		? 'bodyPJazz actua'
		: tabsJazz === 'tweetDest'
		? 'bodyPJazz twDest'
		: 'bodyPJazz'}
>
	{#if tabsJazz === 'propon' || tabsJazz === 'actua' || tabsJazz === 'tweetDest'}
		<MisionDoradaBtn bind:tabsJazz />
	{/if}

	{#if tabsJazz !== 'tweetDest'}
		<div class="contPest">
			<span class={tabsJazz === 'propon' || tabsJazz === 'proponDorada' ? 'back active' : 'back'}>
				<button
					on:click={() =>{
						tabsJazz === 'proponDorada' ? (tabsJazz = 'proponDorada') : (tabsJazz = 'propon')
						console.log(tabsJazz)}}
					>Propón</button
				>
			</span>
			<span class={tabsJazz === 'actua' || tabsJazz === 'actuaDorada' ? 'back active' : 'back'}>
				<button
					on:click={() =>{
						tabsJazz === 'proponDorada' ? (tabsJazz = 'actuaDorada') : (tabsJazz = 'actua')
						console.log(tabsJazz)}}
					>Actúa</button
				>
			</span>
		</div>
	{/if}

	<div
		class={tabsJazz === 'tweetDest'
			? 'contPostMission tDest'
			: tabsJazz !== 'proponDorada'
			? 'contPostMission'
			: 'contPostMission dorada'}
	>
		{#if tabsJazz === 'actuaDorada'}
			<MisionDoradaBtn bind:tabsJazz />
		{/if}
		{#if tabsJazz === 'tweetDest'}
			<ProgressBarTD bind:modalMision {...{ tabsJazz }} {...{ elementSelect,element }} />
		{/if}
		<div
			class={tabsJazz === 'actua' || tabsJazz === 'actuaDorada'
				? 'actua contentPrincipal'
				: tabsJazz === 'tweetDest'
				? 'contentPrincipal tDest'
				: 'contentPrincipal'}
		>
			{#if tabsJazz === 'proponDorada'}
				<MisionDoradaBtn bind:tabsJazz />
				<span><ProgressBarTd {...{ elementSelect,element }} /></span>
			{/if}
			{#if tabsJazz === 'propon' || tabsJazz === 'proponDorada'}
				<span><PostulaMision bind:tabsJazz bind:modalMision {...{ tabsJazz }} /></span>
			{/if}
			{#if displayTypeD && tabsJazz === 'propon'}
				<PaginationBtn {...{ tabsJazz, propon }} />
			{/if}
			<div
				class={tabsJazz === 'actuaDorada' || tabsJazz === 'proponDorada'
					? 'contMisiones dorada'
					: 'contMisiones'}
			>
				<button class="moveLeft" />
				<div
					class={tabsJazz === 'propon'
						? 'ctnBtns'
						: tabsJazz === 'tweetDest'
						? 'ctnBtns tweetDest'
						: 'ctnBtns actua'}
				> 
					{#if tabsJazz === 'tweetDest'}
						<span on:click={sendTitle} class="postula_mobile"><PostulaMision  bind:modalMision {...{ tabsJazz }} /></span>
					{/if}
					{#if tabsJazz === 'propon'}
						{#each propon as item}
							<Propon bind:portal bind:tabsJazz {...{ item, tiempo, tweetDest }} />
						{/each}
					{:else if tabsJazz === 'actua' || tabsJazz === 'actuaDorada'}
						<span><span class="moveUp" /></span>
						{#each actua as item}
							<Actua {...{ item }} />
						{/each}
						<PaginationBtn {...{ tabsJazz, propon }} />
						<span><span class="moveDown" /></span>
					{:else if tabsJazz === 'tweetDest'}
						<TweetDestacado bind:modalMision {...{ tabsJazz, proponDorada }} />
						<!-- <PaginationBtn {...{ tabsJazz, propon }} /> -->
					{/if}
				</div>
				<button class="moveRight" />
			</div>
		</div>
		<div class="container_postMision">
			{#if tabsJazz === 'proponDorada'}
					{#each proponDorada as item}
						<ProponDorada {...{ item, displayTypeD, tabsJazz, propon }} />
					{/each}
			{/if}
		</div>
		<div id={tabsJazz === 'proponDorada' ? "paginaPropoDorada": ""}>
			{#if !displayTypeD}
				<PaginationBtn {...{ tabsJazz, propon, displayTypeD }} />
			{/if}
		</div>
	</div>
</div>

<style>
	.contPostMission.tDest {
		background: #fff8e5;
	}
	.contPest {
		display: flex;
		position: relative;
		width: 90%;
		height: 28px;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 2px;
	}
	.contPest > span {
		width: 160px;
		height: 28px;
		border: none;
		border-radius: 25px 25px 0 0;
	}
	.contPest > span.back.active {
		background: #e3d5c3;
	}
	.contPest > span.back {
		background: #fff8e5;
		padding: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		box-shadow: 4px 3px 10px 0 #00000064;
	}
	.contPest > span.back > button {
		background: none;
		border: none;
		font-family: 'Montserrat';
		font-size: 12px;
		font-weight: 800;
		color: #646f6f;
	}
	.contPest > span.back.active > button {
		border: none;
		font-family: 'Montserrat';
		font-size: 12px;
		font-weight: 800;
		color: #404040;
		background: #fff;
		width: 100%;
		height: 100%;
		border-radius: 25px 25px 6px 6px;
	}
	.contPostMission {
		/* display: flex; */
		position: relative;
		flex-direction: column;
		padding: 8px 6px 2px;
		width: calc(100% - 12px);
		height: calc(100% - 130px);
		/* width:971px ; */
		height: 353px;
		margin: 0 auto;
		border-radius: 19px;
		background: #e3d5c3;
		box-shadow: 4px 3px 10px 0 #00000064;
	}
	.contPostMission.dorada {
		flex-wrap: wrap;
		gap: 10px;
		flex-direction: initial;
		justify-content: center;
		align-items: center;
	}
	.contPostMission > div.contentPrincipal {
		padding: 15px;
		background: #fff8e5;
		border-radius: 20px;
		box-shadow: 0 2px 5px 0 #00000064;
		width: calc(100% - 30px);
		position: relative;
		display: flex;
		flex-direction: column;
		height: calc(100% - 35px);
	}
	.contPostMission > div.contentPrincipal.tDest {
		padding: 4px;
		background: #e3d5c3;
		border-radius: 20px;
		box-shadow: inset 3px 2px 5px 0 #00000064;
		width: calc(100% - 8px);
		height: calc(100% - 82px);
	}
	.contPostMission > div.actua.contentPrincipal {
		padding: 5px 0px 0px;
		width: 100%;
		height: calc(100% - 10px);
	}

	.actua.contentPrincipal > .contMisiones > .ctnBtns.actua {
		overflow: hidden auto;
		position: relative;
		gap: 0px 40px;
	}
	.moveUp {
		display: flex;
		position: relative;
		width: 30px;
		height: 30px;
		border: none;
		background: url('../../../../assets/assets/jazz/web/arrowUp.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.moveDown {
		display: flex;
		position: relative;
		width: 30px;
		height: 30px;
		border: none;
		background: url('../../../../assets/assets/jazz/web/arrowDown.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.actua.contentPrincipal > .contMisiones > button {
		display: none;
	}
	.actua.contentPrincipal > .contMisiones > .ctnBtns.actua {
		overflow: hidden auto;
	}
	.actua.contentPrincipal > .contMisiones {
		height: calc(100% - 20px);
		flex-direction: column;
		padding: 10px 0;
	}
	.ctnBtns.actua > span {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: sticky;
	}
	.ctnBtns.actua > span:first-child {
		top: 10px;
	}
	.ctnBtns.actua > span:last-child {
		bottom: 10px;
	}
	.contMisiones {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 100%;
		height:100%;
		
	}
	.ctnBtns {
		display: flex;
		position: relative;
		flex-wrap: wrap;
		gap: 40px;
		height: 220px;
		width: 100%;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	button.moveLeft {
		display: flex;
		position: relative;
		width: 30px;
		height: 30px;
		border: none;
		background: url('../../../../assets/assets/jazz/web/arrowL.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	button.moveRight {
		display: flex;
		position: relative;
		width: 30px;
		height: 30px;
		border: none;
		background: url('../../../../assets/assets/jazz/web/arrowR.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.bodyPJazz.actua > .contPostMission {
		height: calc(100% - 140px);
	}
	.bodyPJazz.dorada > .contPostMission {
		height: calc(100% - 40px);
	}
	.bodyPJazz.dorada > .contPostMission {
		/* height: calc(100% - 40px); */
		height: 386px
	}
	.bodyPJazz.dorada.propon > .contPostMission.dorada > .contentPrincipal {
		height: auto;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 10px;
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.bodyPJazz.dorada.propon .contentPrincipal > span {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	/* .bodyPJazz.dorada.propon > .contPostMission.dorada {
		overflow: hidden auto;
	} */
	.contentPrincipal.tDest .contMisiones {
		overflow: hidden auto;
		align-items: flex-start;
	}
	.container_postMision {
		position: relative;
		top:55px;
		display: flex;
		height: 165px;
		width:100%;
		flex-wrap: wrap;
		overflow: hidden auto;
		justify-content:center;
	}
	#paginaPropoDorada{
		display: flex;
		justify-content:center;
		position: relative;
		top:40px;
		margin:0 auto;
	}
	.postula_mobile {
		display:none
	}
	@media only screen and (max-width: 1023px) {
		.bodyPJazz.dorada > .contPostMission {
			height: auto;
		}
		.bodyPJazz.dorada.propon > .contPostMission.dorada > .contentPrincipal {
			display: flex;
			flex-direction: column;
			height: 173px;
		}
		.bodyPJazz.dorada.propon .contentPrincipal > span {
			width: 80%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			position: relative;
		}
		.contPostMission {
			display: flex;
			position: relative;
			flex-direction: column;
			padding: 8px 6px 2px;
			width: 60%;
			height: auto;
			margin: 0 auto;
			border-radius: 19px;
			background: #e3d5c3;
			box-shadow: 4px 3px 10px 0 #00000064;
		}
		.contPostMission.dorada {
			flex-wrap: wrap;
			gap: 10px;
			flex-direction: initial;
			justify-content: center;
			align-items: center;
		}
		.contPostMission > div.contentPrincipal {
			padding: 15px;
			background: #fff8e5;
			border-radius: 20px;
			box-shadow: 0 2px 5px 0 #00000064;
			width: 93%;
		}
		.contPostMission > div.contentPrincipal.tDest {
			padding: 4px;
			background: #e3d5c3;
			border-radius: 20px;
			box-shadow: inset 3px 2px 5px 0 #00000064;
		}
		.contPostMission > div.actua.contentPrincipal {
			padding: 5px 0px 0px;
			width: 100%;
		}
		.ctnBtns {
			display: flex;
			flex-wrap: wrap;
			column-gap: 30px;
			row-gap: 10px;
			height: 420px;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		.ctnBtns.actua > span {
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: sticky;
		}
		.contPest {
			width: 55%;
			justify-content: space-evenly;
		}
		.contPest > span {
			width: 80px;
			height: 20px;
			border: none;
			border-radius: 15px 15px 0 0;
		}
		.contPest > span.back.active {
			background: #e3d5c3;
		}
		.contPest > span.back {
			background: #fff8e5;
			padding: 2px;
			width: 76px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			box-shadow: 4px 3px 10px 0 #00000064;
		}
		.contPest > span.back > button {
			background: none;
			border: none;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 800;
			color: #646f6f;
		}
		.contPest > span.back.active > button {
			border: none;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 800;
			color: #404040;
			background: #fff;
			width: 100%;
			height: 100%;
			border-radius: 15px 15px 3px 3px;
		}

		.contPostMission.tDest {
			background: #fff8e5;
			margin-top: 10px;
		}
		button.moveLeft,
		button.moveRight {
			display: none;
		}
		.ctnBtns.actua > span {
			display: none;
		}
		.container_postMision {
			height: auto;
		}
		.postula_mobile {
			display:block;
			width:100%;
			background-color: #ffff;
			height: 64px;
			box-shadow: 0px 2px 3px #00000040;
			border-radius:10px;
			margin-top: 5px;
			padding-top: 5px;
		}
		.container_postMision {
			top:0px;
			}
		#paginaPropoDorada{
			display: flex;
			justify-content:center;
			position: relative;
			top:0px;
			margin:0 auto 10px ;
			width: 500px;
			height:54px
		}
	}
	@media only screen and (max-width: 414px) {
		.bodyPJazz.actua > .contPostMission {
			height: inherit;
		}
		.bodyPJazz.dorada.propon .contPostMission.dorada > .contentPrincipal > span {
			width: 100%;
			margin-top: 10px;
		}
		.bodyPJazz.dorada.propon > .contPostMission.dorada > .contentPrincipal {
			display: flex;
			flex-direction: column;
			height: auto;
		}
		.contPostMission {
			display: flex;
			position: relative;
			flex-direction: column;
			padding: 8px 10px 2px;
			width: 296px;
			height: auto;
			margin: 0 auto;
			border-radius: 19px;
			background: #e3d5c3;
			box-shadow: 4px 3px 10px 0 #00000064;
		}
		.contPostMission > div.contentPrincipal {
			width: calc(100% - 10px);
			padding:5px;
			
		}
		.contPostMission > div.contentPrincipal.tDest {
			padding: 4px;
			background: #e3d5c3;
			border-radius: 20px;
			box-shadow: inset 3px 2px 5px 0 #00000064;
		}
		.contPostMission > div.actua.contentPrincipal {
			padding: 5px 0px 0px;
			width: 100%;
		}

		.ctnBtns {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			height: auto;
			width: 100%;
			justify-content: center;
			align-items: center;
			padding-bottom: 10px;
		}
		.contPest {
			display: flex;
			position: relative;
			width: 55%;
			height: 24px;
			justify-content: space-evenly;
			align-items: center;
			margin: 0 auto;
			margin-top: 10px;
		}
		.contPest > span {
			width: 80px;
			height: 20px;
			border: none;
			border-radius: 15px 15px 0 0;
		}
		.contPest > span.back.active {
			background: #e3d5c3;
		}
		.contPest > span.back {
			background: #fff8e5;
			padding: 2px;
			width: 76px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			box-shadow: 4px 3px 10px 0 #00000064;
		}
		.contPest > span.back > button {
			background: none;
			border: none;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 800;
			color: #646f6f;
		}
		.contPest > span.back.active > button {
			border: none;
			font-family: 'Montserrat';
			font-size: 12px;
			font-weight: 800;
			color: #404040;
			background: #fff;
			width: 100%;
			height: 100%;
			border-radius: 15px 15px 3px 3px;
		}
		/* .ctnBtns.actua {
			flex-direction: column;
			flex-wrap: initial;
		} */
		.contPostMission.tDest {
			background: #fff8e5;
			margin-top: 10px;
		}
		.ctnBtns.actua > span {
			display: none;
		}
		.container_postMision {
			height: auto;
			top:0px;
			width:288px;
			padding-top: 10px;
		}
		.container_postMision {
			height: auto;
			top:0px;
			width:288px;
			padding-top: 10px;
			gap:10px
		}
		.container_postMision:nth-child(2){
			margin-top: 0px;
		}
		.postula_mobile {
			display:block;
			width:100%;
			background-color: #ffff;
			height: 64px;
			box-shadow: 0px 2px 3px #00000040;
			border-radius:10px;
			margin-top: 5px;
			padding-top: 5px;
		}
	}
	@media only screen and (max-width: 393px) {
		.contPostMission > div.contentPrincipal.tDest {
			width: calc(100% - 8px);
		}
	}
	@media only screen and (max-width: 320px) {
		.contPostMission {
			width: calc(100% - 12px);
		}
	}
</style>
