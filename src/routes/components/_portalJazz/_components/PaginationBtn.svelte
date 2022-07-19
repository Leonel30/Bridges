<script>
	export let tabsJazz;
	export let propon;
	export let displayTypeD;
	export let light;
</script>

<div
	class={tabsJazz === 'tweetDest'
		? 'pagination tDest'
		: tabsJazz === 'actua'
		? 'pagination actua tDest'
		: tabsJazz === 'actuaDorada'
		? 'pagination  actua tDest'
		: displayTypeD
		? 'pagination desk'
		: 'pagination'}
>
	<span>
		<button class="pL" />
			<span class={light ==="light"? "light":""}>PÁGINA 1/{propon.length}</span>
		<button class="pR" />
	</span>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.pagination {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		padding: 8px 0 0px;
		width: 230px;
		height: 45px;
		top: 15px;
		right: 10px;
	}
	.pagination > span {
		width: calc(100% - 20px);
		height: 40px;
		background: url('../../../../assets/assets/jazz/mobile/contePaginacionOscuro.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		padding: 5px 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/* .pagination.tDest > span:hover {
		background: url('../../../../assets/assets/jazz/mobile/contePaginacionOscro.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	} */
	.pagination > span > button {
		display: flex;
		position: relative;
		height: 35px;
		width: 35px;
		border: none;
		padding:0;
	}
	.pagination > span > button.pL {
		background: url('../../../../assets/assets/jazz/mobile/btnArrowL.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		transition: 0.2s ease;
	}
	.pagination > span > button.pR {
		background: url('../../../../assets/assets/jazz/mobile/btnArrowR.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		transition: 0.2s ease;
	}
	.pagination > span > button.pR:hover {
		background: url('../../../../assets/assets/jazz/mobile/btnArrowRhover.png');
		transform: scale(1.2);
		background-size: contain;
	}
	.pagination > span > button.pL:hover {
		background: url('../../../../assets/assets/jazz/mobile/btnArrowLhover.png');
		transform: scale(1.2);
		background-size: contain;
	}
	.pagination > span > span {
		font-family: 'Montserrat';
		font-weight: 800;
		color: #5c3c0f;
		font-size: 14px;
	}
	@media only screen and (max-width: 768px) {
		.pagination {
			position: relative;
			top: inherit;
			right: inherit;
			width: 50%;
			margin: 0 auto;
			/* height: inherit; */
			height: auto;
			justify-content: center !important;
			background-repeat: no-repeat;
		}
		.pagination > span {
			width: 450px;
			height:45px;
			background: url('../../../../assets/assets/jazz/mobile/contePaginacion.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			padding: 5px 10px 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

	}
	@media only screen and (max-width: 414px) {
		.pagination {
			position: relative;
			top: inherit;
			right: inherit;
			width: 100%;
			height: inherit;
			justify-content: center !important;
		}
		.pagination > span {
			width: calc(78% - 20px);
			height: 40px;
			background: url('../../../../assets/assets/jazz/mobile/contePaginacion.png');
			background-position: center;
			background-repeat:no-repeat;
			background-size: contain;
			padding: 5px 10px 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.pagination.tDest > span {
			background: url('../../../../assets/assets/jazz/mobile/contePaginacionOscuro.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.pagination > span > button {
			display: flex;
			position: relative;
			height: 35px;
			width: 35px;
			border: none;
		}
		.pagination > span > button.pL {
			background: url('../../../../assets/assets/jazz/mobile/btnArrowL.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.pagination > span > button.pR {
			background: url('../../../../assets/assets/jazz/mobile/btnArrowR.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
		.pagination > span > span {
			font-family: 'Montserrat';
			font-weight: 800;
			color: #5c3c0f;
			font-size: 14px;
		}
	}
</style>
