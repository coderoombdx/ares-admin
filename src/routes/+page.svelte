<script>
	import { GameStateRequests } from "../api/GameStateRequests.ts";
	import { game, setGame } from "../store/GameState.ts";


	game.subscribe(g => console.log("STORE VALUE ", g));
	GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription));
</script>

<svelte:head>
	<title>Ares Game Administrator</title>
	<meta name="description" content="Ares administrator app" />
</svelte:head>

<section>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
