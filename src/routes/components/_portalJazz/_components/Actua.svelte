<script>
	import { fly, fade } from 'svelte/transition';
	import conteActuaAvatar from '../../../../assets/assets/jazz/mobile/conteActuaAvatar.png';
	import btnCheck from '../../../../assets/assets/jazz/mobile/btnCheck.png';
	import btnCheckHover from '../../../../assets/assets/jazz/mobile/btnCheckHover.png';
	export let item;

	$: imgCheck = {
		img : {
			enter:btnCheckHover,
			leave:btnCheck
		}
	};
	let checkSelect =false;
	
</script>

<div
	key={item.key}
	in:fly={(item.key + 1) % 2 === 0 ? { x: 500, duration: 2000 } : { x: -500, duration: 2000 }}
	class="actions"
>
	<span>
		<span><b>Actua: </b>{item.accion}</span>
		<span><b>{item.personas} personas enlistadas</b></span>
		<span>Postulante: {item.postulante}</span>
		<span>
			<span>Fecha: {item.fecha}</span>
			<span>Hora: {item.hora}</span>
		</span>
	</span>
	<span>
		<img src={conteActuaAvatar} alt="" />
		<button on:click={() => checkSelect = !checkSelect}>
			<!-- <img src={imgCheck.img.enter}
			alt="" /> -->
			<div class={ checkSelect?"checkSelec" :"container_bg_icon"}></div>
		</button>
	</span>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.actions {
		display: flex;
		flex-direction: row;
		width: 45%;
		width:421px;
		height: 200px;
		background: url('../../../../assets/assets/jazz/mobile/conteActuaL.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.actions > span:first-child {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		margin-top: 20px;
		width: calc(70% - 10px);
		height: calc(75% - 10px);
		padding: 5px;
		font-family: 'Montserrat';
		font-size: 17px;
		color: #646f6f;
	}
	.actions > span:last-child {
		display: flex;
		flex-direction: column;
		margin-top: 15px;
		width: calc(25% - 15px);
		height: 75%;
	}
	.actions > span:last-child > img:first-child {
		width: 77px;
		height: 74px;
		margin: 0 auto;
		margin-top: 10px;
		margin-left: 9px;
	}
	.actions > span:last-child > button {
		border: none;
		background: #fff8e5;
		width: 45px;
		height: 45px;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-top: 10px;
		margin-left: 30px;
		border-radius: 6px;
		box-shadow: 1px 1px 5px 0 #404040b0;
	}
	.actions > span:last-child > button img {
		width: 35px;
		height: 35px;
	}
	/* .actions > span:last-child > button img:hover {
		width: 45px;
		height: 45px;
	} */
	.actions > span:first-child > span:nth-child(2),.actions > span:first-child > span:nth-child(1) {
		margin-top: 5px;
		font-size: 14px;
	}
	.actions > span:first-child > span:nth-child(3) {
		margin-top: 20px;
		font-size: 14px;
	}
	.actions > span:first-child > span:nth-child(4) {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
	}
	.container_bg_icon {
        width:45px;
        height:45px;
        background-image: url('../../../../assets/assets/jazz/mobile/btnCheck.png');
		background-repeat: no-repeat;
		background-size: auto;
		background-position: center;
    }
	.container_bg_icon:hover {
		width:40px;
        height:40px;
		background-image: url('../../../../assets/assets/jazz/mobile/btnCheckHover.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	.checkSelec {
        width:45px;
        height:45px;
        background-image: url('../../../../assets/assets/jazz/mobile/btnCheckSelec.png');
        background-repeat: no-repeat;
		background-size: cover;
    }
	@media only screen and (max-width: 768px) {
		/* .actions {
			width: 421px;
			height: 145px;
		} */
		.actions > span:first-child {
			margin-left: 15px;
			margin-top: 15px;
			font-size: 11px;
		}
		/* .actions > span:last-child {
			display: flex;
			flex-direction: column;
			margin-top: 15px;
			width: calc(25% - 15px);
			height: 75%;
		}
		.actions > span:last-child > img:first-child {
			width: 90%;
			margin: 0 auto;
			margin-top: 10px;
		}
		.actions > span:last-child > button {
			border: none;
			background: #fff8e5;
			width: 35px;
			height: 35px;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 10px;
			border-radius: 4px;
			box-shadow: 1px 1px 5px 0 #404040b0;
		}
		.actions > span:first-child > span:nth-child(2) {
			margin-top: 5px;
		}
		.actions > span:first-child > span:nth-child(3) {
			margin-top: 10px;
			font-size: 10px;
		}
		.actions > span:first-child > span:nth-child(4) {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
		} */
	}

	@media only screen and (max-width: 414px) {
		.actions {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 145px;
			background: url('../../../../assets/assets/jazz/mobile/conteActuaL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.actions > span:first-child {
			display: flex;
			flex-direction: column;
			margin-left: 15px;
			margin-top: 15px;
			width: calc(70% - 10px);
			height: calc(75% - 10px);
			padding: 5px;
			font-family: 'Montserrat';
			font-size: 11px;
			color: #646f6f;
		}
		.actions > span:last-child {
			display: flex;
			flex-direction: column;
			margin-top: 10px;
			width: calc(25% - 15px);
			height: 75%;
			margin-left: 2px;
		}
		.actions > span:last-child > img:first-child {
			width: 90%;
			margin: 0 auto;
			margin-top: 10px;
		}
		.actions > span:last-child > button {
			border: none;
			background: #fff8e5;
			width: 35px;
			height: 35px;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 10px;
			border-radius: 4px;
			box-shadow: 1px 1px 5px 0 #404040b0;
		}
		.actions > span:first-child > span:nth-child(2),.actions > span:first-child > span:nth-child(1) {
			margin-top: 2px;
			font-size: 11px;
		}
		.actions > span:first-child > span:nth-child(3) {
			margin-top: 10px;
			font-size: 10px;
		}
		.actions > span:first-child > span:nth-child(4) {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
		}
		.container_bg_icon {
			width:35px;
			height:35px;
			background-image: url('../../../../assets/assets/jazz/mobile/btnCheck.png');
			background-repeat: no-repeat;
			background-size: auto;
			background-position: center;
			border-radius: 10px;
		}
		.checkSelec {
			width:35px;
			height:35px;
		}
	}
	@media only screen and (max-width: 320px) {
		.actions {
			height: 135px;
		}
		.actions > span:first-child {
			font-size: 9.99px;
		}
	}
</style>
