<script>
	import { fly } from 'svelte/transition';
	import conteAvatarIDea from '../../../../assets/assets/jazz/web/conteAvatarIDea.png';
	export let item;
</script>

<div in:fly={{ y: 500, duration: 2000 }} key={item.key} class="proponDorada">
	<span>{item.titleEWin}</span>
	<img src={conteAvatarIDea} alt="" />
	<span>
		<span>
			<span><b>{item.titulo}</b></span>
			<span>{item.usuario}</span>
		</span>
		<span>{item.txt}</span>
	</span>
	<span>
		<div class="btnUpIdea" />
		<span>100</span>
		<div class="btnDownIdea" />
	</span>
</div>

<style>
	.proponDorada {
		display: flex;
		position: relative;
		width: 32%;
		height: 280px;
		background: url('../../../../assets/assets/jazz/web/conteIdea.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.proponDorada > span:first-child {
		font-family: 'Montserrat';
		color: #6f4fa3;
		font-size: 20px;
		font-weight: 800;
		display: flex;
		justify-content: center;
		position: absolute;
		background: url('../../../../assets/assets/jazz/web/ganarEsencia.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		top: 8%;
		left: 5%;
	}
	.proponDorada:nth-child(1) > span:first-child {
		width: 20%;
		height: 25%;
		padding-top: 10px;
	}
	.proponDorada:nth-child(2) > span:first-child {
		width: 15%;
		height: 20%;
		padding-top: 10px;
	}
	.proponDorada:nth-child(3) > span:first-child {
		width: 13%;
		height: 20%;
		padding-top: 8px;
		font-size: 18px;
	}
	.proponDorada:nth-child(4) > span:first-child {
		display: none;
	}
	.proponDorada:nth-child(5) > span:first-child {
		display: none;
	}
	.proponDorada > img:nth-child(2) {
		width: 80px;
		height: 80px;
		position: absolute;
		left: 30%;
		top: 5%;
	}
	.proponDorada > span:nth-child(3) {
		margin-top: 38%;
		width: calc(75% - 50px);
		display: flex;
		flex-direction: column;
		font-family: 'Montserrat';
		font-size: 12px;
		padding: 0 25px;
		color:#646F6F;
		
	}
	.proponDorada > span:nth-child(3) > div:first-child {
		display: flex;
		flex-direction: column;
		padding: 0;
		height: 45px;
		justify-content: center;
		font-weight: 600;
	}
	.proponDorada > span:nth-child(3) > span:last-child {
		font-size: 13px;
		padding: 25px 0;
	}
	.proponDorada > span:last-child {
		/* margin-left: 1.8%; */
		display: flex;
		flex-direction: column;
		position: relative;
		width: 22%;
		justify-content: space-evenly;
		align-items: center;
		font-family: 'Montserrat';
		font-size: 18px !important;
		color: #404040;
		font-weight: 800;
	}
	.btnUpIdea{
		width:38px ;
		height: 38px;
		background: url('../../../../assets/assets/jazz/mobile/btnUpIdea.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.btnUpIdea:hover {
		background: url('../../../../assets/assets/jazz/mobile/btnUpIdeaHover.png');
		background-position: center;
	}
	.btnDownIdea{
		width:38px ;
		height: 38px;
		background: url('../../../../assets/assets/jazz/mobile/btnDownIdea.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.btnDownIdea:hover {
		background: url('../../../../assets/assets/jazz/mobile/btnDownIdeaHover.png');
		background-position: center;
	}
	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.proponDorada > img:nth-child(2) {
			display: none;
		}
		.proponDorada > span:nth-child(3) {
			margin-top: 0;
			padding: 12% 10% 0 30%;
			width: 47%;
		}
		.proponDorada > span:nth-child(2) > span:first-child {
			margin-top: 100px;
			padding: 0;
			width: 47%;
		}
		.proponDorada > span:nth-child(3) > span:last-child {
			font-size: 12px;
			color:#404040;
		}
		.proponDorada > span:nth-child(3) > span:first-child {
			font-size: 12px;
		}
		.proponDorada {
			display: flex;
			position: relative;
			width: 90%;
			height: 205px;
			background: url('../../../../assets/assets/jazz/mobile/conteListaIdeasBig.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			margin-bottom: 0px;
		}
		.proponDorada:nth-child(2) {
			margin-top: 10px;
		}
		.proponDorada:nth-child(5) {
			margin-bottom: 0;
		}
		.proponDorada > span:first-child {
			font-family: 'Montserrat';
			color: #6f4fa3;
			font-size: 16px;
			font-weight: 800;
			display: flex;
			justify-content: center;
			position: absolute;
			background: url('../../../../assets/assets/jazz/mobile/eWinBig.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			top:0px;
			left:-30px
		}
		.proponDorada:nth-child(2) > span:first-child {
			width: 32px;
			height: 45px;
			left: -10px;
			top:5px;
			padding-top: 7.5px;
		}
		.proponDorada:nth-child(3) > span:first-child {
			width: 28px;
			height: 41px;
			left: -5px;
			padding-top: 5px;
			font-size: 15px;
			top:0px;
		}
		.proponDorada:nth-child(4) > span:first-child {
			width: 24px;
			height: 37px;
			left: 8px;
			padding-top: 5px;
			font-size: 14px;
			top:-10px;
		}
		.proponDorada:nth-child(5) > span:first-child {
			display: none;
		}
		.proponDorada > span:nth-child(2) {
			margin-left: 25%;
			margin-top: 0;
			width: calc(55% - 20px);
			display: flex;
			flex-direction: column;
			font-family: 'Montserrat';
			font-size: 12px;
			padding: 0 10px;
		}
		.proponDorada > span:nth-child(2) > span:first-child {
			display: flex;
			flex-direction: column;
			padding: 12px 5px 0;
		}
		.proponDorada > span:nth-child(2) > span:last-child {
			font-size: 10px;
			padding: 10px 8px 8px;
		}
		.proponDorada > span:last-child {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 16%;
			justify-content: space-evenly;
			align-items: center;
			font-family: 'Montserrat';
			font-size: 12px;
			color: #404040;
			font-weight: 800;
			margin-left: 0;
		}
	}
	@media only screen and (max-width: 414px) {
		.proponDorada > img:nth-child(2) {
			display: none;
		}
		.proponDorada > span:nth-child(3) {
			margin-top: 0;
			padding: 3% 3% 0 30%;
			width: 47%;
		}
		.proponDorada > span:nth-child(3) > span:last-child {
			font-size: 10px;
			color:#404040;
			padding: 10px 0;
		}
		.proponDorada {
			display: flex;
			position: relative;
			width: 276px;
			height: 125px;
			background: url('../../../../assets/assets/jazz/mobile/conteListaIdeasBig.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		/* .proponDorada:nth-child(2) {
			margin-top: 10px;
		} */
		.proponDorada:nth-child(5) {
			margin-bottom: 0;
		}
		.proponDorada > span:first-child {
			font-family: 'Montserrat';
			color: #6f4fa3;
			font-size: 16px;
			font-weight: 800;
			display: flex;
			justify-content: center;
			position: absolute;
			background: url('../../../../assets/assets/jazz/mobile/eWinBig.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			top:-10px;
			left: -20px;
			
		}
		.proponDorada:nth-child(2) > span:first-child {
			width: 32px;
			height: 45px;
			left: -5px;
			top:-10px;
			padding-top: 7.5px;
		}
		.proponDorada:nth-child(3) > span:first-child {
			width: 28px;
			height: 41px;
			left: 0px;
			padding-top: 5px;
			font-size: 15px;
			top:-10px;
		}
		.proponDorada:nth-child(4) > span:first-child {
			width: 24px;
			height: 37px;
			left: 8px;
			padding-top: 5px;
			font-size: 14px;
			top:-10px;
		}
		.proponDorada:nth-child(5) > span:first-child {
			display: none;
		}
		.proponDorada > span:nth-child(2) {
			margin-left: 25%;
			margin-top: 0;
			width: calc(55% - 20px);
			display: flex;
			flex-direction: column;
			font-family: 'Montserrat';
			font-size: 12px;
			padding: 0 10px;
		}
		.proponDorada > span:nth-child(2) > span:first-child {
			display: flex;
			flex-direction: column;
			padding: 12px 5px 0;
		}
		.proponDorada > span:nth-child(2) > span:last-child {
			font-size: 10px;
			padding: 10px 8px 8px;
		}
		.proponDorada > span:last-child {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 16%;
			justify-content: space-evenly;
			align-items: center;
			font-family: 'Montserrat';
			font-size: 12px;
			color: #404040;
			font-weight: 800;
			margin-left: 20px;
		}
		.proponDorada:nth-child(1) > span:first-child {
			width: 20%;
			height: 35%;
			padding-top: 10px;
			left:-15px
		}
	}
</style>
