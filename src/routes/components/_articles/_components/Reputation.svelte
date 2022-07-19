<script>
	import level_star from '../../../../assets/assets/article/estrellaEsencia.png';
	let levels = [1,2,3,4,5]
	export let porcentaje ;
	const getStars = (porcentaje) => {
		let acum = [1,2,3,4,5];
		if (porcentaje <=20) {
			return acum = [1];
		} else if (porcentaje <= 40) {
			return acum = [1,2]
		} else if (porcentaje <= 60) {
			return acum = [1,2,3]
		} else if (porcentaje <= 80){
			return acum = [1,2,3,4]
		}else {
			return acum
		}
	}
	$: vars =`--width: ${porcentaje}%`;
	console.log(getStars(porcentaje))
	let arrayStars = getStars(porcentaje)
	console.log(arrayStars)
</script>

<div class="container">
	<div class="container__level">
		<div class="level">
			<span>Reputación</span>
			<div class="essence">
				<p>Esencia Nivel. 1</p>
			</div>
		</div>
		<div class="container_proBar">
			<span style="{vars}"></span>
		</div>
		<div class="level_numbers">
			{#each levels as level}
				<div class="level_numbers_item">
					<span>N.{level}</span>
				</div>
			{/each}
		</div>
		<div class="level_stars">
			{#each arrayStars as arrayStar}
				<div class="level_stars_item">
					<img src={level_star} alt="" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 85px;
		margin:26px 0 auto;
		background-color: #D9D9D9;
		z-index: 20;
		box-shadow: 0px 3px 6px 0px #00000040;
	}
	.container__level {
		width: 318px;
		height: 80px;
		margin: 0 auto;
		background-image: url('../../../../assets/assets/article/Reputation/progresoEsencia.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 10px;
		position: relative;
		top:-5px
	}
	.level {
		width: 90%;
		height: 20px;
		margin-bottom: -14px;
		padding: 0 10px 20px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.level span {
		font-weight:600;
		color: #404040;
		position: relative;
		top: 12px;
	}
	.essence p {
		display: inline-block;
		color: #646F6F;
		position: relative;
		top: 12px;
		padding-right: 20px; 
	}
	.level_numbers {
		position: relative;
		width: 90%;
		margin: 0 auto ;
		margin-left:40px;
		display: flex;
		justify-content: flex-start;
		column-gap:38px ;
		top:18px;
	}
	.level_stars {
		position: relative;
		width: 90%;
		margin: 0 auto 0 62px;
		display: flex;
		justify-content:flex-start;
		top:-1px;
		column-gap: 33.4px;
	}

	.level_stars_item:nth-child(5) {
			margin-left: 4px;
		}
	.level_numbers_item span {
		display: inline-block;
		color: #404040;
		font-weight: 500;
	}
	.level_numbers_item:nth-child(4) {
			margin-left: -2px;
	}
	.level_numbers_item:nth-child(5) {
			margin-left: 2px;
	}
	.container_proBar{
		position: relative;
		width:93%;
		margin:0 auto;
		height:12px;
		top: 9px;
	}
	.container_proBar span {
		display: inline-block;
		position: relative;
		border-radius: 6px;
		height:10px;
		background-color:#E8E2FD;
		animation: 3s 1 normal bar-animation;
		animation-delay: 0s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
		width: var(--width)
	}
	@keyframes bar-animation {
	0% {
		width:0%;	
	}
	100% {
		width:var(--width);	
	}
	}
	@media only screen and (max-width:1920px) and (min-width:1024px) {
		.container {
			position: absolute;
			max-width: 485px;
			height: 93px;
			z-index: 20;
			margin: 1% 0 0 24.8% ;
			border-bottom-left-radius: 50px;
		}
		.container__level {
			width: 400px;
			height: 90px;
			margin: 7px auto 0;
			background-image: url('../../../../assets/assets/article/web/Reputation/barraEsencia.png');
			background-size: auto;
		}
		.level span {
			font-size: 16px;
			padding-left: 10px;
		}
		.essence p {
			display: inline-block;
			font-size: 16px;
			padding-right: 25px;
		}
		.level_numbers {
			position: relative;
			width: 90%;
		/* 	margin-left:13%; */
			/* column-gap:47px ; */
			top:28px;
		}
		.level_stars {
			position: relative;
			width: 96%;
			margin: 0 auto;
			display: flex;
			justify-content:flex-start;
			top:6px;
			/* column-gap: 49px; */
		}
		.level_stars_item:nth-child(1) {
			margin-left: 67px;
		}
		.level_stars_item:nth-child(2) {
			margin-left: 18px;
		}
		.level_stars_item:nth-child(3){
			margin-left: 18px;
		}
		.level_stars_item:nth-child(4) {
			margin-left: 19px;
		}
		.level_stars_item:nth-child(5) {
			margin-left: 21px;
		}
		.level_numbers_item span {
			display: inline-block;
			font-size: 16px;
		}
		.level_numbers_item:nth-child(1) {
			margin-left: 7px;
		}
		.level_numbers_item:nth-child(2) {
			margin-left: 10px;
		}
		.level_numbers_item:nth-child(3) {
			margin-left: 10px;
		}
		.level_numbers_item:nth-child(4) {
			margin-left: 10px;
		}
		.level_numbers_item:nth-child(5) {
			margin-left: 15px;
		}
		.container_proBar{
			position: relative;
			width:93%;
			margin:0 auto;
			height:12px;
			top: 14px;
		}
		.container_proBar span {
			display: inline-block;
			position: relative;
			border-radius: 6px;
			height:11px;
			background-color: #ffff;
			opacity: 90%;
		}
	}
	@media only screen and (max-width:1440px) and (min-width:1024px) { 
		.container {
			margin: 1% 0 0 16.3% ;
		}
		/* .level_numbers_item:nth-child(4) {
			margin-left: -1px;
		}
		.level_numbers_item:nth-child(5) {
			margin-left: 5px;
		} */
	}
	@media only screen and (max-width:1366px) and (min-width:1024px) { 
		.container {
			margin: 1% 0 0 14.5% ;
		}
		/* .level_numbers_item:nth-child(5) {
			margin-left: 3px;
		} */
	}
	@media only screen and (max-width:1280px) and (min-width:1024px) { 
		.container {
			margin: 1% 0 0 12% ;
		}
	}
	@media only screen and (max-width:1024px) and (min-width:1024px) { 
		.container {
			margin: 1% 0 0 2.5% ;
		}
	}
	@media only screen and (max-width:1023px) and (min-width:768px){
		.container {
			height: 110px;
		}
		.container__level {
			width: 422px;
			height: 110px;
			margin: 0 auto;
			background-image: url('../../../../assets/assets/article/Reputation/progresoEsencia.png');
			top:-5px
		}
		.level {
			width: 85%;
		}
		.level span {
			font-size: 14px;
			top: 20px;
		}	
		.essence p {
			font-size: 14px;
			top: 20px;
		}
		.container_proBar {
			width:93%;
			top: 26px;
		}
		.container_proBar span {
			border-radius: 6px;
			height:13px;
		}
		.level_stars_item img {
			height:28px
		}
		.level_stars {
			top:16px;
			margin: 0 auto;
			margin-left: 83px;
			column-gap: 0px;
		}
		.level_stars_item:nth-child(2),.level_stars_item:nth-child(3){
			margin-left:47px;
		}
		.level_stars_item:nth-child(4){
			margin-left:47.5px;
		}
		.level_stars_item:nth-child(5){
			margin-left:51px;
		}
		.level_numbers {
			margin-left:53px;
			top:37px;
			column-gap: 0px;
		}
		.level_numbers_item span {
			display: inline-block;
			color: #404040;
			font-size: 16px;
			font-weight: 500;
		}
		.level_numbers_item:nth-child(2),.level_numbers_item:nth-child(3){
			margin-left:50px;
		}
		.level_numbers_item:nth-child(4){
			margin-left:48px;
		}
		.level_numbers_item:nth-child(5) {
			margin-left:54px;
		}
	}
	@media only screen and (max-width:374px) and (min-width:360px){
		.level_stars_item:nth-child(5){
			margin-left: 3px;
		}
	}
</style>
