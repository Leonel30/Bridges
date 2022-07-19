<script>
	import infoWater from '../../../../assets/assets/lagoNimue/mobile/infoAgua.png';
	import infoEarth from '../../../../assets/assets/lagoNimue/mobile/infoTierra.png';
	import infoFire from '../../../../assets/assets/lagoNimue/mobile/infoFuego.png';
	import infoWind from '../../../../assets/assets/lagoNimue/mobile/infoAire.png';
	import littleBarWater from '../../../../assets/assets/lagoNimue/mobile/infoBarraAgua.png';
	import littleBarEarth from '../../../../assets/assets/lagoNimue/mobile/infoBarraTierra.png';
	import littleBarFire from '../../../../assets/assets/lagoNimue/mobile/infoBarraFuego.png';
	import littleBarWind from '../../../../assets/assets/lagoNimue/mobile/infoBarraAire.png';
	export let temp;
	let element= temp
	console.log(element)
	const getImgMyWorld=(element)=> {
		let src ={}
		if ( element === 'agua') {
			return src ={ 
					srcInfo :infoWater,
					srcLittleBar:littleBarWater,
					srcColor:'#5570bf'
			}
		} else if (element === 'tierra') {
			return  src ={ 
					srcInfo :infoEarth,
					srcLittleBar:littleBarEarth,
					srcColor:'#522e0a'
		}
		} else if (element === 'fuego') {
			return src ={ 
					srcInfo :infoFire,
					srcLittleBar:littleBarFire,
					srcColor: '#8f1209',
				}
		} else if (element === 'aire'){
			return src ={ 
					srcInfo :infoWind,
					srcLittleBar:littleBarWind,
					srcColor:'#186c5f'
				}
		}else {
			return src
		}
	}
	let savElement = getImgMyWorld(element)
	let srcInfo = savElement.srcInfo;
	let srcLittleBar = savElement.srcLittleBar;
	let srcColor = savElement.srcColor;
	$: info =`--background-image: url(${srcInfo})`;
	$: littleBar =`--background-image: url(${srcLittleBar})`;
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
						<span>Movilizar</span>
					</div>
				</div>
			</header>
			
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
	}
	.container_all_top{
		display:flex;
		margin: 0 auto;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		height:142px;
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
		animation: 3s 1 normal per-animation;
		width: 50%;
	}
	.lvl_text_3 > span:last-child > div > span{
		animation: 3s 1 normal act-animation;
		width: 40%;
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
</style>
