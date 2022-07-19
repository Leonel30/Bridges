<script>
	import { fly } from 'svelte/transition';
	import infoWater from '../../../../assets/assets/lagoNimue/mobile/infoAgua.png';
	import infoEarth from '../../../../assets/assets/lagoNimue/mobile/infoTierra.png';
	import infoFire from '../../../../assets/assets/lagoNimue/mobile/infoFuego.png';
	import infoWind from '../../../../assets/assets/lagoNimue/mobile/infoAire.png';
	import levelWater from '../../../../assets/assets/lagoNimue/mobile/porcentajeAgua.png';
	import levelEarth from '../../../../assets/assets/lagoNimue/mobile/porcentajeTierra.png';
	import levelFire from '../../../../assets/assets/lagoNimue/mobile/porcentajeFuego.png';
	import levelWind from '../../../../assets/assets/lagoNimue/mobile/porcentajeAire.png';
	import littleBarWater from '../../../../assets/assets/lagoNimue/mobile/infoBarraAgua.png';
	import littleBarEarth from '../../../../assets/assets/lagoNimue/mobile/infoBarraTierra.png';
	import littleBarFire from '../../../../assets/assets/lagoNimue/mobile/infoBarraFuego.png';
	import littleBarWind from '../../../../assets/assets/lagoNimue/mobile/infoBarraAire.png';
	import bigBarWater from '../../../../assets/assets/lagoNimue/mobile/barraAgua.png';
	import bigBarEarth from '../../../../assets/assets/lagoNimue/mobile/barraTierra.png';
	import bigBarFire from '../../../../assets/assets/lagoNimue/mobile/barraFuego.png';
	import bigBarWind from '../../../../assets/assets/lagoNimue/mobile/barraAire.png';
	import {myWorldcomments} from '../../../../lib/models/data.js'
	export let element;
	console.log(element)
	const getImgMyWorld=(element)=> {
		let src ={}
		if ( element === 0) {
			return src ={ 
					srcInfo :infoWater,
					srcLvl:levelWater,
					srcLittleBar:littleBarWater,
					srcBigBar:bigBarWater,
					srcColor:'#5570bf'
			}
		} else if (element === 1) {
			return  src ={ 
					srcInfo :infoEarth,
					srcLvl:levelEarth,
					srcLittleBar:littleBarEarth,
					srcBigBar:bigBarEarth,
					srcColor:'#522e0a'
		}
		} else if (element === 2) {
			return src ={ 
					srcInfo :infoFire,
					srcLvl:levelFire,
					srcLittleBar:littleBarFire,
					srcBigBar:bigBarFire,
					srcColor: '#8f1209',
				}
		} else if (element === 3){
			return src ={ 
					srcInfo :infoWind,
					srcLvl:levelWind,
					srcLittleBar:littleBarWind,
					srcBigBar:bigBarWind,
					srcColor:'#186c5f'
				}
		}else {
			return src
		}
	}
	let savElement = getImgMyWorld(element)
	let srcInfo = savElement.srcInfo;
	let srcLvl = savElement.srcLvl;
	let srcLittleBar = savElement.srcLittleBar;
	let srcBigBar = savElement.srcBigBar;
	let srcColor = savElement.srcColor;
	$: info =`--background-image: url(${srcInfo})`;
	$: level =`--background-image: url(${srcLvl})`;
	$: littleBar =`--background-image: url(${srcLittleBar})`;
	$: bigBar =`--background-image: url(${srcBigBar})`;
	$: color =`--color:${srcColor}`;


</script>

<div class='contBotton'>
	<div class='container'>
		<div class="container_all">
			<header class="container_all_top">
				<div class="top_info" style="{info}">
					<div class="top_info_lvl">
						<div class="lvl_text_1">
							<span style="{color}">Neutralizar</span>
							<span style="{littleBar}" >
								<div>
									<span></span>
								</div>
							</span>
						</div>
						<div class="lvl_text_2">
							<span style="{color}">Persuadir</span>
							<span style="{littleBar}">
								<div>
									<span></span>
								</div>
							</span>
						</div>
						<div class="lvl_text_3">
							<span style="{color}">Activar</span>
							<span style="{littleBar}">
								<div>
									<span></span>
								</div>
							</span>
						</div>
					</div>
					<div class="top_inf_accept">
						<span>Adaptar</span>
					</div>
				</div>
				<div class="top_esp">
					<div class="top_esp_lvl" style="{level}">
						<span style="{color}">75%</span>
					</div>
					<div class="top_esp_text_bar">
						<span style="{color}">Alineacion con mi espíritu</span>
						<span style="{bigBar}">
							<div>
								<span></span>
							</div>
						</span>
					</div>
				</div>
			</header>
			<section class="container_all_body">
				<div class="body_title">
					<div></div>
					<div></div>
					<span>24 Semanas del aborto en familia</span>
				</div>
				<div class="body_cards">
					{#each myWorldcomments as item}
						<div in:fly={ {y: 200, duration: 2700, delay: 300}}  class="body_cards_item">
							<span>{item}</span>
						</div>
					{/each}
				</div>
			</section>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.container_all {
		width:100%;
		height:auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		/* padding-top: 50px; */
		margin-bottom: 20px;
	}
	.container_all_top{
		/* width:1000px; */
		display:flex;
		margin: 0 auto;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		height:192px;
		gap:6px;
	}
	.top_info{
		width:336px;
		height: 130px;
		background: var(--background-image) no-repeat top;
		background-size: auto ;
		display: flex;
		flex-direction: column;
	}
	.top_info_lvl{
		width:100%;
		height:70%;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.lvl_text_1,.lvl_text_2,.lvl_text_3{
		height:25%;
		display: flex;
		width: 90%;
		justify-content: center;
		align-items: center;
	}
	.lvl_text_1 > span:first-child,.lvl_text_2 > span:first-child,.lvl_text_3 > span:first-child {
		font-size: 12px ;
		color:var(--color);
		font-weight: 600;
		width: 30%;
	}
	.lvl_text_1 > span:last-child,.lvl_text_2 > span:last-child,.lvl_text_3 > span:last-child {
		width: 75%;
		background: var(--background-image) no-repeat top;
		background-size: cover ;
		height:26px;
		position: relative;
		right:10px;
		top:5px
	}
	.lvl_text_1 > span:last-child > div, .lvl_text_2 > span:last-child > div, .lvl_text_3 > span:last-child > div{
		width:97.5%
	}
	.lvl_text_1 > span:last-child > div > span,.lvl_text_2 > span:last-child > div > span,.lvl_text_3 > span:last-child > div > span {
		background-color: #fff;
		width: 50%;
		height:4px;
		position: relative;
		left:3px;
		top:0px;
		display: inline-block;
		position: relative;
		border-radius: 4px;
		animation: 3s 1 normal neu-animation;
		animation-delay: 0s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}
	.lvl_text_2 > span:last-child > div > span{
		width: 50%;
		animation: 3s 1 normal per-animation;
	}
	.lvl_text_3 > span:last-child > div > span {
		width: 40%;
		animation: 3s 1 normal act-animation;
	}
	@keyframes neu-animation {
	0% {
		width:0%;	
	}
	100% {
		width: 60%;	
	}
	}
	@keyframes per-animation {
	0% {
		width:0%;	
	}
	100% {
		width: 50%;	
	}
	}
	@keyframes act-animation {
	0% {
		width:0%;	
	}
	100% {
		width: 40%;	
	}
	}
	.top_inf_accept{
		width:336px;
		display: flex;
		align-items: center;
		justify-content:center
	}
	.top_inf_accept > span {
		font-size: 15px;
		font-weight: 900;
		color: #ffff;
		position: relative;
		top:5px; 
	}
	.top_esp{
		width:348px;
		height: 52px;
		background: url('../../../../assets/assets/lagoNimue/mobile/conteAlineacionEspiritu.png') no-repeat top;
		background-size: auto ;
		display: flex;
	/* 	margin-top:12px; */
	}
	.top_esp_lvl {
		width: 12%;
		height: 46px;
		margin:auto;
		margin-left: 30px;;
		background: var(--background-image) no-repeat center;
		background-size: cover ;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		top:-2px;
		left:20px
	}
	.top_esp_lvl > span{
		color:var(--color);
		font-size: 12px;
		font-weight: 900;
		position: relative;
		top:1px;
		left:2px
	}
	.top_esp_text_bar{
		width: 80%;
		height:46px;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-right: 10px;
		
	}
	.top_esp_text_bar > span:first-child {
		color:var(--color);
		font-size: 12px;
		font-weight: 500;
	}
	.top_esp_text_bar > span:last-child {
		width: 78%;
		background: var(--background-image) no-repeat center;
		background-size: cover ;
		height:16px;
		margin-top: 5px;
		position: relative;
		left:10px;
	}
	.top_esp_text_bar > span:last-child > div{
		width: 98%;
	}
	.top_esp_text_bar > span:last-child > div > span{
		background-color: #fff;
		width: 75%;
		height:12px;
		position: relative;
		top: 2px;
		left:2px;
		display: inline-block;
		position: relative;
		border-radius: 14px;
		opacity: 0.7;
		animation: 3s 1 normal lvl-animation;
		animation-delay: 0s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}
	@keyframes lvl-animation {
	0% {
		width:0%;	
	}
	100% {
		width: 75%;	
	}
	}
	.container_all_body{
		width:347px;
		height:520px;
		margin: 0 auto;
		display: flex;
		background: url('../../../../assets/assets/lagoNimue/mobile/fondoCasoOpciones.png') no-repeat center;
		background-size: auto ;
		flex-direction:column;
		border-radius: 20px;
		/* padding-left:10px; */
		
	}
	.body_title {
		width:100%;
		height:76px;
		margin:20px 0px 0px -2px;
		background: url('../../../../assets/assets/lagoNimue/mobile/conteCaso.png') no-repeat center;
		background-size: auto ;
		display: flex;
		justify-content:center;
		align-items: center;
	}
	.body_title > div:first-child {
		width:60px;
		height:60px;
		margin: auto 5px ;
		background: url('../../../../assets/assets/lagoNimue/mobile/iconCaso.png') no-repeat center;
		background-size: auto ;
	}
	.body_title > div:nth-child(2) {
		width:5px;
		height:64px;
		margin: auto 10px auto 0px;
		background: url('../../../../assets/assets/lagoNimue/web/lineCaso.png') no-repeat center;
		background-size: auto ;
	}
	.body_title > span {
		width: 230px;
		font-size: 12px;
		color:#404040;
		position: relative;
		top:-20px
	}
	.body_cards {
		display:flex;
		width:98%;
		margin:0 auto;
		justify-content:center;
		align-items: center;
		flex-direction:column;
	}
	.body_cards_item {
		width: 310px ;
		height:98px;
		background: url('../../../../assets/assets/lagoNimue/mobile/btnOpcion.png') no-repeat center;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.body_cards_item:hover {
		background: url('../../../../assets/assets/lagoNimue/mobile/btnOpcionHover.png') no-repeat center;
		background-size: cover;
	}
	.body_cards_item:hover > span {
		color:#404040;
	}
	.body_cards_item > span {
		font-size:12px;
		color:#5C3C0F;
		width:85%;
		display: inline-block;
	}
</style>
