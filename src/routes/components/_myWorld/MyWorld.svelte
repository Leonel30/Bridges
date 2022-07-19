<script>
	import { fade } from 'svelte/transition';
	import Body from '../_myWorld/_components/Body.svelte';
    import BodyMobile from '../_myWorld/_components/BodyMobile.svelte';
	import Hub from '../_components/Hub.svelte';
    import bgSoftAgua from '../../../assets/assets/lagoNimue/web/colorAgua.png';
    import bgSoftTierra from '../../../assets/assets/lagoNimue/web/colorTierra.png';
    import bgSoftFuego from '../../../assets/assets/lagoNimue/web/colorFuego_.png';
    import bgSoftAire from '../../../assets/assets/lagoNimue/web/colorAire.png';
	import ModalTenere from '../_components/ModalTenere.svelte';
	export let view;
	export let element;
	export let cortinaBridge;
	export let portal;
	export let modalTenere;

	let resultado = false;
    const getImgs = (element)=> {
		let bgSoft;
		if ( element === 0) {
			return bgSoft = bgSoftAgua
		} else if (element === 1) {
			return bgSoft = bgSoftTierra
		} else if (element === 2) {
			return bgSoft = bgSoftFuego
		} else if (element === 3){
			return bgSoft = bgSoftAire
		}else {
			return bgSoft
		}
	}
    let savElement = getImgs(element)
    $: vars =`--background-image: url(${savElement})`; 

</script>

<div in:fade={{ duration: 1000 }} class="myWorld" >
	{#if modalTenere}
		<ModalTenere bind:modalTenere />
	{/if}
	<div class="myWorld_top">
        <Hub
            bind:modalTenere
            bind:view
            bind:cortinaBridge
            {...{ resultado, element, portal }}
        />
    </div> 
    <div class="myWorld_buttom" style="{vars}" >
	    <Body {...{element}} />
    </div>
    <div class="myWorld_buttom_mobile" style="{vars}" >
	    <BodyMobile {...{element}} />
    </div>
</div>
<!-- markup (zero or more items) goes here -->
<style>
    .myWorld{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .myWorld_top{
        width: 100%;
        height: 243px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .myWorld_buttom{
        width: 100%;
        height: calc(100% - 258px);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
        background-image: var(--background-image);
        transition: 0.5s ease;
    }
    .myWorld_buttom_mobile{
        display:none;
    }
    @media only screen and (max-width: 1920px) and (min-width: 1024px) {
        .myWorld_buttom{
            align-items:flex-start;
            /* color:yellow */
            overflow: hidden auto;
        }
    }
    @media only screen and (max-width: 768px){
    .myWorld_top{
        height: 282px;
    }
    .myWorld_buttom{
        height: calc(100% - 297px);
        display: none;
    }
    .myWorld_buttom_mobile{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
        background-image: var(--background-image);
        height: calc(100% - 173px);
        display:block;
        overflow: hidden auto;
    }
}
    @media only screen and (max-width: 414px){
    .myWorld_top{
        height: 158px;
    }
    .myWorld_buttom{
        height: calc(100% - 173px);
        display: none;
    }
    .myWorld_buttom_mobile{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
        background-image: var(--background-image);
        height: calc(100% - 173px);
        display:block;
        overflow: hidden auto;
    }
}
</style>
