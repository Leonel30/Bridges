<script>
	import iconMisionDorada from '../../../../assets/assets/jazz/mobile/iconMisionDorada.png';
	export let tabsJazz;
</script>

<div
	class={tabsJazz === 'proponDorada'
		? 'contMissionGold propon'
		: tabsJazz === 'actuaDorada'
		? 'contMissionGold actua'
		: 'contMissionGold'}
	on:click={() => (tabsJazz = 'proponDorada')}
>
	<span>
		<img src={iconMisionDorada} alt="" />
	</span>
	<span>
		<b>Misión Dorada Disponible</b>
		Perdimos, pero es una oportunidad para ser creativos…
	</span>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.contMissionGold {
		width: 450px;
		min-height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('../../../../assets/assets/jazz/mobile/conteMisionDorada@2x.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-family: 'Montserrat';
		font-size: 16px;
		padding: 0 10px;
	}
	.contMissionGold > span:first-child {
		width: 25%;
		display: flex;
		justify-content: center;
		margin-bottom: 7.5px;
	}
	.contMissionGold > span:last-child{
		margin-left: 20px;
	}
	.contMissionGold.actua {
		width: 400px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('../../../../assets/assets/jazz/mobile/fondoBtnIDea@2x.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		font-family: 'Montserrat';
		margin: 0 auto;
	}
	@media only screen and (max-width: 768px) {
		.contMissionGold {
			width: 500px;
			min-height: 110px;
		}
		.contMissionGold > span:first-child {
			width: 20%;
			height: calc(100% - 7.5px);
			width:80px;
			height:80px;
		}
		.contMissionGold > span:first-child > img {
			width: 80%;
			width:90px;
			margin-top: -5px;
		}
		.contMissionGold > span:last-child {
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: center;
			align-items: flex-start;
			height: calc(100% - 50px);
			width: calc(80% - 40px);
			font-family: 'Montserrat';
			font-size: 16px;
			padding: 20px;
		}
		.contMissionGold.propon {
			position: absolute;
			top: 20px;
			left: 5px;
			width: 90%;
			bottom: 0;
			right: 0;
			margin: 0 auto;
			height: 100px;
		}
		.contMissionGold.propon > span:first-child {
			width: 25%;
		}
		.contMissionGold.propon > span:first-child > img {
			width: 75%;
			margin-top: 5px;
		}
		.contMissionGold.propon > span:last-child {
			padding: 10px 5px;
			width: calc(100% - 75px);
		}
		.contMissionGold.actua {
			background: url('../../../../assets/assets/jazz/mobile/fondoBtnIDea.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 180px;
			margin-bottom: 5px;
		}
		.contMissionGold.actua > span:first-child {
			padding-top: 5px;
		}
	}
	@media only screen and (max-width: 414px) {
		.contMissionGold {
			width: 90%;
			min-height: 72px;
			margin: 0 auto;
			padding: 0;
		}
		.contMissionGold > span:first-child {
			position: relative;
			align-items: center;
			width: 80px;
			height: calc(100% - 7.5px);
		}
		.contMissionGold > span:last-child {
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: center;
			align-items: flex-start;
			height: calc(100% - 25px);
			width: calc(100% - 90px);
			font-family: 'Montserrat';
			font-size: 12px;
			padding: 10px;
		}
		.contMissionGold.propon {
			position: relative;
			top: 0;
			left: 0;
			width: 100%;
			bottom: 0;
			right: 0;
			margin: 0 auto;
			height: 85px;
		}
		.contMissionGold.propon > span:first-child {
			width: 60px;
		}
		.contMissionGold.propon > span:first-child > img {
			width: 70%;
			margin-top: 0;
		}
		.contMissionGold.propon > span:last-child {
			padding: 10px 5px;
			width: calc(100% - 75px);
		}
		.contMissionGold > span:first-child > img {
			width: 70%;
			margin-top: initial;
		}
		.contMissionGold.actua {
			background: url('../../../../assets/assets/jazz/mobile/fondoBtnIDea.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 85px;
			margin-bottom: 5px;
			width: 100%;
		}
		.contMissionGold.actua > span:first-child {
			padding-top: 5px;
		}
	}
	@media only screen and (max-width: 375px) {
		.contMissionGold {
			width: 100%;
			min-height: 72px;
		}
		.contMissionGold > span:first-child {
			width: 80px;
			height: calc(100% - 7.5px);
		}
		.contMissionGold > span:last-child {
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: center;
			align-items: flex-start;
			height: calc(100% - 25px);
			width: calc(100% - 90px);
			font-family: 'Montserrat';
			font-size: 12px;
			padding: 10px;
		}
		
		.contMissionGold.propon > span:first-child {
			width: 60px;
		}
		.contMissionGold.propon > span:first-child > img {
			width: 75%;
			margin-top: 5px;
		}
		.contMissionGold.propon > span:last-child {
			padding: 10px 5px;
			width: calc(100% - 75px);
		}
		.contMissionGold.actua {
			background: url('../../../../assets/assets/jazz/mobile/fondoBtnIDea.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 85px;
			margin-bottom: 5px;
		}
		.contMissionGold.actua > span:first-child {
			padding-top: 5px;
		}
	}
	@media only screen and (max-width: 320px) {
		.contMissionGold > span:first-child {
			width: 22%;
		}
		.contMissionGold > span:last-child {
			width: 78%;
		}
		.contMissionGold.propon > span:first-child {
			width: 22%;
		}
		.contMissionGold.propon > span:last-child {
			width: 78%;
			font-size: 10px;
		}
	}
</style>
