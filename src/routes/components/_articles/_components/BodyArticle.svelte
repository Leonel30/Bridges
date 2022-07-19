<script>
    import Reputation from './Reputation.svelte';
    import Title from './Title.svelte';
	import Pages from './Pages.svelte';
	import SubArticle from './SubArticle.svelte';
	import {articles} from '../../../../lib/models/dataArticle.js';
	import {articlesBlocked} from '../../../../lib/models/dataArticle.js';
	import { fly } from 'svelte/transition'
    let icon = false;
	let locked =false;
    export let publication, element,showBody;
	let showBod = showBody;
	
	console.log(element)
	
</script>
<main class="container">
	<div class="container_articles">
		<div class="container_articles_l" in:fly="{{ x: -800, duration: 2000, delay:500 }}" >
			<SubArticle
				elemento={element}
				icon={icon}
				iconType = {'img'}
				locked={locked}
				articles={articles}
				articlesBlocked = {articlesBlocked}
				bind:publication
			/>
		</div>
		<div class="container_articles_r" in:fly="{{ x: 800, duration: 2000, delay:500 }}" >
			<SubArticle
				elemento={element}
				icon={icon}
				iconType = {'img'}
				locked={locked}
				articles={articles}
				articlesBlocked = {articlesBlocked}
				bind:publication
			/>
		</div>
	</div>
	<Pages
		currentPage={1}
		lastPage={5}
	/>
</main>

<style>
    .container{
		position: relative;
		width: 100%;
		height: calc(100% - 240px);
		overflow: hidden auto;
		padding: 0px;
		margin:0px ;
	}
	.container_articles {
		margin-top:60px;
	}
	.container_articles_r {
		display: none
	}
	@media only screen and (max-width:1920px) and (min-width:1024px) {
		.container_articles {
			padding-top:125px;
			margin-top:0px;
			width: 100%;
			display: flex;
			justify-content:center;
			gap:20px;
		}
		.container_articles_r {
			display:block;
		}
	}
	@media only screen and (max-width:1440px) {
		.container_articles {
			padding-top:125px;
		}
	}
	@media only screen and (max-width:1023px) and (min-width:768px){
		.container_articles {
			padding-top:200px;
			margin-top:0px;
		}
	}
</style>

<!-- markup (zero or more items) goes here -->