<script>
    import Agua from '../../../../assets/assets/article/agua.png'
    import Aire from '../../../../assets/assets/article/aire.png'
    import Tierra from '../../../../assets/assets/article/tierra.png'
    import Fuego from '../../../../assets/assets/article/fuego.png'
    import ConteAgua from '../../../../assets/assets/article/EssenceImg/conteAguaEsencia.png'
    import ConteAire from '../../../../assets/assets/article/EssenceImg/conteAireEsencia.png'
    import ConteTierra from '../../../../assets/assets/article/EssenceImg/conteTierraEsencia.png'
    import ConteFuego from '../../../../assets/assets/article/EssenceImg/conteFuegoEsencia.png'
    import iconAmpliar from '../../../../assets/assets/article/EssenceImg/iconAmpliar@2x.png';
    import iconEnfatizar from '../../../../assets/assets/article/EssenceImg/iconEnfatizar@2x.png'
    import iconRetractar from '../../../../assets/assets/article/EssenceImg/iconRetractar@2x.png'
    import iconCorregir from '../../../../assets/assets/article/EssenceImg/iconCorregir@2x.png'
    import conteArt from '../../../../assets/assets/article/EssenceImg/conteArticuloEsencia.png'
    import CardIcon from './CardIcon.svelte';
    export let icon, iconType,iconType2,elemento,articles;
    
let iconTyp = iconType.toLowerCase()
let iconTypSec = iconType2.toLowerCase()
let element = elemento
const getImgs = (element)=> {
    let src = {};
    if ( element === 0) {
        return src ={ 
                srcAvatar :Agua,
                srcBackText:ConteAgua
        }
    } else if (element === 3) {
        return  src ={ 
                srcAvatar :Aire,
                srcBackText:ConteAire
    }
    } else if (element === 1) {
        return src ={ 
                srcAvatar :Tierra,
                srcBackText:ConteTierra
            }
    } else if (element === 2){
        return src ={ 
                srcAvatar :Fuego,
                srcBackText:ConteFuego
            }
    }else {
        return src
    }
    }
const getIcon = (iconTyp)=> {
    let icon = iconTyp == 'ampliar'
    ? iconAmpliar
    : iconTyp  == 'enfatizar'
    ? iconEnfatizar
    : iconTyp === 'retractar'
    ? iconRetractar
    : iconTyp === 'corregir'
    ? iconCorregir
    : ""
    return icon
}
let savElement = getImgs(element)
let savIcon = getIcon(iconTyp)
let savIconSec = getIcon(iconTypSec)
let srcBack = savElement.srcBackText;
let srcAvatar = savElement.srcAvatar;
$: vars =`--background-image: url(${srcBack})`;
</script>
<main>
{#each articles as item}
        <div class="container" style="{conteArt}" >
            <div class="container_article" >
                <div class="container_article_avatar">
                    <img src={srcBack} alt="backgroundAvatar"/>
                    <div class="container_img">
                        <img src={srcAvatar} alt="AvatarImg" />
                    </div>
                </div>
                    <div class="container_article_text">
                        <div class="container_text_item">
                            <p>@Somi</p>   
                            <p id="p_space">fuego Fauto</p>  
                            <br>
                            <span>Nombre del artículo</span>
                            <br>
                            <p>Leído:820</p>
                            <p id="p2_space">23 hrs</p>
                        </div>
                    </div>
                </div>
            {#if icon}
            <div class="container_icon">
                <img src={savIcon} alt="iconRed" />
                <img src={savIconSec} alt="iconRed" />
            </div>
            {/if}
        </div>
    {/each}
</main>

<style>
.container{
    width: 316px;
    height: 77px;
    margin: 5px auto 10px;
}
.container:hover{
    cursor: pointer;
}
.container_article {
    width: 284px;
    height: 79px;
    display: flex;
    background-image: url('../../../../assets/assets/article/EssenceImg/conteArticuloEsencia.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    background-color: transparent;
    background-position: top;
}
.container_article_avatar { 
    width:20%;
}
.container_article_avatar img {
    position: relative;
    width:90%;
    height:65%;
    top:17px;
    margin-left: 15px;
}
.container_article_text {
    width: 80%;
    height:75px;
}
.container_text_item {
    width:190px;
    position: relative;
    top: 20px;
    left:20px;
}
.container_img img {
    display: inline-block;
    position: relative;
    width: 80%;
    height: 80%;
    object-fit: cover;
    top: -33px;
    left:2px;
}
.container_text_item p {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color : #404040; 
    font-weight: 300;
}
.container_text_item span {
    display: inline-block;
    color : #404040; 
    font-weight: 700;
    padding-top: 5px;
}
.container_icon {
    position: relative;
    width: 10%;
    margin-left: 88%;
    top: -68px;
    display: flex;
    flex-direction:column;
    gap: 12px;
}
.container_icon img {
    width: 24px;
    height: 24px;
    object-fit: cover;
}
#p2_space {
    padding-left: 45%;
}
#p_space {
    padding-left: 35%;
}
@media only screen and (max-width:1920px) and (min-width:1024px) {
    .container{
        width: 100%;
        height: 82px;
        margin: 20px auto 20px 0px;
    }
    .container_article {
        width: 400px;
        margin:0px;
        height: 87px;
        background-image: url('../../../../assets/assets/article/web/Esencia/conteArticuloEsencia.png');
    }
    .container_article_avatar { 
        width:22%; 
    }
    .container_article_avatar img {
        position: relative;
        width:80%;
        height:80%;
        top:8px;
        margin-left: 15px;
    }
    .container_article_text {
        width: 80%;
        height:75px;
    }
    .container_text_item {
        width:270px;
        top: 5px;
        left:15px;
    }
    .container_img img {
        display: inline-block;
        position: relative;
        width: 80%;
        height: 80%;
        object-fit: cover;
        top: -63px;
        left:-2px;
    }
    .container_text_item p {
        display: inline-block;
        margin: 0;
        padding: 10px 0;
        color : #404040; 
        font-weight: 300;
    }
    .container_text_item span {
        padding-top: 0px;
    }
    .container_icon {
        position: relative;
        width: 10%;
        margin-left: 88%;
        top: -75px;
    }
    .container_icon img {
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
    #p2_space {
        padding-left: 63%;
    }
    #p_space {
        padding-left: 55%;
    }
}
@media only screen and (max-width:1023px) and (min-width:768px){
    .container{
        width: 400px;
        height: 87px;
        margin: 10px auto 0px;
    }
    .container:first-child {
        margin: 30px auto 0px;
    }
    .container_article {
        width: 80%;
        height: 90px;
    }
    .container_article_avatar img {
        position: relative;
        width:100%; 
        height:75%; 
        top:15px;
        margin-left: 12px;
    }
    .container_article_text {
        width: 70%;
    }
    .container_text_item {
        width:250px;
        padding-top: 5px;
        padding-left: 5px;
    }
    .container_img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: -52px;
        left:-1px;
    }
    .container_icon {
        width: 10%;
        margin-left: 79%;
        top: -80px;
    }
    .container_icon img {
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
    #p2_space {
        padding-left: 45%;
    }
    #p_space {
        padding-left: 37%;
    }
}

</style>