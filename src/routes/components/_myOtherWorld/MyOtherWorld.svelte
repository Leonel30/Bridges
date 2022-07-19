<script>
	import { fade } from 'svelte/transition';
    import BodyMyOtherW from '../_myOtherWorld/_components/BodyMyOtherW.svelte'
	import Hub from '../_components/Hub.svelte';
    import bgSoftAgua from '../../../assets/assets/lagoNimue/web/colorAgua.png';
    import bgSoftTierra from '../../../assets/assets/lagoNimue/web/colorTierra.png';
    import bgSoftFuego from '../../../assets/assets/lagoNimue/web/colorFuego_.png';
    import bgSoftAire from '../../../assets/assets/lagoNimue/web/colorAire.png';
	import ModalTenere from '../_components/ModalTenere.svelte';
    import Select from './_components/Select.svelte';
    import BodyMowm from './_components/BodyMowm.svelte';
	export let view;
	export let element;
	export let cortinaBridge;
	export let portal;
	export let modalTenere;
    export let temp
   
    let select = true;
	let resultado = false;
    const getImgs = (temp)=> {
		let bgSoft;
		if (temp === 'agua') {
			return bgSoft = bgSoftAgua
		} else if (temp === 'tierra') {
			return bgSoft = bgSoftTierra
		} else if (temp === 'fuego') {
			return bgSoft = bgSoftFuego
		} else if (temp === 'aire'){
			return bgSoft = bgSoftAire
		}else {
			return bgSoft
		}
	}
    let savElement = getImgs(temp)
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
            {...{ resultado, element, portal, temp }}
        />
    </div> 
    <div class="myWorld_buttom" style="{vars}" >
        <BodyMyOtherW {...{temp}}/>
        <div class="myWorld_buttom_body">
            <Select bind:select/>
        </div>
    </div>
    <div class="myWorld_buttom_mobile" style="{vars}" >
        <BodyMowm {...{temp}}/>
        <div class="myWorld_buttom_body">
            <Select bind:select/>
        </div>
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
        flex-direction: column;
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
            justify-content: flex-start;
            overflow: hidden auto;
        }
    }
    @media only screen and (max-width: 1023px){
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
