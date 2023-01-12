<script>
    import {GameStateRequests} from "@/api/GameStateRequests.ts";
    import {gameState, setGame} from "@/store/GameState.ts";
    import {ValidGameState} from "@/models/GameState.ts";
    import PostMessage from "@/components/PostMessage.svelte";
    import Timer from "@/components/Timer.svelte";
    import Alarm from "@/components/Alarm.svelte";
    import AllStates from "@/components/AllStates.svelte";
    import Electricity from "@/components/Electricity.svelte";
    import LaunchDrone from "@/components/LaunchDrone.svelte";

    const interval = setInterval(() =>
        GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription)), 1000);

</script>

<svelte:head>
    <title>Ares Game Administrator</title>
    <meta name="description" content="Ares administrator app"/>
</svelte:head>

<div class="container">
    {#if $gameState instanceof ValidGameState}
        <div class="d-flex align-items-center">
            <div class="mx-5">
                <LaunchDrone/>
            </div>
            <Electricity/>
        </div>

        <div class="mt-5 d-flex flex-row">
            <div class="mr-5">
                <div class="d-flex flex-row w-100 justify-content-end">
                    <Alarm time={ $gameState.derniereAlarme }/>
                </div>
                <Timer time={ $gameState.compteARebours }/>
            </div>
            <div class="px-5">
                <PostMessage/>
                <div class="d-flex flex-row mt-5">
                    <AllStates
                            title="Scenario 1"
                            porte1={$gameState.scenario1.porte1}
                    />
                    <AllStates
                            title="Scenario 2"
                            porte1={$gameState.scenario2.porte1}
                    />
                </div>
            </div>
        </div>


    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
