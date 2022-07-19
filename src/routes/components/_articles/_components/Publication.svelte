<script>
    import Agua from '../../../../assets/assets/article/agua.png';
    import Fuego from '../../../../assets/assets/article/fuego.png';
    import Tierra from '../../../../assets/assets/article/tierra.png';
    import Aire from '../../../../assets/assets/article/aire.png';
    import IconPublication from './IconPublication.svelte';
    import ConteAgua from '../../../../assets/assets/article/PublicationImg/conteAguaEsencia@2x.png';
    import ConteFuego from '../../../../assets/assets/article/PublicationImg/conteFuegoEsencia@2x.png';
    import ConteTierra from '../../../../assets/assets/article/PublicationImg/conteTierraEsencia@2x.png';
    import ConteAire from '../../../../assets/assets/article/PublicationImg/conteAireEsencia@2x.png';
    import LevelAgua from '../../../../assets/assets/article/PublicationImg/progresoAgua@2x.png';
    import LevelFuego from '../../../../assets/assets/article/PublicationImg/progresoFuego@2x.png';
    import LevelTierra from '../../../../assets/assets/article/PublicationImg/progresoTierra@2x.png';
    import LevelAire from '../../../../assets/assets/article/PublicationImg/progresoAire@2x.png';
    import ampliar from '../../../../assets/assets/article/PublicationImg/btnAmpliar@2x.png';
    import enfatizar from '../../../../assets/assets/article/PublicationImg/btnEnfatizar@2x.png';
    import corregir from '../../../../assets/assets/article/PublicationImg/btnCorregir@2x.png';
    import retractar from '../../../../assets/assets/article/PublicationImg/btnRetractar@2x.png';
    import retractarWeb from '../../../../assets/assets/article/web/Crea/btnRetractar.png';
    import ampliarWeb from '../../../../assets/assets/article/web/Crea/btnAmpliar.png';
    import enfatizarWeb from '../../../../assets/assets/article/web/Crea/btnEnfatizar.png';
    import corregirWeb from '../../../../assets/assets/article/web/Crea/btnCorregir.png';
    import retractarHoverWeb from '../../../../assets/assets/article/web/Crea/btnRetractarHover.png';
    import ampliarHoverWeb from '../../../../../static/assets/article/web/Crea/btnAmpliarHover.png';
    import enfatizarHoverWeb from '../../../../../static/assets/article/web/Crea/btnEnfatizarHover.png';
    import corregirHoverWeb from '../../../../../static/assets/article/web/Crea/btnCorregirHover.png';
    export let element
    console.log(element)
    let unlock = false;
    let iconUnlockWeb = {
        corregir : {
            enter : corregirHoverWeb,
            leave : corregirWeb,
            textEnter : "Corregir",
            textLeave : ""
        },
        ampliar : {
            enter : ampliarHoverWeb,
            leave : ampliarWeb,
            textEnter : "Ampliar",
            textLeave : ""
        },
        enfatizar : {
            enter : enfatizarHoverWeb,
            leave : enfatizarWeb,
            textEnter : "Enfatizar",
            textLeave : ""
        },
        retractar : {
            enter : retractarHoverWeb,
            leave : retractarWeb,
            textEnter : "Retractar",
            textLeave : ""
        },
    }
    $: dynamic = {"corregir":corregirWeb,"ampliar":ampliarWeb,"enfatizar":enfatizarWeb,"retractar":retractarWeb};
    $: dynamicTexto = {"corregir":"","ampliar":"","enfatizar":"","retractar":""};
    const changeIcon = (action,type,actionText) => {
        dynamic[type] = iconUnlockWeb[type][action]
        dynamicTexto[type] = iconUnlockWeb[type][actionText]
    }
    let iconUnlock = [
        {   img :ampliar,
            text :'Ampliar',
        },
        { img :enfatizar,
            text :'Enfatizar',
        },
        { img :corregir,
            text :'Corregir',
        },
        { img :retractar,
            text :'Retractar',   
        },
        ]
    const getImgs = (element)=> {
        let src = {};
        if ( element === 0) {
            return src ={ 
                    srcAvatar :Agua,
                    srcBackText:ConteAgua,
                    srcLevel: LevelAgua
            }
        } else if (element === 3) {
            return  src ={ 
                    srcAvatar :Aire,
                    srcBackText:ConteAire,
                    srcLevel: LevelAire
        }
        } else if (element === 1) {
            return src ={ 
                    srcAvatar :Tierra,
                    srcBackText:ConteTierra,
                    srcLevel: LevelTierra
                }
        } else if (element === 2){
            return src ={ 
                    srcAvatar :Fuego,
                    srcBackText:ConteFuego,
                    srcLevel: LevelFuego
                }
        }else {
            return src
        }
    }
    let iconPublic =  {
            agua: {
                name: "agua",
                views: 1},
            tierra: {
                name:"tierra", 
                views: 3},
            aire: {
                name:"aire", 
                views: 6},
            fuego: {
                name:"fuego", 
                views: 8},
        }
    let savElement = getImgs(element)
	let srcBack = savElement.srcBackText;
	let srcAvatar = savElement.srcAvatar;
    let srcLevel = savElement.srcLevel;
    $: vars =`--background-image: url(${srcBack})`;
    $: levelImg =`--background-image: url(${srcLevel})`;
</script>
<main class="container">
    <div class=body>
        <div class="body_info">
            <div class="info_bgAvatar" style="{vars}">
                <img src={srcAvatar} alt="">
            </div>
            <div class="info_textAvatar">
                <span>Mi artículo</span>
                <p>@tierra-456</p>
            </div>
        </div>
        <div class="body_bg">
            <div class={ unlock === true?'body_text btn_text_web':'body_text'}>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit deleniti nemo</span>
                <button ><span>(Leer más)</span></button>
            </div>
            {#if !unlock}
                <div class="body_progre">
                    <div class="progre_bar" style="{levelImg}"></div>
                    <div class="progre_bar_por">
                        <p></p>
                    </div>
                    <p>17 hrs para retroalimentación</p>
                </div>
            {:else }
                <div class="body_progre_unlock">
                    <p>0 hrs</p>
                    <div class="progre_bar_unlock" style="{levelImg}"></div>
                    <p>100%</p>
                </div>
                <div class="progre_bar_por_unlock">
                    <p></p>
                </div>
            {/if}
            <div class="body_bg_icons">
                <div class="bg_icons">
                    {#each Object.keys(iconPublic) as item}
                        <IconPublication elemento={item} vistas={iconPublic[item].views}/>
                    {/each}
                </div>
            </div>
            <div class="bg_points"></div>
            {#if !unlock}
                <div class="body_lect">
                    <p>Lecturas por Mond Totales:</p>
                    <span>18</span>
                </div>
            {:else}
                <div class="container_essence_point">
                    <div class="Essence_point">
                        <span>5e</span>
                    </div>
                    <div class="body_lect_web">
                        <p>Lecturas por Mond Totales:</p>
                        <span>18</span>
                    </div>
                </div>
            {/if}
            <div on:click={()=> unlock = !unlock } class={unlock === true? 'body_bottom body_unlock' : 'body_bottom'}>
                {#if unlock}
                    {#each iconUnlock as item}
                        <div class="unlock_icon">
                            <div class="unlock_icon_single" >
                                <button class="unlock">
                                    <img
                                    id="img"   
                                    src="{item.img}" alt="imgicon"/>
                                </button>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    {/each}
                    <div class="btn_float">
                        <button></button>
                    </div>    
                {/if}
            </div>
            <div on:click={()=> unlock = !unlock } class={unlock === true? 'body_bottom_web body_unlock_web' : 'body_bottom_web'}>
                {#if unlock}
                    {#each Object.keys(dynamic) as type}
                        <div class="unlock_icon_web">
                            <div class="unlock_icon_single_web" >
                                <button 
                                class="unlock_web"
                                style="background-image: url({dynamic[type]})"
                                on:mouseenter={()=>changeIcon("enter", type, "textEnter")}
                                on:mouseleave={()=>changeIcon("leave", type, "textLeave")}>
                                    <span>{dynamicTexto[type]}</span>
                                </button>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</main>

<style>
    .container {
		position: relative;
		width: 100%;
		height: calc(100% - 240px);
		overflow: hidden auto;
		padding: 0px;
		margin:0px ;
    }
    .body {
        width:80%;
        height: auto;
        margin: 30px auto;
        font-family: 'Montserrat';
        
    }
    .body_info {
        width:85%;
        height:82px;
        margin: 0 auto;
        background-image: url('../../../../assets/assets/article/PublicationImg/cabezoteArticulo@2x.png');
		background-repeat: no-repeat;
        background-position: center;
		background-size: cover;
        display: flex;
        justify-content:flex-start;
        gap: 5%;
    }
    .info_bgAvatar {
        width:70px;
        height:70px;
        margin-top: 1%;
        margin-left: 5%;
        background-image: var(--background-image);
		background-repeat: no-repeat;
        background-position: center;
		background-size: cover;
    }
    .info_textAvatar {
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .info_textAvatar span {
        font-size: 12px;
        font-weight: 700;
        color: #404040;
    }
    .info_textAvatar p {
        font-size: 12px;
        font-weight: 500;
        color: #404040;
    }
    .info_bgAvatar img {
        width: 60px;
        height: 60px;
        padding-top:5px;
        padding-left:5px;
    }
    .body_bg {
        width:100%;
        height: 455px;
        margin: 0 auto;
        position: relative;
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoRetroalimentacion@2x.png');
		background-repeat: no-repeat;
        background-position: center;
		background-size: cover;
        top:-70px;
    }
    .body_text{
        width:95%;
        height:85px;
        margin-left: 1.5%;
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoDirigido@2x.png');
		background-repeat: no-repeat;
        background-position: center;
		background-size: cover;
        position: relative;
        top:18%;
    }
    .body_text span {
        display: inline-block;
        padding: 10px 0 0 20px;
        color: #404040;
        font-weight: 300;
        font-size: 12px;
    }
    .body_text button {
        width:76px;
        height: 23px;
        border: none;
        margin: 5px 0 0 20px;
        background-color: #E3D5C3;
        border: 1px solid #ffff;
        border-radius: 5px;
        box-shadow: 0px 2px 3px 1px #00000029;
    }
    .body_text button:hover {
        background-color:#FFFF;
    }
    .body_text button span {
        display: inline-block;
        color:#646F6F;
        font-size: 12px;
        padding: 0;
        font-weight: bold;
    }
    .body_progre {
        width:265px;
        height:55px;
        margin: 10px auto 0 4.5%;
        padding-top: 8px;
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoRetroalimentacionProgreso.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        top:18%;
        display: flex;
        flex-direction: column;
    }
    .body_progre_unlock  {
        width:95%;
        height:27px;
        margin: 10px 0 0 1%;
        padding-top: 8px;
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoProgresoCorta.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        top:21%;
        display: flex; 
    }
    .progre_bar {
        width:80%;
        height: 16px;
        margin: 0px auto;
        background-image: var(--background-image);
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
    }
    .progre_bar_unlock {
        width:150%;
        height: 16px;
        margin: 0px auto;
        background-image: var(--background-image);
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
    }
    .progre_bar_por {
        width:77%;
        height: 16px;
        margin: 0px auto;
    }
    .body_progre p {
        display: inline-block;
        padding: 0;
        margin:0;
        color:#646F6F;
        text-align: center;
        position: relative;
        top:-10px;
        font-size: 12px;
    }
    .body_progre_unlock p {
        display: inline-block;
        padding: 0;
        width:29%;
        margin:0;
        color:#646F6F;
        font-size: 12px;
        text-align: center;
        position: relative;
        top:2px
    }
    .progre_bar_por p {
        width:50%;
        height: 11px;
        background-color:#ffff;
        opacity: 0.7;
        position: relative;
        border-radius: 6px;
        top: -14px;
    }
    .progre_bar_por_unlock {
        width:70%;
        height: 11px;
        margin: 0px auto;
        position: relative;
        top: 56px;
    }
    .progre_bar_por_unlock p {
        width:50%;
        height: 11px;
        background-color:#D2F0FC;
        position: relative;
        border-radius: 6px;
    }
    .body_bg_icons{
        width:100%;
        height:75px;
        margin-left:3%;
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5%;
        top:20%;
        z-index: 5;
    }
    .bg_icons {
        width:100%;
        height:10px;
        margin: 0 0% 0 2.9%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .bg_points {
        width:95%;
        height:45px;
        margin: 0 0 0 1%;
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoPuntajeArticulo@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        top:55px;
    }
    .body_lect{
        width:210px;
        height:30px;
        margin: 10px auto;
        background-image: url('../../../../assets/assets/article/PublicationImg/lecturasArticulo@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2%;
        top:13%;
    }
    .body_lect_web{
        width:70%;
        height:30px;
        margin: 10px auto;
        background-image: url('../../../../assets/assets/article/PublicationImg/lecturasArticulo@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2%;
        top:13%;
    }
    .body_lect p,.body_lect_web p {
        color:#646F6F;
        font-size: 11px;
        font-weight: 600;
        padding-left: 5%;
    }
    .body_lect span,.body_lect_web span {
        color:#D2F0FC;
        font-size: 12px;
        padding-left: 6%;
    }
    .body_bottom{
        width:97%;
        height:55px;
        background-image: url('../../../../assets/assets/article/PublicationImg/blockArticulo@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        top:17% !important;
        cursor: pointer;
        display: flex;
        box-shadow:#00000063 ;
    }
    .body_bottom_web {
        display:none
    }
    .body_unlock {
        width:97.5%;
        height: 50px !important;    
        background-image: url('../../../../assets/assets/article/PublicationImg/fondoAccionesArticulo@2x.png');
        box-shadow: #00000063 ;
    }
    .body_unlock_web {
        display:none
    }
    .unlock_icon {
        width:90%;
        margin: 0 auto;
        display:flex;
        margin-left: 4.5%;
    }
    .unlock_icon_single{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        gap: 0px;
    }
    .unlock_icon_single button {
        width: 25px;
        height: 25px;
        border:none;
        background-color: transparent;
    }
    .unlock_icon_single span {
        font-size:12px;
        font-family: 'Montserrat';
        color: #FFFFFF ;
    }
    .unlock_icon_single button img {
        width: 25px;
        height: 25px;
        position: relative;
        top: -3px;
        right:8px
    }
    .Essence_point {
        width:40px;
        height: 60px;
        margin:5px 0 0 0;
        background-image: url('../../../../assets/assets/article/PublicationImg/EsenciaWin@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position: relative;
        left:20px;
    }
    .Essence_point span {
        color: #6F4FA3;
        font-weight: bold;
        position: relative;
        top: 10px;
        left:10px;
    }
    .container_essence_point{
        width:100%;
        margin: 0 auto;
        display:flex;
        position:relative;
        justify-content:center;
        align-items: center;
        top: 14%;
    }
    .btn_float button{
        width:46px;
        height: 53px;
        background-image: url('../../../../assets/assets/article/PublicationImg/iconblockFlotante@2x.png');
		background-repeat: no-repeat;
        background-position: top;
		background-size: cover;
        position:fixed;
        bottom: 190px;
        right:20px;
        border:none;
        border-radius:10px;
        z-index: 15;
    } 
    @media only screen and (max-width:1920px) and (min-width:1024px){
        .container {
            max-width: 1000px;
        }
        .body {
            width:100%;
        }
        .body_info {
            width:43%;
            height:100px;
            margin: 0 auto 0 2.5%;
            background-image: url('../../../../assets/assets/article/web/Crea/cabezoteArticulo.png');
            display: flex;
            justify-content:flex-start;
            gap: 6%;
        }
        .info_bgAvatar {
            margin-top: 2.5%;
            margin-left: 6%;
        }
        .info_textAvatar span {
            font-size: 14px;
        }
        .info_textAvatar p {
            font-size: 14px;
        }
        .body_bg {
            width:95%;
            height: 370px;
            background-image: url('../../../../assets/assets/article/web/Crea/fondoRetroalimentacionC.png');
            top:-95px;
        }
        .body_text{
            width:52%;
            height:203px;
            margin: 0 3% 0 auto;
            background-image: url('../../../../assets/assets/article/web/Crea/fondoRetroalimentacionO.png');
            top:5%;
        }
        .body_text span {
            display: inline-block;
            padding: 20px 0 0 30px;
            font-size: 14px;
        }
        .body_text button {
            width:95px;
            height: 30px;
            margin: 5% 0 0 20px;
        }
        .body_text button span {
            font-size: 14px;
        }
        .body_progre {
            width:30%;
            margin: 10px 13.5% 0 auto;
            background-image: url('../../../../assets/assets/article/web/Crea/fondoProgresoRetroalimentacion.png');
            top:-6%;
        }
        .progre_bar {
            width:90%;
            height: 18px;
            margin: 0px auto;
        }
        .progre_bar_por {
            width:87%;
        }
        .body_progre p {
            font-size: 14px;
            top:-10px
        }
        .progre_bar_por p {
            top: -14px;
        }
        .bg_icons {
            width:100%;
            height:10px;
            margin: 0 7.5%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .body_lect{
            width:30%;
            height:34px;
            margin: 0 5% 0 auto;
            background-image: url('../../../../assets/assets/article/web/Crea/conteLecturasTotal.png');
            gap: 0%;
            top:-85%;
        }
        .body_lect_web{
            height:32px;
            margin: 10% 10% 0 auto;
            background-image: url('../../../../assets/assets/article/web/Crea/conteLecturasTotal.png');
            gap: 0%;
        }
        .body_lect p, .body_lect_web p {
            font-size: 14px;
            padding-left: 6%;
        }
        .body_lect span {
            font-size: 14px;
            padding-left: 12%;
        }
        .body_lect_web span {
            color:#ffff;
            font-size: 14px;
            padding-left: 8%;
        }
        .body_bottom{
            display:none;
        }
        .body_bottom_web{
            display:inline-block;
            width:97%;
            height:80px;
            margin : 0 0 0 1%;
            background-image: url('../../../../assets/assets/article/web/Crea/blockArticulo.png');
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            position: relative;
            display: flex;
            justify-content: center;
            top:-42% !important;
        }
        .body_bg_icons{
            width:40%;
            height:75px;
            margin-left:0%;
            top:-35%;
        }
        .bg_icons {
            width:100%;
            height:10px;
        }
        .bg_points {
            width:40%;
            height:60px;
            margin: 0 0 0 3%;
            top:-45%;
        }
        .body_progre_unlock  {
            width:50%;
            height:38px;
            margin: 10px 4% 0 auto;
            padding-top: 8px;
            background-image: url('../../../../assets/assets/article/web/Crea/fondoRetroalimentacionCorto.png');
            top:0%;
        }
        .body_progre_unlock p {
            font-weight: 700;
            font-size: 14px;
            top:6px
        }
        .progre_bar_unlock {
            background-image: var(--background-image);
            width:100%;
            height: 24px;
        }
        .progre_bar_por_unlock {
            width:50%;
            height: 11px;
            margin: 0 auto 0 55.7%;
            position: relative;
            top: -13%;
        }
        .progre_bar_por_unlock p {
            width:50%;
            height: 13px;   
        }
        .body_unlock {
            display: none;
        }
        .body_unlock_web {
            display:inline-block;
            width:97%;
            height:80px !important;    
            background-image: url('../../../../assets/assets/article/web/Crea/fondoEdicion.png');
            box-shadow: #00000063 ;
            display: flex;
            top:-58% !important;
        }
        .unlock_icon_web {
            width:20%;
            display:flex;
            justify-content: center;
            padding: 0;
            margin: 0;
        }
        .unlock_icon_single_web{
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
        }
        .unlock_icon_single_web:nth-child(1){
            margin-left:40%;
        }
        .unlock_icon_single_web button {
            width: 195px;
            height: 41px;
            border:none;
            background-color: transparent;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .unlock_icon_single_web button:hover {
            background-size: auto;
            height: 47px;
            background-position: top;
            position: relative;
            left:-20px
        }
        .unlock_icon_single_web button span {
            position: relative;
            font-size:14px;
            font-weight:700;
            color: #5C3C0F;
            top: 0px;
            left:20px
        }
        .Essence_point {
            width:50px;
            height:70px;
        }
        .Essence_point span {
            font-size: 20px;
            top: 10px;
            left:12px;
        }
        .container_essence_point{
            width:40%;
            margin: 0 10% 0 auto;
            top: -80%;
        }
        .btn_text_web button{
            width:24%;
            height: 25px;
            border: none;
            margin: 12% 0 0 43%;
            background-color: #E3D5C3;
            border: 1px solid #ffff;
            border-radius: 5px;
        }
        .btn_text_web button:hover {
            background-color:#FFFF;
        }
        .btn_float button{
            display:none;
        } 
    }
    @media only screen and (max-width:1023px) and (min-width:768px) {
        .body {
            width:460px;
            height: auto;
            margin: 30px auto;
            font-family: 'Montserrat';
            }
        .body_info {
            width:78%;
            height:115px;
            margin: 0 auto;
            background-image: url('../../../../assets/assets/article/PublicationImg/cabezoteArticulo@2x.png');
            gap: 0%;
            }
        .info_bgAvatar {
            width:80px;
            height:80px;
            margin-top: 4%;
            margin-left: 8%;
        }
        .info_textAvatar {
            margin-left:25px
        }
        .info_textAvatar span {
            font-size: 12px;
        }
        .info_bgAvatar img {
            width: 70px;
            height: 70px;
            padding-top:5px;
            padding-left:5px;
        }
        .body_bg {
            width:100%;
            height: 625px;
            margin: 0 auto;
            position: relative;
            background-image: url('../../../../assets/assets/article/PublicationImg/fondoRetroalimentacion@2x.png');
            top:-75px;
        }
        .body_text{
            width:87%;
            height:120px;
            margin-left: 5%;;
            background-image: url('../../../../assets/assets/article/PublicationImg/fondoDirigido@2x.png');
            top:18%;
        }
        .body_text span {
            display: inline-block;
            padding: 10px 0 0 20px;
            font-size: 12px;
        }
        .body_text button {
            border: none;
            margin: 5px 0 0 20px;
            background-color: #E3D5C3;
            border: 1px solid #ffff;
            border-radius: 5px;
        }
        .body_text button:hover {
            background-color:#FFFF;
        }
        .body_text button span {
            display: inline-block;
            color:#646F6F;
            font-size: 12px;
            padding-top: 5px;
            position:relative;
            top:-3px
        }
        .body_progre {
            width:320px;
            height:64px;
            margin: 10px auto 20px ;
            padding-top: 8px;
            background-image: url('../../../../assets/assets/article/PublicationImg/fondoRetroalimentacionProgreso.png');
            top:18%;
            display: flex;
            flex-direction: column;
        }
        .progre_bar {
            width:85%;
            height: 20px;
            margin: 0px auto;
            background-image: var(--background-image);
        }
        .progre_bar_por {
            width:82%;
            height: 16px;
            margin: 0px auto;
        }
        .body_progre p {
            display: inline-block;
            padding: 0;
            margin:0;
            color:#646F6F;
            text-align: center;
            position: relative;
            top:0px;
        }
        .progre_bar_por p {
            width:50%;
            height: 13px;
            background-color:#ffff;
            opacity: 0.7;
            position: relative;
            border-radius: 6px;
            top: -16px;
        }
        .body_bg_icons{
            width:70%;
            height:75px;
            margin-left:12%;
            /* margin: 0 auto; */
            display:flex;
            justify-content:center;
            gap: 5%;
            top:20%;
        }
        .bg_icons {
            width:100%;
            height:10px;
            margin: 0 0 0 -1%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .body_lect{
            width:55%;
            height:36px;
            margin: 30px auto;
        }
        .body_bottom{
            width:92%;
            margin: 0 0 0 3%;
            height:76px;
        }
        .bg_points {
            width:85%;
            height:62px;
            margin: 0 0 0 6%;
            background-image: url('../../../../assets/assets/article/PublicationImg/fondoPuntajeArticulo@2x.png');
            top:14%;
        }
        .body_progre_unlock  {
            width:90%;   
            height:35px;
            margin: 10px 0 0 4%;
            padding-top: 8px;
            top:21%;
        }
        .progre_bar_unlock {
            width:130%;
            height: 20px;
            margin: 0px auto;
        }
        .progre_bar_por_unlock {
            width:50%;
            height: 11px;
            margin: 0 0 0 0;
            position: relative;
            top: 85px;
            left:16.5%
        }
        .progre_bar_por_unlock p {
            width:50%;
            height: 13px;
            margin-left: 5%;
            background-color:#D2F0FC;
            position: relative;
            border-radius: 6px;
        }
        .body_unlock {
            width:92%;
            margin-left: 3%;
            height: 75px !important; 
            position: relative;
            top: 24% !important;   
        }
        .Essence_point span {
            top: 10px;
            left:13px;
        }
        .container_essence_point{
            width:100%;
            margin: 0 auto;
            display:flex;
            position:relative;
            justify-content:center;
            align-items: center;
            top: 16%;
        }
        .btn_float button{
            bottom: 350px;
            right:100px;
        }
        .Essence_point {
            left:50px;
        }
        .body_lect {
            gap:0px;
        }
        .body_lect_web{
            width:62%;
            height:40px;
            margin: 10px auto 0;
            gap: 0%;
            top:13%;
            }
        .body_lect p,.body_lect_web p {
            color:#646F6F;
            font-size: 14px;
            font-weight: 600;
            padding-left: 6%;
        }
        .body_lect p {
            padding-left: 3%;
        }
        .body_lect span,.body_lect_web span {
            color:#D2F0FC;
            font-size: 14px;
            padding-left: 8%;
        }
        .body_lect span {
            padding-left: 5.5%;
        }
        .body_lect_web span{
            padding-left: 9.5%;
        }
        .body_lect_web p {
            width: 200px ;
        }
        .unlock_icon_single button img {
            width: 35px;
            height: 35px;
            top: -13px;
            right:11px
        }
        .unlock_icon {
            margin-left: 6%;
        }
    }
    @media only screen and (max-width:411px) and (min-width:394px) {
        .info_bgAvatar {
            width:70px;
            height:70px;
            margin-top: 1.5%;
            margin-left: 6%;
        }
        .info_bgAvatar img {
            width: 60px;
            height: 60px;
        }
        .body_bg {
            width:100%;
            height: 500px;
        }
        .body_text{
            width:90%;
            height:85px;
            margin-left: 4%;
            top:18%;
        }
        .body_text span {
            padding: 10px 0 0 20px;
        }
        .body_text button {
            margin: 10px 0 0 20px;
        }
        .body_progre {
            height:55px;
            margin: 10px 0 0 8.5%;
        }
        .progre_bar_por {
            width:77%;
        }
        .progre_bar_por p {
            top: -14px;
        }
        .body_bg_icons{
            margin-left:6%;
        }
        .body_lect{
            width:70%;
            height:32px;
            top:15%;
        }
        .body_lect p {
            padding-left: 7%;
        }
        .body_lect_web {
            height: 32px;
        }
        .body_lect_web p {
            padding-left: 10%;
        }
        .body_lect span {
            padding-left: 10%;
        }
        .body_bottom{
            width:97.5%;
            height:60px;
            top:20% !important;
        }
        .progre_bar_por_unlock {
            margin: 0px 0 0 15.5%;
            top: 66px;
        }
        .body_unlock {
            width:98%;
            height: 55px !important; 
            position: relative;
            top: 26.5%;   
        }
        .bg_points {
            width:95%;
            height:50px;
            margin: 0 0 0 1.3%;
        }
        .bg_icons {
            margin: 0 0 0 3.5%;
        }
    }
    @media only screen and (max-width:393px)and (min-width:376px){
        .body_bg {
            height: 475px;
        }
        .body_bg_icons{
            margin-left:5%;
        }
        .body_lect{
            height:30px;
            top:13%;
        }
        .body_lect p {
            padding-left: 6%;
        }
        .body_lect span {
            padding-left: 4%;
        }
        .body_lect_web span {
            padding-left: 8%;
        }
        .body_bottom{
            height:55px;
            top:26%;
        }
        .bg_points {
            width:95%;
            height:47px;
            margin: 0 0 0 1.3%;
        }
        .progre_bar_por_unlock {
            margin: 0px 0 0 15.5%;
            top: 60px;
        }
        .bg_icons {
            margin: 0 0 0 2.5%;
        }
        .body_progre {
            height:50px;
            margin: 10px 0 0 6.5%;
        }
    }
    @media only screen and (max-width:374px) and (min-width:360px) {
        .info_bgAvatar {
            width:65px;
            height:65px;
            margin-top: 2%;
            margin-left: 6%;
        }
        .info_bgAvatar img {
            width: 55px;
            height: 55px;
            padding-top:5px;
            padding-left:5px;
        }
        .body_bg {
            width:100%;
            height: 435px;
        }
        .body_text{
            width: 260px;
            height:75px;
            margin-left: 3.5%;
            top:18%;
        }
        .body_text span {
            padding: 5px 0 0 20px;
        }
        .body_text button {
            height: 20px;
            margin: 2px 0 0 20px;
        }
        .body_progre {
            height:50px;
            margin: 10px 0 0 2.5%;
        }
        .progre_bar_por {
            width:77%;
        }
        .body_bg_icons{
            margin-left:5%;
        }
        .body_lect p {
            padding-left: 3%;
        }
        .body_lect span {
            padding-left: 6%;
        }
        .body_lect_web p {
            padding-left: 3%;
        }
        .body_lect_web span {
            padding-left: 3%;
        }
        .body_bottom{
            width:97%;
            height:50px;
            top:24%;
        }
        .progre_bar_por_unlock {
            width:65%;
            height: 11px;
            margin: 0px 0 0 15%;
            position: relative;
            top: 51px;
        }
        .body_unlock {
            width:97%;
            height: 48px !important;    
        }
        .body_bg_icons{
            width:100%;
            height:75px;
            margin-left:1.5%;
            gap: 5%;
            top:20%;
        }
        .bg_points {
            width:95%;
            height:43px;
            margin: 0 0 0 1%;
        }
        .bg_icons {
            margin: 0 0 0 2%;
        }
    }
    
</style>