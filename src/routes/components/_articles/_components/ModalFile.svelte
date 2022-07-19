<script>
    import text from '../../../../assets/assets/article/ModalFilesImg/iconTextoPop.png';
    import btnGaleria from '../../../../assets/assets/article/ModalFilesImg/btnGaleria@2x.png';
    import btnCamara from '../../../../assets/assets/article/ModalFilesImg/btnCamara.png';
    import btnMicrofono from '../../../../assets/assets/article/ModalFilesImg/btnMicrofono@2x.png';
    import btnMusica from '../../../../assets/assets/article/ModalFilesImg/btnMusic.png';
    import btnGaleriaH from '../../../../assets/assets/article/web/Modal/btnGaleriaHover.png';
    import btnCamaraH from '../../../../assets/assets/article/web/Modal/btnCamaraHover.png';
    import btnMicrofonoH from '../../../../assets/assets/article/web/Modal/btnMicrofonoHover.png';
    import btnMusicaH from '../../../../assets/assets/article/web/Modal/btnGaleriaAudiohover.png';
    import fadeScale from '../../../../lib/FadeScale.js';
    import { cubicInOut } from 'svelte/easing';
    export let typeFile,modalFile;
   /* showFile, showBody ,currentIcon */
    console.log(typeFile)
    const getImgs = (type)=> {
		let src = {};
		if ( type == 'image') {
			return src ={ 
					name:'IMAGEN',
					btnLeft: btnGaleria,
                    btnRight : btnCamara,
                    btnLeftH: btnGaleriaH,
                    btnRightH : btnCamaraH,
                    textLeft : 'Galería',
                    textRight : 'Cámara',
                    placeHolder : "Tips:\nAcompaña tu imagen con un breve texto no mayor a 100 caracteres."
			}
		} else if (type == 'video') {
			return  src ={ 
                    name:'VIDEO',
					btnLeft: btnGaleria,
                    btnRight : btnCamara,
                    btnLeftH: btnGaleriaH,
                    btnRightH : btnCamaraH,
                    textLeft : 'Galería',
                    textRight : 'Cámara',
                    placeHolder : "Tips:\nAcompaña tu video con un breve texto no mayor a 100 caracteres."
		    }
		} else if (type == 'audio') {
			return src ={ 
                    name:'AUDIO',
					btnLeft: btnMicrofono,
                    btnRight : btnMusica,
                    btnLeftH: btnMicrofonoH,
                    btnRightH : btnMusicaH,
                    textLeft : 'Micrófono',
                    textRight : 'Galería',
                    placeHolder : "Tips:\nAcompaña tu nota con un breve texto no mayor a 100 caracteres."
				}
		}else if (type == 'url') {
			return src ={ 
                    name:'ENLACE',
                    placeHolder : "Tips:\nAcompaña tu enlace con un breve texto no mayor a 100 caracteres."
				}
		}else if (type == 'texto') {
			return src ={ 
                    name:'TEXTO',
                    placeHolder : "Tips:\nAcompaña tu enlace con un breve texto no mayor a 100 caracteres."
				}
		}else {
			return src
		}
	}
    let savFile = getImgs(typeFile)
	let srcBackL = savFile.btnLeft;
    let srcBackR = savFile.btnRight;
    let srcBackLh = savFile.btnLeftH;
    let srcBackRh = savFile.btnRightH;
	$: varsL =`--background-image: url(${srcBackL})`;
    $: varsR =`--background-image: url(${srcBackR})`;

    const changeIcon = (action)=>{
        varsL = action === 'enterL'? `--background-image: url(${srcBackLh})` :`--background-image: url(${srcBackL})`
        varsR = action === 'enterR' ? `--background-image: url(${srcBackRh})` :`--background-image: url(${srcBackR})`
    }
</script>
<main class="modalFiles" transition:fadeScale={{ delay:0, duration: 800, easing: cubicInOut, baseScale: 0.1 }}>
    <div class="container_modal_files">
        <div class="container_body">
            <div class="container_body_top">
                <button on:click={()=> modalFile =false }></button>
                <span>{savFile.name}</span>
            </div>
            {#if typeFile ==='image' || typeFile ==='video' || typeFile ==='audio'} 
                    <div class="container_body_web">
                        <div class="container_body_bigIcons">
                                <button 
                                class="bigIcons_l" 
                                style="{varsL}"
                                on:mouseenter={() => changeIcon('enterL')}
						        on:mouseleave={() => changeIcon('leaveL')}
                                >
                                <span>{savFile.textLeft}</span></button>
                                <button 
                                class="bigIcons_r" 
                                style="{varsR}"
                                on:mouseenter={() => changeIcon('enterR')}
						        on:mouseleave={() => changeIcon('leaveR')}
                                ><span>{savFile.textRight}</span></button>
                        </div>
                        <div class="container_body_text">
                            <form action="">
                                <div class="text_zone">
                                    <div class="body_icon"> <img src="{text}" alt="iconText"> </div>
                                        <textarea id="textArea" name="text" maxlength="135"
                                        >{savFile.placeHolder}
                                        </textarea>
                                    <div class="body_count_charac"> <span>0/100</span></div>
                                </div>
                                    <button type="button" class="btn"><span>Aceptar</span></button>
                            </form>
                        </div>
                    </div>
                {:else if typeFile ==='url'} 
                    <form class="form_url">
                        <div class="container_body_url">
                                <p>Copia tu enlace en el siguiente campo:</p>
                                <input type="url" placeholder="https://">     
                        </div>
                        <div class="container_body_text_url">
                                <div class="text_zone_url">
                                    <div class="body_icon_url"> <img src="{text}" alt="iconText"> </div>
                                    <textArea
                                    placeholder="Add text"
                                    id="textArea_url"
                                    name="text">{savFile.placeHolder}
                                    </textArea>
                                    <div class="body_count_charac_url"> <span>0/100</span></div>
                                </div>
                                <button type="button" class="btn_web_url"><span>Aceptar</span></button> 
                        </div>
                        <button type="button" class="btn_url"><span>Aceptar</span></button> 
                    </form>
                {:else if typeFile ==='texto'}
                <div class="container_body_text_t">
                    <form action="" class="form_text">
                        <p>Escriba una nota que no supere los 300 caracteres en el siguiente campo:</p>
                        <div class="text_zone_t">
                                <textarea id="textArea_t" name="text">
                                </textarea>
                                <div class="body_count_charac_t"> <span>0/300</span></div>
                        </div>
                        <button type="button" class="btn_t"><span>Aceptar</span></button>
                    </form>
                </div>
            {/if} 
        </div>
    </div>
</main>

<style>
    .modalFiles {
		display: flex;
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		z-index: 1;
		}
    .container_modal_files {
        width: 85vw;
        height:80vh;
    }
    .container_body {
        width:318px;
        height:427px;
        position: relative;
        top: 6%;
        margin:0 auto;
        padding-top: 10%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/fondoPop.png');
		background-repeat: no-repeat;
		background-size:contain;
        z-index: 0;
    }
    .container_body_top{
        width:100%;
        margin: 0 auto;
        height:25px;
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top: 5%;
    }
    .container_body_top button {
        width:40px;
        height:40px;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnBack.png');
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        border: none;
        position: absolute;
        margin-right: 80%;
        border-radius: 18px;
    }
    .container_body_top button:hover {
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnBackHover.png');
    }
    .container_body_top span {
        color: #404040;
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 19px;  
    }
    .container_body_bigIcons {
        width:266px;
        height: 100px;
        margin: 30px auto 10px auto;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/fondoPopArchivos.png');
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 20px;
    }
    .bigIcons_l,.bigIcons_r {
        width:80px;
        height: 77px;
        padding:0;
        background-image: var(--background-image);
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        background-color: transparent;
        border: none;
        border-radius: 5px;
    }
    .bigIcons_l:hover , .bigIcons_r:hover {
        width:70px;
        height: 77px;
    }
    .bigIcons_r{
        background-image: var(--background-image);
    }
    .bigIcons_l:hover > span , .bigIcons_r:hover > span {
        color: #646F6F;
        font-weight: bold;
    }
    .container_body_bigIcons span {
        display: inline-block;
        color: #FFFFFF;
        font-size: 12px;
        font-family: 'Montserrat';
        font-weight: 500;
        padding-top: 53%;
    }
    .container_body_text {
        width: 274px;
        height:200px;
        margin: 0 auto;
        display: flex;
    }
    .text_zone {
        width: 274px;
        height: 135px;
        margin: 0px auto;
        display: flex;
        flex-wrap: wrap;
        column-gap: 8%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/conteTextoPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
    }
    .body_icon {
        width: 10%;
    }
    .body_icon  img {
        width:23px;
        height: 23px;
        margin-top: 8px;
        margin-left: 15px;
    }
    #textArea {
        max-width: 75%;
        min-width:75%; 
        min-height: 85px; 
        max-height: 85px;
        padding-top: 10px;
        background-color: transparent;
        border: none;
        color: #404040;
        font-family: 'Montserrat';
        font-size: 12px;
    }
    .body_count_charac {
        width:90px;
        height:23px;
        margin-left: 69%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        position: relative;
        top:10px;
    }
    .body_count_charac span {
        font-family: 'Montserrat';
        color: #FFFFFF;
        font-size: 10pt;
        font-weight: 600;
        padding-left: 25%;
    }
    .btn {
        width:174px;
        height:44px;
        margin: 15px auto 0;
        padding:0;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnAceptar.png'); 
        background-color: transparent;
        background-repeat: no-repeat;
		background-size: auto;
        background-position: center;
        border: none;
        border-radius:10px;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .btn span {
        color: #5C3C0F ;
        font-weight:bold;
        font-family: 'Montserrat';
        font-size: 12px;
        padding-bottom: 5px;
    }
    .btn:hover,.btn_url:hover,.btn_t:hover {
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnAceptarHover.png');
        color: #ffff ;
        width:184px;
    }
    .btn:hover > span, .btn_url:hover > span, .btn_t:hover > span {
        color: #ffff ;
    }
    /* Css URL */
    .container_body_url  {
        width:270px;
        height: 100px;
        margin: 30px auto 10px auto;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/fondoPopArchivos.png');
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container_body_url  p {
        display: inline-block;
        color: #404040;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
    }
    .container_body_url  input {
        width: 220px;
        height:22px;
        margin: 0 auto;
        padding: 0 0 0 10px;
        background-color: transparent;
        border: none;
        color:#646F6F;
        font-size: 12px;
        font-style: italic;
        font-weight: bold;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/campoLinkPop.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .container_body_text_url {
        width:274px;
        height:200px;
        margin: 0 auto;
        display: flex;
    }
    .text_zone_url {
        width: 100%;
        height: 135px;
        margin: 0px auto;
        display: flex;
        flex-wrap: wrap;
        column-gap: 8%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/conteTextoPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
    }.body_icon_url {
        width: 10%;
    }
    .body_icon_url  img {
        width:23px;
        height: 23px;
        margin-top: 8px;
        margin-left: 15px;
    }
    #textArea_url {
        max-width: 75%;
        min-width:75%;
        min-height: 85px;
        max-height: 85px;
        padding-top: 10px;
        background-color: transparent;
        border:none;
        color: #404040;
        font-size: 12px;
        font-family: 'Montserrat';
    }
    .body_count_charac_url {
        width:90px;
        height:23px;
        margin-left: 69%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
        position: relative;
        top:10px;
    }
    .body_count_charac_url span {
        font-family: 'Montserrat';
        color: #FFFFFF;
        font-size: 10pt;
        font-weight: 600;
        padding-left: 25%;
    }
    .btn_url {
        width:174px;
        height:44px;
        margin: 0 auto 0;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnAceptar.png');
        background-color: transparent;
        background-repeat: no-repeat;
		background-size: auto;
        background-position: center;
        border: none;
        border-radius:10px;
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top:-50px
    }
    .btn_url span {
        color: #5C3C0F ;
        font-family: 'Montserrat';
        font-weight:bold;
        font-size: 12px;
        padding-bottom: 5px;
    }
    .btn_web_url {
        display:none
    }
    /*CSS TEXT */ 
    .container_body_text_t {
        width:266px;
        height:244px;
        margin: 30px auto;
        display: flex;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/fondoTextoPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
    }
    .container_body_text_t p {
        color:#404040;
        font-family: 'Montserrat';
        font-weight: 300;
        font-size: 12px;
        text-align: center;
    }
    .text_zone_t {
        width: 250px;
        height: 180px;
        margin: 0px auto;
        display: flex;
        flex-wrap: wrap;
        gap: 5%; 
        background-image: url('../../../../assets/assets/article/ModalFilesImg/campoTextoPop.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
    }
    #textArea_t {
        max-width: 95%;
        min-width:95%;
        min-height: 145px;
        max-height: 145px;
        background-color: transparent;
        border: none;
        color: #404040;
        font-size: 12px;
    }
    .body_count_charac_t {
        width:90px;
        height:23px;
        margin-left: 69%;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresClaro@2x.png'); 
        background-repeat: no-repeat;
		background-size: cover;
        background-position: center;
    }
    .body_count_charac_t span {
        font-family: 'Montserrat';
        color: #646F6F;
        font-size: 10pt;
        font-weight: 600;
        padding-left: 20%;
    }
    .btn_t {
        width:174px;
        height:44px;
        margin: 22px auto 0;
        background-image: url('../../../../assets/assets/article/ModalFilesImg/btnAceptar.png');
        background-color: transparent;
        background-repeat: no-repeat;
		background-size: auto;
        padding:0;
        background-position: center;
        border: none;
        border-radius:10px;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .btn_t span {
        color: #5C3C0F ;
        font-family: 'Montserrat';
        font-weight:bold;
        padding-bottom: 5px;
        font-size: 12px;
    }
    @media only screen and (max-width:1920px) and (min-width:1024px) {
        .container_modal_files {
            width: 694px;
            height:410px;
        }
        .container_body {
            width:694px;
            height:408px;
            position: relative;
            background-image: url('../../../../assets/assets/article/web/Modal/fondoBancoCreaPop.png');
            background-size: cover;
            background-position: top;
            top: 0%;
            margin:0;
            padding: 0%;
        }
        .container_body_top{
            width:100%;
            height:85px;
            display:flex;
            justify-content: center;
            align-items: center;
            padding-top: 0%;
            padding-left: 0%; 
        }
        .container_body_top button {
            position: absolute;
            margin-right: 86%;
            width:62.3px;
            height:62.3px;
            background-color: transparent; 
            border-radius: 20px;
            padding:0
        }
        .container_body_top span {
            font-size: 25px;  
        }
        .container_body_bigIcons {
            width:135px;
            height: 266px;
            margin: 29px 39px 28px 43.25px;
            background-image: url('../../../../assets/assets/article/web/Modal/fondoArchivosPopCrea.png');
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            gap: 10px;
        }
        .bigIcons_l, .bigIcons_r {
            width:100px;
            height: 100px;
        }
        .bigIcons_l:hover, .bigIcons_r:hover {
            height: 90px;
            width:85px;
        }
        .bigIcons_l:hover > span , .bigIcons_r:hover > span {
            color:#646F6F;
            font-weight: bold;
        }

        .container_body_text {
            width:478px;
            height:320px; 
            margin: 0;
            padding:0;
            display: flex;
            
        }
        .text_zone {
            width: 434px; 
            height: 190px;
            margin: 32px auto 0;
            margin-left: 0%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            column-gap: 5%;
            background-image: url('../../../../assets/assets/article/web/Modal/textoPopCrea.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .body_icon {
            width: 10%;
            }
        .body_icon  img {
            width:23px;
            height: 23px;
            margin-top: 8px;
            margin-left: 15px;
        }
        #textArea {
            max-width: 360px; 
            min-width:360px;
            min-height: 165px;
            max-height: 165px;
            background-color: transparent;
            border: none;
            color: #404040;
            font-size: 16px;
            margin-left: 0px;
            position: relative;
            top: 10px; 
        }
        .body_count_charac {
            width:87px;
            height:23px;
            margin-left: 0;
            background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresPop.png'); 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            top: -8px;
            left:350px
        }
        .body_count_charac span {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 600;
            padding-left: 25%;
        }
        .btn {
            width:241px;
            height:73px;
            margin: 15px auto; /* tres */
            padding: 0;
            background-image: url('../../../../assets/assets/article/web/Modal/btnAcep.png'); 
            background-color: transparent;
            background-size: auto;
        }
        .btn span {
            display: inline-block;
            font-size: 16px;
            text-align: center;
        }
        /* Css url */
        .container_body_url {
            width:207.5px;
            height: 193px;
            margin: 29px 12.5px auto 19.75px ;
            background-image: url('../../../../assets/assets/article/web/Crea/fondoLinkPopCrea.png');
            display: flex;
            box-shadow: 0px 3px 4px #00000029;
            border-radius: 10px;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            gap: 15px;
        }
        .container_body_url p{
            font-size: 14px;
            font-weight: 300;
        }
        .container_body_url  input {
            width: 90%;
            height:26px;
            margin: 0 auto;
            padding-left: 10px;
            background-image: url('../../../../assets/assets/article/web/Crea/campoLinkPopCrea.png');
        }
        .container_body_text_url {
            width:434px;
            height:323px;
            margin:32px 0 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items:flex-start;
        }
        .text_zone_url {
            width: 434px;
            height: 190px;
            margin: 0px auto;
            margin-left: 0%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            column-gap: 5%;
            background-image: url('../../../../assets/assets/article/web/Modal/textoPopCrea.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .body_icon_url {
            width: 10%;
        }
        
        .body_icon_url  img {
            width:23px;
            height: 23px;
            margin-top: 8px;
            margin-left: 15px;
        }
        #textArea_url {
            max-width: 375px;
            min-width:375px;
            min-height: 160px;
            max-height: 160px;
            background-color: transparent;
            border: none;
            color: #404040;
            font-size: 16px;
            margin-left: 50px;
            position: relative;
            top: -32px;
        }
        .body_count_charac_url {
            width:90px;
            height:23px;
            margin-left: 0%;
            background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresPop.png'); 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            top:-37px;
            left:348px
        }
        .body_count_charac_url span {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 600;
            padding-left: 25%;
        }
        .btn_url {
            display:none;
        }
        .btn_web_url {
            display:block;
            width:241px;
            height:73px;
            background-image: url('../../../../assets/assets/article/web/Modal/btnAcep.png'); 
            background-repeat: no-repeat;
            background-size: auto;
            background-position: center;
            background-color: transparent;
            border: none;
            border-radius:10px;
            position:relative;
            padding: 0px;
            top:7px;
            left:-10px
        }
        .btn_web_url span {
            color: #5C3C0F ;
            font-family: 'Montserrat';
            font-weight:bold;
            font-size: 16px;
        }
        .form_url { 
            width:100%;
            margin: 0;
            display:flex;
        }  
        /*  CSS TEXT*/
        .container_body_text_t {
            width:548px;
            height:193px;
            margin: 32px auto 0;
            background-image: url('../../../../assets/assets/article/web/Modal/fondoCtextoCreaPop.png'); 
            box-shadow: 0px 3px 4px #00000029;
            border-radius: 10px;
            display: flex;
        }
        .container_body_text_t p {
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 16px;
            text-align: center;
            margin: 12px 70px;
        }
        .form_text{
            width:548px;
            height:193px;
        }
        .text_zone_t {
            width: 531px;
            height: 127px;
            margin: 0px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            column-gap: 5%;
            background-image: url('../../../../assets/assets/article/web/Modal/fondoOtextoCreaPop.png'); 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        #textArea_t {
            max-width:95%;
            min-width:95%;
            min-height: 90%;
            max-height: 90%;
            background-color: transparent;
            border: none;
            color: #404040;
            font-size: 16px;
            margin-left: 0px;
            position: relative;
            top: 10px;
        }
        .body_count_charac_t {
            width:87px;
            height:23px;
            background-image: url('../../../../assets/assets/article/ModalFilesImg/conteCaracteresPop.png'); 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            top: -12px;
            left: 52px;
        }
        .body_count_charac_t span {
            font-family: 'Montserrat';
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 600;
            padding-left: 25%;
        }
        .btn_t {
            width:241px;
            height:73px;
            margin: 15px auto; 
            background-image: url('../../../../assets/assets/article/web/Modal/btnAcep.png'); 
            background-color: transparent;
            background-size: auto;
            padding:0;
        }
        .btn_t span {
            font-size: 16px;
        }
        .container_body_web {
            height:323px;
            display:flex
        }
        .btn:hover,.btn_web_url:hover,.btn_t:hover {
            background-image: url('../../../../assets/assets/article/web/Modal/btnAcepHover.png');
            width: 246px; 
            height: 78px;
        }
        .btn_web_url:hover > span{
            color: #ffff ;
        }
    }

    @media only screen and (max-width:1023px) and (min-width:768px){
        .container_modal_files {
            width: 55vw;
            height:83vh;
        }
        .container_body_top button {
            margin:0px;
            padding:0px;
            left:20px;
            top:64px;
        }
        .container_body {
            width:100%;
            height:520px;
            position: relative;
            top: 6%;
            margin:0 auto 0 0%;
            padding-top: 10%;
        }
        .container_body_top{
            width:100%;
            height:25px;
            display:flex;
            justify-content: center;
            align-items: center;
            padding-top: 7%;
        }
        .container_body_top button {
            width:40px;
            height:40px; 
        }
        .container_body_top span {
            font-size: 16pt;  
        }
        .container_body_bigIcons {
            gap:0px
        }
        .container_body_bigIcons button:nth-child(2){
            margin-left:20px
        }
        .text_zone , .text_zone_url {
           column-gap:0px;
        }
        #textArea , #textArea_url {
            margin-left: 20px;
        }
}  

@media only screen and (max-width:374px) and (min-width:360px) {
        .container_body {
            margin-left: -2%;
        }
        .bigIcons_l,.bigIcons_r {
        width:80px;
        height: 77px;
        }
        .bigIcons_l:hover ,.bigIcons_r:hover {
            width:70px;
            height: 77px;
        }
    }  

</style>

<!--   -->