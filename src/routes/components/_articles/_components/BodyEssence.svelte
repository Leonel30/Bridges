<script>
	import Pages from './Pages.svelte';
    import SubArticleEssence from './SubArticleEssence.svelte';
	import {articles} from '../../../../lib/models/dataArticle.js'
	import {articlesBlocked} from '../../../../lib/models/dataArticle.js'
	import { fly } from 'svelte/transition'
    export let element,showBody;
	let showBod = showBody;
	let icon = true;
	let locked =false;
</script>

<main class="container">
	
	<div class="container_articles">
		<div class="container_articles_l" in:fly="{{ x: -800, duration: 2000, delay:500 }}">
			<SubArticleEssence
				elemento={element}
				icon={icon}
				iconType = {'corregir'}
				iconType2 = {'enfatizar'}
				locked={locked}
				articles={articles}
				articlesBlocked = {articlesBlocked}
			/>
		</div>
		<div class="container_articles_r" in:fly="{{ x: 800, duration: 2000, delay:500 }}">
			<SubArticleEssence
				elemento={element}
				icon={true}
				iconType = {'corregir'}
				iconType2 = {'enfatizar'}
				locked={locked}
				articles={articles}
				articlesBlocked = {articlesBlocked}
			/>
		</div>
	</div>
	<!-- <Pages
		currentPage={1}
		lastPage={5}
	/> -->
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
		padding-top:180px;
	}
	.container_articles_r {
		display:none
	}
	@media only screen and (max-width:1920px) and (min-width:1024px) {
		.container_articles {
			width:100%;
			margin: 0 auto;
			padding-top:120px;
			display: flex;
			justify-content:center;
			align-items: center;
			gap: 0px;
		}
		.container_articles_l {
			width:450px;
		}
		.container_articles_r {
			display:block;
			width:450px; 
		}
	}
	@media only screen and (max-width:1440px) and (min-width:1024px) {
		.container_articles {
			padding-top:115px;
		}
	}
	@media only screen and (max-width:1023px) and (min-width:768px) {
		.container_articles{
			padding-top:20px;
			margin-top: 170px;
		}
	}
</style>