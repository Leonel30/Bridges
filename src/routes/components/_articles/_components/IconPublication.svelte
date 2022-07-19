<script>
    import aguaPubli from '../../../../assets/assets/article/PublicationImg/puntajeAgua@2x.png'
    import airePubli from '../../../../assets/assets/article/PublicationImg/puntajeAire@2x.png'
    import tierraPubli from '../../../../assets/assets/article/PublicationImg/puntajeTierra@2x.png'
    import fuegoPubli from '../../../../assets/assets/article/PublicationImg/puntajeFuego@2x.png'
    export let elemento
    export let vistas
    let element = elemento.toLowerCase()

    const getImgs = (element)=> {
		let src = {};
		if ( element == 'agua') {
			return src ={ 
					nameAvatar :'Agua',
					backDir: aguaPubli
                    
			}
		} else if (element == 'aire') {
			return  src ={ 
					nameAvatar :'Aire',
					backDir: airePubli
		}
		} else if (element == 'tierra') {
			return src ={ 
					nameAvatar :'Tierra',
					backDir:tierraPubli
				}
		} else if (element == 'fuego'){
			return src ={ 
					nameAvatar :'Fuego',
					backDir:fuegoPubli
				}
		}else {
			return src
		}
		}
    let savElement = getImgs(element)
	let backDirigido = savElement.backDir;
	let nameDirido = savElement.nameAvatar;
    $: vars =`--background-image: url(${backDirigido})`;
</script>
<main>
    <div class="container_bg" style="{vars}">
        <div class="container_views">
            <span>{vistas}</span>
        </div>
        <div>
            <span>{nameDirido}</span>
        </div>
    </div>
</main>

<style>
    .container_bg {
        width:65px;
        height:75px;
        background-image: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap:15px;
    }
    .container_bg span {
        display: inline-block;
        font-size: 12px;
        color : #404040; 
        font-weight: 500;
        font-family: 'Montserrat';
    }
    .container_views span {
        color: #ffff;
        font-weight: 900;
        font-size: 16px;
    }
    @media only screen and (max-width:1920px) and (min-width:1024px) {
        .container_bg {
            width:85px;
            height:100px;
            margin: 0 5px;
            background-image: var(--background-image);
            background-repeat: no-repeat;
            background-size: cover;
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap:20px;
        }
        .container_bg span {
            display: inline-block;
            font-size: 14px;
            color : #404040; 
            font-weight: 600;
            font-family: 'Montserrat';
            padding-bottom: 5px;
        }
        .container_views span {
            color: #ffff;
            font-weight: 900;
            font-size: 18px;
        }
    }
    @media only screen and (max-width:1023px) and (min-width:768px) {
        .container_bg {
            width:85px;
            height:100px;
            background-image: var(--background-image);
            background-repeat: no-repeat;
            background-size: cover;
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap:0px;
        }
        .container_bg span {
            display: inline-block;
            font-size: 14px;
            color : #404040; 
            font-weight: 500;
            font-family: 'Montserrat';
            padding-bottom: 5px;
        }
        .container_views span {
            color: #ffff;
            font-weight: 900;
            font-size: 18px;
            margin-bottom:20px;
        }
    }
</style>
