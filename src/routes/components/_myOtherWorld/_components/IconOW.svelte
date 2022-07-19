<script>
    import aguaDir from '../../../../assets/assets/otherWorld/web/rtaAgua.png'
    import aireDir from '../../../../assets/assets/otherWorld/web/rtaAire.png'
    import tierraDir from '../../../../assets/assets/otherWorld/web/rtaTierra.png'
    import fuegoDir from '../../../../assets/assets/otherWorld/web/rtaFuego.png'
    export let elemento
    let element = elemento.toLowerCase()
 
    const getImgs = (element)=> {
		let src = {};
		if ( element == 'agua') {
			return src ={ 
					nameAvatar :'Agua',
					backDir: aguaDir
			}
		} else if (element == 'aire') {
			return  src ={ 
					nameAvatar :'Aire',
					backDir: aireDir
		}
		} else if (element == 'tierra') {
			return src ={ 
					nameAvatar :'Tierra',
					backDir:tierraDir
				}
		} else if (element == 'fuego'){
			return src ={ 
					nameAvatar :'Fuego',
					backDir:fuegoDir
				}
		}else {
			return src
		}
		}
    let savElement = getImgs(element)
	let backDirigido = savElement.backDir;
	let nameDirido = savElement.nameAvatar;
    let checkSelect =false;
    $: vars =`--background-image: url(${backDirigido})`;
</script>
<main>
    <div class="container_bg" style="{vars}">
        <div on:click={() => checkSelect = !checkSelect} class={ checkSelect == true ? 'checkSelec' : 'container_bg_icon'}></div>
    </div>
</main>

<style>
    .container_bg {
        width:55px;
        height:55px;
        background-image: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
        display:flex;
        justify-content: center;
        align-items: center; 
    }
    .container_bg_icon {
        margin-top: -2px;
        width:44px;
        height:44px; 
        background-image: url('../../../../assets/assets/otherWorld/web/rtaNoSelec.png');
		background-repeat: no-repeat;
		background-size: cover;
        margin-right: 4px;
    }
    .container_bg_icon:hover {
        background-image: url('../../../../assets/assets/otherWorld/web/rtaHover.png');
    }
    .checkSelec {
        margin-top: -2px;
        width:44px;
        height:44px;
        background-image: url('../../../../assets/assets/otherWorld/web/rtaSelec.png');
        background-repeat: no-repeat;
		background-size: cover;
        margin-right: 3px;
    }
    @media only screen and (max-width: 1023px){
        .container_bg {
            width:39px;
            height:39px;
            background-image: var(--background-image);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            display:flex;
            justify-content: center;
            align-items: center; 
        }
        .container_bg_icon {
            margin-top: -2px;
            width:30px;
            height:30px; 
            background-image: url('../../../../assets/assets/otherWorld/web/rtaNoSelec.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-right: 4px;
            column-gap:10px;
        }
        .container_bg_icon:hover {
            background-image: url('../../../../assets/assets/otherWorld/web/rtaHover.png');
        }
        .checkSelec {
            margin-top: -2px;
            width:30px;
            height:30px;
            background-image: url('../../../../assets/assets/otherWorld/web/rtaSelec.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-right: 3px;
        }

    }
</style>

<!-- markup (zero or more items) goes here -->