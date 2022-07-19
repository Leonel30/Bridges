<script>
	export let tabsJazz;
	export let modalMision;
	let titulo = ["Postula Mision 0/1","Postula idea 1/3"]
	const getTitle = () => {
		let title;
		return  title = tabsJazz === 'propon' ? titulo[0]:titulo[1]
	}
	let titlePos = getTitle()
</script>

<button
	class={tabsJazz === 'tweetDest'
		? 'postulaMission tD'
		: tabsJazz !== 'proponDorada'
		? 'postulaMission'
		: 'postulaMission dorada'}
	on:click={() => ((modalMision = true), console.log('click'))}>{titlePos}</button
>
{#if tabsJazz === 'proponDorada' || tabsJazz === 'tweetDest'}
	<span class="txtGanaMas">*Gana más subiendo de nivel</span>
{/if}

<!-- markup (zero or more items) goes here -->
<style>
	button.postulaMission {
		display: flex;
		position: relative;
		width: 337px;
		height: 42px;
		justify-content: center;
		align-items: center;
		background: url('../../../../assets/assets/jazz/mobile/btnPostular.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding: 0;
		color: #5c3c0f;
		font-family: 'Montserrat';
		font-weight: 800;
		margin: 0 auto;
		margin-bottom: 15px;
	}
	button.postulaMission:hover {
		background: url('../../../../assets/assets/jazz/mobile/btnPostularHover.png');
		border: none;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain
	}
	button.postulaMission.dorada {
		margin-bottom: 10px;
		margin-top: 120px;
	}
	span.txtGanaMas {
		color: #404040;
		font-size: 14px;
		font-family: 'Montserrat';
		margin: 0 auto;
		margin-top: 10px;
		width: 100%;
		position: relative;
		display: flex;
		justify-content: center;
	}
	button.postulaMission.tD {
		margin-bottom: 5px;
	}
	@media only screen and (max-width: 768px) {
		button.postulaMission {
			display: flex;
			position: relative;
			width: 100%;
			height: 35px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/jazz/mobile/btnPostular.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding: 0;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 800;
			margin-bottom: 15px;
		}
		button.postulaMission.dorada {
			margin-bottom: 10px;
			margin-top: 120px;
		}
		span.txtGanaMas {
			color: #404040;
			font-size: 12px;
			font-family: 'Montserrat';
			margin: 0 auto;
			width: 100%;
			position: relative;
			display: flex;
			justify-content: center;
		}
		button.postulaMission.tD {
			margin-bottom: 5px;
		}
	}
	@media only screen and (max-width: 414px) {
		button.postulaMission {
			display: flex;
			position: relative;
			width: 100%;
			height: 35px;
			justify-content: center;
			align-items: center;
			background: url('../../../../assets/assets/jazz/mobile/btnPostular.png');
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding: 0;
			color: #5c3c0f;
			font-family: 'Montserrat';
			font-weight: 800;
			margin-bottom: 15px;
		}
		button.postulaMission.dorada {
			margin-bottom: 10px;
			margin-top: 60px;
		}
		span.txtGanaMas {
			color: #404040;
			font-size: 12px;
			font-family: 'Montserrat';
			margin: 0 auto;
			width: 100%;
			position: relative;
			display: flex;
			justify-content: center;
		}
		button.postulaMission.tD {
			margin-bottom: 5px;
		}
	}
</style>
