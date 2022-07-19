<script>
	export let showBody;
</script>
<main>
	<div class="container">
		<section class="section">
			<div class="section_container">
					<button on:click={()=>showBody ='bodyDes'} class={showBody === 'bodyDes'? 'button active':showBody === 'bodyArticle'? 'button':showBody ==='bodyEssence'? 'button':showBody === 'bodyCrea'? 'button':'button'}>Descubre</button>

					<button on:click={()=>showBody ='bodyArticle'} class={showBody === 'bodyArticle'? 'button active':showBody === 'bodyDes'? 'button':showBody ==='bodyEssence'? 'button':showBody === 'bodyCrea'? 'button':'button'}>Tu Rol</button>

					<button on:click={()=>showBody ='bodyEssence'} class={showBody === 'bodyEssence'? 'button active':showBody === 'bodyDes'? 'button':showBody ==='bodyArticle'? 'button':showBody === 'bodyCrea'? 'button':'button'} >Esencia</button>

					<button  id="btn" class="button">Vivos</button>

					<button on:click={()=>showBody ='bodyCrea'} class={showBody === 'bodyCrea'? 'button active':showBody === 'bodyDes'? 'button':showBody ==='bodyArticle'? 'button':showBody === 'bodyEssence'? 'button':'button'} >Crea</button>
			</div>
		</section>
	</div>
</main>

<style>
	.container {
		position: absolute;
		width: 95%;
		margin: 0 2.5%;
		margin-top: 105px;
		height: 70px;
		background-color: #B2B2B2;
		box-shadow: 0px 3px 6px 0px #00000040;
		border-bottom-right-radius: 20px;
		border-bottom-left-radius: 20px;
		z-index: 10;
		display: flex;
		justify-content:center;
	}
	.section {
		width: 318px;
		height: 41px;
		margin: 20px auto 0 auto;
		position:absolute;
		background-image: url('../../../../assets/assets/article/fondoBtns.png');
		background-repeat: no-repeat;
		background-size: auto;
		background-position: center;
		border-radius: 10px;
		box-shadow: 4px 3px 10px 0px #00000063;
		z-index: 10;
	}
	.section_container {
		position: relative;
		width: 300px;
		margin: 6px auto;
		height: 30px;
		display: flex;
		justify-content: center;
		align-content: center;
		z-index: 10;
		gap: 4px;
	}
	.button {
		height:28px;
		padding:0px;
		display: inline-block;
		background-image: url('../../../../assets/assets/article/btn.png');
		background-repeat: no-repeat;
		background-size: auto;
		background-position: center;
		color: #646f6f;
		font-family: 'Montserrat';
		font-size: 12px;
		font-weight: bold;
		border: none;
		border-style:solid;
		border: 1px solid #ffff;
		border-radius: 8px;
		box-shadow: 0px 2px 3px  #00000040
	}
	.button:nth-child(1) {
		width: 76px;
	}
	.button:nth-child(2) {
		width: 56px;
	}
	.button:nth-child(3) {
		width: 64px;
	}
	.button:nth-child(4) {
		width: 52px;
	}
	.button:nth-child(5) {
		width: 40px;
	}
	.active {
		font-size: 13px;
		background-image: none;
		background-color: #FFFFFF;
		background-size:cover;
		background-repeat: no-repeat;
		background-position:center;
	}
	@media only screen and (max-width:1920px) and (min-width:1024px) {
		.container {
			position: absolute;
			max-width: 485px;
			margin: 0 auto 0 50%;
			margin-top: 1%;
			height: 93px;
			border-bottom-right-radius: 50px;
			border-bottom-left-radius: 0px;
			background-position: center;
			z-index: 10;
		}
		.section {
			width: 454px;
			height: 55px;
			margin: 19px auto;
			padding: 0;
		/* 	position:absolute; */
			background-image: url('../../../../assets/assets/article/web/Title/fondoBtns.png');
			background-repeat: no-repeat;
			border-radius: 15px;
			background-size: auto;
			z-index: 10;
		}
		.section_container {
			/* position: absolute; */
			margin: 13px auto;
			padding-left:1%;
			width: 90%;
			gap: 8px;
		}
		.button {
			height:30px;
			display: inline-block;
			color: #646f6f;
			font-size: 14px;
			font-weight: bold;
			border-radius: 10px;
			padding: 0;
		}
		.button:nth-child(1) {
			width: 94px;
		}
		.button:nth-child(2) {
			width: 70px;
		}
		.button:nth-child(3) {
			width: 84px;
		}
		.button:nth-child(4), .button:nth-child(5) {
			width: 70px;
		}
	}
	@media only screen and (max-width:1280px) and (min-width:1024px) {
		.container {
			max-width: 485px;
			margin: 0;
			margin-top: 1%;
			z-index: 10;
		}
	}
	@media only screen and (max-width:1023px) and (min-width:768px){
		.container {
			width: 70%;
			margin: 0 15%;
			margin-top: 130px;
			height: 75px;
			display: flex;
			justify-content:center
		}
		.section {
			width:75%;
			height: 47px;
			margin-top: 15px;
			margin-left:0%;
		}
		.section_container {
			width:400px;
			margin: 10px auto;
			gap:0px
		}
		.button:nth-child(2),.button:nth-child(3),.button:nth-child(4),.button:nth-child(5){
			margin-left:15px;
		}
		.button {
			font-size: 14px;
			font-weight: bold;
		}
	}
</style>
