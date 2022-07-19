<script>
    import SubArticle from './SubArticle.svelte'
    import Pages from './Pages.svelte'
    import {articlesOne} from '../../../../lib/models/dataArticle.js'
	import {articlesBlockedOne} from '../../../../lib/models/dataArticle.js'
    import { fly } from 'svelte/transition'
    export let publication,element;
    export let showBody;
    let showBod = showBody;
    let icon = false;
	let locked =false;
    /* view,showBody,*/
</script>
<main class="container">
    <div class="container_body" >
        <div class="container_l" in:fly="{{ x: -800, duration: 2000, delay:500 }}">
            <SubArticle
                elemento={element}
                icon={true}
                iconType = {'url'}
                locked={false}
                articles={articlesOne}
                articlesBlocked = {articlesBlockedOne}
                bind:publication
            />
            <SubArticle
                elemento={1}
                icon={true}
                iconType = {'img'}
                locked={false}
                articles={articlesOne}
                articlesBlocked = {articlesBlockedOne}
            />
            <SubArticle
                elemento={0}
                icon={icon}
                iconType = {'img'}
                locked={locked}
                articles={articlesOne}
                articlesBlocked = {articlesBlockedOne}
            />
            <SubArticle
                elemento={3}
                icon={true}
                iconType = {'audio'}
                locked={locked}
                articles={articlesOne}
                articlesBlocked = {articlesBlockedOne}
            />
        </div>
        <div class="container_r" in:fly="{{ x: 800, duration: 2000, delay:500 }}">
                <SubArticle
                    elemento={2}
                    icon={true}
                    iconType = {'url'}
                    locked={false}
                    articles={articlesOne}
                    articlesBlocked = {articlesBlockedOne}
                    bind:publication
                    />
                <SubArticle
                    elemento={3}
                    icon={icon}
                    iconType = {'img'}
                    locked={true}
                    articles={articlesOne}
                    articlesBlocked = {articlesBlockedOne}
                />
                <SubArticle
                    elemento={'agua'}
                    icon={icon}
                    iconType = {'img'}
                    locked={true}
                    articles={articlesOne}
                    articlesBlocked = {articlesBlockedOne}
                />
                <SubArticle
                    elemento={'agua'}
                    icon={icon}
                    iconType = {'img'}
                    locked={true}
                    articles={articlesOne}
                    articlesBlocked = {articlesBlockedOne}
                />
        </div>
    </div>
    <Pages
		currentPage={1}
		lastPage={5}
	/> 
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
    .container div:first-child {
        margin-top: 190px;
        padding-top:28px;
    }
    .container_r {
        display:none;
    }
    @media only screen and (max-width:1920px) and (min-width:1024px) {
        .container {
            width: 100vw;
        }
        .container div:first-child {
            margin-top: 65px;
            padding-top:0px;
        }
        .container_r {
            display:block;
        }
        .container_body {
            display:flex;
            width:100%;
            justify-content:center;
            gap:20px;
        }
       .container div:last-child {
            margin-top: 65px;
        } 
    }
    @media only screen and (max-width:1440px){
        .container div:first-child {
            margin-top: 63px;
        }
        .container div:last-child {
            margin-top: 63px;
        } 
    }
    @media only screen and (max-width:1023px) and (min-width:768px){
		.container {
			padding-top:20px;
            margin: 0;
		}
	}
</style>