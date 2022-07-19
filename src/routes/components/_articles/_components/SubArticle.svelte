<script>
	import Agua from '../../../../assets/assets/article/agua.png';
	import Aire from '../../../../assets/assets/article/aire.png';
	import Tierra from '../../../../assets/assets/article/tierra.png';
	import Fuego from '../../../../assets/assets/article/fuego.png';
	import ArticuloAgua from '../../../../assets/assets/article/articuloAgua.png';
	import ArticuloAire from '../../../../assets/assets/article/articuloAire.png';
	import ArticuloTierra from '../../../../assets/assets/article/articuloTierra.png';
	import ArticuloFuego from '../../../../assets/assets/article/articuloFuego.png';
	import iconCam from '../../../../assets/assets/article/iconVideo.png';
	import iconUrl from '../../../../assets/assets/article/iconLink.png';
	import iconImg from '../../../../assets/assets/article/iconImagen.png';
	import iconAudio from '../../../../assets/assets/article/iconAudio.png';
	export let icon, iconType,elemento,locked,articlesBlocked,articles,publication;
	let iconTyp = iconType.toLowerCase()
	let element = elemento
	const getImgs = (element)=> {
		let src = {};
		if ( element === 0) {
			return src ={ 
					srcAvatar :Agua,
					srcBackText:ArticuloAgua
			}
		} else if (element === 3) {
			return  src ={ 
					srcAvatar :Aire,
					srcBackText:ArticuloAire
		}
		} else if (element === 1) {
			return src ={ 
					srcAvatar :Tierra,
					srcBackText:ArticuloTierra
				}
		} else if (element === 2){
			return src ={ 
					srcAvatar :Fuego,
					srcBackText:ArticuloFuego
				}
		}else {
			return src
		}
	}
	const getIcon = (iconTyp)=> {
		let icon = iconTyp == 'cam'
		? iconCam
		: iconTyp  == 'audio'
		? iconAudio
		: iconTyp === 'url'
		? iconUrl
		: iconTyp === 'img'
		? iconImg
		: ""
		return icon
	}
	let savElement = getImgs(element)
	let savIcon = getIcon(iconTyp)
	let srcBack = savElement.srcBackText;
	let srcAvatar = savElement.srcAvatar;
	$: vars =`--background-image: url(${srcBack})`;
</script>

<div class="show_items">
	{#if !locked}
		{#each articles as item}
			<main class="container" style="{vars}" on:click={()=> publication = 'showSubText'}>
				<div class="container_article" >
					<div class="container_img">
						<img src={srcAvatar} alt="AvatarImg" />
					</div>
					<div class="container_text">
						<span>{item.titles}</span>
						<p>{item.text}</p>
					</div>
				</div>
				{#if icon}
					<div class="container_img_cam">
						<img src={savIcon} alt="iconRed" />
					</div>
				{/if}
			</main>
		{/each}
	{/if}
	{#if locked}
		{#each articlesBlocked as itemBlock}
			<main class="container_locked">
				<div class="container_text_locked">
					<h5>{itemBlock.titleBlock}</h5>
					<p>{itemBlock.bodyBlock}</p>
				</div>
			</main>
		{/each}
	{/if}
	
</div>

<style>
	.container {
		width: 336px;
		height: 65px;
		margin: 10px auto;
		background-image: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
		background-color: transparent;
	}
	.container:hover{
		cursor: pointer;
	}
	.container_article {
		width: 336px;
		height: 65px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
	}
	.container_img {
		width: 20%;
	
	}
	.container_img img {
		width: 50px;
		height: 50px;
		object-fit: contain;
		position:relative;
		top:3px;
		left:14px;
	}
	.container_text {
		width: 75%;
		color: #404040;
		font-weight: 500;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content:center;
		margin-top:20px;
	}
	.container_text p {
		display: inline-block;
		color: #404040;
		font-size: 12px;
	}
	.container_img_cam {
		position: relative;
		margin-left: 90.5%;
		top: -63px;
	}
	.container_img_cam img {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
	.container_locked {
		width: 336px;
		height: 65px;
		margin: 10px auto;
		background-image: url('../../../../assets/assets/article/articuloBlock.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.container_text_locked {
		width: 70%;
		padding-left: 25%;
		padding-top: 0.5%;
		display: flex;
		flex-direction: column;
		color: #ffff;
		font-family: 'Montserrat';
		font-size: 12px;
		font-weight: 500;
	}
	.container_text_locked h5 {
		display: inline-block;
		padding: 10px 0;
		margin: 0;
		font-size: 12px;
	}
	.container_text_locked p {
		display: inline-block;
		padding: 0;
		margin: 0;
		color: #ffffff;
		font-size: 12px;
	}
	@media only screen and (max-width:1920px) and (min-width:1024px){
		.container {
			width: 100%;
			height: 82px;
			transition: 0.2s ease;
		}
		.container:hover {
			transform: scale(1.05);
		}
		.container_article {
			width: 400px;
			display: flex;
		}
		.container_img img {
			width: 60px;
			height: 60px;
			position: relative;
			top: 10px;
			left:16px;
			object-fit: contain;
		}
		.container_img_cam {
			margin-left: 91.5%;
			top:-62px;
	
		}
		.container_text span {
			margin: 0px 0;
		}
		.container_text p {
			margin: 4px 0;
		}
		.container_locked {
			width: 400px;
			height: 82px;
			display: flex;
			margin: 10px 0 0 0;
		}
		.container_text_locked {
			width: 70%;
			padding-left: 25%;
			padding-top: 0.5%;
			font-size: 14px;
		}
		.container_locked {
			transition: 0.2s ease;
		}
		.container_locked:hover {
			transform: scale(1.05)
		}
		.container_text_locked p {
			font-size: 13px;
		}
	}	
	@media only screen and (max-width:1023px) and (min-width:768px){ 
		.container {
			width: 50%;
			height: 82px;
			transition: 0.2s ease;
		}
		.container_article {
			width: 400px;
		}
		.container_img img {
			width: 60px;
			height: 60px;
			padding:10px 0 0 0px;
			
		}
		.container_img_cam {
			margin-left: 91.5%;
		}
		.container_text span {
			margin: 0px 0;
		}
		.container_locked {
			width: 400px;
			height: 82px;
			display: flex;
			margin: 10px 0 0 0;
		}
		.container_text_locked {
			width: 70%;
			padding-left: 25%;
			padding-top: 0.5%;
			font-size: 14px;
		}
	}		
</style>
