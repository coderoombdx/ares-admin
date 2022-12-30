<script>
    import {GameStateRequests} from "@/api/GameStateRequests.ts";
    import {gameState, setGame} from "@/store/GameState.ts";
    import {ValidGameState} from "@/models/GameState.ts";
    import PostMessage from "@/components/PostMessage.svelte";
    import Timer from "@/components/Timer.svelte";
    import AllStates from "@/components/AllStates.svelte";
    import Electricity from "@/components/Electricity.svelte";

    const interval = setInterval(() =>
        GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription)), 1000);

</script>

<svelte:head>
    <title>Ares Game Administrator</title>
    <meta name="description" content="Ares administrator app"/>
</svelte:head>

<div>
    {#if $gameState instanceof ValidGameState}
        <div class="electricity">
            <Electricity/>
        </div>

        <div class="mt-5 d-flex flex-row">
            <Timer time={ $gameState.compteARebours }/>
            <PostMessage/>
        </div>

        <div class="mt-5 d-flex flex-row">
            <AllStates
                    title="Scenario 1"
                    porte1={$gameState.scenario1.porte1}
            />
            <AllStates
                    title="Scenario 2"
                    porte1={$gameState.scenario2.porte1}
            />
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

    .electricity {
        position: absolute;
        top: 10px;
        left: 20px
    }
</style>
