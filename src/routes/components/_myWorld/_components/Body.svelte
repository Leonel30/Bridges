<script>
	import { fly } from 'svelte/transition';
	import infoWater from '../../../../assets/assets/lagoNimue/web/infoAgua.png';
	import infoEarth from '../../../../assets/assets/lagoNimue/web/infoTierra.png';
	import infoFire from '../../../../assets/assets/lagoNimue/web/infoFuego.png';
	import infoWind from '../../../../assets/assets/lagoNimue/web/infoAire.png';
	import levelWater from '../../../../assets/assets/lagoNimue/web/porcentajeAgua.png';
	import levelEarth from '../../../../assets/assets/lagoNimue/web/porcentajeTierra.png';
	import levelFire from '../../../../assets/assets/lagoNimue/web/porcentajeFuego.png';
	import levelWind from '../../../../assets/assets/lagoNimue/web/porcentajeAire.png';
	import littleBarWater from '../../../../assets/assets/lagoNimue/web/infoBarraAgua.png';
	import littleBarEarth from '../../../../assets/assets/lagoNimue/web/infoBarraTierra.png';
	import littleBarFire from '../../../../assets/assets/lagoNimue/web/infoBarraFuego.png';
	import littleBarWind from '../../../../assets/assets/lagoNimue/web/infoBarraAire.png';
	import bigBarWater from '../../../../assets/assets/lagoNimue/web/barraAgua.png';
	import bigBarEarth from '../../../../assets/assets/lagoNimue/web/barraTierra.png';
	import bigBarFire from '../../../../assets/assets/lagoNimue/web/barraFuego.png';
	import bigBarWind from '../../../../assets/assets/lagoNimue/web/barraAire.png';
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
						<div in:fly={ {y: 200, duration: 2700, delay: 300}} class="body_cards_item">
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
	.contBotton > .container {
		width: 1000px;
		max-width: 1000px;
		height: 497px;
	}
	.container_all {
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.container_all_top{
		width:1000px;
		display:flex;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		height:114px;
	}
	.top_info{
		width:637px;
		height: 116px;
		background: var(--background-image) no-repeat top;
		background-size: auto ;
		display: flex;
	}
	.top_info_lvl{
		width:60%;
		height:80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.lvl_text_1,.lvl_text_2,.lvl_text_3{
		height:25%;
		font-size: 16px;
		display: flex;
		width: 90%;
		justify-content: center;
		align-items: center;
		
	}
	.lvl_text_1 > span:first-child,.lvl_text_2 > span:first-child,.lvl_text_3 > span:first-child {
		font-size: 16px ;
		color:#2C3B6E;
		color:var(--color);
		font-weight: 600;
		width: 30%;
		
	}
	.lvl_text_1 > span:last-child,.lvl_text_2 > span:last-child,.lvl_text_3 > span:last-child {
		width: 70%;
		background: var(--background-image) no-repeat top;
		background-size: cover ;
		height:25px;
		position: relative;
		right:20px;
		top:5px
	}
	.lvl_text_1 > span:last-child > div, .lvl_text_2 > span:last-child > div, .lvl_text_3 > span:last-child > div{
		width:90.5%
	}
	.lvl_text_1 > span:last-child > div > span,.lvl_text_2 > span:last-child > div > span,.lvl_text_3 > span:last-child > div > span {
		background-color: #fff;
		width: 60%;
		height:4px;
		position: relative;
		left:12px;
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
		width:40%;
		display: flex;
		align-items: center;
		justify-content:center
	}
	.top_inf_accept > span {
		font-size: 25px;
		font-weight: 900;
		color: #ffff;
		position: relative;
		left:-20px;
		top:-5px;
	}
	.top_esp{
		width:348px;
		height: 115px;
		background: url('../../../../assets/assets/lagoNimue/web/conteAlineacionEspiritu.png') no-repeat top;
		background-size: auto ;
		display: flex;
	}
	.top_esp_lvl {
		width: 17%;
		height: 65px;
		margin:auto;
		margin-left: 20px;;
		background: var(--background-image) no-repeat center;
		background-size: cover ;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		top:-5px;
	}
	.top_esp_lvl > span{
		color:var(--color);
		font-size: 16px;
		font-weight: 900;
		position: relative;
		top:1px;
		left:2px
	}
	.top_esp_text_bar{
		width: 80%;
		height:116px;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-right: 10px;
		
	}
	.top_esp_text_bar > span:first-child {
		color:#2C3B6E;
		color:var(--color);
		font-size: 16px;
		font-weight: 500;
	}
	.top_esp_text_bar > span:last-child {
		width: 91%;
		background: var(--background-image) no-repeat center;
		background-size: cover ;
		height:16px;
		margin-top: 5px;
		position: relative;
		left:5px;
	}
	.top_esp_text_bar > span:last-child > div{
		width: 75%;
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
	.top_esp_text_bar > span:last-child > div > span{
		background-color: #fff;
		width: 100%;
		height:12px;
		position: relative;
		top: 2px;
		left:2px;
		display: inline-block;
		position: relative;
		border-radius: 14px;
		opacity: 0.7;
	}
	.container_all_body{
		width:985px;
		margin: 0 auto;
		display: flex;
		height:351px;
		background: url('../../../../assets/assets/lagoNimue/web/fondoConteCaso.png') no-repeat center;
		background-size: auto ;
		margin-left: 10px;
		flex-direction:column
	}
	.body_title {
		width:80%;
		height:100px;
		margin:20px auto 0px;
		background: url('../../../../assets/assets/lagoNimue/web/conteCaso.png') no-repeat center;
		background-size: auto ;
		display: flex;
		justify-content:center;
		align-items: center;
	}
	.body_title > div:first-child {
		width:72px;
		height:72px;
		margin: auto 20px;
		background: url('../../../../assets/assets/lagoNimue/web/iconCaso.png') no-repeat center;
		background-size: auto ;
	}
	.body_title > div:nth-child(2) {
		width:5px;
		height:72px;
		margin: auto 10px auto 0px;
		background: url('../../../../assets/assets/lagoNimue/web/lineCaso.png') no-repeat center;
		background-size: auto ;
	}
	.body_title > span {
		width: 716px;
		font-size: 16px;
		color:#404040;
		position: relative;
		top:-20px
	}
	.body_cards {
		display:flex;
		width:98%;
		height:200px;
		margin:0 auto;
		justify-content:center;
		align-items: center;
	}
	.body_cards_item {
		width: 236px ;
		height:205px;
		background: url('../../../../assets/assets/lagoNimue/web/btnOpion.png') no-repeat center;
		background-size: cover;
	}
	.body_cards_item:hover {
		background: url('../../../../assets/assets/lagoNimue/web/btnOpcionHover.png') no-repeat center;
		background-size: cover;
	}
	.body_cards_item:hover > span {
		color:#404040;
	}
	.body_cards_item > span {
		font-size:16px;
		color:#5C3C0F;
		padding:20px;
		padding-top: 40px;
		display: inline-block;
	}
	@media only screen and (max-width: 414px){

	}
	
	
</style>
