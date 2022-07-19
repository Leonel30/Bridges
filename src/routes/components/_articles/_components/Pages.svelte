<script>
	export let currentPage,lastPage;
</script>

<main class="container">
	<div class="container_icons">
		<div class="button_left">
			<button />
		</div>
		<div class="text">
			<span>PÁGINA {currentPage}/{lastPage} </span>
		</div>
		<div class="button_right">
			<button />
		</div>
	</div>
</main>

<style>
	.container {
		width: 235px;
		height: 56px;
		margin: 10px auto;
		background-image: url('../../../../assets/assets/article/contePaginacion.png');
		background-color: transparent;
		background-size: auto;
		background-repeat: no-repeat;
		background-position: center;
	}
	.container_icons {
		width:95%;
		height: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button_right button {
		width: 38px;
		height: 38px;
		border: none;
		padding:0;
		background-image: url('../../../../assets/assets/article/btnArrowR.png');
		background-size: cover;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		transition: 0.3 ease;
	}
	.button_right button:hover {
		background-image: url('../../../../assets/assets/article/btnArrowRhover.png');
		transform: scale(1.2)
	}
	.button_left button {
		width: 38px;
		height: 38px;
		border: none;
		padding:0;
		background-image: url('../../../../assets/assets/article/btnArrowL.png');
		background-size: cover;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		transition: 0.3 ease;
	}
	.button_left button:hover {
		background-image: url('../../../../assets/assets/article/btnArrowLhover.png');
		transform: scale(1.2)
	}
	.text {
		display: inline;
		width: 60%;
		color: rgb(83, 53, 17);
		padding: 0 0 5px;
		font-size: 12px;
		font-weight: 700;
		text-align: center;
	}
	@media only screen and (max-width:1920px) and (min-width:1024px) {
		.container {
			width: 235px;
			height:56px;
			margin: 5px auto;
			padding: 0px;
			background-image: url('../../../../assets/assets/article/paginacionClara.png');
			background-color: transparent;
			background-size: auto;
			background-repeat: no-repeat;
		}
		.container_icons {
			width:92%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.text {
			display: inline;
			width: 70%;
			padding: 0 0 8px;
			text-align: center;
			color:#5C3C0F;
			font-weight: 700;
		}
		.text span {
			font-size: 14px;
		}
	}
</style>
