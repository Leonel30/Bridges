<script>
	import PostulaMision from './PostulaMision.svelte';
	import ProponDorada from './ProponDorada.svelte';
	import arrowUp from '../../../../assets/assets/jazz/web/arrowUp.png';
	import arrowDown from '../../../../assets/assets/jazz/web/arrowDown.png';

	export let tabsJazz;
	export let modalMision;
	export let proponDorada;
</script>

<div class="tweetDestacado">
	<div class="postulaMision">
		<PostulaMision bind:modalMision {...{ tabsJazz }} />
	</div>
	<div class="contIdeas">
		<div>
			{#each proponDorada as item}
				<ProponDorada {...{ item }} />
			{/each}
		</div>
		<div>
			<img src={arrowUp} alt="" />
			<img src={arrowDown} alt="" />
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.postulaMision {
		background: #fff;
		border-radius: 15px;
		padding: 5px 5px 10px;
		box-shadow: 0 2px 3px 0 #00000040;
	}
	.contIdeas {
		padding: 10px 3px 0;
		display: flex;
		width: calc(100% - 6px);
		justify-content: center;
		align-items: center;
	}
	.tweetDestacado {
		height: 100%;
		overflow: hidden auto;
		width: 100%;
	}
	.tweetDestacado > .contIdeas {
		align-items: flex-start;
		height: 100%;
		position: relative;
	}
	.tweetDestacado > .contIdeas > div:first-child {
		height: 100%;
		flex-wrap: wrap;
		gap: 10px;
		position: relative;
		display: flex;
		width: calc(100% - 30px);
		justify-content: center;
		align-items: center;
	}
	.tweetDestacado > .contIdeas > div:last-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: sticky;
		right: 0;
		bottom: 0;
		width: 30px;
	}
	@media only screen and (max-width: 768px) { 
		.contIdeas {
			padding: 10px 3px 0;
			display: flex;
			width: calc(100% - 6px);
			justify-content: center;
			align-items: center;
		}
	}
	@media only screen and (max-width: 414px) {
		.tweetDestacado > .contIdeas > div:last-child {
			display: none;
		}
		.postulaMision {
			background: #fff;
			border-radius: 15px;
			padding: 5px 5px 10px;
			box-shadow: 0 2px 3px 0 #00000040;
		}
		.contIdeas {
			padding: 10px 3px 0;
			display: flex;
			flex-direction: column;
			width: calc(100% - 6px);
			justify-content: center;
			align-items: center;
		}
		.tweetDestacado > .contIdeas > div:first-child {
			padding: 10px 3px 0;
			display: flex;
			flex-direction: column;
			width: calc(100% - 6px);
			justify-content: center;
			align-items: center;
		}
		.tweetDestacado > .contIdeas > div:last-child {
			display: none;
		}
		
	}
</style>
