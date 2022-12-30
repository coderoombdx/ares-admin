<script>
    import {GameStateRequests} from "@/api/GameStateRequests.ts";
    import {gameState, setGame} from "@/store/GameState.ts";
    import {ValidGameState} from "@/models/GameState.ts";
    import PostMessage from "@/components/PostMessage.svelte";
    import Timer from "@/components/Timer.svelte";
    import AllStates from "@/components/AllStates.svelte";

    const interval = setInterval(() =>
        GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription)), 1000);

</script>

<svelte:head>
    <title>Ares Game Administrator</title>
    <meta name="description" content="Ares administrator app"/>
</svelte:head>

<div>
    {#if $gameState instanceof ValidGameState}
        <div class="mt-3">
            <Timer time={ $gameState.compteARebours }/>
        </div>

        <div class="d-flex flex-row mt-3">
            <div class="">
                <PostMessage/>
            </div>

            <div class="">
                <AllStates
                        electricite-generale={$gameState.electriciteGenerale}
                />
            </div>
        </div>
    {/if}
</div>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
</style>
