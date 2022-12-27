<script>
    import {GameStateRequests} from "../api/GameStateRequests.ts";
    import {gameState, setGame} from "../store/GameState.ts";
    import {ValidGameState} from "@/models/GameState.ts";
    import PostMessage from "@/components/PostMessage.svelte";
    import AddTime from "@/components/AddTime.svelte";
    import Timer from "@/components/Timer.svelte";


    const interval = setInterval(() =>
        GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription)), 1000);

</script>

<svelte:head>
    <title>Ares Game Administrator</title>
    <meta name="description" content="Ares administrator app"/>
</svelte:head>

<section>
    {#if $gameState instanceof ValidGameState}
        <Timer time={ $gameState.compteARebours }/>
    {/if}

    <PostMessage/>

    <div class="mt-5 bg-black">
        <AddTime/>
    </div>
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
