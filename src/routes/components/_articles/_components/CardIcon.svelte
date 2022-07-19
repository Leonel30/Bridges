<script>
    import aguaDir from '../../../../assets/assets/article/CreaImg/dirigidoAgua.png'
    import aireDir from '../../../../assets/assets/article/CreaImg/dirigidoAire.png'
    import tierraDir from '../../../../assets/assets/article/CreaImg/dirigidoTierra.png'
    import fuegoDir from '../../../../assets/assets/article/CreaImg/dirigidoFuego.png'
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
        <div>
            <span>{nameDirido}</span>
        </div>
    </div>
</main>

<style>
    .container_bg {
        width:65px;
        height:65px;
        background-image: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container_bg_icon {
        margin-top: 3px;
        width:45px;
        height:45px;
        background-image: url('../../../../assets/assets/article/CreaImg/btnCheck.png');
		background-repeat: no-repeat;
		background-size: cover;
        margin-right: 2px;
    }
    .checkSelec {
        margin-top: 3px;
        width:45px;
        height:45px;
        background-image: url('../../../../assets/assets/article/CreaImg/btnCheckSelec.png');
        background-repeat: no-repeat;
		background-size: cover;
        margin-right: 2px;
    }
    .container_bg_icon:hover {
        background-image: url('../../../../assets/assets/article/CreaImg/btnCheckHover.png'); 
    }
    .container_bg span {
        display: inline-block;
        font-size: 12px;
        color : #646F6F; 
        font-weight: 700;
        font-family: 'Montserrat';
        padding-bottom: 5px;
    }
    @media only screen and (max-width:1365px) and (min-width:1280px) {
        .container_bg span {
            font-size: 14px;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->