<script>
    import {otherWorldcomments, otherWorldcommentsPoints} from '../../../../lib/models/data'
    import IconOW from './IconOW.svelte'
    import { fly, fade } from 'svelte/transition';
    
    let elements = [{
        element:'Agua',
        points:1
    },
    {
        element:'Tierra',
        points:3
    },
    {
        element:'Aire',
        points:3
    },
    {
        element:'Fuego',
        points:-1
    },
    ]
    let comments = otherWorldcomments
    let commentsPoints = otherWorldcommentsPoints
    export let select


</script>
<main>
    <section class="section_container">
        <div class="section_title">
            <span>Que no vuelva a ganar Trump</span>
        </div>
        {#if select}
            <div class="container_elements">
                {#each elements as element}
                    <div class="element_item"><span>{element.element}</span></div>
                {/each}
            </div>
            <div class="container_comments">
                {#each comments as comment, i}
                    <div in:fly={( i === 0 || i === 1 || i === 4 || i === 5) ? { x: -500, duration: 2000 } : { x: 500, duration: 2000 }}  class="comments_item">
                        <div>
                            {#each  elements as element}
                                <IconOW elemento ={element.element}/>
                            {/each}
                        </div>
                        <div>
                            <span>{i}{comment}</span>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="container_elements_points">
                <span>Puntos de orquesta Jazz</span>
                {#each elements as element}
                    <div class="element_item_points">
                        <span>{element.points}</span>
                        <span>{element.element}</span>
                    </div>
                {/each}
            </div>
            <div class="container_comments_points">
                {#each commentsPoints as comment}
                    <div in:fade={{ delay: 800 }} class="comments_item_points">
                        <div class="points_container">
                                <div id="points" class={comment.element}>
                                    <span>{comment.points}</span>
                                </div>
                        </div>
                        <div>
                            <span>{comment.text}</span>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
        <button on:click={()=> select=!select} class="btn"><span>Aceptar</span></button>
    </section>
</main>

<style>
    .section_container {
        width:1000px;
		height: 649px;
		background: url('../../../../assets/assets/otherWorld/web/fondoConteCaso.png') no-repeat top;
		background-size: auto ;
		display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start
    }
    .section_title {
        width: 100%;
        height:110px;
        background: url('../../../../assets/assets/otherWorld/web/conteCaso.png') no-repeat top; 
        margin: 20px auto 0 ;
    }
    .section_title > span {
        display: inline-block;
        color:#404040;
        font-size: 16px;
        margin-left: 12%;
        margin-top: 2%;
    }
    .container_elements {
        width: 100%;
        height: 70px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .element_item {
        margin: 0 10px;
        width: 71px;
        height: 56px;
        background: url('../../../../assets/assets/otherWorld/web/colorAgua.png') no-repeat center;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .element_item:nth-child(2) {
        background: url('../../../../assets/assets/otherWorld/web/colorTierra.png') no-repeat center
    }
    .element_item:nth-child(3) {
        background: url('../../../../assets/assets/otherWorld/web/colorAire.png') no-repeat center
    }
    .element_item:nth-child(4) {
        background: url('../../../../assets/assets/otherWorld/web/colorFuego.png') no-repeat center
    }
    .element_item > span{
        font-size:  14px;
        color:#404040;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .container_comments {
        width: 94%;
        height:340px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(154px,165px);
    }
    .comments_item {
        background: url('../../../../assets/assets/otherWorld/web/conteOpcion.png') no-repeat center;
        background-size: auto;
    }
    .comments_item div:first-child {
        display:flex;
        justify-content: center;
        margin-top: 10px;
    }
    .comments_item div:last-child > span {
        display: inline-block;
        color:#404040;
        font-size: 14px;
        padding: 0px 15px;
    }
    .btn {
        width:241px;
        height: 73px;
        display:block;
        background: url('../../../../assets/assets/otherWorld/web/btnSelec.png') no-repeat center;
        background-size: auto;
        border:none;
    }
    .btn:hover {
        background: url('../../../../assets/assets/otherWorld/web/btnSelecHover.png') no-repeat center
    }
    .btn > span {
        font-size:16px;
        color:#5C3C0F;
        font-weight: 900;
    }
    .btn:hover > span{
    color:#ffff;
    }
        /* points */
    .container_elements_points {
        width: 100%;
        height: 70px;
        display: flex;
        margin: 0 auto 10px auto;
        justify-content: center;
        align-items: center;
    }
    .container_elements_points > span {
        font-size:25px;
        color:#404040;
        font-weight: 900;
    }
    .element_item_points {
        margin: 0 10px;
        width: 71px;
        height: 74px;
        background: url('../../../../assets/assets/otherWorld/web/puntosFuego.png') no-repeat center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .element_item_points:nth-child(2) {
        background: url('../../../../assets/assets/otherWorld/web/puntosAgua.png') no-repeat center
    }
    .element_item_points:nth-child(3) {
        background: url('../../../../assets/assets/otherWorld/web/puntosTierra.png') no-repeat center
    }
    .element_item_points:nth-child(4) {
        background: url('../../../../assets/assets/otherWorld/web/puntosAire.png') no-repeat center
    }
    .element_item_points > span{
        display: inline-block;
        margin-top: 10px;
        font-size:  16px;
        color:#404040;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .element_item_points > span:first-child {
        position: relative;
        top:7px;
    }
    .container_comments_points {
        width: 94%;
        height:340px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(154px,165px);
    }
    .comments_item_points {
        background: url('../../../../assets/assets/otherWorld/web/conteOpcion.png') no-repeat center;
        background-size: auto;
    }
    .comments_item_points div:first-child {
        display:flex;
        justify-content: center;
        margin-top: 10px;
    }
    .comments_item_points div:last-child > span {
        display: inline-block;
        color:#404040;
        font-size: 14px;
        padding: 0px 15px;
    }
    #points {
        width: 75px;
        height: 55px;
        margin-top: 0;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .agua {
        background: url('../../../../assets/assets/otherWorld/web/rtaPuntoAgua.png') no-repeat center;
    }
    .tierra {
        background: url('../../../../assets/assets/otherWorld/web/rtaPuntoTierra.png') no-repeat center;
    }
    .fuego {
        background: url('../../../../assets/assets/otherWorld/web/rtaPuntoFuego.png') no-repeat center;
    }
    .aire {
        background: url('../../../../assets/assets/otherWorld/web/rtaPuntoAire.png') no-repeat center;
    }
    .comments_item_points div:first-child > span {
        font-size: 25px;
        color:#404040;
        font-weight: 700;
        position: relative;
        bottom: 5px;
    }
    @media only screen and (max-width: 1023px){
        .section_container {
            width:346px;
            margin: 0 auto;
            margin-bottom: 100px;
            height: 730px;
            background: url('../../../../assets/assets/otherWorld/mobile/fondoConteCaso.png') no-repeat top;
        }
        .section_title {
            width: 322px;
            height:70px;
            background: url('../../../../assets/assets/otherWorld/mobile/conteCaso.png') no-repeat top; 
            margin: 15px auto 0 ;
        }
        .section_title > span {
            font-size: 12px;
            margin-left: 12%;
            margin-top: 3%;
        }
        .container_elements {
            width: 100%;
            height: 50px;
            margin: 10px auto 5px;
            }
        .element_item {
            margin: 0px;
            width: 64px;
            height: 50px;
            background: url('../../../../assets/assets/otherWorld/mobile/colorAgua.png') no-repeat center;
            background-size: cover;
        }
        .element_item:nth-child(2) {
            background: url('../../../../assets/assets/otherWorld/mobile/colorTierra.png') no-repeat center
        }
        .element_item:nth-child(3) {
            background: url('../../../../assets/assets/otherWorld/mobile/colorAire.png') no-repeat center
        }
        .element_item:nth-child(4) {
            background: url('../../../../assets/assets/otherWorld/mobile/colorFuego.png') no-repeat center
        }
        .element_item > span{
            font-size:  12px;
            color:#404040;
            margin-bottom: 10px;
        }
        .container_comments {
            width: 95%;
            height:470px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 0px;
            row-gap: 5px;
            grid-auto-rows: minmax(114px,116px);
        }
        .comments_item {
            width: 161px;
            height: 112px;
            background: url('../../../../assets/assets/otherWorld/mobile/conteOpcion.png') no-repeat center;
            background-size: auto;
        }
        .comments_item div:first-child {
            margin-top: 5px;
            margin-bottom: 6px;
        }
        .comments_item div:last-child > span {
            font-size: 11px;
            padding: 0px 15px;
        }
        .comments_item:nth-child(2) {
            grid-row: 2 / 3;
            grid-column: 1 / 2 ;
        }
        .comments_item:nth-child(5) {
            grid-row: 3 / 4;
            grid-column: 1 / 2 ;
        }
        .comments_item:nth-child(6) {
            grid-row: 4 / 5;
            grid-column: 1 / 2 ;
        }
        .btn {
            width:194px;
            height: 62px;
            display:block;
            background: url('../../../../assets/assets/otherWorld/mobile/btnAceptar.png') no-repeat center;
            background-size: auto;
            border:none;
        }
        .btn:hover {
            background: url('../../../../assets/assets/otherWorld/mobile/btnAceptarHover.png') no-repeat center
        }
        .btn > span {
            font-size:14px;
            position: relative;
            bottom:3px;
        }
        /*poins*/
        .container_elements_points {
            width: 100%;
            height: 75px;
            display: flex;
            margin: 0 auto 10px auto;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .container_elements_points > span {
            width:100%;
            font-size:15px;
            text-align: center;
            display: inline-block;
            margin:5px auto;
        }
        .element_item_points {
            margin: 0;
            width: 64px;
            height: 62px; 
            background: url('../../../../assets/assets/otherWorld/mobile/puntosFuego.png') no-repeat center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .element_item_points:nth-child(2) {
            background: url('../../../../assets/assets/otherWorld/mobile/puntosAgua.png') no-repeat center
        }
        .element_item_points:nth-child(3) {
            background: url('../../../../assets/assets/otherWorld/mobile/puntosTierra.png') no-repeat center
        }
        .element_item_points:nth-child(4) {
            background: url('../../../../assets/assets/otherWorld/mobile/puntosAire.png') no-repeat center
        }
        .element_item_points > span{
            display: inline-block;
            margin-top: 5px;
            font-size:  12px;
            margin-bottom: 10px;
        }
        .element_item_points > span:first-child {
            position: relative;
            top:7px;
        }
        .container_comments_points {
            margin-top: 5px;
            width: 95%;
            height:463px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 0px;
            row-gap: 5px;
            grid-auto-rows: minmax(114px,116px);
        }
        .comments_item_points {
            background: url('../../../../assets/assets/otherWorld/mobile/conteOpcion.png') no-repeat center;
            background-size: auto;
        }
        .comments_item_points div:first-child {
            display:flex;
            justify-content: center;
            margin-top: 5px;
        }
        .comments_item_points div:last-child > span {
            font-size: 11px;
            padding: 0px 15px;
        }
        #points {
            width: 50px;
            height: 41px;
            margin-top: 0;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .agua {
            background: url('../../../../assets/assets/otherWorld/mobile/rtaAgua.png') no-repeat center;
        }
        .tierra {
            background: url('../../../../assets/assets/otherWorld/mobile/rtaTierra.png') no-repeat center;
        }
        .fuego {
            background: url('../../../../assets/assets/otherWorld/mobile/rtaFuego.png') no-repeat center;
        }
        .aire {
            background: url('../../../../assets/assets/otherWorld/mobile/rtaAire.png') no-repeat center;
        }
        .comments_item_points div:first-child > span {
            font-size: 12px;
            bottom: 4px;
        }
}
</style>
